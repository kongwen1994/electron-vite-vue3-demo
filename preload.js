// const fs = require('fs');
// const path = require('path');

// window.addEventListener('DOMContentLoaded', () => {
//     // const replaceText = (selector, text) => {
//     //   const element = document.getElementById(selector)
//     //   if (element) element.innerText = text
//     // }
  
//     // for (const dependency of ['chrome', 'node', 'electron']) {
//     //   replaceText(`${dependency}-version`, process.versions[dependency])
//     // }

//     const createFileBtn = document.querySelector('#writeBtn');
//     createFileBtn.addEventListener('click', () => {
//       console.log('writeBtn click')
//       const fileName = 'example.txt';
//       const fileContent = 'Hello World!';
//       const filePath = path.join(__dirname, fileName);

//       fs.writeFile(filePath, fileContent, (err) => {
//         if (err) throw err;
//         console.log('文件已保存');
//       });
//     });
//   })
const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: (name) => ipcRenderer.invoke('ping',name),
  __dirname:()=>ipcRenderer.invoke('__dirname'),
  __dirname2:()=>ipcRenderer.invoke('__dirname2'),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  openWin:()=>ipcRenderer.invoke('openWin')
});

console.log('1233')