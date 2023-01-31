<script>
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	import ParagraphBlock from '$lib/components/ParagraphBlock.svelte';
	import { PortableText } from '@portabletext/svelte';

	export let data;
</script>

<PortableText
	components={{ block: { h1: HeadingBlock, normal: ParagraphBlock }, types: { image: ImageBlock } }}
	value={data.page.content}
/>
