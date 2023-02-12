<script lang="ts">
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';
	import NewsPost from '$lib/components/NewsPost.svelte';
	import type { Post } from '$lib/types';

	export let data: {
		posts: Post[];
	};
</script>

<HeadingBlock>News</HeadingBlock>

{#each data.posts as post}
	<NewsPost {post} />
{/each}
