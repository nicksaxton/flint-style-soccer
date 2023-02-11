<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import type { MenuItem } from '$lib/types';

	export let data: {
		menu: MenuItem[];
	};
</script>

<div class="flex min-h-screen flex-col">
	<Header pages={data.menu} />

	<div class="flex-grow">
		<slot />
	</div>

	<footer class="py-2 text-center text-gray-400">
		<small>&copy; 2023 Flint Style Soccer</small>
	</footer>
</div>
