<script>
export default {
    name: "AppCard",
    props: {
        card: Object,
    },
};
</script>

<template>
    <div class="card">
        <p>{{ card.title }}</p>
        <p>{{ card.original_title }}</p>
        <p>{{ card.original_language }}</p>
        <p>{{ card.vote_average }}</p>
    </div>
</template>