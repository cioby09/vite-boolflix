<script>
import { store } from '../store.js';
import AppSearch from './AppSearch.vue';
import axios from "axios";

export default {
    name: "AppHeader",
    components: {
        AppSearch
    },
    data() {
        return {
            store
        }
    },
    methods: {
        handleSearch() {
            console.log("handleSearch");
            const params = {
                api_key: this.store.apiKey,
                query: this.store.currentSearch
            }
            if (this.store.currentSearch) {
                this.getFilms(params);
                this.getSeries(params);
            } else {
                console.log(error);
            }
            this.store.currentSearch = "";
        },
        getFilms(params) {
            axios
                .get(this.store.apiFilms, { params })
                
                .then((resp) => {
                    console.log(resp);
                    this.store.filmsArray = resp.data.results;
                })
        },
        getSeries(params) {
            axios
                .get(this.store.apiSeries, { params })
                .then((resp) => {
                    console.log(resp);
                    this.store.seriesArray = resp.data.results;
                })
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex align-items-center justify-content-between">
            <div class="header-title d-flex align-items-center">
                <h1 class="text-uppercase">Boolflix</h1>
            </div>
            <div class="header-search d-flex align-items-centerd-flex align-items-center">
                <AppSearch @search="handleSearch" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss" >
header {
    background-color: black;
    height: 100px;
    .container {
        height: 100%;
        h1 {
            color: red;

        }
    }
}
</style>