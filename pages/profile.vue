<script setup lang="ts">
const pageTitle: string = 'プロフィール'

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
    <p>フリーランスのwebエンジニア。秋田県出身、宮城県仙台市在住。大学在学中の授業でプログラミングに触れたことがきっかけでIT技術に興味を持ち、大学を中退してweb制作会社にHTMLコーダーのアルバイトとして入社。フロントエンドエンジニアとして従事した後、フリーランスとして独立。web制作業務を継続しつつ、web開発についても勉強中。</p>

    <History/>
  </pageContent>
</template>

<style lang="scss" scoped>
</style>
