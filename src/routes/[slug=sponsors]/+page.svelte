<script>
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';

	export let data;

	const { sponsors } = data;
</script>

<HeadingBlock>Sponsors</HeadingBlock>

<div class="flex flex-wrap items-center justify-center gap-16">
	{#each sponsors as sponsor}
		<img class="max-h-48 max-w-xs" src={sponsor.imageUrl} alt={sponsor.name} />
	{/each}
</div>
