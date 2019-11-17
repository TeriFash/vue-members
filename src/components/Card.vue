<template>
    <div>
        <div v-if="items.length > 0" class="col s4" v-for="(item, i) in items">
            <div class="card" :key="i">
                <div class="card-image waves-effect waves-block waves-light"
                     :style="{ backgroundImage: `url(${require(`@/assets/images/${randomIntName()}.jpg`)})` }">
                </div>
                <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            <i class="material-icons left"
                               :class="item.status ? 'is-active' : 'is-done'">
                                {{ item.status ? 'history' : 'check_circle' }}
                            </i>
                            {{item.title}}
                            <i class="material-icons right">more_vert</i>
                        </span>
                    <p>


                        <router-link
                            :to="'/task/' + item.id"
                            tag="a"
                            exact
                            active-class="active"
                            href="#"
                        >
                            Open full
                        </router-link>
                    </p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{{item.title}}<i
                        class="material-icons right">close</i></span>
                    <p>{{item.description}}</p>
                </div>
            </div>
        </div>
        <not-found v-else/>
    </div>
</template>

<script>
    import NotFound from '@/components/NotFound'

    export default {
        name: 'card',
        components: {
            NotFound
        },
        props: {
            items: {
                type: Array,
                default() {
                    return []
                }
            },
        },
        data() {
            return {};
        },
        updated() {

        },
        methods: {
            randomIntName(min = 1, max = 5) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        }
    }
</script>
