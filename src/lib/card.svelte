<!--
    This component is a Card displaying a preview of a single project.
    The card layout is always the same, but the content changes accrodigng to the project (projects content in cards.js).
-->

<script>
    export let card;
</script>

<div class="card">
    <div class="overlay">
        <img src={card.img} alt="">
        <div class="cardcontent">
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <a href={card.url}>Find out more</a>
        </div> 
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        width: 36rem;
        height: 24rem;
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        overflow: hidden;
        margin: 40px;
        cursor: pointer;
    }

    .overlay{
        background-color:black;
        height: 100%;
        width: 100%;
        transition: opacity 0.5s;
    }
    :hover .overlay{
        opacity: 1;
        transition: opacity 0.5s;
    }

    img{
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: opacity 0.5s ease-out;
    }

    h1, p, a{ 
        position: absolute;
    }

    h1{
        inset: auto auto 30px 30px;
        transition: inset 0.3s 0.3s ease-out;
        word-wrap: break-word;
        color: var(--dark-text-color);
    }

    p, a{
        opacity: 0;
        max-width: 80%;
        transition: opacity 0.3s ease-out;
        color: var(--light-text-color);
    }

    p{inset: auto auto 80px 30px;}

    a{  
        font-style: oblique;
        text-decoration: underline;
        inset: auto auto 40px 30px;
    }

    :hover img{
        opacity: 0.6;
        transition: opacity 0.5s ease-in;
    }

    :hover h1{
        color: var(--light-text-color);
        inset: auto auto 220px 30px;
        transition: inset 0.3s ease-out;
    }

    :hover p, :hover a{
        opacity: 1;
        transition: opacity 0.5s 0.1s ease-in;
    }

    @media (max-width: 1000px){
        .card{
            width: 30rem;
            margin: 0;
        }

        img{position: relative;}
    }

    @media (max-width: 480px){
        .card{
            width: 100%;
            margin: 0;
        }

        img{position: relative;}
    }
</style>