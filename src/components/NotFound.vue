<template>
    <div class="not-found">
        <div class="not-found__title">{{ title }}</div>
        <div v-if="description" class="not-found__description">{{ description }}</div>
        <div v-if="icon" class="not-found__icon"><i></i></div>
    </div>
</template>

<script>
    export default {
        name: 'not-found',
        props: {
            title: {
                type: String,
                default: "Not found item"
            },
            description: {
                type: String,
                default: ""
            },
            icon: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
            };
        },

    }
</script>
