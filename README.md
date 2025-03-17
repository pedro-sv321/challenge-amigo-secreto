<h1>Challenge amigo secreto</h1>

 <p align="left">
 <img src="https://img.shields.io/badge/STATUS-%20FINALIZADO-green">
 </p>
 
 ![GitHub Org's stars](https://img.shields.io/github/stars/PedroSolis?style=social)

## :hammer:Funcionalidades del proyecto

<h3>HTML</h3>

`Encabezado con título e imagen`
- Muestra el título "Amigo Secreto".
- Incluye una imagen representativa del evento.

`Entrada de nombres`
- Permite al usuario ingresar nombres en un campo de texto.
- Un botón "Añadir" agrega el nombre a la lista de participantes.

`Lista de participantes`
- Muestra los nombres ingresados en una lista (<ul id="listaAmigos>).
- La lista es dinámica y se actualiza conforme se agregan nombres.

`Botón para sortear`
- Un botón con icono que, al presionarlo, ejecuta la función sortearAmigo().
- Se encarga de realizar la asignación aleatoria de amigos secretos.

`Mostrar resultados del sorteo`
- Una lista (<ul id="resultado>) que muestra los pares de Amigo Secreto después del sorteo.
- Se actualiza dinámicamente tras realizar el sorteo.

`Accesibilidad y optimización`
- Uso de aria-labelledby, aria-live y etiquetas adecuadas para mejorar la accesibilidad. 
- Carga diferida del script (defer) para mejorar el rendimiento.

<h3>JS</h3>

`Gestión de participantes`
- Lista de amigos (let amigos = []). 
-     Se usa un array para almacenar los nombres ingresados.
- Función agregarAmigo()
-     Obtiene el nombre ingresado en el input.
-     Verifica que no esté vacío ni repetido antes de agregarlo.
-     Si es válido, lo añade al array y lo muestra en la lista de participantes.
-     Si el nombre está repetido o vacío, muestra una alerta.
`Sorteo del Amigo Secreto`
- Función sortearAmigo()
-     Verifica que haya nombres en la lista.
-     Selecciona un nombre aleatorio del array y lo elimina para evitar repeticiones.
-     Borra la lista de amigos en pantalla después del sorteo.
-     Llama a mostrarResultado() para mostrar el amigo secreto sorteado.
-     Si la lista está vacía, muestra una alerta indicando que ya no hay nombres.
`Mostrar el resultado`
- Función mostrarResultado(amigo)
-     Limpia la sección de resultados.
-     Crea y muestra un mensaje con el nombre del amigo secreto sorteado.

## 🪚Posibles mejoras
- Permitir que cada persona tenga un amigo secreto asignado sin eliminar nombres.
- Mostrar la lista de parejas en vez de un solo nombre.
- Agregar un botón para reiniciar la lista de participantes y volver a empezar.

## ✔️Tecnologias utilizadas

- HTML
- Css
- JavaScript

## Autores

| [<img src="https://avatars.githubusercontent.com/u/196592485?v=4&size=64" width=115><br><sub>PedroSolis</sub>](https://github.com/PedroSolis) |
| :---: | 
