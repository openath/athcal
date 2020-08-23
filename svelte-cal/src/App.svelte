<script>
    import { onMount } from "svelte";

    const apiURL = "https://file.opentrack.run/live/euroath/european_calendar_2020.json";
    let data = [];

    onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
    });

</script>
<main>
	<h1>European Calendar with Svelte.js {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div>
		{#each data as item }
            <div>
                <p> {item.date} {item.full_name} {item.country} </p>
            </div>
        {/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>