<template>
  <div>
    <Header/>
    <div id="wrapper">
      <div class="sr-only">
        <a href="#page-content-wrapper">Ir para o conteúdo.</a> | <a href="#menubar">Ir para a navegação</a>
      </div>
      
      <div id="cabecalho" class="container-fluid">
        <div class="col-md-12">
          <router-view class="view"></router-view>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./views/template/Header.vue";
import Footer from "./views/template/Footer.vue";

export default {
  name: "app",
  components:{
    Header,
    Footer
  },
  data() {
    return {}
  },
  updated() {
    PIC.activateAllWidgets();
  },
  created() {
    console.log(process.env.VUE_APP_AMBIENTE);
  },

  
}
</script>