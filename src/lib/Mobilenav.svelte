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
.mobilenav {
    display: flex;
    align-items: center;
}

.hamburgericon {
    width: 24px;
    height: 2px;
    background-color: white;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s;
}

.hamburgericon:before,
.hamburgericon:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: transform 0.3s;
}

.hamburgericon:before {
    top: -8px;
}

.hamburgericon:after {
    top: 8px;
}

.hamburgericon.active {
    transform: rotate(45deg);
}

.hamburgericon.active:before {
    transform: rotate(90deg);
    top: 0;
}

.hamburgericon.active:after {
    transform: rotate(90deg);
    top: 0;
}

.linkshidden {
    display: none;
}

.linksvisible {
    display: block;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}
</style>
