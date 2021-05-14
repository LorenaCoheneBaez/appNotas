const {cartelAyuda,guardarTarea,listarTareas,filtrarTareas,borrarUltimaNota}=require('./tareas');
const process=require('process');
const comando=process.argv[2];
switch (comando) {
    case undefined:
    console.log('Atención-Debes pasar una acción');
    cartelAyuda('¿Necesitas ayuda?',1000);
    cartelAyuda('Comandos del block de notas:',1800);
    cartelAyuda('* crear: para agregar una nueva tarea y su estado (los estados deben ser Pendiente, Progreso o Terminado). La fecha se generará automaticamente.',2500);
    cartelAyuda('* listar: muestra la lista de tareas.',3500)
    cartelAyuda('* "filtrar por estado": filtra las tareas según su estado: Pendiente, Progreso o Terminado.',4000);
    cartelAyuda('* "borrar ultima": borra la última nota agregada.',4800)
   break;  
    case 'crear':
        let titulo=process.argv[3];
        if(!titulo){
            console.log('Debes escribir un titulo');
            break;
        }
        let estado=process.argv[4];
        guardarTarea(titulo,estado);
        break;
    case'listar':
        listarTareas()  
         break;
    case 'filtrar por estado':
        filtrarTareas(process.argv[3])
        break;
    case 'borrar ultima':
        borrarUltimaNota (process.argv[3])
            break;                          
     default:
         console.log('No entiendo lo quieres hacer');
         cartelAyuda('¿Necesitas ayuda?',1000);
    cartelAyuda('Comandos del block de notas:',1800);
    cartelAyuda('* crear: para agregar una nueva tarea y su estado (los estados deben ser Pendiente, Progreso o Terminado). La fecha se generará automaticamente',2500);
    cartelAyuda('* listar: muestra la lista de tareas',3500)
    cartelAyuda('* "filtrar por estado": filtra las tareas según su estado: Pendiente, Progreso o Terminado',4000);
    cartelAyuda('* "borrar ultima": borra la última nota agregada',4800)
        break;
};