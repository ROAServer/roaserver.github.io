<script setup lang="ts">

import {Ref, ref} from "vue";

defineProps<{
  windowWidth: number
}>()

defineEmits<{
  getTitleWidth: [width: number]
}>()

const homoTitleDiv: Ref<HTMLInputElement | null> = null

const TitleWidth: Ref<number> = ref(0)

</script>

<template>
  <div
      ref="homoTitleDiv"
      class="text-left p-8 b-rounded-8 bg-blur"
  >
    <!-- 用于提供 @load -->
    <iframe
      v-show="false"
      @load="() => {
        console.log('title width: ' + homoTitleDiv.offsetWidth)
        $emit('getTitleWidth', homoTitleDiv.offsetWidth + 50);
        TitleWidth = homoTitleDiv.offsetWidth + 50
      }"
    />
    <!--/ 用于提供 @load -->
    <el-text class="title">
      在Minecraft中探索久违的乐趣
    </el-text>
<!--    <br>-->
<!--    <el-text class="subtitle">We're </el-text>-->
<!--    <vue-typed-js :strings="['waiting for You...', 'Family!']" loop>-->
<!--      <p class="typing"></p>-->
<!--    </vue-typed-js>-->
  </div>
</template>

<style scoped>
.title {
  font-weight: 700;
  font-size: clamp(0.5rem, -0.125rem + 5vw, 3rem);
  color: #fff
}

.subtitle {
  font-size: 32px;
  color: #fff;
}
</style>