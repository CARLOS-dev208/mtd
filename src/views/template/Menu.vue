<template>
<div id="menuGlobal">
<div id="pic-menu-global">
	<nav class="navbar navbar-default">
		<ul data-pic-globalnav>
			<li>
				<router-link  to="/">Painel</router-link>
			</li>
			<li>
				<router-link  to="/Importacao">Importação</router-link>
			</li>
			<li>
				<router-link  to="/">Conferência</router-link>
			</li>
			<li>
				<router-link  to="/">Atribuições</router-link>
			</li>
		</ul>
	</nav>
</div>
</div>

</template>

<script>
export default {
    name: 'Menu',

}
</script>