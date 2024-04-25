<script setup lang="ts">
const currentRoute = useRouter().currentRoute
</script>

<template>
  <header>
    <HeaderInner>
      <component :is="currentRoute.fullPath === '/' ? 'h1' : 'div'">
        <NuxtLink to="/">
          <img src="/public/logo.svg" alt="Miyaharaのポートフォリオ" title="トップページに戻る">
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
</style>
