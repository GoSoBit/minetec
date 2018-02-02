import { app, BrowserWindow  } from 'electron'

import * as Path from 'path'
import * as URL from 'url'

let mainWindow;

app.on('ready', () => {
  createWindow()
});

function createWindow () {
  const window = new BrowserWindow({width: 800, height: 600});

  window.on('close', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });

  window.loadURL(URL.format({
    pathname: Path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow = window
}
