<script>
let isopen = false;

function mobileNav() {
    isopen = !isopen;
}
</script>

<div class="mobilenav">
    <div class="hamburgericon" class:active={isopen} on:click={mobileNav}></div>
        <div class:linkshidden={!isopen} class:linksvisible={isopen}>
            <ul class="mobilemenu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
</div>

<style>
.mobilenav{
    display: none;
    align-items: center;
    cursor: pointer;
}

.hamburgericon{
    width: 24px;
    height: 2px;
    background-color: white;
    position: relative;
    transition: transform 0.3s;
}

.hamburgericon:before,
.hamburgericon:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: transform 0.3s;
}

.hamburgericon:before{top: -8px;}

.hamburgericon:after{top: 8px;}

.hamburgericon.active {transform: rotate(45deg);}

.hamburgericon.active:before{
    transform: rotate(90deg);
    top: 0;
}

.hamburgericon.active:after{
    transform: rotate(90deg);
    top: 0;
}

.linkshidden{
    display: none;
}

.linksvisible{
    display: absolute;
    flex-direction: column;
    gap: 0.5rem;
    margin: 20rem 1rem 0rem 0rem;
}

.mobilemenu{
    border-radius: 5px;
    margin: auto;
    width: 100%;
    color: var(--light-text-color);
}

a:hover{
    color: var(--hover-text-color);
}

@media (max-width: 1000px){
    .mobilenav{
        display: flex;
    }
}
</style>
