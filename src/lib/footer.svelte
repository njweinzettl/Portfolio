<div class="wrapper">
    <footer>
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
    </footer>
    <div class="footerbackgroundvideo">

    </div>
</div>

<style>

    .wrapper{
        display: grid;
        grid-template-columns: repeat(1fr, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(100px, auto);
        background-color: rgb(242, 241, 241);
        margin-left: -120px;
        margin-right: -120px;
    }

    footer{
        flex-direction: column;
        padding: 50px 50px 130px 50px;
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
        grid-column: 1;
        grid-row: 1;
    }

    .copyright{
        padding: 80px 0px 0px;
        text-align: left;
        grid-column: 1;
        grid-row: 2;
    }

    .socialmedia{
        text-align: right;
        grid-column: 2;
        grid-row: 1;
    }

    .socialmedia p{
        list-style: none;
        color:rgb(194, 194, 194);
        font-size: 1em;
        padding-bottom: 1em;
    }

    .socialmedia ul{
        list-style: none;
        font-size: 1.3em;
        line-height: 1.4em;
    }

    .socialmedia a:hover{
        color: green;
    }

</style>