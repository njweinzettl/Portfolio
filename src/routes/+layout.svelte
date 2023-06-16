<!-- +layouts contains a layout that applies to every page -->
<script>
    import {page} from '$app/stores';
    import '../main.css';
    import Footer from '$lib/Footer.svelte';
    import Navigation from '$lib/Navigation.svelte';
    import Video from '$lib/video.svelte';
</script>

<!-- build  default layout -->
    <Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} navback={$page.url.pathname.length == 1 ? 'url(../fireflies.gif)' : 'snow'}/>
    
    <!-- include content -->
    <slot></slot>

    <!-- include footer -->
    <Footer />



<style>
    :global(*){box-sizing:border-box;}
</style>
