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
        gap: 10px;
    }

    @media (max-width: 480px){
        .cards{
           flex-direction: column;
        } 
    }
</style>