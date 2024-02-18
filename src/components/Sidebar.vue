<script setup lang="ts">
import SidebarProfile from "~/components/SidebarProfile.vue";

</script>

<template>

  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    h-f
  >
    <el-menu-item index="1" class="h-fit">
      <sidebar-profile />
    </el-menu-item>

    <el-menu-item index="2">
      <el-icon><IconMenu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>

    <el-menu-item index="3" disabled>
      <el-icon><Document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon><Setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
</style>