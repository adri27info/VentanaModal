const modal = document.getElementById("modal");
const contenedorModal = document.getElementById("contenedorModal");
const btnAbrirModal = document.getElementById("btnAbrirModal");
const btnCerrar = document.getElementById("btnCerrar");

btnAbrirModal.addEventListener("click", abrirModal);

function abrirModal() {
  contenedorModal.classList.add("modal-open");
  btnCerrar.addEventListener("click", cerrarModal);
}

function cerrarModal() {
  contenedorModal.classList.remove("modal-open");
}
