<template>
  <div class="display">
    <span class="equation">{{ equation || '' }}</span>
    <span class="result">{{ temp || '0' }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

@Options({
  computed: {
    ...mapGetters(['equation', 'temp'])
  }
})
export default class Display extends Vue {}
</script>

<style scoped lang="scss">
div.display {
  width: 340px;
  height: min-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;

  padding: 25px 20px;

  background-color: #212121;

  > span.equation {
    text-align: right;

    font-size: 18px;
    height: 18px;

    color: #ca7988;
  }

  > span.result {
    text-align: right;

    font-size: 48px;
    font-weight: 300;

    color: #ffffff;

    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 380px) {
    width: 260px;

    > span.equation {
      font-size: 15px;
    }

    > span.result {
      font-size: 36px;
    }
  }
}
</style>
