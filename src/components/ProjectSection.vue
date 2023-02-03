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
                :ToggleButton = "() => ToggleOverlay('project1')"
            />

            <Tile 
                imgSource = "src/assets/icons/universal-dot-white.png"
                title = "Task matching"
                paragraph = "A NLP based recommendation system to match task to freelancers"
                :ToggleButton = "() => ToggleOverlay('project2')"
            />

            <Tile 
                imgSource = "./src/assets/icons/content-moderation.png"
                title = "Text moderation"
                paragraph = "A content moderation piepline built with Spacy and served with FastApi"
                :ToggleButton = "() => ToggleOverlay('project3')"
            />
        </div>
    </div>
    <project-overlay v-if="btnTrigger.project1" :ToggleButton="() =>  ToggleOverlay('project1')">
        <div class="heading">
            <img class="project__image" src="/src/assets/picture/portfolio-website.jpeg" alt="">
            <h2>
                My portfolio
            </h2>
        </div>  
        <div class="skill__used">
            <SkillTile imgSource="./src/assets/icons/js.png" title="JavaScript"/>
            <SkillTile imgSource="./src/assets/icons/vue.png" title="Vue.js"/>        
            <SkillTile imgSource="./src/assets/icons/css.png" title="CSS"/>
        </div>

        <p>
            This project had the goal to create a protfolio website to showcase my work.
            <br>
            It also turned out to be a nice challenge in order to test and improve my front-end skills.
        </p>

        <div class="links">
            <span>Links:</span>
            <a class="btn" href="https://github.com/VittorioRossi/portfolio">Code</a>
        </div>
    </project-overlay>

    <project-overlay v-if="btnTrigger.project2" :ToggleButton="() => ToggleOverlay('project2')">
        <div class="heading">
            <img class="project__image" src="/src/assets/picture/recommedation-project.jpeg" alt="" style = "transform: translateY(-50px);">
            <h2>
                NLP based recommendation system
            </h2>
        </div>  
        <div class="skill__used">
            <SkillTile imgSource="./src/assets/icons/python.png" title="Python"/>
                        <SkillTile imgSource="./src/assets/icons/tensorflow.png" title="Tensorflow"/>
                        <SkillTile imgSource="./src/assets/icons/numpy.png" title="Pandas"/>
        </div>

        <p>
            The UniversalDot foundation hired me to build a robust recommendation system that could match freelancer's profiles with task organisation published.
            <br>
            The team decided to use several natural language processing techniques in order to address this problem, coming up with the following pipeline:
            <ul>
                <li>Preprocessing with Spacy</li>
                <li>Keyword extraction</li>
                <li>Embedding</li>
                <li>Indexing with ScaNN model</li>
            </ul>

            I have worked on the development, training, fine-tunning and serving of the ScaNN model that allowed to search the space of tasks with a text input.
        </p>
        <div class="links">
            <span>Links:</span>
            <a class="btn" href="https://github.com/UniversalDot/tensorflow">My code</a>
            <a class = "btn" href="https://tfhub.dev/universaldot/udot_scann/1">Model on TF hub</a>
        </div>
    </project-overlay>

    <project-overlay v-if="btnTrigger.project3" :ToggleButton="() => ToggleOverlay('project3')" >
        <div class="heading">
            <img class="project__image" src="/src/assets/picture/content-moderation.jpeg" alt="" style = "transform: translateY(-200px);">
            <h2>
                Content moderation with Spacy
            </h2>
        </div>  
        <div class="skill__used">

        </div>

        <p>
            Work in progress
        </p>     
        <div class="links">
            <span>Links:</span>
        </div>  
    </project-overlay>

</template>

<script>
import Tile from './base/Tile.vue';
import ProjectOverlay from './base/ProjectOverlay.vue';
import SkillTile from './base/SkillTile.vue';
import { ref } from "vue"
export default {
    name:"project",
    setup () {
        const btnTrigger = ref({
            project1:false,
            project2:false,
            project3:false,
        })

        const ToggleOverlay = (projectName) => {
            btnTrigger.value[projectName] = !btnTrigger.value[projectName]
        }

        return {
            btnTrigger,
            ToggleOverlay,
        }
    },
    components: {
        Tile,
        ProjectOverlay,
        SkillTile,
    },
}

</script>


<style scoped>

.project {
    position: relative;
    display: flex;
    flex-direction: column;
    
    height: 100vh;
}
.heading {
    position: relative;
    top: 0;
    left: 0;
    
    height: 50vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    overflow: hidden;
}


h2 {
    position: absolute;
    top: 35vh;
    width: 100%;
    text-align: center;
    color: white;

    background-color: rgb(0, 0, 0, 0.25);
}
.project__image {
    position: relative;
    top:0;
    left:0;

    object-fit: scale-down;
}

.skill__used {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 20px;
}
p {
    text-align: justify;
    margin: 0px 50px;
}
.links { 
    margin: 50px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
}
ul {
    margin:15px 0px;
}
</style>