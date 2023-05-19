<script>
    import Cardcontainer from "$lib/Cardcontainer.svelte";
    import {cards} from '$lib/cards.js';
</script>

<div class="allprojects">
    <h2> All projects </h2>
    <div class="projectpreview">
        <Cardcontainer cards={cards}/>
    </div>
</div>

<style>
    .allprojects {
        background-color: snow;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    h2{
        text-align: center;
    }

</style>