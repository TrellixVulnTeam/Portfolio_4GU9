const http=require("http"),app=require("./app"),fs=require("fs"),url=require("url"),normalizePort=r=>{let e=parseInt(r,10);return isNaN(e)?r:e>=0&&e},port="8080";app.set("port",port);const errorHandler=r=>{if("listen"!==r.syscall)throw r;let e=server.address(),t="string"==typeof e?"pipe "+e:"port: "+port;switch(r.code){case"EACCES":console.error(t+" requires elevated privileges."),process.exit(1);break;case"EADDRINUSE":console.error(t+" is already in use."),process.exit(1);break;default:throw r}},server=http.createServer(app);server.on("error",errorHandler),server.on("listening",()=>{let r=server.address(),e="string"==typeof r?"pipe "+r:"port "+port;console.log("Listening on "+e)}),server.listen(port);
