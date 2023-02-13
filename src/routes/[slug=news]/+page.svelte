<script lang="ts">
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';
	import NewsPost from '$lib/components/NewsPost.svelte';
	import type { Post } from '$lib/types';

	export let data: {
		posts: Post[];
	};
</script>

<div class="px-4 md:px-0">
	<HeadingBlock>News</HeadingBlock>

	{#each data.posts as post}
		<NewsPost {post} />
	{/each}
</div>
