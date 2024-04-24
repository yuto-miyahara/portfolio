<script setup lang="ts">
const pageTitle: string = 'スキル'
const description: string = `フリーランスのwebエンジニア Miyaharaの${pageTitle}です。`

useSeoMeta({
  title: pageTitle,
  description: description,
  ogDescription: description,
})

const bcParam = [
  {
    text: pageTitle,
    path: null,
  },
]
</script>

<template>
  <breadcrumb :bcParam/>

  <PageTitle>{{ pageTitle }}</PageTitle>

  <pageContent>
    <p>現在扱えるものや勉強中のものをレーダーチャートでまとめています。</p>

    <skillList/>
  </pageContent>
</template>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
