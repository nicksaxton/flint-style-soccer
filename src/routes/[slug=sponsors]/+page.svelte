<script>
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';

	export let data;

	const { sponsors } = data;
</script>

<HeadingBlock>Sponsors</HeadingBlock>

<div class="grid grid-cols-2 items-center justify-items-center gap-16 md:grid-cols-4">
	{#each sponsors as sponsor}
		<img class="max-h-36" src={sponsor.imageUrl} alt={sponsor.name} />
	{/each}
</div>
