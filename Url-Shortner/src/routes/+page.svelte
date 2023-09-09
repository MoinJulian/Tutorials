<script lang="ts">
	import {slide, fade} from "svelte/transition"
	import { enhance } from "$app/forms";
  	import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";
  	import Loader from "$lib/components/Loader.svelte";
	import TextInput from "$lib/components/TextInput.svelte";
	export let form;
	$: short_url = form?.shortcut ? `${$page.url.origin}/${form?.shortcut}` : "";

	let loading = false;

	$: if (form) {
		loading = false;
	}

	async function copy_url() {
		await window.navigator.clipboard.writeText(short_url);
		show_confirmation = true;
		setTimeout(() => {
			show_confirmation = false;
		}, 1500);
	}

	let show_confirmation = false;
</script>




<div class="text-light">
	Yet another tool to create short URLs. Notice that this is a hobby
	project. We do not guarantee that the links will be stored
	forever.
</div>

<form
	class="text-lg my-4 flex flex-col gap-3 transition-opacity duration-200"
	class:opacity-70={loading}
	method="POST"
	autocomplete="off"
	use:enhance
	on:submit={() => loading=true}
>
	<div>
		<TextInput label="URL" name="url" value={form?.url ?? ""}
		disabled={loading}/>
	</div>
	<div>
		<Button disabled={loading}>Create short URL</Button>
	</div>
</form>

<div aria-live="polite">
	{#if loading}
	<Loader></Loader>
{:else if form?.errors}
	<section aria-label="errors" in:fade={{duration:150}}>
		{#each form.errors as error}
			<div class="text-error">
				{error}
			</div>
		{/each}
	</section>
{:else if form?.shortcut}
	<section aria-label="result" class="text-lg mt-8" in:fade={{duration:150}}>
		<div>Success! The short URL is:</div>
		<div class="mb-4">
			<a href="{short_url}">{short_url}</a>
		</div>
		<Button on:click={copy_url}>Copy</Button>
		{#if show_confirmation}
			<div class="text-light mt-1" transition:slide={{duration: 150}}>
				Copied short URL to clipboard!
			</div>
		{/if}
	</section>
{/if}
</div>

