<!-- 
    This component is part of the home and about page. 
    Here the function for changing words are implementet with the changing background per word.
-->

<script>
    import {page} from '$app/stores';

    let words = "brilliance";
    let wordsarray = ($page.data.words);
    let index = 0;
    let interval = null;

    function onOver(){
        clearInterval(interval);
        interval = setInterval(() => {
            words = wordsarray[index%wordsarray.length];
            index ++;
        }, 300
        );
    }

    function onOut(){
        clearInterval(interval);
    }
</script>

<p>User-centered <br> digital products <br> with a pinch of <br> <span class="highlight" id="highlight" on:mouseover={onOver} on:mouseout={onOut}>{words}</span></p>

<style>
    p {
        font-size: 100px;
    }
    .highlight{
        text-decoration: underline;
    }

    @media(max-width: 1000px){
        p {
        font-size: 70px;
        }  
    }
    
    @media(max-width: 480px){
        p {
        font-size: 50px;
        }
    } 

    @media(min-width: 1280px){
        p {
        font-size: 140px;
        }
    } 
</style>