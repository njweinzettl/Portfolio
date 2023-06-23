<script>
    import Words from '$lib/words.svelte';
    import Cardcontainer from '$lib/Cardcontainer.svelte';
    import {cards} from '$lib/cards.js';
</script>

<div class="words">
    <Words/>
</div>

<div class="maincontenthome">
    <h2>Selected work</h2>
    <div class="projectpreview">
        <Cardcontainer cards={cards}/>
    </div>
</div>

 <style>
    .words{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        margin: 0px 130px;
        padding-bottom: 120px;
    }

    h2{
        text-align: center;
        margin-bottom: 40px;
    }

    @media(max-width: 1000px){
        .words {margin: 0px 100px;}  
    }
    
    @media(max-width: 480px){
        .words {margin: 0px 40px;}
    } 

    @media(min-width: 1280px){
        .words {
            height: 60rem;
            margin: 0px 150px;
        }
    } 
 </style>