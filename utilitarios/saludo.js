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
 let  mensajeBienvenida
 mensajeBienvenida="Bienvenido"+nombre+""+apellido

 mostrarTexto("lblResultado", mensajeBienvenida)
};

mostrarTexto = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};

recuperarTexto = function (idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;

  return valorIngresado;
};

recuperarInt = function (idComponente) {
  let valorCaja;
  let valorEntero;
  valorCaja = recuperarTexto(idComponente);
  valorEntero = parseInt(valorCaja);
  return valorEntero;
};

recuperarFloat = function (idComponente) {
  let valorCaja;
  let valorFloat;
  valorCaja = recuperarTexto(idComponente);
  valorFloat = parseFloat(valorCaja);
  return valorFloat;
};
