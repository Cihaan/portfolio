<script setup lang="ts">



</script>

<template>

<header id="header">
    <a href="#" class="logo"><img src="../../assets/ck/ck_logo.png" alt=""></a>
    <ul class="navigation">
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Photos</a></li>
    </ul>
</header>

</template>

<style lang="scss" scoped>
$white: #fff;
$red: #FA4454;
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
    text-decoration: none;
    padding: 6px 15px;
    color: $black;
    border-radius: 20px;
    font-size: 1.20rem;
}

#header .navigation li a:hover,
#header .navigation li a .active {
    background-color: $red;
    color: $white;
}

</style>