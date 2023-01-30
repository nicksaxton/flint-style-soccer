<script lang="ts">
	import '../app.css';

	import type { Page } from '$lib/types';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';

	export let data: {
		pages: Page[];
	};
</script>

<div class="container mx-auto flex min-h-screen flex-col">
	<Header pages={data.pages} />

	<div class="flex-grow p-4">
		<slot />
	</div>

	<footer class="py-2 text-center text-gray-400">
		<small>&copy; 2023 Flint Style Soccer</small>
	</footer>
</div>
