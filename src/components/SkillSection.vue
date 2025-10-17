<template>
    <div class="skills" id="skills" onMouseover="">
        <div class="title">
            <h3>My arsenal</h3>
            <h1>Skills</h1>
        </div>

        <div class="content">
            <div class="skill-part"> 
                <div 
                    v-for="category in skillCategories"
                    :key="category.id"
                    class="skill-row"
                >
                    <div class="tile-container">
                        <h3 class="heading">{{ category.title }}</h3>
                        <SkillTile 
                            v-for="skill in category.skills"
                            :key="skill.name"
                            :imgSource="skill.icon" 
                            :title="skill.name"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SkillTile from './base/SkillTile.vue';
import skillCategories from '../data/skills.js';

export default {
    name:"skills",
    setup() {
        return {
            skillCategories
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