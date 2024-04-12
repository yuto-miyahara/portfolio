<template>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</template>

<style lang="scss">
main {
  width: 100%;
  height: 0;
  min-height: calc(100svh - $header-height - $footer-height);
  max-width: $content-width;
  margin: auto;
  @include sp {
    padding: 16px;
  }
  @include pc {
    padding: 32px;
  }
}
</style>
