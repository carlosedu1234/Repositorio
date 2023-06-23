const registrarCliente = async (nombre, email,telefono,comentario) => {
    try {
      const response = await fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          comentario,
          id: uuid.v4(),
        }),
      });
      return response.json();
    } catch (error) {
    
      throw new Error("Error al registrar el cliente");
    }
  };

  export const listadoMensajes={
    registrarCliente,

  }