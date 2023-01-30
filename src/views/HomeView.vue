<template>
    <div>

        <div class="section">
            <LandingSection></LandingSection>
        </div>        
        
        <div class="section">
            <AboutSection></AboutSection>
        </div>
        <div class="section">
            <ProjectSection></ProjectSection>
        </div>        

        <div class="section">
            <SkillSection></SkillSection>
        </div>        

        <div class="section">
            <ContactSection></ContactSection>
        </div>        
    </div>
</template>

<script>
import LandingSection from '../components/LandingSection.vue';
import SkillSection from '../components/SkillSection.vue';
import ProjectSection from '../components/ProjectSection.vue';
import ContactSection from '../components/ContactSection.vue';
import AboutSection from '../components/AboutSection.vue'

export default {
    name: "HomeView",
    components: {
        LandingSection, 
        ProjectSection,
        SkillSection,
        ContactSection,
        AboutSection
    },
}


</script>

<style>

</style>