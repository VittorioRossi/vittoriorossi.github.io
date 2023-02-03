<template>
  <div class="overlay flex__col">
    <button class="close__btn" @click="() => ToggleButton()"></button>
    <div class="overlay__content">
        <slot />
    </div>
  </div>
</template>


<script>
export default {
    name:"project-overlay",
    props: {
        ToggleButton:{type:Function, required:true},
    },
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    justify-content: center;
    align-items: center;

    z-index: 99;
    overflow: hidden;
}

.overlay__content {
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;

    width: 75%;
    height: 75%;


    background-color: var(--color-secondary);
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.25);
    
    text-align: center;
}

.close__btn{
    position: absolute;
    top: 0;
    right: 0;

    background-image: url(/src/assets/icons/functional/x-solid.svg);
    background-repeat: no-repeat;
    outline: 0;
    border: 0;

    background-color: transparent;
    width: 25px;
    height: 25px;
    margin: 25px;
}
</style>