<template>
    <div>
        <template>
            <div data-pic-login='{"state":"initial"}'>
                <form >
                    <div class="form-group">
                        <label class="sr-only" for="username">Usuário</label>
                        <input type="text" v-model="form.email" name="username" id="username" class="form-control" placeholder="Usuário" required="" autofocus="">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="password">Senha</label>
                        <input type="password" v-model="form.password" name="password" id="password" class="form-control" placeholder="Senha" required="">
                    </div>
                    <button  type="button" id="btnSubmit" @click="submit()"  class="btn btn-default" >Entrar</button>
                </form>
            </div>
        </template>
    </div>
</template>



<script>
import {mapActions} from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
            form:{    
                email: '',
                password: '',
                }
            };
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