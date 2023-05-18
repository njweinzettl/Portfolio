<script>
    export let card;
</script>

<div class ="card">
    <img class="cardimage" src="../Prouse1.png" alt="">
    <a href={card.url}>Find out more</a>
    <div class="cardcontent">
        <h1>{card.title}</h1>
        <p>{card.description}</p>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 36rem;
        height: 24rem;
        border-radius: 0.5rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        overflow: hidden;
        margin: 40px;
    }

    .cardimage {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.9;
    }

    .cardcontent{
        color: white;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    h1{
        position: absolute;
        inset: auto auto 30px 30px;
        transition: inset .3s .3s ease-out;
    }

    p, a{
        opacity: 0;
        transition: opacity .3s ease-out;
    }

    p{
        inset: auto auto 80px 30px;
    }

    a{
        inset: auto auto 40px 30px;
    }

    .cardimage:hover{
        opacity: 1;
    }

    h1:hover{
        inset: auto auto 220px 30px;
        transition: inset .3s ease-out;
    }

    p:hover, a:hover{
        opacity: 1;
        transition: opacity .5s .1s ease-in;
    }

    @media (max-width: 480px){
        .card{
            width: 100%;
            margin: 0;
        }

        .cardimage{
            position:relative;
        } 
    }

    @media (max-width: 1024px){
        .card{
        }
        
        .cardimage{
        } 
    }
</style>