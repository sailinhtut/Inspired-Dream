<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar :active="1" />
  <div class="container" id="blog">
    <h1>Blog View</h1>
  </div>
</template>

<style scoped>
#blog{
    margin-top: 60px;
}
</style>
