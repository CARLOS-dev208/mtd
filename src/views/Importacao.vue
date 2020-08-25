<template >
  <div >
        <div id="page-header" class="page-header">
          <h1>Importação</h1>
        </div>
      
    <div class="conteiner">
    
   <fieldset>
    <div class="row">
        <div class="col-xs-2">
            <div class="form-group">
                <label for="dtInicio1">Data de Início</label>
                <input type="text" id="dtInicio1" class="form-control"/>
            </div>
        </div>
        <div class="col-xs-3">
            <div class="form-group">
                 <button  type="button" id="btnSubmit"  class="btn btn-default" >Buscar</button>
            </div>
        </div>
    </div>
</fieldset>


<hr>
    </div>
    
    <table data-pic-datatable='{"checkboxes":true,"paginate": true}' class="table table-bordered table-serialized long-labels table-striped table-hover inline dataTable no-footer sm" >
      <thead>
        <tr>
          <th></th>
          <th>Encontro</th>
          <th>Número</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Tempo decorrido</th>
          <th>Tipo de Encontro</th>
          <th>Discursos</th>
          <th>Status</th>
          <th>Importada</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in comments" :key="index">
          <slot :row="item">
            <td v-for="column in comments" :key="column">{{ index + 1 }}</td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: "Importacao",
  
  data() {
    return {
      comments: [
        {
          Encontro: "Sessão",
          Número: "",
          Data: "",
          Hora: "",
          Tempodecorrido: "",
          TipoDeEncontro: "",
          Discursos: "",
          Status: "",
          Importada: "",
          Ação: "",
        },
      ],
    };
  },
  mounted(){
      const http = axios.create({ baseURL: 'http://localhost:8080/'})
     http.get('categorias').then(res =>{
       console.log(res)
       console.log('teste')
     })
  }
};
</script>



<style scoped>

.tbl-tabela {
  margin: 0 5px 5px 5px 5px;
}
</style>