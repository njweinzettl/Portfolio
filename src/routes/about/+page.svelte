<script>
  import Unsplashapi from "$lib/unsplashapi.svelte";
</script>

<div>
    <div class="picture">
      <Unsplashapi/>
    </div>
    <div class="aboutsubtitle">
        <h1>Hi, I am Nadja. Nice to meet <span>you!</span></h1>
        <p>I am a human-centered copmuting student from Austria passioned about digital design of technological products in compination with human-factors. I aim on building intuitive interfaces for user to reach their goal without almost no effort.</p>
    </div>
</div>

<style>

  .picture{
    height: 400px;
    position: relative;
    overflow: hidden;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: -40px;
    gap: 60px;
  }

  .aboutsubtitle{
    display: flex;
    margin: 40px 60px;
    gap: 60px;
  }

  .aboutsubtitle >p{
    width: 100%;
    font-weight: normal;
    font-size: 1rem;
    line-height: 2rem;
  }

  p{
    font-weight: bold;
    width: 100%;
  }

  span{color: var(--main-button-color)}
</style>