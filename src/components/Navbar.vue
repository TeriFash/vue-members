<template>
    <div class="naw-header">
        <nav class="app-nav purple darken-1">
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

            <ul id="slide-out" class="sidenav sidenav-main" ref="sidenav">
                <li class="title">
                    <router-link to="/" >meTask</router-link>
                </li>
                <router-link
                    tag="li"
                    to="/"
                    exact
                    active-class="active"
                    class="waves-effect"
                >
                    <a href="#">Create</a>
                </router-link>
                <router-link
                    tag="li"
                    to="/list"
                    active-class="active"
                    class="waves-effect"
                >
                    <a href="#">List</a>
                </router-link>
                <li>
                    <theme-switcher/>
                </li>
            </ul>

            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">meTask</router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link
                        tag="li"
                        to="/"
                        exact
                        active-class="active"
                    >
                        <a href="#">Create</a>
                    </router-link>
                    <router-link
                        tag="li"
                        to="/list"
                        active-class="active"
                    >
                        <a href="#">List</a>
                    </router-link>
                    <li>
                        <theme-switcher/>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import ThemeSwitcher from '@/components/ThemeSwitcher'

    export default {
        name: 'navbar',
        components: {
            ThemeSwitcher
        },
        mounted() {
            this.sidenav = M.Sidenav.init(this.$refs.sidenav)
        },
        methods: {

        }
    }
</script>
