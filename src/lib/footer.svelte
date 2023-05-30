<footer>
    <div class="footercontent">
        <div class="slogan">
            <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg"><title>Logo_small</title><polygon points="34.03 0.09 33.97 23.8 15.33 0.12 15.31 9.21 34.67 34.06 39.91 34.07 40 0.1 34.03 0.09"/><polygon points="15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 15.04 12.31 5.97 23.78 5.97 0.07 0 0.07 0 34.04 5.25 34.04 15.04 21.53 15.04 21.53 20.98 29.12 20.98 19.82 15.04 12.31"/></svg>
            <p>User-centered digital products <br> with a pinch of color.</p>
        </div>
        <div class="socialmedia">
            <p>Follow me</p>
            <ul>
                <li> <a href="https://www.linkedin.com/in/nadja-weinzettl-941512129/"> LinkedIn </a></li> 
                <li> <a href="https://www.instagram.com/nj.raw?igshid=YmMyMTA2M2Y="> Instagram </a></li>
                <li> <a href="https://github.com/njweinzettl"> Github </a></li>
            </ul>
        </div>
        <div class="copyright">
            <p><span>© 2023 by Nadja Weinzettl.</span> All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    footer{
        bottom: 0;
        left: 0;
        right: 0;
        height: auto;
        width: 100vw;
        background-color: rgb(242, 241, 241);
    }

    .footercontent{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 50px 50px 80px; /* top/left & right/ bottom */
    }

    span {
        font-weight: 600;
    }

    .slogan svg{
        padding: 0;
        width: 40px;
        height: 34px;
    }

    .slogan p{
        font-size: 2em;
    }

    .socialmedia{
        text-align: right;
    }

    .socialmedia p{
        list-style: none;
        color:rgb(194, 194, 194);
        font-size: 1em;
        padding-bottom: 1em;
    }

    .socialmedia a {
        color: black;
    }

    .socialmedia a:hover{
        color: rgb(99,143,157);
    }

    .copyright{
        padding-top: 7em;
        text-align: left;
    }
</style>