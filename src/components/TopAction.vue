<template>
    <div class="top-action" :class="{'row-reverse': reverse}">
        <div
            v-if="leftCol || $slots.leftCol"
            class="left"
            @click="$emit('leftCol')"
        >
            <slot name="left-col">
                <template v-if="leftCol">
                    {{ typeof(leftCol) != 'boolean' ? leftCol : '' }}
                </template>
            </slot>
            <h3 v-if="title">
                {{ title }}
            </h3>
            <!--<a
                v-if="back"
                href="#"
                aria-label="back"
                @click.prevent="$router.back()"
            > <i class="material-icons">arrow_back</i></a>-->
            <router-link
                v-if="back"
                :to="{path: $router.back}"
                tag="a"
                exact
                href="#"
                :class="{ disabled: disabledLeft }"
            >
                <i class="material-icons">{{ backIcon }}</i>
            </router-link>
        </div>
        <slot/>
        <div
            v-if="rightCol || $slots.rightCol"
            class="right"
            @click="$emit('rightCol')"
        >
            <slot name="right-col">
                <template v-if="rightCol">
                    {{ typeof(rightCol) != 'boolean' ? rightCol : '' }}
                </template>
            </slot>
            <template v-if="toggleAction">
                <a class="btn-floating" @click="$emit('toggler')" :class="{ disabled: disabledRight }">
                    <i class="material-icons">{{ togglerIconCompute }}</i>
                </a>

            </template>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'top-action',
        props: {
            title: {
                type: String,
                default: ""
            },
            reverse: {
                type: Boolean,
                default: false
            },
            disabledLeft: {
                type: Boolean,
                default: false
            },
            disabledRight: {
                type: Boolean,
                default: false
            },
            back: {
                type: [String, Boolean],
                default: false
            },
            backIcon: {
                type: String,
                default: 'arrow_back'
            },
            toggleAction: {
                type: Boolean,
                default: true
            },
            togglerIcon: {
                type: [String, Array, Boolean],
                default: () => ({})
            },
            togglerType: {
                type: String,
                default: ''
            },
            leftCol: {
                type: [String, Object, Boolean],
                default: () => (true)
            },
            rightCol: {
                type: [String, Object, Boolean],
                default: () => (true)
            }
        },
        created() {
            console.log('---12', typeof(this.leftCol))
        },
        computed: {
            ...mapGetters({
                status: 'themeStatus'
            }),
            togglerIconCompute() {
                let retVal = "";

                switch (this.togglerType)
                {
                    case 'card':
                        retVal = this.togglerIcon[0] || this.togglerIcon;
                        break;

                    case 'list':
                        retVal = this.togglerIcon[1] || this.togglerIcon;
                        break;
                }

                return retVal;
            }
        },
        data() {
            return {

            };
        },
        mounted() {
            // this.activeTheme = this.status
            // this.updateStatus()
            // console.log('----', this.activeTheme)
        },
        updated(){
            //this.activeTheme = this.status
        },
        methods: {
            // ...mapActions({
            //     setTheme: 'setThemeStatus'
            // }),
            // updateStatus() {
            //     if (typeof(this.status) === "undefined") {
            //         return this.setTheme(false)
            //     } else {
            //         this.setTheme(!this.activeTheme)
            //     }
            // }
        }
    }
</script>
