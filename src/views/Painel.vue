<template>
   <div  id="page-content-wrapper">
				<div class="container-fluid">

		
					<div id="page-header" class="page-header">
						<h1>Painel</h1>
					</div>
				</div>
			</div>
</template>



<script>


export default {
  name: "painel",
  data() {
    return {}
  },
  updated() {
    PIC.activateAllWidgets();
  },
  created() {
    console.log(process.env.VUE_APP_AMBIENTE);
    
  }
}
</script>
