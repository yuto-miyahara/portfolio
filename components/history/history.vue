<script setup lang="ts">
import data from "~/assets/data/history.json";
</script>

<template>
  <section class="history">
    <h2 class="history__head">略歴</h2>

    <div class="history__body">
      <historyBlock v-for="block, index in data" :key="index" :head="block.head" :body="block.body"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.history {
  &__head {
    text-align: center;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1em;
    @include sp {
      margin-top: 16px;
    }
    @include pc {
      margin-top: 32px;
    }
  }
}
</style>
