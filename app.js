// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios extras

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar input
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos dos participantes.");
        return;
    }

    let asignados = [...amigos]; // Copia de la lista para asignar
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let nombre = amigos[i];

        // Filtrar para evitar autoasignación
        let posibles = asignados.filter(amigo => amigo !== nombre);

        if (posibles.length === 0) {
            alert("No se pudo completar el sorteo. Inténtalo de nuevo.");
            return;
        }

        let indice = Math.floor(Math.random() * posibles.length);
        let asignado = posibles[indice];

        resultado.push(`${nombre} → ${asignado}`);
        asignados.splice(asignados.indexOf(asignado), 1);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar la lista antes de mostrar resultados

    resultado.forEach(pair => {
        let item = document.createElement("li");
        item.textContent = pair;
        listaResultado.appendChild(item);
    });
}
