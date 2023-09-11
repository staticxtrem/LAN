// Función para copiar el contenido del input y guardar en el almacenamiento local
function copiarInput(input) {
  // Obtener el valor del input
  var inputValue = input.value;

  // Copiar el valor al portapapeles
  var textArea = document.createElement("textarea");
  textArea.value = inputValue;
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.width = "2em"; // Set the width to a small value
  textArea.style.height = "2em"; // Set the height to a small value
  textArea.style.opacity = 0; // Make it invisible

  // Anexar el elemento de texto al cuerpo del documento
  document.body.appendChild(textArea);

  // Seleccionar y copiar el contenido del elemento de texto
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    alert("No se pudo copiar el texto al portapapeles");
  }

  // Guardar el valor en el almacenamiento local
  localStorage.setItem(input.id, inputValue);

  // Eliminar el elemento de texto después de copiar
  document.body.removeChild(textArea);
}

// Función para cargar el valor desde el almacenamiento local al cargar la página
function cargarContenido() {
  for (var i = 1; i <= 9; i++) {
    var input = document.getElementById("input" + i);
    var valorGuardado = localStorage.getItem("input" + i);

    if (valorGuardado) {
      input.value = valorGuardado;
    }
  }
}

// Llama a la función para cargar el contenido cuando se carga la página
window.addEventListener("load", cargarContenido);
