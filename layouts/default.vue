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
  min-height: calc(100svh - $header-height - $footer-height);
  max-width: $content-width;
  padding: 32px;
  margin: auto;
}
</style>
