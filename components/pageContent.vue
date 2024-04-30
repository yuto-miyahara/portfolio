<template>
  <div class="pageContent">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.pageContent {
  display: flex;
  flex-direction: column;
  @include sp {
    gap: 32px;
    margin: 32px 0;
  }
  @include pc {
    gap: 64px;
    margin: 64px 0;
  }
}
</style>
