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
    },
    computed: {
        setVote() {
            return Math.ceil(this.card.vote_average / 2)
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
        <ul class="card-info d-flex">
            <li v-if="card.title">Titolo: {{ card.title }}</li>
            <li v-else>Nome:{{ card.name }}</li>
            <li>Titolo originale: {{ card.original_title ? card.original_title : card.original_name }}</li>
            <li>Lingua: <lang-flag :iso="`${card.original_language}`" /></li>
            <li>Voto: <span class="stars" v-for="i in store.stars">
                    <i :class="[(i <= setVote) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                </span>
            </li>
            <li>Overview: {{ card.overview }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 100%;
    background-color: black;
    border: 2px solid white;
    color: white;
    border-radius: 0;
    .card-info {
        flex-direction: column;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        padding: 30px 10px;
        opacity: 0;
        background-color: black;
        height: 100%;
        overflow-y: auto;

        &:hover {   
            opacity: 1;
        }
        li {
        list-style: none;
        }
        .stars {
            color: #FDCC0D;
        }
    }
    img {
    width: 100%;
    }
}
</style>