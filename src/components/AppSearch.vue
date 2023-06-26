<script>
import { store } from '../store.js';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    emits: ["search"]
}
</script>

<template>

    <div>
        <input @keyup.enter="$emit('search')" v-model.trim="store.currentSearch" type="text" placeholder="Search">
        <button @click="$emit('search')" type="button">Search</button>
    </div>

</template>

<style scoped lang="scss">

</style>