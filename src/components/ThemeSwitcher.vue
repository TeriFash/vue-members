<template>
    <div class="theme-switcher">

        <div class="switch">
            <label>

                <input @input="updateStatus" v-model="status" type="checkbox">
                <span class="lever"></span>

            </label>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'theme-switcher',
        props: {
            theme: {
                type: String,
                default: "default"
            },
            description: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapGetters({
                themeStatus: 'themeStatus'
            })
        },
        created() {
            this.status = this.themeStatus
        },
        methods: {
            ...mapActions({
                setTheme: 'setThemeStatus'
            }),
            updateStatus() {
                this.setTheme(!this.status)
            }
        }
    }
</script>
