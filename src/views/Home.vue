<template>
  <div class="home">
    <Heading>Приглашение на свадьбу!</Heading>
    <div class="heart-container">
      <span>Ваня</span>
      <div class="heart-container__heart">
        <Heart />
      </div>
      <span>Света</span>
    </div>
    <section class="location">
      <h2>Где?</h2>
      <div class="location__container">
        <div class="location__container-half">
          <h3>Адрес лофта: Малая Семёновская 5с1, 6 этаж</h3>
          <span
            >Можно добраться от метро «Электрозаводская» или на машине (парковка
            платная)</span
          >
          <font-awesome-icon icon="map-marked-alt" />
        </div>
        <div class="location__container-half">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4284a042a048bdcec1a5ac3f1cf96115a5a68bf4eba3837f3f0be8d7e0ae785f&amp;source=constructor"
            width="320"
            height="256"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <hr />
    </section>
    <section class="time">
      <h2>Когда?</h2>
      <div class="time__container">
        <span>22 января 2022, в 19:00</span>
        <br />
        <span>Если есть желание помочь, свяжитесь с нами заранее</span>
        <div>
          <font-awesome-icon icon="calendar-minus" />
        </div>
      </div>
      <hr />
    </section>
    <section class="time">
      <h2>Дресс-код</h2>
      <div class="time__container">
        <span>Настолько красиво, насколько это возможно!</span>
        <br />
        <span>Джинсы под запретом</span>
        <div>
          <font-awesome-icon icon="mask" />
        </div>
      </div>
      <hr />
    </section>
    <section>
      <h2>Вишлист</h2>
      <Wish icon="money-bill-wave" title="Деньги!" />
      <Wish icon="camera-retro" title="Polaroid" />
      <hr />
    </section>
    <section>
      <h2>Правила</h2>
      <Rule
        icon="cannabis"
        headline="Без наркотиков"
        subline="Пожалуйста, не приносите ничего запрещённого. Будет много всего разрешённого"
        :banned="true"
      />
      <Rule
        icon="shield-virus"
        headline="Соблюдайте гигиену"
        subline="Используйте, пожалуйста, средства личной гигиены"
      />
      <Rule
        icon="glass-cheers"
        headline="Социализируйтесь!"
        subline="Постарайтесь познакомиться с незнакомыми людьми. Так всем будет веселее"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Heading from "@/components/Heading.vue";
import Heart from "@/components/Heart.vue";
import Rule from "@/components/Rule.vue";
import Wish from "@/components/Wish.vue";

@Options({
  components: {
    Heading,
    Heart,
    Rule,
    Wish,
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
@import '../styles.styl'

.home
  margin auto
  width 640px

  section
    display flex
    flex-direction column
    align-items center
    margin-top 2em

    h2
      font-size 3em

    hr
      margin-top 3em
      height 0
      width 20%
      background-color black
      border-color black
      border-radius 1px

.location .location__container
  display flex
  width 100%
  font-size 1.5em

  .location__container-half
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    flex-basis 50%
    padding 0 8px

    h3
      margin 0

    svg
      color coral
      font-size 1.5em

.time .time__container
  width 100%
  font-size 3em

  svg
    margin-top 0.5em
    color coral
    font-size 2em

  span:first-of-type
    font-size 0.9em
    font-weight 700

  span:last-of-type
    font-size 0.75em

.heart-container
  display flex
  align-items center
  justify-content center
  font-size 3em
  font-weight 400

  .heart-container__heart
    margin 0 8px
</style>
