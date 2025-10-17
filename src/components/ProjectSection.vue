<template>
    <div>
        <div class="project" id="projects">
            <div class="title">
                <h3>My works</h3>
                <h1>Projects</h1>
            </div>

            <div class="content">
                <Tile 
                    v-for="project in projectsData"
                    :key="project.id"
                    :imgSource="project.icon"
                    :title="project.title"
                    :paragraph="project.description"
                    :ToggleButton="() => ToggleOverlay(project.id)"
                />
            </div>
        </div>
        <Transition name="fade">
            <project-overlay v-if="activeProject" :project="activeProject" :ToggleButton="closeOverlay">
            </project-overlay>
        </Transition>
    </div>
</template><script setup>
import Tile from './base/Tile.vue';
import ProjectOverlay from './base/ProjectOverlay.vue';
import { ref, computed } from "vue"
import projects from '../data/projects.js';

// Defensive programming - ensure projects is an array
const projectsData = Array.isArray(projects) ? projects : [];

// State to hold the ID of the currently active project
const activeProjectId = ref(null);

// Computed property to get the active project object
const activeProject = computed(() => {
    return projectsData.find(p => p.id === activeProjectId.value);
});

// Function to toggle the overlay
const ToggleOverlay = (projectId) => {
    if (activeProjectId.value === projectId) {
        activeProjectId.value = null; // Close if clicking the same project
    } else {
        activeProjectId.value = projectId; // Open new project
    }
};

// Function to close the overlay (can be passed to the overlay component)
const closeOverlay = () => {
    activeProjectId.value = null;
};

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
    margin:15px 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
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