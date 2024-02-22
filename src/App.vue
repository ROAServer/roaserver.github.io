<script setup lang="ts">

import {computed, ref, Ref} from "vue";

import {Menu} from "@element-plus/icons-vue";

import sidebar from "~/components/Sidebar.vue";

import {Homo, AmongUs} from "~/components/ROA/ROA";

/**
 * 页面宽度
 */
const windowWidth = ref(document.documentElement.clientWidth)

/**
 * 主页面宽度
 */
const mainViewWidth = computed(() =>{
  let widthPx = windowWidth.value
  if (!shouldSidebarHide.value) {
    widthPx -= 200
  }
  return "width: " + widthPx + "px"
})

/**
 * 应该收起侧边栏的页面宽度
 */
const hideSidebarWidthPx: Ref<number> = ref(1000)

const shouldSidebarHide = computed(() => {
  return windowWidth.value <= hideSidebarWidthPx.value;
})

const isSidebarHide = ref(shouldSidebarHide.value)

window.onresize = () => {
  windowWidth.value = document.documentElement.clientWidth
  isSidebarHide.value = shouldSidebarHide.value
}

function triggerHideSidebar() {
  isSidebarHide.value = !isSidebarHide.value
}

</script>

<template>
  <el-image
      src="/image/ROA_NewYear.jpg"
      class="fixed h-100vh w-100vw z--1"
      fit="cover"
      title="[background image]"
  />

  <el-button
      v-show="shouldSidebarHide"
      circle
      size="large"
      type="primary"
      :icon="Menu"
      class="fixed right-8 top-8 z-2"
      @click="triggerHideSidebar"
      title="[switch sidebar]"
  />
  <el-backtop :right="50" :bottom="50" />


  <transition appear name="slide-in-left">
  <sidebar
      v-show="(!shouldSidebarHide || !isSidebarHide)"
      :window-width="windowWidth"
      class="fixed z-2 h-100vh w-200px"
  />
  </transition>

  <transition appear name="el-fade-in-linear">
    <div
        v-show="shouldSidebarHide && !isSidebarHide"
        class="fixed z-1 w-100vw h-100vh"
        style="background: #fffa"
        @click="triggerHideSidebar"
    />
  </transition>

  <el-container class="box-border">
    <div v-if="!shouldSidebarHide" class="w-200px h-100vh" />

    <el-container
        direction="vertical"
        class="w-f ani_slide_from_left"
        :style="mainViewWidth"
    >
      <div class=" h-100vh mx-a content-center">
        <homo
            :window-width="windowWidth"
            @get-title-width="(titleWidth: number) => {
              hideSidebarWidthPx = titleWidth + 200
            }"
        />
      </div>

      <among-us />
    </el-container>
  </el-container>
</template>

<style>
body {
  background: transparent;
}
</style>

<style scoped>
</style>
