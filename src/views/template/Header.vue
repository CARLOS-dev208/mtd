<template>
  <!-- Header -->
  <div id="banner">
    <header>
      <div class="sr-only">
        <a href="#page-content-wrapper">Ir para o conteúdo.</a> |
        <a href="#menubar">Ir para a navegação</a>
      </div>

      <!-- Informações sobre a Aplicação -->
      <div id="cabecalho" class="container-fluid">
        <div class="topoAplicacao">
          <a class="identAplicacao" href="/">
            <span class="sigla">MTDWeb</span>
            <span class="nome">Módulo de Tratamento de Discursos Web</span>
          </a>
         <div class="suporteGlobal">
                <ul class="funcoesGlobais">
                  <li>
                    <span class="semLink usuario">
                      <span class="nome">{{user.name}}</span> <span class="separador"> / </span> p_0000
                    </span>
                  </li>
                  <li>
                    <!-- <a @click="logoff()" title="Efetuar Logoff do sistema "> -->
                      
                    <a @click="logoff()" title="Efetuar Logoff do sistema MTDweb">
                      <span class="Link glyphicon glyphicon-log-out" aria-hidden="true"></span>
                      <span class="letra">Sair </span>
                    </a>
                  </li>
                </ul>
              </div>

        </div>
      </div>
      <Menu />
    </header>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  components: {
    Menu,
  },
   
  computed: {
    ...mapState("auth", ["user"]),

    
  },
     methods:{
            ...mapActions('auth',['ActionDoLogin']),
           async submit(){
                try{
               await this.ActionDoLogin(this.form)
             
               this.$router.push({name: 'painel'})
                location.reload();
                }catch(err){
                    alert(err.data ? err.data.message  : 'Não foi possivel fazer login')
                }
            }
        }
     
};
</script>