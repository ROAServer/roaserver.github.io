<script setup lang="ts">
import SidebarProfile from "~/components/SidebarProfile.vue";

</script>

<template>

  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo h-full"
  >
    <el-menu-item class="h-fit">
      <sidebar-profile />
    </el-menu-item>

<!--    <el-link href="#home" class="w-full">-->
    <a href="#home">
    <el-menu-item index="1" class="w-full">
      <el-icon><House /></el-icon>
      <template #title>主页</template>
    </el-menu-item>
    </a>
<!--    </el-link>-->

    <el-menu-item index="2">
      <el-icon><User /></el-icon>
      <template #title>关于我们</template>
    </el-menu-item>

    <el-menu-item index="3">
      <el-icon><Clock /></el-icon>
      <template #title>历史</template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon><Picture /></el-icon>
      <template #title>精彩截图</template>
    </el-menu-item>

    <el-tooltip content="计划中(s∞n)" placement="right">
    <el-menu-item index="5" disabled>
      <el-icon><Location /></el-icon>
      <template #title>在线地图</template>
    </el-menu-item>
    </el-tooltip>

    <el-menu-item index="6">
      <el-icon><Download /></el-icon>
      <template #title>资源下载</template>
    </el-menu-item>

    <el-menu-item index="7">
      <el-icon><Star /></el-icon>
      <template #title>友情链接</template>
    </el-menu-item>

    <el-menu-item index="8">
      <el-icon><Present /></el-icon>
      <template #title>捐助服务器</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
</style>