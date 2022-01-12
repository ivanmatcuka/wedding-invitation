<template>
  <div class="rule">
    <div class="rule__icon" v-bind:class="{ rule__icon__banned: banned }">
      <font-awesome-icon :icon="icon" />
    </div>
    <div class="rule__headline">{{ headline }}</div>
    <div class="rule__subline">{{ subline }}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { FaIcon } from "@/types";

export default class Rule extends Vue {
  @Prop() icon!: FaIcon;
  @Prop() headline!: string;
  @Prop() subline!: string;
  @Prop() banned = false;
}
</script>

<style lang="stylus" scoped>
@import '../styles.styl'

.rule
  margin-bottom 2em
  font-weight 700

  .rule__icon
    color green
    font-size 2em

  .rule__headline
    font-size 2em

  .rule__subline
    font-size 1.5em
    font-weight 400

  .rule__icon__banned
    color coral
</style>
