<script>
    import Words from "$lib/Words.svelte";

</script>
  <div class="maincontainer">
    <section>
      <div class="innercontainer">
        <div class="aboutsubtitle">
            <p>
              I am Nadja. <br>
              I am a <Words/>.
            </p>
            <p>
              Creating magic daily on the internet. You can send me
              an email at <span class="info-text">nj.weinzettl@gmail.com</span>
            </p>
        </div>
      </div>
    </section>
  </div>


 
 <style>
    .abouttitle {
        font-size: 4.2rem;
        font-weight: bold;
    }
 
    .aboutsubtitle >p {
        width: 100%;
        font-weight: normal;
        font-size: 1rem;
        line-height: 2rem;
    }
 
    .info-text {
        font-style: italic;
        font-weight: bold;
    }
 </style>