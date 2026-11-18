const CLAVE_TEMA = "tema";

function temaInicial() {
  const guardado = localStorage.getItem(CLAVE_TEMA);
  if (guardado === "dark" || guardado === "light") {
    return guardado;
  }
  // Si nunca eligió, se usa la preferencia de su sistema
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";}

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  const boton = document.getElementById("tema-toggle");
  if (boton) {
    boton.textContent = tema === "dark" ? " Modo claro" : " Modo oscuro";}
}


aplicarTema(temaInicial());

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("tema-toggle");
  aplicarTema(document.documentElement.getAttribute("data-theme"));

  boton.addEventListener("click", () => {
    const actual = document.documentElement.getAttribute("data-theme");
    const nuevo = actual === "dark" ? "light" : "dark";
    localStorage.setItem(CLAVE_TEMA, nuevo);
    aplicarTema(nuevo);
  });});