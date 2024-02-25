<script setup lang="ts">

import {computed, ref, Ref} from "vue";

import {Menu} from "@element-plus/icons-vue";

import sidebar from "~/components/Sidebar.vue";

import {Homo, AmongUs, SubService} from "~/components/ROA/ROA";

/**
 * 页面宽度
 */
const windowWidth = ref(document.documentElement.clientWidth)

/**
 * 页面高度
 */
const  windowHeight = ref(document.documentElement.clientHeight)

/**
 * 应该收起侧边栏的页面宽度
 */
const hideSidebarWidthPx: Ref<number> = ref(1000)

const isSidebarHide = ref(true)

const shouldSidebarHide = computed(() => {
  if (windowWidth.value <= hideSidebarWidthPx.value) {
    isSidebarHide.value = true
    return true
  } else {
    isSidebarHide.value = false
    return false
  }
})


window.onresize = () => {
  windowWidth.value = document.documentElement.clientWidth
  windowHeight.value = document.documentElement.clientHeight
  isSidebarHide.value = shouldSidebarHide.value
}

function triggerHideSidebar() {
  isSidebarHide.value = !isSidebarHide.value
}

</script>

<template>
  <transition appear name="el-fade-in">
  <el-image
      src="/image/ROA_NewYear.jpg"
      class="fixed h-100vh w-100vw z--1"
      fit="cover"
      title="[background image]"
  />
  </transition>

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

  <transition appear name="slide-in-left">
  <sidebar
      v-show="(!shouldSidebarHide || !isSidebarHide)"
      :window-width="windowWidth"
      class="fixed z-2 h-100vh w-200px"
  />
  </transition>

  <transition appear name="el-fade-in">
  <div
      v-show="shouldSidebarHide && !isSidebarHide"
      class="fixed z-1 w-100vw h-100vh bg-blur"
      @click="triggerHideSidebar"
  /></transition>

  <div
      class="ani_slide_from_left w-full h-100vh of-y-scroll scroll-smooth"
  >

    <homo
        id="home"
        :window-width="windowWidth"
        @get-title-width="(titleWidth: number) => {
          hideSidebarWidthPx = titleWidth + 400
        }"
    />

    <among-us
        id="about-us"
    />

    <sub-service
      id="sub-servers"
    />
  </div>
</template>

<style>
body {
  background: transparent;
}
</style>

<style scoped>
</style>
