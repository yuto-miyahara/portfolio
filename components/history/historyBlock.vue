<script setup lang="ts">
defineProps({
  head: String,
  body: String,
})
</script>

<template>
  <section>
    <h3 class="historyBlock__head">{{ head }}</h3>

    <div class="historyBlock__body" v-html="body"></div>
  </section>
</template>

<style lang="scss" scoped>
h3 {
  font-weight: bold;
  @include pc {
    font-size: 1.25em;
  }
}
</style>
