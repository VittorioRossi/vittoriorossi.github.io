<template>
    <div class="tile">
        <img :src="this.imgSource" alt="">

        <h3>
            {{ this.title }}
        </h3>

        
        <p>
            {{ this.paragraph }}
        </p>

        <div class="btn">
            Read more
        </div>
    </div>
</template>

<script>
export default {
    name: "tile",
    props: {
        imgSource: String,
        title: String,
        paragraph: String,
    },
}
</script>

<style scoped>
.tile {

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;

    align-items: center;
    
    gap: 10px;


    width: 350px;
    height: 350px;
    
    background-color: var(--color-secondary);
    border-radius: 20px;
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);

    margin: 25px;
}

.tile img {
    height: 100px;
}


.tile .btn {
    font-size: 12px;
}

.tile p {
    margin: 0px 25px;
    font-size: 18px;
}
</style>