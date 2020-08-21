FROM node:9.11.1-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache git

WORKDIR /app
COPY package.json ./
RUN npm config set registry https://hub.camara.gov.br/repository/npm-camara/
RUN npm install
COPY . .

ARG AMBIENTE_APP=
RUN echo $AMBIENTE_APP

# EXECUTA SCRIPT DE BUILD DE ACORDO COM O AMBIENTE
RUN npm run $AMBIENTE_APP

# production stage
FROM nginx:1.13.12-alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# EXCLUI A CONFIGURAÇÃO PADRÃO DO NGINX 
RUN rm -rf /etc/nginx/conf.d/default.conf

# COPIA UMA NOVA CONFIGURAÇÃO PARA O FUNCIONAMENTO CORRETO DO VUE-ROUTER
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["sh", "-c", "nginx -g 'daemon off;'"]