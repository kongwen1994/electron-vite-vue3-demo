<script setup>
import { ref, getCurrentInstance,onMounted } from "vue";
onMounted(()=>{
  
})
async function printDirname(){
  const __dirname = await window.newWin.getDirname()
  console.log('pageB __dirname',__dirname)
}
</script>

<template>
  <h1>页面B</h1>
  <button @click="printDirname">打印__dirname</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
