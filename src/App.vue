<template>
  <div class="page">
    <Header />
    <div class="main-body"> 
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
}

.main-body {
  width: 80%;
  margin: 0 auto;
}
</style>
