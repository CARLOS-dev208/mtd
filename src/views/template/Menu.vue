<template>
<div id="menuGlobal">
<div id="pic-menu-global">
	<nav class="navbar navbar-default">
		<ul data-pic-globalnav>
			<li>
				<router-link v-if="menuAutheticated" to="/">Painel</router-link>
			</li>
			<li>
				<router-link v-if="menuAutheticated" to="/Importacao">Importação</router-link>
			</li>
			<li>
				<router-link v-if="menuAutheticated" to="/">Conferência</router-link>
			</li>
			<li>
				<router-link v-if="menuAutheticated"  to="/">Atribuições</router-link>
			</li>
		</ul>
	</nav>
</div>
</div>

</template>

<script>
export default {
	name: 'Menu',
	
	computed:{
		menuAutheticated(){
			return this.$route.name !== 'login'
		}
	}

}
</script>