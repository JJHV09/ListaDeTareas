let botonAgregar = document.getElementById("btnAgregar");
let botonEliminar = document.getElementById("btnEliminar");
let lista = document.getElementById("listado")


botonAgregar.addEventListener("click", function(){
    let tareas = document.getElementById("Tarea");
    let agregarTareas = document.createElement('li');
    agregarTareas.textContent = tareas.value;
    if(tareas.value != ""){
        lista.appendChild(agregarTareas);
        tareas.value = ""; 
    
    }
    
});

botonEliminar.addEventListener("click", function(){
    lista.removeChild(lista.lastChild);

});
