<template>
  <div class="topContainer">
    <topLead/>

    <TopNav/>
  </div>
</template>

<style lang="scss" scoped>
.topContainer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  height: 100%;
  min-height: calc(100svh - $header-height - $footer-height - 32px - 64px);
}
</style>
