<template>
  <div>
    <NuxtLink to="/profile">プロフィール</NuxtLink>
    <NuxtLink to="/skill">スキル</NuxtLink>
    <NuxtLink to="/works">制作事例</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  list-style: none;
  @include sp {
    grid-template-columns: repeat(1, 1fr);
  }
}

a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $white;
  text-decoration: none;
  padding: 1em;
  border: 1px solid $primary;
  border-radius: 1em;
  @include transition;
  @include hover {
    box-shadow: inset 0 0 1em 0 $primary;
  }
}
</style>
