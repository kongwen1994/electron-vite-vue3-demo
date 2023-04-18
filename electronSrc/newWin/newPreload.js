
const { contextBridge,ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('newWin', {
  getDirname:()=>ipcRenderer.invoke('getDirname'),
 
});

console.log('newwin 1233')