<template>
  <div class="keys">
    <Button @click="setCharacter({ key: '%' })">%</Button>
    <Button
      @click="setCharacter({ key: 'CH' })"
      class="sup"
    ><span>+</span><span>/</span><span>-</span></Button>
    <Button @click="setCharacter({ key: 'C' })">C</Button>
    <Button @click="setCharacter({ key: '/' })">/</Button>
    <Button @click="setCharacter({ key: '7' })">7</Button>
    <Button @click="setCharacter({ key: '8' })">8</Button>
    <Button @click="setCharacter({ key: '9' })">9</Button>
    <Button @click="setCharacter({ key: '*' })">x</Button>
    <Button @click="setCharacter({ key: '4' })">4</Button>
    <Button @click="setCharacter({ key: '5' })">5</Button>
    <Button @click="setCharacter({ key: '6' })">6</Button>
    <Button @click="setCharacter({ key: '-' })">-</Button>
    <Button @click="setCharacter({ key: '1' })">1</Button>
    <Button @click="setCharacter({ key: '2' })">2</Button>
    <Button @click="setCharacter({ key: '3' })">3</Button>
    <Button @click="setCharacter({ key: '+' })">+</Button>
    <Button @click="setCharacter({ key: '0' })">0</Button>
    <Button @click="setCharacter({ key: ',' })">,</Button>
    <Button @click="setCharacter({ key: '=' })">=</Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

import Button from '@/components/Button.vue'

@Options({
  components: {
    Button
  },
  methods: {
    ...mapActions(['setCharacter'])
  }
})
export default class Keyboard extends Vue {}
</script>

<style scoped lang="scss">
div.keys {
  width: max-content;
  height: min-content;

  display: grid;
  grid-template-columns: repeat(4, 85px);
  grid-template-rows: repeat(5, 85px);

  > div.button {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;

    cursor: pointer;

    background: linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%);

    &:nth-of-type(4n) {
      background-image: linear-gradient(135deg, #8d52dd 0%, #9258e1 100%);

      font-size: 24px;
      color: #ffffff;
    }

    &:last-of-type {
      grid-column: span 2;

      font-size: 28px;
      color: #ffffff;
      background-image: none;
      background-color: #e62f89;
    }

    &.sup {
      > span {
        &:first-of-type {
          top: -.2em;
          position: relative;
          font-size: 90%;
        }

        &:last-of-type {
          bottom: -.2em;
          position: relative;
          font-size: 90%;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(4, 65px);
    grid-template-rows: repeat(5, 65px);
  }
}
</style>
