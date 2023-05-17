<script>
    import {page} from '$app/stores';
    import Navigation from '$lib/Navigation.svelte';
    import Video from '$lib/video.svelte';
    import Cardcontainer from '$lib/Cardcontainer.svelte';
    import {cards} from '$lib/cards.js';
</script>

<header class="wrapperheader">
    <div class="videobox">
        <Video/>
    </div>
    <div class="navbox">
        <Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'}/>
    </div>
</header>

<div class="maincontenthome">
    <h2> Selected work </h2>
    <div class="projectpreview">
        <Cardcontainer cards={cards}/>
    </div>
</div>

 <style>

    .maincontenthome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 50px 80px 80px;
    }

 </style>