<template>
  <div class="button">
    <button class="red-button" />
    <span>
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Button extends Vue {}
</script>

<style scoped lang="scss">
div.button {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all .25s ease-in-out;
  cursor: pointer;

  background-image: linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%);

  > button.red-button {
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 40px;
    transition: all .25s ease-in-out;
    clip-path: circle(0 at 0 75%);
    background-color: #e37d91;
  }
  &:hover {
    > button {
      clip-path: circle(150% at 0 85%);
    }
    > span {
      color: #fff;
      font-weight: 550;
    }
  }

  > button {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    border: 0;
    outline: 0;
  }

  > span {
    z-index: 2;
    position: absolute;
    width: max-content;
    height: min-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;

    font-size: 18px;
    font-weight: 350;
    color: #2b2b2b;
  }
}
</style>
