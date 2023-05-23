<script>
    export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>
</div>

<style>
	.layout{
		padding-top: 20px;
        padding-bottom: 20px;
	}

	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
