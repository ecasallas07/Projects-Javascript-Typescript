const http = require('http');

//Server
const server = http.createServer((req,res)=>{

    try{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('Hola mundo\n')
    }catch(error)
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('Error del server\n')
    }
    
});


//Port where liestening

const port = 3000;
server.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})

