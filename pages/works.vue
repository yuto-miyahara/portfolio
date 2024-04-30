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
    <p>これまでに作成してきたサイトの情報をまとめています。<br>他にも既存サイトのページ追加や改修業務、WordPressの機能追加・エラー修正などの業務も経験していますが、<br class="hide-sp">サイト全体を単独でコーディングした事例のみに絞りました。</p>

    <WorksList/>
  </pageContent>
</template>

<style lang="scss" scoped>
</style>
