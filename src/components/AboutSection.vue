<template>
    <div class="about" id="about">
        <div class="title">
            <h3>Who am I?</h3>
            <h1>About me</h1>
        </div>

        <div class="content">
            <div class="container">
                <img class = "picture side-image" src="/src/assets/picture/about.png" alt="">
                <div class="text">
                    <h3 style = "font-weight: 300;">
                    Hi everyone,
                    </h3>
                    <p>
                        I am <span class="highlight">Vittorio Rossi</span> a second year student at Bocconi Univeristy where in 2024 
                        I am going to graduate in Economics, Managment and Computer Science.
                        I have been into computers since I was I little child and my parents bought me a PC for my birthday. I started programming when I was
                        <span class="highlight">15 years old</span>, playing around with python and pygame.
                        In the summer of 2020, after months of studing machine learning, I decided to get involved in the real game, so I started my <span class="highlight">freelancing</span> career on fiverr offering Tensorflow related gigs.
                    </p>
                </div>
            
                
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
    justify-content: center;

    height: 100vh;

    overflow-x: none;
}

p {
    font-weight: 300;
    font-size: 18px;
}


.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.highlight {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid var(--color-third);
}

.side-image {
    height: inherit;
    width: inherit;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: var(--color-secondary);

    padding: 50px;
    border-radius: 20px;
    height: 50vh;

    gap: 50px;
}

@media screen and (max-width:600px) {
    .container {
        margin: 5vw 0px;
        flex-direction: column-reverse;
        gap: 0;
        height: fit-content;
        padding-bottom: 0;
    }
    h3 {
        font-size: 20px;
    }
    .highlight {
        font-size: 15px;
    }
    p {
        font-size: 12px;
    }
    .side-image {
        position: relative;
        bottom: 0px;
        width: 30vw;
    }
}
</style>

