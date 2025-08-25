saludar = function () {
  //recueperar el valor de la caja de texto
  let nombre;
  nombre = recuperarTexto("txtNombre");
  let apellido;
  apellido = recuperarTexto("txtApellido");
  let edad;
  edad = recuperarInt("txtEdad");
  let estatura;
  estatura = recuperarFloat("txtEstatura");
  let mensajeBienvenida;
  mensajeBienvenida = "Bienvenido" + nombre + "" + apellido;

  mostrarTexto("lblResultado", mensajeBienvenida);
  mostrarImagen("imgSaludo","./imagenes/saludogif.jpg")

  mostrarTextoEnCaja("txtNombre","")
};

