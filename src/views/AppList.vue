<template>
    <div class="row">
        <div class="col s12">
            <h3>List</h3>
            <hr>
        </div>
        <div v-if="tasks.length > 0" class="col s4" v-for="(task, i) in tasks">
            <div class="card" :key="i">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="../assets/images/1.jpg">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><i class="material-icons left" :class="status ? 'is-active' : 'is-done'">{{ status ? 'history' : 'check_circle' }}</i>{{task.title}}<i
                        class="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{{task.title}}<i class="material-icons right">close</i></span>
                    <p>{{task.description}}</p>
                </div>
            </div>
        </div>
        <not-found v-else />
    </div>
</template>

<script>
    import NotFound from '@/components/NotFound'

    export default {
        name: 'app-list',
        components: {
            NotFound
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
