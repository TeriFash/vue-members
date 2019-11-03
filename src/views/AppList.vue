<template>
    <div class="row">
        <div class="col s12">
            <h3>List</h3>
            <hr>
        </div>
        <card :items="tasks" />
    </div>
</template>

<script>
    import Card from '@/components/Card'

    export default {
        name: 'app-list',
        components: {
            Card
        },
        data() {
            return {
                status: true
            };
        },
        computed: {
            tasks() {
                return this.$store.getters.tasks
            }
        }
    }
</script>
