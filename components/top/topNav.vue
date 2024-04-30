<template>
  <div class="topNav">
    <NuxtLink to="/profile">
      <h2>プロフィール</h2>
    </NuxtLink>

    <NuxtLink to="/skill">
      <h2>スキル</h2>
    </NuxtLink>

    <NuxtLink to="/works">
      <h2>制作事例</h2>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.topNav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  list-style: none;
  @include sp {
    grid-template-columns: repeat(1, 1fr);
  }
  @include pc {
    margin: 0 64px;
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

h2 {
  font-size: 1em;
}
</style>
