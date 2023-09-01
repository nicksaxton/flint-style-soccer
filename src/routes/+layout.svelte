<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import type { MenuItem } from '$lib/types';

	export let data: {
		menu: MenuItem[];
	};
</script>

<svelte:head>
	<title>Flint Style Soccer</title>
	<meta
		name="description"
		content="Flint Style Soccer was founded in 2016 with a mission to introduce Flint kids to the game of soccer."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header menu={data.menu} />

	<div class="flex-grow">
		<div class="mx-auto max-w-3xl py-8">
			<slot />
		</div>
	</div>

	<footer class="py-2 text-center text-gray-400">
		<small>&copy; 2023 Flint Style Soccer</small>
	</footer>
</div>
