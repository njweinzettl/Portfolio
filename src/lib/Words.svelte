<!-- 
    This component is part of the home and about page. 
    Here the function for changing words are implementet with the changing background per word.
-->

<script>
    import {page} from '$app/stores';

    const highlight = document.getElementById("highlight");
    let words = "";
    let wordsarray = ($page.data.words);    
    let index = 0;

    console.log(words);
 
        setInterval(() => {
            words = wordsarray[index%wordsarray.length];
            index ++;
        }, 300
        );
</script>

<p>User-centered digital products <br> with a pinch of <span class="highlight" id="highlight">{words}</span></p>

<style>
    .highlight{
        text-decoration: underline;
    }
</style>