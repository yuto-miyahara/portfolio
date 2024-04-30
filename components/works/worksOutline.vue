<script setup lang="ts">
defineProps({
  data: Object,
})
</script>

<template>
  <div class="outline">
    <template v-for="value, key in data" :key="key">
      <div class="outline__block" v-if="value">
        <p class="outline__head">{{ key }}</p>
        <p class="outline__body">
          <NuxtLink :to="value" target="_blank" v-if="value.startsWith('http')">{{ value }}</NuxtLink>
          <template v-else>{{ value }}</template>
        </p>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.outline {
  &__block {
    display: flex;
    gap: 1em;
  }

  &__head {
    width: 4em;
    font-weight: bold;
    text-align: left;
  }
}
</style>
