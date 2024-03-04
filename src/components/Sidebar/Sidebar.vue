<script setup lang="ts">
import SidebarProfile from "./SidebarProfile.vue";

defineProps<{
  targetsList: {
    name: string
    title: string
    icon: string
    enable: boolean
    message?: string
  }[],
  target?: string
}>()

</script>

<template>

  <el-menu
    router
    :default-active="target?target:''"
    class="h-full bg-blur"
  >
    <el-scrollbar>
    <el-menu-item class="h-fit b-b-solid b-b b-#555">
      <sidebar-profile />
    </el-menu-item>

    <template v-for="target in targetsList" :key="target.name">
      <el-tooltip
          :content="target.enable ? target.title : target.message"
          placement="right"
      >
      <a :href="'#'+target.name">
      <el-menu-item :index="target.name" :disabled="!target.enable">
        <span class="material-symbols-outlined">
        {{target.icon}}
        </span>
        <template #title>{{ target.title }}</template>
      </el-menu-item>
      </a>
      </el-tooltip>
    </template>


<!--    <div class="flex-grow" />-->

<!--    <el-menu-item index="10" @click="toggleDark()">-->
<!--      <button-->
<!--        class="border-none w-full bg-transparent cursor-pointer"-->
<!--        style="height: var(&#45;&#45;el-menu-item-height)"-->
<!--      >-->
<!--        <i class="inline-flex" i="ep-moon ep-sunny" />-->
<!--      </button>-->
<!--    </el-menu-item>-->
      </el-scrollbar>
  </el-menu>
</template>

<style scoped>
</style>