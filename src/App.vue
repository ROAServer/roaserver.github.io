<script setup lang="ts">
import {computed, ref, Ref} from "vue";

import {Menu} from "@element-plus/icons-vue";

import {Sidebar} from "~/components/Sidebar/Sidebar";
import {Homo, AmongUs, SubService, News, HiStory, Gallery, Friend, Donate} from "~/components/ROA/ROA";
import {Foot} from "~/components/Foot/Foot";

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

const sidebarList = [
  {
    name: 'home',
    icon: 'home',
    title: '主页',
    enable: true
  },
  {
    name: 'about-us',
    icon: 'person',
    title: '关于我们',
    enable: true
  },
  {
    name: 'news',
    icon: 'news',
    title: '最近动态',
    enable: true
  },
  {
    name: 'history',
    icon: 'history',
    title: '历史发展',
    enable: true
  },
  {
    name: 'gallery',
    icon: 'image',
    title: '精彩截图',
    enable: true
  },
  {
    name: 'map',
    icon: 'map',
    title: '在线地图',
    enable: false,
    message: "计划中(s∞n)"
  },
  // {
  //   name: 'download',
  //   icon: 'download',
  //   title: '资源下载',
  //   enable: true
  // },
  {
    name: 'friend',
    icon: 'star',
    title: '友情链接',
    enable: true
  },
  {
    name: 'donate',
    icon: 'volunteer_activism',
    title: '捐助我们',
    enable: true
  }
]

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
      src="https://s11.ax1x.com/2022/04/14/LQlX4S.png"
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
      :targets-list="sidebarList"
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

    <news
      id="news"
    />

    <hi-story
        id="history"
    />

    <gallery
      id="gallery"
    />

    <friend
      id="friend"
    />

    <donate
      id="donate"
    />

    <foot
      :class="shouldSidebarHide ? '' : 'ml-200px'"
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
