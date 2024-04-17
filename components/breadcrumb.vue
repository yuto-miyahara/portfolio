<script setup lang="ts">
defineProps({
  bcParam: Array as () => {
    text: string,
    path: string | null,
  }[],
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">トップページ</NuxtLink>
      </li>

      <template v-for="item, index in bcParam">
        <li v-if="item.text">
          <span v-if="!item.path || index === (bcParam?.length ?? 0) - 1">{{ item.text }}</span>
          <NuxtLink :to="item.path" v-else>{{ item.text }}</NuxtLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  margin-bottom: 1em;
}

ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  list-style: none;
}

li {
  &:not(:first-child) {
    &::before {
      content: '>';
      margin-right: 0.5em;
    }
  }
}
</style>
