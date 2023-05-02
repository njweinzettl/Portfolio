<script>
    import Card from "$lib/card.svelte"; // import the cards to represent a single project
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
        display: grid;
        margin-left: 120px;
        margin-top: 80px;
        grid-template-columns: 1fr 1fr;/* make grid responsive */
        grid-auto-flow: row;
        grid-gap: 40px;
        
    }

</style>