<template>
  <div>
    <div id="page-header" class="page-header">
      <h1>Painel</h1>
    </div>
    <p class="parag">
       Próximas iterações   <br>
       (navegue pelo menu)
    </p>
	<hr>
  </div>
</template>



<script>
export default {
  name: "painel",
  data() {
    return {};
  },
  updated() {
    PIC.activateAllWidgets();
  },
  created() {
    console.log(process.env.VUE_APP_AMBIENTE);
  },
};
</script>


<style >
.parag{
	display: flex;
	justify-content: center;
	font-size: 2rem;
}
</style>
