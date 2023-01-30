<template>
    <div class="skill-tile">
        <img :src="this.imgSource" alt="">
        <div class="hover-inf">
            <h4>
                {{ this.title }}
            </h4>


        </div>
    </div>
</template>

<script>
export default {
    name:"skill-tile",
    props:{
        imgSource: String,
        title:String,
    },
}
</script>

<style> 
.skill-tile {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-secondary);
    width: 100px;
    height: 100px;
    border-radius: 20px;

    transition: all 0.5s;
}
.skill-tile img {
    width: 70px;
    backface-visibility: hidden;

    transition: all 0.5s;
}


.hover-inf {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;

    opacity: 0;
}
.hover-inf .btn {
    text-align: center;
    font-size: 8px;
}

.hover-inf h4 {
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    margin: 10px;
}


.skill-tile:hover {
    transform:matrix(1.25,0.00,0.00,1.25,0,0);
    -ms-transform:matrix(1.25,0.00,0.00,1.25,0,0);
    -webkit-transform:matrix(1.25,0.00,0.00,1.25,0,0);
}

.skill-tile:hover img {
    opacity: 0.25;
}

.skill-tile:hover .hover-inf{
    opacity: 100%;
}

</style>