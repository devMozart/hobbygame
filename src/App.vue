<template>
  <div id="app">
    <DialogueView></DialogueView>
  </div>
</template>

<script>
import DialogueView from './components/dialogue-view/DialogueView.vue'
import Story from './data/story'

export default {
  name: 'App',
  components: {
    DialogueView
  },
  created() {
    console.log(Story);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>
