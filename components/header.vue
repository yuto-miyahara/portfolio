<script setup lang="ts">
const currentRoute = useRouter().currentRoute
</script>

<template>
  <header>
    <HeaderInner>
      <component :is="currentRoute.fullPath === '/' ? 'h1' : 'div'">
        <NuxtLink to="/">
          <img src="/assets/image/logo.svg" alt="Miyaharaのポートフォリオ" title="トップページに戻る">
        </NuxtLink>
      </component>

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

a {
  display: block;
  @include transition;
  @include hover {
    box-shadow: 0 0 4px 0 $primary;
    border-radius: 4px;
  }
}

img {
  padding: 8px;
}
</style>
