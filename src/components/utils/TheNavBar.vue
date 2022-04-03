<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

async function goLanding(): Promise<void> {
    await router.push({ path: "/landing" })
}


var mq = window.matchMedia("(max-width: 640px)");
if (mq.matches) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            let nav = document.getElementById("header")
            if (nav) {
                if (nav.style.display == "flex") {
                    nav.style.display = "flex";
                }
            }
        } else {
            let nav = document.getElementById("header")
            if (nav) {
                nav.style.display = "none";
            }
        }
        prevScrollpos = currentScrollPos;
    }
}
else {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            let nav = document.getElementById("header")
            if (nav) {
                if (nav.style.display != "flex") {
                    nav.style.display = "flex";
                }
            }
        } else {
            let nav = document.getElementById("header")
            if (nav) {
                nav.style.display = "none";
            }
        }
        prevScrollpos = currentScrollPos;
    }
}



function toggleMenu(): void {
    var menuList = document.getElementById("header")



    if (menuList != undefined) {
        // console.log(menuList.style);


        if (!menuList?.style.display) {
            menuList.style.display = "flex"
        } else if (menuList?.style.display == "flex") {
            menuList.style.display = "none"
        } else if (menuList?.style.display == "none") {
            menuList.style.display = "flex"
        }

    }
}

</script>

<template>
    <img src="/icons/menu.svg" @click="toggleMenu" id="toggle-menu" alt="menu toggle" />
    <header id="header">
        <img src="../../assets/ck/ck_logo.png" id="logo" @click="goLanding" alt="logo" />
        <ul class="navigation">
            <li>
                <router-link exact-active-class="active" to="/about">About</router-link>
            </li>
            <li>
                <router-link exact-active-class="active" to="/skills">Skills</router-link>
            </li>
            <li>
                <router-link exact-active-class="active" to="/projects">Projects</router-link>
            </li>
            <li>
                <router-link exact-active-class="active" to="/photos">Photos</router-link>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;

#header {
    position: fixed;
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

@media only screen and (min-width: 640px) {
    #toggle-menu {
        display: none;
    }
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

@media only screen and (max-width: 640px) {
    #header {
        position: fixed;
        top: 5%;
        left: 0;
        width: 100%;
        padding: 15px;
        padding-top: 0px;
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        min-height: 0px;
        background-color: $red;
        -webkit-animation: tracking-in-expand-fwd-top 0.8s
            cubic-bezier(0.215, 0.61, 0.355, 1) both;
        animation: tracking-in-expand-fwd-top 0.8s
            cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    #logo {
        display: none;
    }

    #toggle-menu {
        position: absolute;
        width: 40px;
        top: 0;
        right: 0%;
        z-index: 2000000000;
    }

    #header .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #header .navigation li {
        display: block;
        margin: 5px;
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
        transform: translate3d(0, 0.1em, 0);
    }
}

/* ----------------------------------------------
 * Generated by Animista on 2022-3-18 23:9:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand-fwd-top
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand-fwd-top {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px) translateY(-500px);
        transform: translateZ(-700px) translateY(-500px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
    }
}
@keyframes tracking-in-expand-fwd-top {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px) translateY(-500px);
        transform: translateZ(-700px) translateY(-500px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
    }
}
</style>