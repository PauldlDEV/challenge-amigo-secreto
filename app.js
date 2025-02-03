// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
const listado = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  if (validarBlanco()) {
    let nombre = document.getElementById("amigo").value;
    listaNombres.push(nombre);
    console.log(listaNombres);
    mostrarAmigos();
  }
  valoresIniciales();
}

function mostrarAmigos() {
  mostrarElementos(listaNombres, listado);
}

function mostrarElementos(amigos, container) {
  limpiarListas();
  let fragmento = document.createDocumentFragment();
  amigos.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;
    fragmento.appendChild(li);
  });
  container.appendChild(fragmento);
}

function validarBlanco() {
  let nombre = document.getElementById("amigo").value.trim();
  if (nombre === "") {
    alert("Por favor ingrese un nombre válido");
    return false;
  } else {
    return true;
  }
}

function sortearAmigo() {
  let numeroAleatorio = Math.floor(Math.random() * listaNombres.length);
  console.log(numeroAleatorio);
  let amigoSecreto = [];
  amigoSecreto.push(`Tu amig@ secret@ es ${listaNombres[numeroAleatorio]}!!`);

  mostrarElementos(amigoSecreto, resultado);
}

function valoresIniciales() {
  document.querySelector("#amigo").value = "";
  document.getElementById("amigo").focus();
}

function limpiarListas() {
  listado.innerHTML = "";
  resultado.innerHTML = "";
}

valoresIniciales();
