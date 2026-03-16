const http = require('http');
const fs = require('fs');
const path = require('path');
const MIME = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const server = http.createServer((req,res)=>{
    let fp = path.join(__dirname,'bior',req.url==='/'?'/platform_directory/index.html':req.url);
    if(fs.existsSync(fp)&&fs.statSync(fp).isDirectory()) fp=path.join(fp,'index.html');
    if(!fs.existsSync(fp)){res.writeHead(404);res.end('Not found');return;}
    const ext=path.extname(fp);
    res.writeHead(200,{'Content-Type':MIME[ext]||'text/plain','Cache-Control':'no-cache'});
    fs.createReadStream(fp).pipe(res);
});
server.listen(3000,'0.0.0.0',()=>console.log('Server running on port 3000'));
