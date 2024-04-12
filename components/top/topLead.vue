<template>
  <section>
    <h2>このサイトについて</h2>

    <div class="">
      <p>このサイトはwebエンジニアのY.Mのポートフォリオサイトです。</p>
      <p>できることや作れるものを分かりやすく伝える目的で、スキルや過去の制作物をまとめています。</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-bottom: 1em;
  @include pc {
    font-size: 2em;
  }
}

p {
  text-align: center;
  &:not(:first-child) {
    margin-top: 0.5em;
  }
}
</style>
