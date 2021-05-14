const fs=require('fs');
const TAREAS=JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));
module.exports={
    cartelAyuda: function(texto, tiempo){
        return setTimeout(() =>console.log(texto), tiempo);
},
    escribirJson: function(tareas){
         fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8');
    },
    
       guardarTarea:function (titulo,estado,fecha=new Date()){
        let nuevaTarea={
            titulo:titulo,
            estado:estado,
            fecha:fecha.toLocaleDateString()
        }
        TAREAS.push(nuevaTarea);
        module.exports.escribirJson(TAREAS);
        return console.log('Tarea agregada');
    },
    listarTareas:function(){
        TAREAS.forEach(tarea => {
            console.log(tarea);
        });
    },
    filtrarTareas:function(filtro){
        let tareasFiltradas=TAREAS.filter(tarea=>tarea.estado.toLowerCase()===filtro.toLowerCase()||tarea.titulo.includes(filtro));
        return console.log(tareasFiltradas);
    },
    borrarUltimaNota:function(){
        let borrado=TAREAS.pop()
        module.exports.escribirJson(TAREAS)
        console.log(borrado)
        module.exports.cartelAyuda('Se borró esta nota exitosamente',1500)
    }
};
