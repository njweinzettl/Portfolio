<script>
  import Unsplashapi from "$lib/unsplashapi.svelte";
</script>

<div>
    <div class="picture">
      <Unsplashapi/>
    </div>
    <div class="innercontainer">
      <div class="aboutsubtitle">
          <p>I am Nadja.</p>
          <p>Creating digital magic daily.</p>
      </div>
    </div>
</div>

<style>

  .picture{
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  .aboutsubtitle >p{
      width: 100%;
      font-weight: normal;
      font-size: 1rem;
      line-height: 2rem;
  }

  .infotext{
      font-style: italic;
      font-weight: bold;
  }
</style>