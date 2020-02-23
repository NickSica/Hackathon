'use strict';

import * as http from "http";

function main()
{
    const hostname : string = "127.0.0.1";//"71.123.35.95";
    const port     : number = 3000;

    const server   : http.Server = http.createServer((req : any, res : any) =>
	{
	    res.statusCode = 200;
	    res.setHeader("Content-Type", "text/plain");
	    res.end("Hello World!/n");
	});

    server.listen(port, hostname, () =>
	{
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
