<!-- 
    This component is part of the home page. 
    It is responsible for including a fancy video , 
-->

<script>
    import Navigation from "$lib/navigation.svelte";
    import {page} from '$app/stores';

    let words = "";
    let wordsarray = [
        "digital", "creative", "design"
    ]
    let index = 0;

    setInterval(() => {
        words = wordsarray[index%wordsarray.length];
        index ++;
    }, 1000);

</script>

<div class= 'header' style="background-image: url(../lib/video.svelte)">
    <h1>Welcome to the <span class="highlight">{words}</span> ever!</h1>
</div>

<style>
    .header{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>