<script lang="ts">
	import { enhance } from '$app/forms';
	import HeadingBlock from '$lib/components/HeadingBlock.svelte';

	import TextField from '$lib/components/TextField.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

{#if form && form.success}
	<div>Thank you for volunteering!</div>
{:else}
	<form class="mx-auto w-full px-4 md:w-full md:px-0 lg:w-1/2" method="post" use:enhance>
		<HeadingBlock>Volunteer</HeadingBlock>
		<p class="mb-4">Sign up to volunteer with Flint Style Soccer.</p>
		<div class="flex w-full flex-col md:flex-row md:gap-4">
			<TextField
				error={form?.errors?.firstName}
				label="First Name"
				name="firstName"
				value={form?.volunteer?.firstName || ''}
			/>
			<TextField
				error={form?.errors?.lastName}
				label="Last Name"
				name="lastName"
				value={form?.volunteer?.lastName || ''}
			/>
		</div>

		<TextField
			error={form?.errors?.email}
			label="Email"
			name="email"
			type="email"
			value={form?.volunteer?.email || ''}
		/>
		<TextField
			error={form?.errors?.phone}
			label="Phone"
			name="phone"
			value={form?.volunteer?.phone || ''}
		/>
		<!-- TODO: Make the select a component -->
		<div class="align-center mb-4 flex flex-col justify-between">
			<label class="font-bold" for="shirtSize">Shirt Size</label>
			<select class="rounded" name="shirtSize" id="shirtSize">
				<option>XS</option>
				<option>S</option>
				<option>M</option>
				<option>L</option>
				<option>XL</option>
				<option>2XL</option>
			</select>
			{#if form?.errors?.shirtSize}
				<div class="mt-2 w-full text-right text-red-500">
					{form.errors.shirtSize}
				</div>
			{/if}
		</div>
		<button
			class="float-right rounded bg-black py-2 px-8 text-white hover:bg-gray-700"
			type="submit">Sign Up</button
		>
	</form>
{/if}
