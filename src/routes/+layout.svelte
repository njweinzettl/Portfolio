<!-- +layouts contains a layout that applies to every page -->
<script>
    import {page} from '$app/stores';
    import '../main.css';
    import Navigation from '$lib/Navigation.svelte';
    import Footer from "../lib/footer.svelte";

</script>

<!-- build  default layout -->
    <div>
        <Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'}/>
    </div>
    
    <!-- include content -->
    <slot></slot>

    <!-- include footer -->
    <Footer />



<style>
    :global(*){
        box-sizing:border-box;
    }
    
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
    }
</style>
