<!-- +layouts contains a layout that applies to every page -->
<script>
    import {page} from '$app/stores';
    import '../main.css';
    import Navigation from "../lib/navigation.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<!-- build  default layout -->

<body>
    <!-- include Header with nav bar on every page -->
    <header>
        <Navigation navcolor={$page.url.pathname.length == 1 ? 'snow' : 'black'} logocolor={$page.url.pathname.length == 1 ? 'snow' : 'black'}/>
    </header>
    <main class="bodycontent">
        <!-- include content -->
            <slot></slot>
    </main>
    
    <!-- include footer -->
    <footer>
        <Footer />
    </footer> 
</body>

<style>
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
