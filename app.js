// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion para agregar los nombres de los amigos

function capturaNombre() {
    let cajaAmigo = document.getElementById('amigo').value;
        //valido si la caja del nombre viene vacia    
        if (cajaAmigo === '') {
            alert('⚠️ Por favor, inserte un nombre. ⚠️');
        } else {
            amigos.push(cajaAmigo);
        }
        limpiarCaja();
        actualizarListaAmigos();
}
// ver los amigos agregados en la pantalla 
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // limpia la lista existente
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
}

function sorteoAmigos() {
    //valido si hay datos en la lista
    if (amigos.length === 0) {
        alert('⚠️ No hay amigos disponibles para sortear. ⚠️');
        return;
    }

    let escogerIndice = Math.floor(Math.random() * amigos.length);
    console.log(escogerIndice);
    let nombreSorteado = amigos[escogerIndice];
    console.log(nombreSorteado);
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `El Amigo secreto es: ${nombreSorteado}`;
}


//funcion para limpiar la caja

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
