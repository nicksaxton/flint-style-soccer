<script>
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';

	export let data;

	const { sponsors } = data;
</script>

<div class="px-4 md:px-0">
	<HeadingBlock>Sponsors</HeadingBlock>

	<div class="my-12 flex flex-wrap items-center justify-center gap-12">
		{#each sponsors as sponsor}
			<img class="max-h-48 max-w-[240px]" src={sponsor.imageUrl} alt={sponsor.name} />
		{/each}
	</div>
</div>
