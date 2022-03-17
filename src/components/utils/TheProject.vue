<script setup lang="ts">

const props = defineProps({
    title: String,
    desc: String,
    imagePath: String
})

</script>

<template>
    <div class="project">
        <div class="project-card">
            <h4>{{props.title}}</h4>
            <p>{{props.desc}}</p>
            <img :src="props.imagePath">
        </div>
    </div>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;


.project {
    height: 400px;
    // padding: 0px 25px 60px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-card {
    background-color: #C4F6DE;
    width: 65%;
    align-self: center;
    height: 100%;
    // flex-grow: 1;
}

h4 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    margin: 30px 0px 15px 25px;
}

img {
    width: 250px;
    bottom: 0;
}

p {
    text-align: left;
    font-weight: 350;
    margin: 0px 0px 30px 25px;
}

</style>
