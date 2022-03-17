<script setup lang="ts">

const props = defineProps({
  skillName: String,
  paragraph: String,
  imagePath: String,
  caption: String,
})

function getImageUrl(name: any) {
  return new URL(name, import.meta.url).href
}

</script>

<template>
      <div class="skill">
        <!-- getImageUrl(props.imagePath) -->
        <img :src="props.imagePath" :alt="props.caption" />
        <h3 class="skill-name">{{props.skillName}}</h3>
        <p>{{props.paragraph}}</p>
      </div>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;


.skill {
  padding: 0px 10px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 100px;
}

h3 {
  color: $red;
  font-size: 24px;
  font-weight: 500;
  padding: 8px 0px 14px 0px;
  font-family: 'Ubuntu', sans-serif;
}

p {
  text-align: center;
  font-size: 20px;
  max-width: 50%;
  height: 20px;
}


// #prisma {
//   width: 80px;
// }

// #docker {
//   width: 120px;
// }

</style>
