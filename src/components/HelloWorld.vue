<script setup>
import { ref, getCurrentInstance,onMounted } from "vue";
// import {ipcRenderer} from 'electron'
// import fs from "fs"
// const path = require('path')
// import path from "path";
// import path from 'path-browserify'


// console.log("fs ipcRenderer", ipcRenderer);
defineProps({
  msg: String,
});

const { proxy } = getCurrentInstance();
const count = ref(0);
const mes = ref("测试内容");
const fileName = ref("默认文件")
const fileContent = ref("abc")
const isFile=ref('')
const contextBridge = ref('')

onMounted(() => {
  // console.log('vue fs',fs.writeFileSync);
  // console.log(ipcRenderer);
  // console.log('__dirname',__dirname)
  contextBridge.value = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
  func()
});

function test() {
  mes.value = "改变了，测试内容";
}

function request() {
  proxy.$request("http://t-admin.vcoin.le.com/vcoin/backend/v1/business", {
    business_id: 37,
    total: 2,
    page: 1,
    page_size: 50,
  });
}

function write() {
  console.log("writeBtn click");
  //  console.log('__dirname',__dirname)
  // const fileName = "example.txt";
  // const fileContent = "Hello World!";
  // const filePath = "input.txt";
  // const filePath = path.join(__dirname, fileName);

  fs.writeFile(fileName.value, fileContent.value, (err) => {
    if (err) throw err;
    isFile.value = '文件已保存'
    console.log("文件已保存");
  });
}

const func = async () => {
  const __dirname = await window.versions.__dirname()
  const ping = await window.versions.ping('hi')
  console.log(__dirname) // 打印 'pong'
  console.log(ping)
}

const openDialog = async ()=>{
  const filePath = await window.versions.openFile()
  console.log('filePath',filePath)
}

const openNewWin = async ()=>{
   await window.versions.openWin()
}
</script>

<template>
  <h1>这是hello world</h1>
  <h1>{{ msg }}</h1>
  <h2>{{ mes }}</h2>

  <div class="card">
    <input v-model="fileName">
    <input v-model="fileContent">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button @click="test">test</button>
    <button @click="request">测试网络请求</button>
    <button id="writeBtn" @click="write">写文件</button>
    <div>{{isFile}}</div>
    <div>{{contextBridge}}</div>
    <button @click="openDialog">打开对话框</button>
    <button @click="openNewWin">打开新窗口</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
