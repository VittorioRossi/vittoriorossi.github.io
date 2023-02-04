<template>
    <div class="skills" id="skills" onMouseover="">
        <div class="title">
            <h3>My arsenal</h3>
            <h1>Skills</h1>
        </div>

        <div class="content">
        
            <div class="skill-part"> 

                <div class="skill-row">
                    <!-- icon -->
                    <div class="tile-container">
                        <h3 class="heading">Machine learning</h3>
                        <SkillTile :imgSource="PythonImage" title="Python"/>
                        <SkillTile :imgSource="TensorflowImage" title="Tensorflow"/>
                        <SkillTile :imgSource="ScikitImage" title="Scikit Learn"/>
                    </div>
                </div>

                <div class="skill-row">
                    <!-- icon -->
                    <div class="tile-container">
                        <h3 class="heading">Back-end</h3>
                        <SkillTile :imgSource="DjangoImage" title="Django"/>
                        <SkillTile :imgSource="FlaskImage" title="Flask"/>
                    </div>
                </div>

                <div class="skill-row">
                    <!-- icon -->
                    <div class="tile-container">
                        <h3 class="heading">Front-end</h3>
                        <SkillTile :imgSource="JsImage" title="JavaScript"/>
                        <SkillTile :imgSource="VueImage" title="Vue.js"/>
                        <SkillTile :imgSource="CSSImage" title="CSS"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import SkillTile from './base/SkillTile.vue';

import FlaskImage from '../assets/icons/flask.png';
import JsImage from '../assets/icons/js.png';
import VueImage from '../assets/icons/vue.png';
import CSSImage from '../assets/icons/css.png';
import DjangoImage from '../assets/icons/django.jpg';
import ScikitImage from '../assets/icons/scikit.png';
import TensorflowImage from '../assets/icons/tensorflow.png';
import PythonImage from '../assets/icons/python.png';


export default {
    name:"skills",
    setup() {
        return {
            FlaskImage,
            JsImage,
            VueImage,
            CSSImage,
            DjangoImage,
            ScikitImage,
            TensorflowImage,
            PythonImage
        }
    },
    components: {
        SkillTile,
    },
}

</script>


<style scoped>
.skills {
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 50px;
}

.skill-part {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-height: 70vh;
}

.skill-row {
    display: flex;
    
    width: 100%;
    height: 150px;

    gap: 20px;
}

.tile-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 50px;

    padding: 0px 20px;

    border-radius: 100px;   
    width: 100%;
}

.heading {
    position: absolute;
    white-space: nowrap;
    font-size: 20px;

    padding: 0px 20px;
    
    transform: translateX(-50%);
    left: 50%;
    top: -20px;
}
@media screen and (max-width:600px) {
    .skills {
        gap: 10vh;
    }
    .content {
        gap: 10vh;
    }
    .heading {
        font-size: 15px;
        top:0px;
        padding: 0px 10px;

    }
    .tile-container {
        gap: 5vh;
    }
}
</style>