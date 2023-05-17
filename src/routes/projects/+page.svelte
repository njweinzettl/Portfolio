<script>
    import Card from "$lib/cardold.svelte"; // import the cards to represent a single project
</script>

<body>
    <div class="allprojects">
        <h1> Projects </h1>
        <Card>
            <img src="./static/pic.png" alt="background"/>
        </Card>
        
        <Card />
        <Card />
    </div>
</body>

<style>
    .allprojects {
        margin: 80px auto;
        display: flex;
        flex-direction: column;
        column-count: auto;
        column-gap: 30px;
        row-gap: 30px;
    }

</style>