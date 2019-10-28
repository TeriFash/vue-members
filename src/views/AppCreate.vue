<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h3>Create</h3>
      <form @submit.prevent="onSubmitHendler">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required" data-success="right"></span>
          <!--<span class="character-counter">{{ title.length }}/20</span>-->
        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea" data-length="2043"></textarea>
          <label for="description">Description</label>
          <span class="character-counter">{{ description.length }}/2040</span>
        </div>
        <input type="text" ref="datepicker">
        <div class="left-align">
          <button class="btn purple darken-1" type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-create',
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null,
    listTask: []
  }),
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags'
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods: {
    onSubmitHendler() {
      const model = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        status: 'active',
        tags: this.chips.chipsData,
        data: this.date.data
      }
      this.$store.dispatch('createTask', model)
      this.$router.push('/list')
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
