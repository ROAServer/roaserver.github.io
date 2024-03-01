<script setup lang="ts">
import Markdown from "./Markdown.vue";

</script>

<template>
<div
  class="min-w-300px w-70% max-w-1000px mx-a my-5 p-10 b-rounded-10 b-solid b-1 b-#555 bg-blur"
>
  <el-text
      type="primary"
      tag="h1"
      class="px-3 w-fit mb-4 bottom-line"
  >
    最近动态
  </el-text>

  <div>
    <markdown href="https://roa.ruogustudio.net/docs/latest" />
  </div>
</div>
</template>

<style scoped>
.bottom-line {
  border-bottom: var(--el-color-primary) solid 3px;
}

h1 {
  font-size: xx-large;
}
</style>