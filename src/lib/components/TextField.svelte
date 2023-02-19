<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: 'email' | 'phone' | 'text' = 'text';
	export let error: string | undefined;
	export let value: string = '';
</script>

<div class="mb-4 flex w-full flex-col">
	<label class="font-bold" for={name}>{label}</label>
	<input class="rounded" id={name} {name} {type} {value} />
	{#if error}
		<div class="mt-2 w-full text-red-500">{error}</div>
	{/if}
</div>
