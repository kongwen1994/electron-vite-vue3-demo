<script setup>
// const { require } = window.nodeRequire;

// const fs = require('fs');

import fs from 'fs'

console.log('fs',fs)
const data = () => ({
  fileContent: '',
});

const methods = {
  readFile() {
    console.log('fs',fs)
    const filePath = '/path/to/file.txt';
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      this.fileContent = data.toString();
    });
  },
};
</script>

<template>
  <div>
    <button @click="readFile">读取文件</button>
    <p>{{ fileContent }}</p>
  </div>
</template>
