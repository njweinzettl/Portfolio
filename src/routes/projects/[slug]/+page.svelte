<script>
    export let data;
</script>

<div class = 'project'>
    <div class = 'introduction'>
        <h1>{data.project.title}</h1>
        <p>{data.project.description}</p>
    </div>
    <div class = 'details'>
        <p>{data.project.role}</p>
        <p>{data.project.process}</p>
        <p>{data.project.results}</p>
    </div>
</div>


<style>
    .project{
        display: flex;
        justify-content: center;
    }

    .details{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        gap: 20px;
    }

    @media (max-width: 480px){
        .project{
           flex-direction: column;
        } 
    }
</style>