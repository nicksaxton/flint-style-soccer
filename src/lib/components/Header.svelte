<script lang="ts">
	import closeIcon from '$lib/assets/close.svg';
	import logo from '$lib/assets/logo.jpg';
	import menuIcon from '$lib/assets/menu.svg';
	import { page } from '$app/stores';

	import type { Page } from '$lib/types';

	export let pages: Page[];

	let mobileMenuOpen = false;

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function handleLinkClick() {
		mobileMenuOpen = false;
	}
</script>

<header>
	<nav class="flex flex-wrap justify-between py-4">
		<div class="flex w-full items-center justify-between px-4 md:w-auto">
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
			class="w-full overflow-hidden transition-all duration-1000 md:max-h-min md:w-auto"
			class:max-h-0={!mobileMenuOpen}
			class:max-h-screen={mobileMenuOpen}
		>
			<ul
				class="mt-4 bg-gray-100 py-2 shadow-inner  md:flex md:gap-6 md:bg-transparent md:shadow-none"
			>
				{#each pages as p}
					<a href={`/${p.slug}`} on:click={handleLinkClick}>
						<li
							class="py-3 text-center hover:text-black md:text-gray-500"
							class:md:text-black={p.slug === $page.params.slug}
						>
							{p.title}
						</li>
					</a>
				{/each}
			</ul>
		</div>
	</nav>
</header>
