<!--
    This component is an API to unsplash fetching one image
-->
<script>
    let img;
    const BASE_URL = "https://api.unsplash.com";

    fetch(`${BASE_URL}/search/photos?client_id=j9_yWcMP4MJ5kFnDpD3ypHFIsEGn6Fb9qw_PD4LNHwM&query=portfolio`)
    .then(res => res.json())
    .then(data => {
       img = data.results[0].urls.full;
    })
</script>

<div class="picture">
    <img src= "{img}" alt=""/>
</div>