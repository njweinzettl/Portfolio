<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import {page} from "$app/stores"
    const project = $page.params.project //access projectname route parameter
</script>

<body>
    <div>
        <h1>{data.project.title}</h1>
    </div>
    <div> 
        <h2> Description </h2>
        <p> {data.project.description} </p>
    </div>
    
    <div> 
        <h2> My role </h2>
        <p> {data.project.role} </p>
    </div>
    
    <div> 
        <h2> Process </h2>
        <p> {data.project.process} </p>
    </div>
    
    <div> 
        <h2> Results </h2>
        <p> {data.project.results} </p>
    </div>    
</body>


<style>
    div {
        display: grid;
        grid-template-columns: 2;
    }
</style>