<script>
    import Words from '$lib/Words.svelte';
    import Cardcontainer from '$lib/Cardcontainer.svelte';
    import {cards} from '$lib/cards.js';
</script>

<Words/>

<div class="maincontenthome">
    <h2> Selected work </h2>
    <div class="projectpreview">
        <Cardcontainer cards={cards}/>
    </div>
</div>

 <style>
    .maincontenthome {
        background-color: snow;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    h2{
        text-align: center;
    }

 </style>