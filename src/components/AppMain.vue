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
    <main>
        <div v-if="store.filmsArray.length === 0 & store.seriesArray.length === 0" class="container empty-home d-flex align-items-center justify-content-center">
            <h1>TROVA IL TUO PROSSIMO SHOW</h1>
        </div>

        <div v-else class="container">

            <div class="container my-4">
                <h2 class="text-white">Film</h2>
                <div class="row row-cols-4 g-4">
                    <div class="col" v-for="element in store.filmsArray">
                        <AppCard :card="element"/>
                    </div>
                </div>
            </div>
            <div class="container my-4">
                <h2 class="text-white">Serie TV</h2>
                <div class="row row-cols-4 g-4">
                    <div class="col" v-for="element in store.seriesArray">
                        <AppCard :card="element"/>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<style scoped lang="scss" >
.empty-home {
    height: 100%;
    color: 	black;
}

main {
    background-color: 	#564d4d;
    height: calc(100vh - 100px);
    overflow: auto;
}
</style>