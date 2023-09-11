<script lang="ts">
	import { onMount } from "svelte";
	import { translations, type rating } from "../data/translations";

	const sortedTranslations = translations.sort((p, q) =>
		p[0].toLowerCase() > q[0].toLowerCase() ? 1 : -1
	);

	let search = "";
	let searchInput: HTMLInputElement;

	$: filteredTranslations = sortedTranslations.filter(
		(translation) =>
			translation
				.toString()
				.toLowerCase()
				.includes(search.trim().toLowerCase())
	);

	onMount(() => searchInput?.focus());

	const iconSources: Record<rating, string> = {
		0: "nothing.png",
		1: "invention.png",
		2: "tick.png",
		3: "checked.png",
	};
	const iconTitles: Record<rating, string> = {
		0: "translation is not available",
		1: "translation is guessed",
		2: "translation is available, but not used often",
		3: "translation is available and used often",
	};
</script>

<form on:submit|preventDefault>
	<label for="searchInput">Search</label>
	<input
		bind:this={searchInput}
		bind:value={search}
		type="search"
		id="searchInput"
	/>
</form>

<section>
	<table class="wrapper">
		<thead>
			<tr>
				<td>English</td>
				<td>German</td>
				<td
					><img
						src="star.png"
						alt="rating"
						title="rating"
					/></td
				>
			</tr>
		</thead>
		<tbody>
			{#each filteredTranslations as [word_en, word_de, rating]}
				<tr>
					<td>{word_en}</td>
					<td>{word_de}</td>
					<td
						><img
							src={iconSources[rating]}
							alt={iconTitles[rating]}
							title={iconTitles[rating]}
						/></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if filteredTranslations.length == 0}
		<p>
			Sorry, there are no matches for <i>{search}</i>.
		</p>
	{/if}
</section>