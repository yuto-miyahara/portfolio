<script setup lang="ts">
const pageTitle: string = '制作事例'
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
    <p>これまでに作成してきたサイトの情報をまとめています。</p>

    <WorksList/>
  </pageContent>
</template>

<style lang="scss" scoped>
</style>
