<!-- +layouts contains a layout that applies to every page -->
<script>
    import '../main.css';
    import Navigation from "../lib/navigation.svelte";
    import Footer from "../lib/footer.svelte";

    const navcolor = 'green'; // set the background color to red
</script>

<!-- include Nav bar -->
<body>
    <Navigation {navcolor}/>
    <div>
        <slot></slot>
    </div>
    
    <!-- include Footer -->
    <Footer />
</body>
