<template>
  <header>
    <HeaderInner>
      <NuxtLink to="/">
        <img src="/public/favicon.ico" alt="Logo" title="Logo">
      </NuxtLink>

      <HeaderNav/>
    </HeaderInner>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $header-height;
  background-color: $bg-layout;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
</style>
