<template>
  <h1 class="heading">
    <slot />
  </h1>
</template>

<style lang="stylus" scoped>
.heading
  font-size 5em
</style>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Heading extends Vue {}
</script>
