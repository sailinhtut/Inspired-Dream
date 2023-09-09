<script lang="ts" setup>
import router from '@/router'
import { computed, ref } from 'vue'
const props = defineProps({
  active: Number,
  color: String,
  borderColor: String,
  textColor: String,
  activeColor: String
})

const activeStyle = computed(() => {
  return {
    color: `${props.activeColor ?? 'var(--primary)'}`,
    'border-bottom': `2px solid ${props.activeColor ?? 'var(--primary)'} `
  }
})

const hoverIndex = ref<Number | null>(null)
</script>

<template>
  <div
    class="navbar"
    :style="{
      backgroundColor: props.color ?? 'white',
      borderBottom: '1px solid '.concat(props.borderColor ?? '#d3d3d3'),
      color: props.textColor ?? '#333333'
    }"
  >
    <div class="nav-leading">Inspired Dream</div>
    <ul class="nav-menu">
      <li
        :class="['nav-menu-item']"
        :style="active == 0 || hoverIndex == 0 ? activeStyle : ''"
        @click="router.push('/')"
        @mouseenter="hoverIndex = 0"
        @mouseleave="hoverIndex = null"
      >
        Home
      </li>
      <li
        :class="['nav-menu-item']"
        :style="active == 1 || hoverIndex == 1 ? activeStyle : ''"
        @click="router.push('/blogs')"
        @mouseenter="hoverIndex = 1"
        @mouseleave="hoverIndex = null"
      >
        Blogs
      </li>
      <li
        :class="['nav-menu-item']"
        :style="active == 2 || hoverIndex == 2 ? activeStyle : ''"
        @click="router.push('/about')"
        @mouseenter="hoverIndex = 2"
        @mouseleave="hoverIndex = null"
      >
        About
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url(../assets/main.css);

.navbar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
}

.nav-leading {
  height: 60px;
  float: left;
  line-height: 60px;
  text-align: center;
  margin-left: 30px;
  font-size: 1.5em;
}

.nav-menu {
  float: right;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.nav-menu-item {
  height: 60px;
  width: 80px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}

/* .nav-menu-item:hover {
  color: var(--primary);
} */
</style>
