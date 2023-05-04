<script>
    import {page} from '$app/stores';

    // Change nav bar color accordign to loaded page
    export let navcolor; //nav bar default color for all pages
    export let logocolor; //logo default color for all pages

    // Change Logo according to loaded page
</script>

<!-- Navigation bar -->
<header> 
    <nav style="color: {navcolor}">
        <div class="logo">
            <a href="/">
                <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" style='fill:{logocolor}'><title>Logo</title><polygon points="170.16 0.15 169.86 118.69 76.67 0.31 76.55 45.77 173.34 170.01 199.56 170.07 200 0.22 170.16 0.15"/><polygon points="75.22 61.27 75.22 61.27 75.21 61.27 75.21 61.27 75.21 61.27 75.21 61.27 75.21 61.27 75.21 61.27 29.84 118.61 29.84 0.07 0 0.07 0 169.92 26.22 169.92 75.22 107.37 75.22 107.37 104.92 145.3 104.92 98.81 75.22 61.27"/></svg>
            </a>
        </div>
        <div class="list">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
</header>

<!-- CSS styling for the navigation bar -->
<style>
    nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: left;
    }

    .logo {
        max-width: 80px;
        margin: 80px 0px 100px 0px;
    }


    ul {
        list-style: none;
        font-size: 20px;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: aliceblue;
    }
</style>