<template>
  <div id="app" class="app-body" :dark-theme="status">
    <navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Navbar
    },
    computed: {
      ...mapGetters({
        status: 'themeStatus'
      }),
    }
  }
</script>

<style lang="scss">
  body {}
</style>
