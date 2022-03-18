<script setup lang="ts">
import TheNavBar from './components/utils/TheNavBar.vue';
import TheFooter from './components/utils/TheFooter.vue';

</script>

<template>
    <div class="container">
        <TheNavBar />
        <router-view></router-view>
        <!-- <TheFooter /> -->
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

//colors
$red: #fa4454;
$white: #fff;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-family: 'Ubuntu', sans-serif;
    font-family: "Roboto", sans-serif;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    body::-webkit-scrollbar {
        display: none;
    }
}

.container {
    height: 100%;
    margin: 140px 200px 54px 200px;
    z-index: 1;
}

h2 {
    color: $red;
    font-family: "Ubuntu", sans-serif;
    font-size: 35px;
    font-weight: 400;
}

h2::after {
    content: "";
    display: block;
    margin-top: 12px;
    width: 200px;
    height: 1.5px;
    background: $red;
}

p {
    letter-spacing: 2.75;
}

.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

span {
    color: $red;
}


@media only screen and (max-width: 640px) {
    .container {
        padding: 0px;
        margin: 0px;
        margin-bottom: 40px;
        height: 100%;
        width: 100%;
    }

    
h2 {
    color: $red;
    font-family: "Ubuntu", sans-serif;
    font-size: 1px;
    font-weight: 400;
}

h2::after {
    content: "";
    display: block;
    margin-top: 0px;
    width: 1px;
    height: 1.5px;
    background: $red;
}

p {
    letter-spacing: 2.75;
}

.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

span {
    color: $red;
}
}

</style>
