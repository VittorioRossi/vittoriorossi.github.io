<template>
    <div class="overlay flex__col">
        <button class="close__btn" @click="() => ToggleButton()"></button>
        <div class="overlay__content">
            <div class="heading">
                <img 
                    class="project__image" 
                    :src="project.image" 
                    :alt="project.title"
                    :style="project.imageStyle"
                >
                <h2>{{ project.title }}</h2>
            </div>  
            
            <div class="skill__used">
                <SkillTile 
                    v-for="skill in project.skills"
                    :key="skill.name"
                    :imgSource="skill.icon" 
                    :title="skill.name"
                />
            </div>

            <div class="project-content">
                <p>{{ project.content.description }}</p>
                
                <ul v-if="project.content.features">
                    <li v-for="feature in project.content.features" :key="feature">
                        {{ feature }}
                    </li>
                </ul>
                
                <p v-if="project.content.additionalInfo">
                    {{ project.content.additionalInfo }}
                </p>
            </div>

            <div class="links">
                <a 
                    v-for="link in project.content.links"
                    :key="link.label"
                    class="btn" 
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ link.label }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import SkillTile from './SkillTile.vue';

defineProps({
    project: { type: Object, required: true },
    ToggleButton: { type: Function, required: true },
});
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    justify-content: center;
    align-items: center;
    z-index: 99;
    overflow: hidden;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes glow-and-settle {
  0% {
    --angle: 0deg;
    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 0 40px 15px rgba(255, 255, 255, 0.5);
  }
  100% {
    --angle: 360deg;
    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0);
  }
}

.overlay__content {
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 75%;
    height: 75%;
    background-color: var(--color-secondary);
    text-align: center;
    border-radius: var(--border-radius);
    padding-right: 10px; /* Prevents scrollbar from overlapping border */
    
    /* Animated border */
    border: 4px solid transparent;
    background-image: 
        linear-gradient(var(--color-secondary), var(--color-secondary)),
        conic-gradient(from var(--angle), transparent, white, transparent);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    animation: glow-and-settle 2.5s linear 1 forwards;
}

/* Custom Scrollbar for Webkit browsers */
.overlay__content::-webkit-scrollbar {
    width: 8px;
}

.overlay__content::-webkit-scrollbar-track {
    background: transparent;
}

.overlay__content::-webkit-scrollbar-thumb {
    background-color: var(--color-third);
    border-radius: 10px;
    border: 2px solid var(--color-secondary);
}

.close__btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background-image: url(/src/assets/icons/functional/x-solid.svg);
    background-repeat: no-repeat;
    outline: 0;
    border: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.close__btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
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
    top: 0;
    left: 0;
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

.project-content {
    margin: 0px 10vw;
}

.project-content p {
    margin: 15px 0px;
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
    margin: 15px 0px;
}
</style>