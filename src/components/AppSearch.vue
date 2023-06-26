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

    <div class="input-group">
        <input @keyup.enter="$emit('search')" v-model.trim="store.currentSearch" type="text" class="form-control" placeholder="Cerca" aria-describedby="button-addon1">
        <button @click="$emit('search')" class="btn btn-outline-secondary btn-outline-light" type="button" id="button-addon1">Search</button>
    </div>

</template>

<style scoped lang="scss">
input[type="text"], textarea{
    background-color: transparent;
}
.input-group ::placeholder {
  color: white;
}
input, select, textarea{
    color: white;
}

textarea:focus, input:focus {
    color: white;
}
</style>