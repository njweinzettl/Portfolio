<script>
    export let data;
    import {page} from "$app/stores"
    const projectname = $page.params.projectname //access projectname route parameter
</script>

<h1>{data.title}</h1>
<h2>Details about the project: {projectname}</h2>