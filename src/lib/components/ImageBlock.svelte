<script lang="ts">
	import { urlFor } from '$lib/utils';

	export let portableText;

	const imageUrl = urlFor(portableText.value);
</script>

<img class="w-full md:w-1/2 my-4 mx-auto rounded" src={imageUrl} alt="" />
