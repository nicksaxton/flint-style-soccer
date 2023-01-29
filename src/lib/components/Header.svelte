<script lang="ts">
	import closeIcon from '$lib/assets/close.svg';
	import logo from '$lib/assets/logo.jpg';
	import menuIcon from '$lib/assets/menu.svg';

	import type { Page } from '$lib/types';

	export let pages: Page[];

	let mobileMenuOpen = false;

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header>
	<nav class="py-4 flex justify-between flex-wrap">
		<div class="flex justify-between items-center w-full md:w-auto px-4">
			<a href="/">
				<img class="h-24" src={logo} alt="Flint Style Soccer logo" />
			</a>
			<div class="md:hidden" aria-hidden="true">
				<button class="p-2" on:click={toggleMenu}>
					{#if mobileMenuOpen}
						<img src={closeIcon} alt="Close nav menu" height="24px" width="24px" />
					{:else}
						<img src={menuIcon} alt="Open nav menu" height="24px" width="24px" />
					{/if}
				</button>
			</div>
		</div>
		<div
			class="w-full md:w-auto md:max-h-min overflow-hidden transition-all duration-1000"
			class:max-h-0={!mobileMenuOpen}
			class:max-h-screen={mobileMenuOpen}
		>
			<ul
				class="py-2 bg-gray-100 mt-4 shadow-inner  md:flex md:gap-6 md:bg-transparent md:shadow-none"
			>
				{#each pages as page}
					<li class="text-center py-2 md:text-gray-500 hover:text-black">
						<a href={page.path}>{page.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
