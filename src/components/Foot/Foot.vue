<script setup lang="ts">
</script>

<template>
<div class="h-100px bg-blur b-t b-t-#555 b-t-solid p-4">
  <el-text type="info" tag="p">
    © Copyright
    <a href="https://ruogustudio.com/" target="_blank" class="font-bold">
      RuoguStudio
    </a>
  </el-text>

  <el-text type="info" tag="p" class="mt-2">
    Made by
    <img src="https://avatars.githubusercontent.com/u/152780231" alt="[猫]" class="w-24px" />
    with
    <el-text size="large">🍥</el-text>
  </el-text>

  <el-text type="info" tag="p" class="mt-2">
    Designed via
    <a href="https://cn.vitejs.dev/" target="_blank" class="font-bold italic">
      Vite
    </a>
    |
    <a href="https://cn.vuejs.org/" target="_blank" class="font-bold italic">
      Vue.js
    </a>
    |
    <a href="https://element-plus.org/zh-CN/" target="_blank" class="font-bold italic">
      Element-Plus
    </a>
  </el-text>
  <el-text type="info" tag="p" class="mt-2 indent-2em">
  </el-text>
</div>
</template>

<style scoped>
a:hover {
  color: var(--el-color-primary);
  border-bottom: 2px dotted var(--el-color-primary);
}

</style>