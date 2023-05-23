<script>
    import {page} from '$app/stores';
    import Navigation from '$lib/navigation.svelte';
    import Video from '$lib/video.svelte';
    import Cardcontainer from '$lib/cardcontainer.svelte';
    import {cards} from '$lib/cards.js';
</script>

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