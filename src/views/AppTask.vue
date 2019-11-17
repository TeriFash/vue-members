<template>
    <div class="row overflow-visible">
        <div class="left-align top-action margin-top-2">
            <a
                href="#"
                aria-label="back"
                @click.prevent="$router.back()"
            > <i class="material-icons">arrow_back</i></a>
        </div>
        <div class="card-task small" v-if="task">
            <form @submit.prevent="onSubmitHendler">
                <div class="input-field input-title">
                    <input v-model="title" id="title" type="text">
                    <!--<span class="character-counter">{{ title.length }}/20</span>-->
                </div>

                <div class="chips" ref="chips"></div>

                <div class="input-field">
                    <textarea v-model="description" class="materialize-textarea" data-length="2043"></textarea>
                </div>
                <input type="text" ref="datepicker">
                <div class="left-align">
                    <button class="btn btn-main purple darken-1" type="submit">Save</button>
                </div>
            </form>
        </div>

        <not-found v-else/>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import NotFound from '@/components/NotFound'

    export default {
        name: 'app-task',
        components: {
            NotFound
        },
        data: () => ({
            description: '',
            title: '',
            chips: null,
            date: null,
            listTask: []
        }),
        computed: {
            ...mapGetters({
                taskById: 'taskById'
            }),
            task() {
                return this.taskById(+this.$route.params.id)
            }
        },
        created() {

        },
        mounted() {
            this.title = this.task.title
            this.description = this.task.description

            this.chips = M.Chips.init(this.$refs.chips, {
                placeholder: 'Task tags',
                data: this.task.tags
            })
            this.date = M.Datepicker.init(this.$refs.datepicker, {
                format: 'dd.mm.yyyy',
                defaultDate: new Date(),
                setDefaultDate: true
            })
            this.date.modalEl.classList.add('datepicker-modal-main')
        },
        methods: {
            ...mapActions({
                createTask: 'createTask'
            }),
            onSubmitHendler() {
                this.createTask(model)
            }
        },
        destroyed() {
            if (this.date && this.date.destroy) {
                this.date.destroy()
            }

            if (this.chips && this.chips.destroy) {
                this.chips.destroy()
            }
        }
    }
</script>
