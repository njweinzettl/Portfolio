<script>
    import {page} from '$app/stores';

    // Change nav bar color accordign to loaded page
    export let navcolor = 'black'; //default color for all pages

    // Change Logo according to loaded page
    const logo = "";
    function changeLogo(){
        const currentpage = $page.path; // Get last part (page name) of URL that is currently open
        if (currentpage == 'home'){
            const logo = "Logo_white.png"; // For home page the white logo
        } else {
            const logo = "Logo_black.png"; // For all other pages the black one
        } 
        return logo;
    }
</script>

<!-- Navigation bar -->
<header> 
    <nav style="color: {navcolor}}">
        <div class="logo">
            <a href="/">
                <img src={logo} alt="Logo"/>
            </a>
        </div>
        <div class="list">
            <ul>
                <li><a href="/home">Home</a></li>
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

    .logo img{
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
        color: snow;
    }

    a:hover {
        color: aliceblue;
    }
</style>