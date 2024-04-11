<template>
  <div>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: $content-width;
  @include sp {
    padding-left: 20px;
    padding-right: 20px;
  }
  @include pc {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
