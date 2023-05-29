<!-- +layouts contains a layout that applies to every page -->
<script>
    import {page} from '$app/stores';
    import '../main.css';
    import Footer from '$lib/footer.svelte';
    import Navigation from '$lib/navigation.svelte';
    import Video from '$lib/video.svelte';
</script>

<!-- build  default layout -->
    <Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} navback={$page.url.pathname.length == 1 ? 'url(../fireflies.gif)' : 'snow'}/>
    
    <!-- include content -->
    <slot></slot>

    <!-- include footer -->
    <Footer />



<style>
    :global(*){
        box-sizing:border-box;
    }
    
    /*
    body{
        background-color:rgb(252, 252, 252);
    }
    .bodycontent{
        display: grid;
        grid-template-columns: repeat(1fr, 1fr);
        gap: 20px;
    }

    .bodycontent > header{
        grid-row: 1;
    }

    .bodycontent > main{
        grid-column: 2 / 4;
        grid-row: 2;
    }*/
</style>
