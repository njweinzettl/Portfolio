
<!-- each card represents one single project -->

<script>
    import Tagcloud from "$lib/tagcloud.svelte"; // to filter the projects according to the tags
</script>

<!-- building a card -->

<body>
    <div class="card"> 
        <h2> This is my first project </h2>
        <Tagcloud />
        <a href="https://github.com/njweinzettl/Portfolio" data-tags="UX design"> 
            See more!
        </a>
    </div>
</body>

<style>
    .card {
        padding: 1.5rem;
        max-width: 960px;
        border-radius: 5px;
        background-color: snow;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
</style>

