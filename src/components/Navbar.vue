<template>
  <nav class="purple darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Top Tasker</router-link>
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
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
}
</script>
