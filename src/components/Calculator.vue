<template>
  <div class="calculator">
    <Display />
    <Keyboard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

import Display from '@/components/Display.vue'
import Button from '@/components/Button.vue'
import Keyboard from '@/components/Keyboard.vue'

@Options({
  components: {
    Button,
    Display,
    Keyboard
  },
  methods: {
    ...mapActions(['setCharacter'])
  }
})
export default class Calculator extends Vue {
}
</script>

<style scoped lang="scss">
div.calculator {
  width: min-content;
  height: min-content;

  overflow: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

  border-radius: 6px;
}
</style>
