<template>
  <div class="background">
    <Calculator />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Calculator from '@/components/Calculator.vue'

@Options({
  components: {
    Calculator
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Lato', sans-serif;
}

div.background {
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 1fr min-content 1fr;

  grid-template-areas:
    ". . ."
    ". calculator ."
    ". . .";

  background-image: linear-gradient(115deg, #9156e2 0%, #ff9768 100%);

  > div.calculator {
    grid-area: calculator;
  }
}
</style>
