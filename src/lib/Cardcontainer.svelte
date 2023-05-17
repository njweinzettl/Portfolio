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
        justify-content: center;
        gap: 10px;
    }

    @media (width: 600px){
        .cards{
           flex-direction: column;
        } 
    }
</style>