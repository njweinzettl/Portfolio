<script>
    import {page} from '$app/stores';

    export let navcolor; //nav bar default color for all pages
    export let logocolor; //logo default color for all pages

</script>

<!-- Navigation bar -->
<nav style="color: {navcolor}">
    <div class="navcontent">
        <div class="logo">
            <a href="/">
                <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" style='fill:{logocolor}'><title>Logo_120x102px</title><polygon points="102.1 0.12 101.91 71.24 46 0.21 45.93 27.49 104 102.03 119.74 102.07 120 0.16 102.1 0.12"/><polygon points="45.13 36.79 45.13 36.79 45.13 36.79 45.13 36.79 45.13 36.79 45.13 36.79 45.13 36.79 45.13 36.79 17.9 71.2 17.9 0.07 0 0.07 0 101.98 15.73 101.98 45.13 64.45 45.13 64.45 62.95 87.21 62.95 59.32 45.13 36.79"/></svg>
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
    </div>
</nav>


<!-- CSS styling for the navigation bar -->
<style>
    .navcontent{
        display: grid;
        flex-direction: column;
        padding: 50px 80px 80px; /* top/left & right/ bottom */
    }

    .logo {
        padding-bottom: 50px;
    }


    a {
        color: inherit;
    }

    a:hover {
        color: lightyellow;
    }

    @media (width:460px){
        .navcontent{
            display: flex;
        }
    }

</style>