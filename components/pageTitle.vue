<template>
  <h1><slot/></h1>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  @include sp {
    font-size: 1.5em;
  }
  @include pc {
    font-size: 2em;
  }
}
</style>
