<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import axios from "axios" ;

export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="row row-cols-6">
        <div class="col" v-for="element in store.filmsArray">
            <AppCard :card="element"/>
        </div>
    </div>
</template>

<style scoped lang="scss" >
</style>