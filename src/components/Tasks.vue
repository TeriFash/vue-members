<template>
    <div>
        <transition
            name="fade"
            mode="out-in"
        >
            <div v-if="items.length > 0 && viewType === 'card'">
                <div class="col s12 m6 l4" v-for="(item, i) in items">

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
            </div>
            <template v-if="items.length > 0 && viewType === 'list'">
                <table class="striped responsive-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody >
                    <tr v-for="(item, i) in items" :key="i">
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.date || 'No date'}}</td>
                        <td>{{ item.description }}</td>
                        <router-link
                            :to="'/task/' + item.id"
                            tag="td"
                            exact
                            active-class="active"
                            href="#"
                            title="Tap to open"
                        >
                            <i class="material-icons align-center"
                               :class="item.status ? 'is-active' : 'is-done'">
                                {{ item.status ? 'history' : 'check_circle' }}
                            </i>
                        </router-link>
                    </tr>
                    </tbody>
                </table>
            </template>
        </transition>
        <not-found v-if="!items.length" />
    </div>
</template>

<script>
    import NotFound from '@/components/NotFound'

    export default {
        name: 'tasks',
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
            viewType: {
                type: String,
                default: 'card'
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
