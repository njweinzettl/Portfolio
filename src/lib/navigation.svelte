<!-- Navigation bar -->
<header>
    <nav>
        <div class="logo">
            <a href="/">
                <img src="../Logo_2.png" alt="Logo"/>
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
</style>