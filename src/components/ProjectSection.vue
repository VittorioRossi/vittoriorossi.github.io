<template>
    <div class="project" id="projects">
        <div class="title">
            <h3>My works</h3>
            <h1>Projects</h1>
        </div>

        <div class="content">
            <Tile 
                :imgSource = "GreenLogoImage"
                title = "My portfolio"
                paragraph = "My portfolio website to present myself to clients and recruiter"
                :ToggleButton = "() => ToggleOverlay('project1')"
            />

            <Tile 
                :imgSource = "UniversalImage"
                title = "Task matching"
                paragraph = "A NLP based recommendation system to match task to freelancers"
                :ToggleButton = "() => ToggleOverlay('project2')"
            />

            <Tile 
                :imgSource = "ContentModImage"
                title = "Text moderation"
                paragraph = "A content moderation piepline built with Spacy and served with FastApi"
                :ToggleButton = "() => ToggleOverlay('project3')"
            />
        </div>
    </div>
    <project-overlay v-if="btnTrigger.project1" :ToggleButton="() =>  ToggleOverlay('project1')">
        <div class="heading">
            <img class="project__image" src="/src/assets/picture/portfolio-website.jpeg" alt="" style = "transform: translateY(-30%);">
            <h2>
                My portfolio
            </h2>
        </div>  
        <div class="skill__used">
            <SkillTile :imgSource="JsImage" title="JavaScript"/>
            <SkillTile :imgSource="VueImage" title="Vue.js"/>        
            <SkillTile :imgSource="CSSImage" title="CSS"/>
        </div>

        <p>
            This project had the goal to create a protfolio website to showcase my work.
            <br>
            It also turned out to be a nice challenge in order to test and improve my front-end skills.
        </p>

        <div class="links">
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
            <SkillTile :imgSource="PythonImage" title="Python"/>
            <SkillTile :imgSource="TensorflowImage" title="Tensorflow"/>
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
            <a class="btn" href="https://github.com/UniversalDot/tensorflow">My code</a>
            <a class = "btn" href="https://tfhub.dev/universaldot/udot_scann/1">Model on TF hub</a>
        </div>
    </project-overlay>

    <project-overlay v-if="btnTrigger.project3" :ToggleButton="() => ToggleOverlay('project3')" >
        <div class="heading">
            <img class="project__image" src="/src/assets/picture/content-moderation.jpeg" alt="" style = "transform: translateY(-150px);">
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
        </div>  
    </project-overlay>

</template>

<script>
import FlaskImage from '../assets/icons/flask.png';
import JsImage from '../assets/icons/js.png';
import PythonImage from '../assets/icons/python.png';
import VueImage from '../assets/icons/vue.png';
import CSSImage from '../assets/icons/css.png';
import DjangoImage from '../assets/icons/django.jpg';
import ScikitImage from '../assets/icons/scikit.png';
import TensorflowImage from '../assets/icons/tensorflow.png';
import GreenLogoImage from '../assets/icons/green_logo.svg';
import UniversalImage from '../assets/icons/universal-dot-white.png';
import ContentModImage from '../assets/icons/content-moderation.png';


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

            FlaskImage,
            PythonImage,
            JsImage,
            VueImage,
            CSSImage,
            DjangoImage,
            ScikitImage,
            TensorflowImage,
            GreenLogoImage,
            UniversalImage,
            ContentModImage
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
    
}
.heading {
    position: relative;
    top: 0;
    left: 0;
    
    height: 30vw;
    width: 100%;

    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.heading .project__image {
    position: relative;
    top:0;
    left:0;

    object-fit: cover;
}

.heading h2 {
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    color: white;

    background-color: rgb(0, 0, 0, 0.25);
}

.skill__used {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 20px;

    height: fit-content;
}

p {
    text-align: justify;
    margin: 0px 10vw;
}
.links {
    margin: 5vh 0px;
    display: flex;
    flex-direction: row;
    gap: 5vw;
    width: 100%;
    justify-content: center;
    align-items: center;
}
ul {
    margin:15px 0px;
}

@media screen and (max-width:600px) {
    .content {
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .skill__used {
        width: 100%;
    }
}
</style>