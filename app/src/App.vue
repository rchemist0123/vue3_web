<template>
  <v-app>
    <v-main>
      <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link> |
        <router-link to="/test">Test</router-link> |
        <router-link to="/login">Login</router-link>

      </nav>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4f5cf1;
    }
  }
}
</style>