<template>
    <div class="landing" id="landing">
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
export default {
    name:"landing",
}

</script>


<style scoped>

.landing {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    height: 100vh;

    overflow-x: none;
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