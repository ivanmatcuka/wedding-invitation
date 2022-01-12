<template>
  <div class="wish">
    <div class="wish__icon">
      <font-awesome-icon :icon="icon" />
    </div>
    <div class="wish__title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { FaIcon } from "@/types";

export default class Wish extends Vue {
  @Prop() icon!: FaIcon;
  @Prop() title!: string;
}
</script>

<style lang="stylus" scoped>
@import '../styles.styl'

.wish
  display flex
  align-items center
  margin-bottom 2em
  font-weight 700

  .wish__icon
    margin-right 0.5em
    color green
    font-size 1.5em

  .wish__title
    font-size 2em

  &:last-of-type
    margin-bottom: 0
</style>
