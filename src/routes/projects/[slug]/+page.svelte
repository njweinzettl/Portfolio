<script>
    export let data;
</script>

<div class="project">
    <div class="banner">
        <img src="{data.project.img1}" alt=""/>
        <div>
            <h1>{data.project.title}</h1>
        </div>
    </div>
    <div class="introduction">
        <p>{data.project.description}</p>
        <div class="details">
            <p>{data.project.role}</p>
            <img src="{data.project.img2}" alt=""/>
            <p>{data.project.process}</p>
            <img src="{data.project.img3}" alt=""/>
            <p>{data.project.results}</p>
            <img src="{data.project.img4}" alt=""/>
        </div>
    </div>
</div>


<style>
    .project{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .banner{
        position: relative;
        height: 30rem;
        overflow: hidden;
        margin-top: -40px;
    }

    .banner h1{
        position: absolute;
        bottom: 30px;
        left: 50px;
    }

    .banner img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .introduction{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 20px 50px;
        gap: 50px;
    }

    .details{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        gap: 20px;
    }

    img{height: 80px;}

    @media (max-width: 480px){
        .project{flex-direction: column;} 

        .banner h1{position: relative;}
    }
</style>