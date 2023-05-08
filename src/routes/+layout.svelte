<!-- +layouts contains a layout that applies to every page -->
<script>
    import {page} from '$app/stores';
    import '../main.css';
    import Navigation from "../lib/navigation.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<!-- build  default layout -->

<body>
    <header>
        <Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'}/>
    </header>
    
    <div>
        <slot></slot>
    </div>
    
    <!-- include Footer -->
    
    <Footer />
</body>
