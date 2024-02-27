<script setup lang="ts">
import {FriendsList} from "./contents/contents";
</script>

<template>
<div
  class="min-w-300px w-70% max-w-1000px mx-a my-5 py-10 px-5 b-rounded-10 b-solid b-1 b-#555 bg-blur of-overlay"
>
  <el-text
      type="primary"
      tag="h1"
      class="px-3 w-fit mx-5 mb-4 bottom-line"
  >
    友情链接
  </el-text>

  <el-carousel
      class="w-full max-w-648px mx-a min-h-300px h-fit"
      arrow="hover"
      indicator-position="outside"
  >
    <el-carousel-item
        v-for="friend in FriendsList"
        class="b-rounded-5 h-fit"
    >
      <el-card
        class="b-rounded-5 min-h-300px h-fit"
      >
        <a :href="friend.link" target="_blank">
          <el-image
              class="w-full h-60px"
              :src="friend.image"
              fit="contain"
          />

          <div class="w-fit mx-a">
            <el-text
                class="w-fit mx-a font-bold"
                type="primary"
                style="font-size: clamp(0.625rem, 0.422rem + 3.25vw, 1.438rem)"
            >
              {{ friend.title }}
            </el-text>
          </div>

          <div class="w-fit mx-a">
            <el-text type="info">
              {{ friend.describe }}
            </el-text>
          </div>

          <div class="w-fit h-fit mx-a">
            <el-text
                tag="p"
                size="large"
                class="indent-2em line-height-1.5em"
            >
              {{ friend.content }}
            </el-text>
          </div>
        </a>
      </el-card>
    </el-carousel-item>
  </el-carousel>

</div>
</template>

<style scoped>
.bottom-line {
  border-bottom: var(--el-color-primary) solid 3px;
}

h1 {
  font-size: xx-large;
}

h2 {
  font-size: x-large;
}

</style>