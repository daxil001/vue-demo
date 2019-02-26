<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'; // @ is an alias to /src
import Header from './components/Header.vue';
import './custom.scss';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}

</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
}
</style>
