
<!-- each card represents one single project -->

<script>
    import Tagcloud from "$lib/tagcloud.svelte"; // to filter the projects according to the tags
</script>

<!-- building a card -->


<div class="card">
    <div class="cardcontent">
        <div class="cardpicture">

        </div>
        <h3> This is my first project </h3>
        <Tagcloud/>
        <a href="https://github.com/njweinzettl/Portfolio" data-tags="UX design"> 
            See more!
        </a>
    </div>
</div>


<style>
    .card {
        max-width: 60rem;
        max-height: 50rem;
        border-radius: 0.5rem;
        background-color: snow;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .cardcontent {
        display: grid;
        gap: 0.5em;
        padding: 1.2rem;
    }
</style>

