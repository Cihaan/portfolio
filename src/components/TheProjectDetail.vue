<script setup lang="ts">
import projects from '../composable/projects';
import { useRoute } from 'vue-router';

const route = useRoute();

const projet = projects.projects.find( project => project.idProject.toString() == route.params.id)


</script>

<template>
<div class="project">
    <div class="title">
        <h2>{{projet?.title}}</h2>
    </div>
    <div class="detail">
        <img :src="projet?.detailImagePath">
        <p>Desc = {{projet?.detailDescription}}</p>
        <div class="technologies">
            <p v-for="tech in projet?.detailTechnologies"> Tech = {{tech}}</p>
        </div>
        <p>Duration : {{projet?.detailDuration}}</p>
        <p>Teams Member : {{projet?.detailTeam}}</p>
        <p>State : {{projet?.detailState}}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;

.project {
    height: 100vh;
}


</style>
