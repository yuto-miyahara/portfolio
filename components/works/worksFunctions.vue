<script setup lang="ts">
defineProps({
  data: Object,
})
</script>

<template>
  <ul>
    <li v-for="item, index in data" :key="index">
      {{ item.text }}

      <WorksFunctions :data="item.child" v-if="item.child"/>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding-left: 1.5em;
}
</style>
