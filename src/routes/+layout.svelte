<script>
	import logo from '$lib/assets/logo.jpg';
</script>

<nav class="navbar">
	<div class="container">
		<a class="navbar-brand" href="#">
			<img class="logo" src={logo} alt="Flint Style Soccer logo" />
		</a>
	</div>
</nav>

<div class="flex-grow-1">
	<slot />
</div>

<footer class="text-center py-3 text-muted">
	<small>&copy; 2023 Flint Style Soccer</small>
</footer>

<style scoped>
	.logo {
		height: auto;
		width: 96px;
	}
</style>
