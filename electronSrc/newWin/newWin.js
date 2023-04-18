// sameEntryWindow.js
const {
    BrowserWindow,
    ipcMain
} = require('electron')
const path = require('path')

console.log('newWin run')
// ---------这里是重点---------
// router采用hash模式，打开该窗体则显示该路径组件
const NODE_ENV = process.env.NODE_ENV

// eslint-disable-next-line no-unused-vars
let win = null

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'pageB',
    webPreferences: {
      preload: path.join(__dirname, 'newPreload.js'),
      nodeIntegration: true,
      contextIsolation: true, // false时，可以直接在渲染进程中访问node（即可以在vue中访问node），但是不可以用contextBridge
      webSecurity: false
  }
  })
  if (NODE_ENV === 'development') {
    win.webContents.openDevTools()
    win.loadURL(
        'http://127.0.0.1:5173/index.html#/pageB'
    )

} else {
  console.log('__dirname',__dirname)
    win.loadURL(
      `file://${path.join(__dirname,'../../dist/index.html#/pageB')}`
        // `file://${__dirname}/index.html#/pageB`
    )
}
ipcMain.handle('getDirname', () => __dirname)
//   win.loadURL(winURL)

  win.on('closed', function () {
    win = null
  })
}

function showWindow () {
  if (win === null) {
    createWindow()
  }

  win.show()
  win.focus()
  return createWindow
}

module.exports = showWindow
