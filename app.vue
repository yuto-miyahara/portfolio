<script setup lang="ts">
const siteName: string = 'Miyaharaのポートフォリオ'

useSeoMeta({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} | ${siteName}`
      : `${siteName}`
  },
  ogImage: 'https://placehold.jp/1200x630.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
//////////////////////////////
// Style Reset
//////////////////////////////
*,
*:before,
*:after {
  box-sizing: border-box;
  padding: unset;
  margin: unset;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

input,
textarea,
select,
button {
  font-family: inherit;
  font-size: inherit;
}



//////////////////////////////
// Base Style
//////////////////////////////
body {
  color: $white;
  font-family: sans-serif;
  background: $black;
}

img,
picture {
  max-width: 100%;
  display: block;
}

a {
  color: $primary;
}
</style>
