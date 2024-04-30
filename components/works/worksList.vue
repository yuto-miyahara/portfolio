<script setup lang="ts">
import data from "~/assets/data/works.json";
</script>

<template>
  <section class="site-block" v-for="site, index in data" :key="index">
    <h3>{{ site.name }}</h3>

    <div class="site-info">
      <WorksOutline :data="site.outline" v-if="site.outline"/>

      <section v-if="site.description">
        <h4>サイト概要</h4>

        <div class="description">
          <p v-for="text in site.description">{{ text }}</p>
        </div>
      </section>

      <section v-if="site.functions">
        <h4>機能概要</h4>

        <WorksFunctions :data="site.functions" v-if="site.functions"/>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.site-block {
  background: $bg-layout;
  padding: 32px;
  border: 1px solid $primary;
}

h3 {
  margin-bottom: 32px;
}

.site-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
