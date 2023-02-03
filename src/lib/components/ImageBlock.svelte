<script lang="ts">
	export let portableText;
	const imageUrl = portableText.value.url;
</script>

<img class="w-full md:w-1/2 my-4 mx-auto rounded" src={imageUrl} alt="" />
