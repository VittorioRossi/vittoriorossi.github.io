<template>
    <div class="about" id="about">
        <div class="title">
            <h3>Who am I?</h3>
            <h1>About me</h1>
        </div>

        <div class="content">
            <div class="text">
                <h3 style = "font-weight: 300; text-align: center;">
                    Hi everyone,
                </h3>
                <p>
                    I am <span class="highlight">Vittorio Rossi</span> a second year student at Bocconi Univeristy where in 2024 
                    I am going to graduate in Economics, Managment and Computer Science.
                    <br>
                    I have been into computers since I was I little child and my parents bought me a PC for my birthday. I started programming when I was
                    <span class="highlight">15 years old</span>, playing around with python and pygame.
                    <br>
                    In the summer of 2020, after months of studing machine learning, I decided to get involved in the real game, so I started my <span class="highlight">freelancing</span> career on fiverr offering Tensorflow related gigs

                </p>
            </div>
            <div class="side-image">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"about",
}
</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 100vh;

    overflow-x: none;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

p {
    font-weight: 300;
    text-align: center;
    font-size: 18px;
}

.highlight {
    font-weight: bold; 
    border-bottom: 1px solid var(--color-third);
}

</style>

