<script lang="ts">
	import logo from '$lib/assets/logo.jpg';
	import type { Page } from '$lib/types';
	import { page } from '$app/stores';

	export let data: {
		pages: Page[];
	};
</script>

<nav class="navbar navbar-expand-lg">
	<a class="navbar-brand" href="/">
		<img class="logo" src={logo} alt="Flint Style Soccer logo" />
	</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>
	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
		<ul class="navbar-nav">
			{#each data.pages as { path, title }}
				<li class="nav-item">
					<a
						class="nav-link text-center"
						class:active={$page.url.pathname === path}
						aria-current="page"
						href={path}>{title}</a
					>
				</li>
			{/each}
		</ul>
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
