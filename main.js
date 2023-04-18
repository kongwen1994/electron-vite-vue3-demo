const {
    app,
    BrowserWindow,
    ipcMain,
    dialog
} = require('electron')
const path = require('path')

const showWindow = require('./electronSrc/newWin/newWin.js')
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

const NODE_ENV = process.env.NODE_ENV

async function handleFileOpen() {
    const { canceled, filePaths } = await dialog.showOpenDialog()
    if (canceled) {
      return
    } else {
      return filePaths[0]
    }
  }
let newWin = null
  async function openWin() {
    newWin = showWindow()
  }

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: true, // false时，可以直接在渲染进程中访问node（即可以在vue中访问node），但是不可以用contextBridge
            webSecurity: false
        }
    })
  
    ipcMain.handle('ping', (event, name) => {
        // console.log('ping',event,name)
        return `${name},pong`
    })
    ipcMain.handle('__dirname', () => __dirname)

    ipcMain.handle('dialog:openFile', handleFileOpen)

    ipcMain.handle('openWin', openWin)

    // win.loadURL('http://127.0.0.1:5173')
    // win.loadFile('index.html')
    // win.loadURL(NODE_ENV === 'development' ?
    //     'http://127.0.0.1:5173' :
    //     `file://${path.join(__dirname,'../dist/index.html')}`
    // )

    if (NODE_ENV === 'development') {
        win.webContents.openDevTools()
        win.loadURL(
            'http://127.0.0.1:5173'
        )

    } else {
        console.log('production __dirname',__dirname)
        win.webContents.openDevTools()
        win.loadURL(
            `file://${path.join(__dirname,'/dist/index.html')}`
        )
    }

    // Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {
    createWindow()
    // newWin()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});