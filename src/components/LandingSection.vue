<template>
    <div class="landing" id="landing">
        <Blob class="blob1" />
        <Blob class="blob2" />
        <h2 class="text-slider">Machine learning engineer</h2>
        <h1>VITTORIO ROSSI</h1>


        <div class="actions">
            <a href="#about" style="text-decoration: none;">
                <div class="btn" > 
                    More about me 
                </div>
            </a>
            <div class="navigator">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contacts">Contact me</a>
            </div>
        </div>

    </div>
</template>

<script>
import Blob from './base/Blob.vue';

export default {
    name:"landing",
    components: {
        Blob
    }
}

</script>


<style scoped>

.landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative; /* Needed for positioning blobs */
    overflow: hidden; /* Prevents blobs from going outside */
}

.blob1 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 400px;
    height: 400px;
    animation-duration: 10s, 20s;
}

.blob2 {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 300px;
    height: 300px;
    animation-duration: 12s, 25s;
    animation-delay: 2s, 2s;
}

.actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;

    bottom: 75px;

    gap: 20px;
}


.navigator a{
    margin: 0px 10px;
    text-decoration: none;

    color: var(--color-text);
    border-bottom: 1px solid var(--color-third);

    transition: all 0.5s;
}
a:hover {
    color: var(--color-third);
}
</style>