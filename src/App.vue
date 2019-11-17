<template>
    <div id="app" class="app-body" :dark-theme="status">
        <navbar/>
        <div class="container">
            <transition
                :name="transitionName"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter"
            >
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import {mapGetters} from 'vuex'

    const DEFAULT_TRANSITION = 'fade';

    export default {
        data() {
            return {
                prevHeight: 0,
                transitionName: DEFAULT_TRANSITION
            };
        },
        components: {
            Navbar
        },
        computed: {
            ...mapGetters({
                status: 'themeStatus'
            }),
        },
        created() {
            this.$router.beforeEach((to, from, next) => {
                let transitionName = to.meta.transitionName || from.meta.transitionName;

                if (transitionName === 'slide') {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                }

                this.transitionName = transitionName || DEFAULT_TRANSITION;

                next();
            });
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const {height} = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        },
    }
</script>

<style lang="scss">
    body {
    }
</style>
