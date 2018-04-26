<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>

<style lang="stylus">
  @import './stylus/colors.styl'

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>
