<script setup lang="ts">

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();



const props = defineProps({
    idProject: Number,
    title: String,
    desc: String,
    imagePath: String,
    cardColor: String
})

async function seeDetails(event: Event): Promise<void> {
    let id;

    if ((event.target as HTMLInputElement).getAttribute("id") != null) {
        id = (event.target as HTMLInputElement).getAttribute("id")
    }
    else {
        if ((event.target as HTMLInputElement).parentElement?.getAttribute("id")!= null) {
            id = (event.target as HTMLInputElement).parentElement?.getAttribute("id");
        }
        else {
            id = (event.target as HTMLInputElement).parentElement?.parentElement?.getAttribute("id");
        }
    }

    await router.push({path: `/project/${id}`})
}

const on = onMounted(() => {
    let idProjet = props.idProject
    let cardcol = props.cardColor

    if (idProjet != undefined) {
        let elem = document.getElementById(idProjet.toString())
        if (elem != undefined) {
            let cardcol = props.cardColor

            if (cardcol != undefined) {
                elem.style.backgroundColor = '#' + cardcol
            }

        }
    }

})

function getImageUrl(name: any) {
  return new URL(name, import.meta.url).href
}

</script>

<template>
    <div class="project">
        <div :id="props.idProject?.toString()" @click="seeDetails($event)" class="project-card">
        <a href="">
            <h4>{{ props.title }}</h4>
            <p>{{ props.desc }}</p>
            <img :src="getImageUrl(props.imagePath)" />
        </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$white: #fff;
$red: #fa4454;
$black: #000;

a {
    text-decoration: none;
    color: $black;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.project {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
}

.project-card {
    width: 65%;
    align-self: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.50); 
    box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.50);
}

h4 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    margin: 30px 0px 15px 25px;
    // flex: 1;
}

img {
    width: 250px;
    margin: auto;
    bottom: 0;
}

p {
    text-align: left;
    font-weight: 350;
    margin: 0px 0px 30px 25px;
}
</style>
