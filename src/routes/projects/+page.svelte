<script>
    import Cardcontainer from "$lib/Cardcontainer.svelte";
    import {cards} from '$lib/cards.js';
</script>

<div class="allprojects">
    <h2>All projects</h2>
    <div>
        <Cardcontainer cards={cards}/>
    </div>
</div>

<style>
    h2{text-align: center;}
</style>