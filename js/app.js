let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaAmigos.appendChild(listItem);
        input.value = "";
    } else {
        alert("El nombre está vacío o ya ha sido añadido.");
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos los nombres han sido sorteados.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];
    
    // Limpiar la lista de nombres ingresados
    document.getElementById("listaAmigos").innerHTML = "";
    
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const mensaje = document.createElement("p");
    mensaje.textContent = `El amigo secreto sorteado es: ${amigo}`;
    resultado.appendChild(mensaje);
}