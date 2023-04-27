
<script>
    //when working on a fetch stop the server for unsplash

    let img;
    const BASE_URL = "https://api.unsplash.com"; //never gonna change
    //look at svelte how to work with variables

    fetch(`${BASE_URL}/search/photos?client_id=j9_yWcMP4MJ5kFnDpD3ypHFIsEGn6Fb9qw_PD4LNHwM&query=portfolio`)
    .then(res => res.json())
    .then(data => {
       img = data.results[0].urls.full; //grab first image
       console.log(img);
    })
    
    //for webiste use more query parameters to make it more suited to your needs 
    //for example fetch one image you need instead of loading 10 and sicarding 9
</script>

<div>
    <img src= "{img}"/>
</div>