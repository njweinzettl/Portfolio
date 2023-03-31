<script>
    import Card from "$lib/card.svelte"; // import the cards to represent a single project
</script>

<div class="allprojects">
    <h1> Projects </h1>

    
    <Card>
        <img src="./static/pic.png" alt="background"/>
    </Card>

    <Card />
    <Card />
</div>

<style>
    .allprojects {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); /* make grid responsive */
        grid-gap: 30px;
    }

</style>