import { listadoMensajes } from "../service/listaComentarios.js"
console.log("probando");

const informacion = document.querySelector("[data-form]");

informacion.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  
  const nombre = document.querySelector("[data-name]").value;
  const email = document.querySelector("[data-email]").value;
  const telefono = document.querySelector("[data-telefono]").value;
  const comentario = document.querySelector("[data-motivo]").value;
  await listadoMensajes.registrarCliente(nombre, email, telefono, comentario);
  try {
    window.location.href = "/screens/registro_completado.html";
    alert("mensaje enviado");
   
  } catch (error) {
    console.log(error);
   
  }
});
