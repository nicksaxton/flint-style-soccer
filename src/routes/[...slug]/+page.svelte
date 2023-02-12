<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	import HeadingBlock from '$lib/components/HeadingBlock.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import ParagraphBlock from '$lib/components/ParagraphBlock.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import BulletItem from '$lib/components/BulletItem.svelte';

	export let data: {
		page: {
			content: any[];
			mainImage: {
				url: string;
			};
		};
	};
</script>

{#if data.page.mainImage}
	<img class="mx-auto mb-4" src={data.page.mainImage.url} alt="" />
{/if}

{#if data.page.content}
	<div class="px-4 md:px-0">
		<PortableText
			components={{
				block: { h1: HeadingBlock, h2: HeadingBlock, normal: ParagraphBlock },
				types: { image: ImageBlock },
				list: { bullet: UnorderedList },
				listItem: { bullet: BulletItem, normal: BulletItem }
			}}
			value={data.page.content}
		/>
	</div>
{/if}
