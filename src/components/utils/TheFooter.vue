<script setup lang="ts">



</script>

<template>
<div class="footer">
    <div class="items">
        <div class="social">
            <div class="titre">Social</div>
            <hr/>
            <div class="content">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
            </div>
        </div>
        <div class="notice">
            <div class="titre">Legal Notice</div>
            <hr/>
            <div class="content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eveniet quos possimus non? Rem dolorum voluptate esse provident ipsam molestias sunt vero facilis cumque, perferendis quaerat, blanditiis repudiandae eveniet alias.</p>
            </div>
        </div>
        <div class="resume">
            <div class="titre">Resume</div>
            <hr/>
            <div class="content">
            </div>
        </div>
    </div>
    <div class="copyright">copyright</div>
</div>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;

.footer {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 40px 67px 0 67px;
    margin: 0px -55px 0px -55px;
    width: 100%;
    background-color: $red;
    z-index: 10000;
    color: $white;
    // bottom: 0;
}

.items {
    height: 270px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.social {
    flex-basis: 322px;
    display: flex;
    flex-direction: column;

}

.notice {
    flex-basis: 322px;
    display: flex;
    flex-direction: column;
}

.titre {
    font-size: 1.75rem;
    letter-spacing: 2.75;
    flex: 2;
}

.content {
    font-family: 'Ubuntu', sans-serif;
    font-size: 0.90rem;
    font-weight: 100;
    letter-spacing: 2.75;
    flex: 2;
}

.resume {
    flex-basis: 322px;
}

</style>