<!--
    This component is a container for the single card components applied on the home and projects page.
-->

<script>
    import Card from '$lib/Card.svelte';
    export let cards;
</script>

<div class="cards">
    {#each cards as card}
        <Card {card}/>
    {/each}
</div>

<style>
    .cards{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    @media (max-width: 480px){
        .cards{flex-direction: column;} 
    }
</style>