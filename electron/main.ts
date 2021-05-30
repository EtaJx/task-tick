import { join } from 'path';
import { app, BrowserWindow } from 'electron';
const develop = process.env.NODE_ENV === 'develop';

const HEIGHT = 600;
const WIDTH = 800;
const DEFAULT_PORT = 3000;

const createWindow = () => {
  const window = new BrowserWindow({
    width: WIDTH,
    height: HEIGHT,
    frame: true,
    show: true,
    resizable: true,
    fullscreenable: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });

  const port = process.env.PORT || DEFAULT_PORT;
  const url = `http://localhost:${port}`;
  if (develop) {
    window?.loadURL(url);
  }
};

app.whenReady().then(() => {
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
