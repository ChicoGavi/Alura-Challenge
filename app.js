// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

/*Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo 
un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
un nombre de la lista y se mostrará en la página.
*/

// Se declaran las variables globales
let amigos = []
// Variable que permite conectar con la lista ul del codigo HTML
let listHTML = document.getElementById('listaAmigos')
let indexResult = Math.floor(Math.random()*amigos.length)
let eliminado = delete amigos[indexResult]

// Funcion que permite agregar el texto dentro del HTML
function aggElemento(label, text){
    //variable que conecta con HTML para modificar la etiqueta que es la variable label
    let elementHTML = document.getElementById(label)
    elementHTML.innerHTML = text //  y colocarle texto
};

//Funcion que permite agregar elementos a la lista
function agregarElementLista(){
    //variable que almacena  el valor del input
    let valorUser = document.getElementById("amigo").value;

    // codigo que permite borrar el contenido del input despues de haberlo digitado
    document.querySelector('#amigo').value = ''

    //condicion para que el usuario no digite un valor vacio
    if (valorUser == ''){
        alert('Digite un nombre valido')
    }
    else{
        // condicion donde se ingresa a la lista los valores dados por el usuario
        amigos.push(valorUser)
        aggElemento("listaAmigos", amigos) // Y que se muestre al nombre digitado
        
    }
    
    updateList() // Llama a la Funcion Update List
    
}
function sortearAmigo(){

    if(amigos != ''){
        let indexResult = Math.floor(Math.random()*amigos.length)
        sorteado = amigos[indexResult]

        aggElemento('resultado', sorteado)
        
    }
    else{
        alert('Ingrese valores validos')
        }
    }

//funcion para crear listas mediante el ul y li en html con manejo del DOM
function updateList(){
    //codigo que permite limpiar la lista y evita duplicados
    listHTML.innerHTML = ''
    
    // For que Itera sobre el Array (Lista) y crea elementos <li> en el HTML
    for (let i = 0; i < amigos.length ; i++){
        let li = document.createElement('li') // crea un elemento <li> en la variable li
        li.textContent = amigos[i] // Asignar el nombre al <li>
        listHTML.appendChild(li) // Agregarlo a la lista mediante el DOM
        
    }   

}




