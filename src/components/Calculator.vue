<template>
  <div class="calculator">
    <Display />

    <div class="keys">
      <button>%</button>
      <button class="sup"><span>+</span><span>/</span><span>-</span></button>
      <button>C</button>
      <button>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>0</button>
      <button>,</button>
      <button>=</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Display from '@/components/Display.vue'

@Options({
  components: { Display }
})
export default class Calculator extends Vue {}
</script>

<style scoped lang="scss">
div.calculator {
  width: min-content;
  height: min-content;

  max-width: 90vw;
  max-height: 90vh;

  overflow: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

  border-radius: 6px;

  > div.keys {
    width: max-content;
    height: min-content;

    display: grid;
    grid-template-columns: repeat(4, 85px);
    grid-template-rows: repeat(5, 85px);

    > button {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      outline: none;

      font-size: 18px;
      font-weight: 350;
      color: #2b2b2b;

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
  }
}
</style>
