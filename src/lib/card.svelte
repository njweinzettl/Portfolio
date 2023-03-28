
<!-- each card represents one single project -->

<script>
    import Tagcloud from "$lib/tagcloud.svelte"; // to filter the projects according to the tags
</script>

<!-- building a card -->
<div class="card"> 
    <h2> This is my first project </h2>
    <Tagcloud />
    <a href="https://github.com/njweinzettl/Portfolio" data-tags="UX design"> 
        See more!
    </a>
</div>

<style>
    .card {
        padding: 2rem;
        width: 100%

    }
</style>

