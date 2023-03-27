<!-- +layouts contains a layout that applies to every page -->
<script>
    import '../main.css';
    import Navigation from "../lib/navigation.svelte";
    import Footer from "../lib/footer.svelte";
</script>


<!-- include Nav bar -->
<Navigation />

<div>
    <slot></slot>
</div>

<!-- include Footer -->
<Footer />