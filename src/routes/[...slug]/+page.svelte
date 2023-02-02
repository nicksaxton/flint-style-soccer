<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	import HeadingBlock from '$lib/components/HeadingBlock.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import ParagraphBlock from '$lib/components/ParagraphBlock.svelte';

	export let data: {
		page: {
			content: any[];
		};
	};
</script>

<PortableText
	components={{ block: { h1: HeadingBlock, normal: ParagraphBlock }, types: { image: ImageBlock } }}
	value={data.page.content}
/>
