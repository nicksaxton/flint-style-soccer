<script lang="ts">
	import '../app.css';

	import type { Page } from '$lib/types';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';

	export let data: {
		pages: Page[];
	};
</script>

<div class="flex flex-col min-h-screen container mx-auto">
	<Header pages={data.pages} />

	<div class="flex-grow p-4">
		<slot />
	</div>

	<footer class="text-center text-gray-400 py-2">
		<small>&copy; 2023 Flint Style Soccer</small>
	</footer>
</div>
