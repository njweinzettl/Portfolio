<script>
    import Video from "../lib/video.svelte";
    import Card from "../lib/card.svelte";
</script>

<!-- <Navigation {navcolor}/> -->
<main>
    <div class="videobox">
        <Video/> 
    </div>
    <div class="maincontenthome">
        <h2> Selected work </h2>
        <div class="projectpreview">
            <div>
                <Card/>
            </div>
            <div>
                <Card/>
            </div>
        </div>
    </div>
</main>


 <style>
    .videobox {
        height: 10vw;
    }
    .maincontenthome {
        background-color: snow;
        padding: 50px 80px 80px;
    }

    .projectpreview{
        display: grid;
        gap: 30px;
    }
 </style>