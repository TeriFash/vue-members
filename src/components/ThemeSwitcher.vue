<template>
    <div class="theme-switcher">

        <div class="switch">
            <label>

                <input @input="updateStatus" v-model="activeTheme" type="checkbox">
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
                status: 'themeStatus'
            })
        },
        data() {
            return {
                activeTheme: null
            };
        },
        mounted() {
            this.activeTheme = this.status
            this.updateStatus()
            console.log('----', this.activeTheme)
        },
        updated(){
            this.activeTheme = this.status
        },
        methods: {
            ...mapActions({
                setTheme: 'setThemeStatus'
            }),
            updateStatus() {
                if (typeof(this.status) === "undefined") {
                    return this.setTheme(false)
                } else {
                    this.setTheme(!this.activeTheme)
                }
            }
        }
    }
</script>
