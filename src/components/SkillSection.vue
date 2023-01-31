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
                        <SkillTile imgSource="./src/assets/icons/python.png" title="Python"/>
                        <SkillTile imgSource="./src/assets/icons/tensorflow.png" title="Tensorflow"/>
                        <SkillTile imgSource="./src/assets/icons/scikit.png" title="Scikit Learn"/>
                    </div>
                </div>

                <div class="skill-row">
                    <!-- icon -->
                    <div class="tile-container">
                        <h3 class="heading">Back-end</h3>
                        <SkillTile imgSource="./src/assets/icons/django.jpg" title="Django"/>
                        <SkillTile imgSource="./src/assets/icons/flask.png" title="Flask"/>
                    </div>
                </div>

                <div class="skill-row">
                    <!-- icon -->
                    <div class="tile-container">
                        <h3 class="heading">Front-end</h3>
                        <SkillTile imgSource="./src/assets/icons/js.png" title="JavaScript"/>
                        <SkillTile imgSource="./src/assets/icons/vue.png" title="Vue.js"/>
                    
                        <SkillTile imgSource="./src/assets/icons/css.png" title="CSS"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import SkillTile from './base/SkillTile.vue';

export default {
    name:"skills",
    components: {
        SkillTile,
    },
}

</script>


<style scoped>

.skills {
    display: flex;
    flex-direction: column;
    overflow: visible;
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

    border: 4px solid var(--color-third);
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
    background-color: var(--color-background);
}

.skill-grid {
    display: grid;
    gap: 50px;
    grid-template-columns:repeat(3, 1fr);
    grid-template-rows:repeat(3, 1fr);
}
</style>