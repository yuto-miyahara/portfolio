<script setup lang="ts">
defineProps({
  level: Array as PropType<string[]>,
})
</script>

<template>
  <dl>
    <div v-for="item, index in level" :key="index">
      <dt>{{ index }}</dt>
      <dd>{{ item }}</dd>
    </div>
  </dl>
</template>

<style lang="scss" scoped>
dl {
  div {
    display: flex;
  }

  dd {
    &:before {
      content: ':';
      margin-right: 0.5em;
    }
  }
}
</style>
