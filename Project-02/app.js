const express =  require('express');

const app = express();
const port = 3000;

app.use(express.json());

//array empty
let tareas = [];

app.get('/',function(req,res){
    res.json(tareas);
})

app.post('/create', (req,res) =>{
    const nuevaTarea = req.body;
    tareas.push(nuevaTarea)
    res.json({mensaje:'Tarea nueva',tarea:nuevaTarea})
});

app.listen(port,()=>{
    console.log('listening on port ' + port);
});
