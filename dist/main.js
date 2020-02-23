'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
function main() {
    const hostname = "127.0.0.1"; //"71.123.35.95";
    const port = 3000;
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello World!/n");
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
    /*
    let { app, BrowserWindow } = require('electron');

    app.on('ready', function() {
    let mainWindow = new BrowserWindow({
            webPrefrences: {
        nodeIntegration : true
        }
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    mainWindow.webContents.openDevTools()
    });
    */
}
main();
//# sourceMappingURL=main.js.map