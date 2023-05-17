<!-- A video component -->

<video src="../fireflies.mp4" autoplay muted loop playsinline></video>

<style>
    video {
        position: absolute;
        z-index: -1;
        width: 100vw;
        object-fit: cover;
    }

    @media(max-width:700px){
        video{
            width: 100%;
            height: 100vh;
        }
    }
</style>