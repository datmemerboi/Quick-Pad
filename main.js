const {app, BrowserWindow} = require("electron");
const path = require('path');
let window;

function createWindow(){
  window = new BrowserWindow({
    width:800,
    height:650,
    resizable:false,
    frame:false
  });
  window.loadFile("index.html");
  window.on('closed',()=>{
    window = null;
  } );
}
app.on('ready', createWindow);
app.on('activate', ()=>{
  if(window==null)
    createWindow()
});
