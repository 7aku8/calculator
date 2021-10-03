<template>
  <div class="display">
    <span class="equation">10 + 20 + 30</span>
    <span class="result">40</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Display extends Vue {}
</script>

<style scoped lang="scss">
div.display {
  width: 100%;
  height: min-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

  padding: 20px;

  background-color: #212121;

  > span.equation {
    text-align: right;

    color: #ca7988;
  }

  > span.result {
    text-align: right;

    color: #ffffff;
  }
}
</style>
