<script setup lang="ts">



</script>

<template>
<div class="work">
    <h1>Work in Progress</h1>
    <p>Come back later</p>
    <img src="../../assets/work.svg" alt="work in progress">
</div>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;

.work {
    width: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

// @media only screen and (mins-width: 640px) {
  
// }

h1 {
    color: $red;
    letter-spacing: 3px;
}

p {
    padding: 15px 0px 50px 0px;
    font-size: 1.2rem;
    letter-spacing: 1.75;
}

.work img {
    width: 100px;
    filter: invert(30%) sepia(92%) saturate(1511%) hue-rotate(331deg) brightness(104%) contrast(94%);
}


/* ----------------------------------------------
 * Generated by Animista on 2022-3-15 12:28:31
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>