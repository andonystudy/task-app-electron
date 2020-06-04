const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./src/app/index.html')
}

app.whenReady().then(createWindow)