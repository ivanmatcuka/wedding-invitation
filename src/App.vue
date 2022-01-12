<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap')
@import 'styles.styl';

body
  background-color parchment

#app
  font-family 'Amatic SC', cursive;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color black
  margin-top 60px
</style>
