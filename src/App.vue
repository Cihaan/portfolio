<script setup lang="ts">
import TheNavBar from './components/utils/TheNavBar.vue';
import TheFooter from './components/utils/TheFooter.vue';
</script>

<template>
    <TheNavBar/>
    <div class="container">
        <router-view></router-view>
    </div>
    <TheFooter/>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

//colors
$red: #FA4454;
$white: #fff;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-family: 'Ubuntu', sans-serif;
    font-family: 'Roboto', sans-serif;
}

.container {
    min-height: 100vh;
    margin: 54px;
}

</style>
