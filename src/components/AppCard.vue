<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';

export default {
    name: "AppCard",
    props: ["card"],
    components: {
        LangFlag
    },
    data() {
        return {
            store
        }
    }
};
</script>

<template>
    <div class="card">
        <img :src="`${store.imgUrl}${card.poster_path}`" alt="">
        <h2 v-if="!card.poster_path">
            <img src="../assets/img/notavailable.jpg" alt="">
        </h2>
        <ul>
            <li>Titolo: {{ card.title }}</li>
            <li>Titolo originale: {{ card.original_title }}</li>
            <li>Lingua: <lang-flag :iso="`${card.original_language}`" /></li>
            <li>Voto: {{ card.vote_average }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 100%;
}

img {
    width: 100%;
}
</style>