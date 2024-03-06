<script setup lang="ts">
import Markdown from "./Markdown.vue";

</script>

<template>
<div class="section_div">
  <el-text
      type="primary"
      tag="h1"
      class="px-3 w-fit mb-4 bottom-line"
  >
    最近动态
  </el-text>

  <el-tooltip
      content="暂不开放"
      class="mb"
      placement="right"
  >
  <a href="/news">
    <el-button
      disabled
      type="primary"
    >
      全部动态
    </el-button>
  </a>
  </el-tooltip>

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