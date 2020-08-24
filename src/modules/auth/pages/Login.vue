<template>
    <div>
        <template>
            <div data-pic-login='{"state":"initial"}'>
                <form @submit.prevent="submit()">
                    <div class="form-group">
                        <label class="sr-only" for="username">Usuário</label>
                        <input type="text" v-model="form.ponto" name="username" id="username" class="form-control" placeholder="Usuário" required="" autofocus="">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="password">Senha</label>
                        <input type="password" v-model="form.senha" name="password" id="password" class="form-control" placeholder="Senha" required="">
                    </div>
                    <button  type="button" id="btnSubmit"  class="btn btn-default" >Entrar</button>
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
                ponto: '',
                senha: '',
                }
            };
        },
        methods:{
            ...mapActions('auth',['ActionDoLogin']),
            submit(){
                this.ActionDoLogin(this.form)
            }
        }
     

    };
</script>