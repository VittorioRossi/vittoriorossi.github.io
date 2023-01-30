<template>
    <div class="project" id="projects">
        <div class="title">
            <h3>My works</h3>
            <h1>Projects</h1>
        </div>

        <div class="content">
            <Tile 
                imgSource = "./src/assets/icons/green_logo.svg"
                title = "My portfolio"
                paragraph = "My portfolio website to present myself to clients and recruiter"
            />

            <Tile 
                imgSource = "src/assets/icons/universal-dot-white.png"
                title = "Task matching"
                paragraph = "A NLP based recommendation system to match task to freelancers"
            />

            <Tile 
                imgSource = "./src/assets/icons/content-moderation.png"
                title = "Text moderation"
                paragraph = "A content moderation piepline built with Spacy and served with FastApi"
            />
        </div>
    </div>
</template>

<script>
import Tile from './base/Tile.vue';

export default {
    name:"project",
    components: {
        Tile
    },
}

</script>


<style scoped>

.project {
    display: flex;
    flex-direction: column;
    
    height: 100vh;
}

</style>