<script setup lang="ts">
import {computed, ref, Ref} from "vue";

import {Menu} from "@element-plus/icons-vue";

import {Sidebar, SidebarProps} from "~/components/Sidebar/Sidebar";
import {Home, AmongUs, SubService, News, History, Gallery, ServerStatus, Friend, Donate} from "~/components/ROA/ROA";
import {Foot} from "~/components/Foot/Foot";

/**
 * 页面宽度
 */
const windowWidth = ref(document.documentElement.clientWidth)

/**
 * 页面高度
 */
const  windowHeight = ref(document.documentElement.clientHeight)

const isSidebarHide = ref(true)

const shouldSidebarHide = computed(() => {
  if (windowWidth.value * 0.15 <= 200) {
    isSidebarHide.value = true
    return true
  } else {
    isSidebarHide.value = false
    return false
  }
})

const sidebarList: SidebarProps = [
  {
    name: 'home',
    icon: 'home',
    title: '主页',
  },
  {
    name: 'about-us',
    icon: 'person',
    title: '关于我们',
  },
  {
    name: 'news',
    icon: 'news',
    title: '最近动态',
  },
  {
    name: 'history',
    icon: 'history',
    title: '历史发展',
  },
  {
    name: 'gallery',
    icon: 'image',
    title: '精彩图片',
  },
  {
    name: 'server-status',
    icon: 'dns',
    title: '设备状态',
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
  // },
  {
    name: 'friend',
    icon: 'star',
    title: '友情链接',
  },
  {
    name: 'donate',
    icon: 'volunteer_activism',
    title: '捐助我们',
  }
]

const sidebar_target: Ref<string> = ref(sidebarList[0].name)

const main_div: Ref<HTMLElement | null> = ref(null)

let last_scroll_query_time = 0
const scroll_query_delay = 100

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
      src="https://pic.imgdb.cn/item/65e983339f345e8d03f20ff9.png"
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
      :target="sidebar_target"
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
  />
  </transition>

  <div
      ref="main_div"
      class="ani_slide_from_left w-full h-100vh of-y-scroll scroll-smooth"
      @scroll="()=>{
        if (Date.now() - last_scroll_query_time < scroll_query_delay) {
          return
        } else {
          last_scroll_query_time = Date.now()
        }

        const self = main_div as HTMLElement
        const TargetList = sidebarList.map(item => item.name)
        let target: Element | null = null

        self.querySelectorAll('*').forEach(item => {
          if (!TargetList.includes(item.id)) {
            return
          }
          if (item.id === 'home') {
            if (item.getBoundingClientRect().top <= 0 && item.children[0].getBoundingClientRect().top >= 0) {
              if (!target || target.getBoundingClientRect().top > item.children[0].getBoundingClientRect().top) {
                target = item
                console.log(item.id)
              }
              return
            }
          } else if (item.getBoundingClientRect().top >= 0 && item.getBoundingClientRect().top < windowHeight/2) {
            if (!target || target.getBoundingClientRect().top > item.children[0].getBoundingClientRect().top) {
              target = item
              console.log(item.id)
            }
            return
          }
        })

        if (target) {
          sidebar_target = target.id
        }
      }"
  >

    <home
      id="home"
      :window-width="windowWidth"
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

    <history
      id="history"
    />

    <gallery
      id="gallery"
    />

    <server-status
      id="server-status"
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
