<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	import HeadingBlock from '$lib/components/HeadingBlock.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import ParagraphBlock from '$lib/components/ParagraphBlock.svelte';

	export let data: {
		page: {
			content: any[];
			mainImage: {
				url: string;
			};
		};
	};
</script>

<!-- <img class="w-screen" src={data.page.mainImage.url} alt="Hero" /> -->

<div class="container mx-auto py-8">
	{#if data.page.mainImage}
		<img class="mb-4 mx-auto" src={data.page.mainImage.url} alt="" />
	{/if}

	<div class="px-4 md:px-0">
		<PortableText
			components={{
				block: { h1: HeadingBlock, normal: ParagraphBlock },
				types: { image: ImageBlock }
			}}
			value={data.page.content}
		/>
	</div>
</div>
