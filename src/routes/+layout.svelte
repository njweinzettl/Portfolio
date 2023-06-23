<!-- +layouts contains a layout that applies to every page -->
<script>
    import {page} from '$app/stores';
    import '../main.css';
    import Footer from '$lib/footer.svelte';
    import Navigation from '$lib/navigation.svelte';
</script>

<!-- build  default layout -->
<Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} navback={$page.url.pathname.length == 1 ? 'url(../fireflies.gif)' : 'snow'}/>

<!-- include content -->
<main>
    <slot></slot>
</main>

<!-- include footer -->
<Footer />



<style>
    :global(*){box-sizing:border-box;}
</style>
