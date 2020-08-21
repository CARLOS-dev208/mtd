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
				<span class="nome">Login</span> <span class="separador">/</span> P_0000
			</span>
		</li>
	</ul>
</div>

            </div>
          </div>
          <Menu/>
        </header>
      </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
    name: "Header",
 

    components:{
        Menu
    },

}
</script>