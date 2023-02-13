<script lang="ts">
	import type { Post } from '$lib/types';

	export let post: Post;

	const usDateFormat = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
	const formattedPublishDate = usDateFormat.format(new Date(post.publishDate));
</script>

<a href={post.link}>
	<article class="mb-4 flex w-full flex-col gap-4 border-b pb-4 md:flex-row">
		<img class="w-full md:w-48" src={post.imageUrl} alt={`Photo of ${post.title}`} />
		<div>
			<p class="text-sm text-gray-500">{formattedPublishDate}</p>
			<h2 class="text-xl font-bold">{post.title}</h2>
			<p class="text-gray-500">{post.source}</p>
		</div>
	</article>
</a>
