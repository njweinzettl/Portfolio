<!--
    This component is the navigation bar applied on the +layout page.
    One speical feature is that the text color, color of the logo and background
    is white on the home page and black on all other pages. 
-->

<script>
    import Mobilenav from "./Mobilenav.svelte";

    export let navcolor; //nav bar default color for all pages
    export let logocolor; //logo default color for all pages
    export let navback; //logo default color for all pages
</script>

<!-- Navigation bar -->
<nav style="color: {navcolor}">
    <div class="navcontent" style="background: {navback}">
        <div class="logo">
            <a href="/">
                <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" style='fill:{logocolor}'><title>Logo_small</title><polygon points="34.03 0.09 33.97 23.8 15.33 0.12 15.31 9.21 34.67 34.06 39.91 34.07 40 0.1 34.03 0.09"/><polygon points="15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 5.97 23.78 5.97 0.07 0 0.07 0 34.04 5.25 34.04 15.04 21.53 15.04 21.53 20.98 29.12 20.98 19.82 15.04 12.31"/></svg>
            </a>
        </div>
        <ul class="desktopmenu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <!-- Menu for smaller divices from width 900px hidden in bigger version -->
        <Mobilenav />
    </div>
</nav>


<!-- CSS styling for the navigation bar -->
<style>

    .navcontent{
        display: flex;
        padding: 0 2rem;
        width: 100%;
        height: 90px;
        margin: auto;
        justify-content: space-between;
        position: relative;
        align-items: center;
    }

    svg{
        height: 34px;
        width: 40px;
    }

    a{
        font-size: 1rem;
        color: inherit;
    }

    a:hover{color: rgb(251, 248, 208);}

    .desktopmenu{
        display: flex;
        gap: 2rem;
    }

    /* Responsive design */

    @media (width: 900px){
        .desktopmenu{display: none;}
    }
</style>