<script setup lang="ts">



</script>

<template>
<div class="footer">
    <div class="items">
        <div class="social">
            <div class="title">Social</div>
            <hr/>
            <div class="content">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
            </div>
        </div>
        <div class="notice">
            <div class="title">Legal Notice</div>
            <hr/>
        </div>
        <div class="resume">
            <div class="title">Resume</div>
            <hr/>
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
    display: flex;
    flex-direction: column;
    padding: 40px 67px 0 67px;
    width: 100%;
    background-color: $red;
    z-index: 10000;
    color: $white;
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
}

.resume {
    flex-basis: 322px;
}

</style>