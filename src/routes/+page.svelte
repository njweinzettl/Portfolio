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
    .nav{
        background-color: blue;
    }

    .maincontenthome {
        background-color: snow;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @media (max-width: 480px){
       .maincontenthome{
            
       } 
    }

 </style>