<script setup lang="ts">



</script>

<template>
    <header id="header">
        <img src="../../assets/ck/ck_logo.png" alt="logo" />
        <ul class="navigation">
            <li>
                <router-link active-class="active" class="active" to="/landing">Landing</router-link>
            </li>
            <li>
                <router-link active-class="active" to="/about">About</router-link>
            </li>
            <li>
                <router-link active-class="active" to="#">Skills</router-link>
            </li>
            <li>
                <router-link active-class="active" to="#">Projects</router-link>
            </li>
            <li>
                <router-link active-class="active" to="#">Photos</router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;

#header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
}

#header img {
    width: 240px;
}

#header .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
}

#header .navigation li {
    list-style: none;
    margin-left: 20px;
}

#header .navigation li a {
    position: relative;
    text-decoration: none;
    padding: 6px 15px;
    color: $black;
    font-size: 1.2rem;
}

/* Fade in */
.active::after,
a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: $red;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
}

a:hover::after,
.active::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}
</style>