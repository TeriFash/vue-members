<template>
    <div class="row">
        <top-action
            class="margin-top-2 margin-bottom-1"
            @toggler="switchView"
            :toggler-type="tasksViewMethod"
            :toggler-icon="['apps', 'dehaze']"
            title="Tasks list">
        </top-action>
        <tasks :items="tasks" :view-type="tasksViewMethod"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Tasks from '@/components/Tasks'
    import TopAction from '@/components/TopAction'

    export default {
        name: 'app-list',
        components: {
            Tasks,
            TopAction
        },
        data() {
            return {
                tasksViewMethod: 'list'
            };
        },
        computed: {
            ...mapGetters({
                tasks: 'tasks'
            }),
            actionIcon() {
                return this.tasksViewMethod === 'card' ? 'apps' : 'dehaze'
            }
        },
        methods: {
            switchView() {
                if (this.tasksViewMethod === 'card') {
                    return this.tasksViewMethod = 'list'
                } return this.tasksViewMethod = 'card'
            }
        }
    }
</script>
