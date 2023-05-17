<script>
    export let card;
</script>

<div class ="card" style="background: url({card.background})">
    <div class="cardcontent">
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        <a href={card.url}></a>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 0.5rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 400px;
        height: 200px;
    }

    .cardcontent{
        bottom: 0;
    }

</style>