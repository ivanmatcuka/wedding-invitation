<template>
  <div class="heart"><HeartSVG /></div>
</template>

<style lang="stylus" scoped>
.heart
  color coral

  svg
    height 48px
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeartSVG from "@/assets/heart.svg";

@Options({
  components: {
    HeartSVG,
  },
})
export default class Heart extends Vue {}
</script>
