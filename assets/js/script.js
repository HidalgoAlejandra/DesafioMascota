class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre_nuevo) {
    this._nombre = nombre_nuevo;
  }
  //metodo que desplega datos del propietario y puede ser usada por hijos
  datosPropietario() {
    return `Nombre propietario: ${this._nombre} Direccion: ${this.direccion} Telefono: ${this.telefono}`;
  }
}
//Hereda datos del propietario
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    alert(`El animal es un :${this._tipo}`);
    return this._tipo;
  }
  set tipo(tipoNuevo) {
    this._tipo = tipoNuevo;
  }
}
//Hereda datos del propietario y tipo
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombremascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombremascota = nombremascota;
    this.enfermedad = enfermedad;
  }
  get nombremascota() {
    return this._nombremascota;
  }
  set nombremascota(nombremascotaNueva) {
    this._nombremascota = nombremascotaNueva;
  }
}

//Recibimos datos del formulario
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let propietario = document.querySelector("#propietario").value;
  let telefono = document.querySelector("#telefono").value;
  let direccion = document.querySelector("#direccion").value;
  let nombreMascota = document.querySelector("#nombreMascota").value;
  let tipo = document.querySelector("#tipo").value;
  let enfermedad = document.querySelector("#enfermedad").value;
  let resultado = document.querySelector("#resultado");

  //creamos la atencion de la mascota
  if (tipo == "gato") {
    const gato = new Mascota(
      propietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    //desplegamos los datos por pantalla usando gato
    resultado.innerHTML = `<p>${gato.datosPropietario()}</p>
    <p>El tipo de animal es un : ${
      gato.tipo
    }, mientras que el nombre de la marcota es: ${
      gato.nombremascota
    } y la enfermedad es: ${gato.enfermedad}</p>`;
  } else if (tipo == "perro") {
    const perro = new Mascota(
      propietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    //desplegamos los datos por pantalla usando perro
    resultado.innerHTML = `<p>${perro.datosPropietario()}</p>
    <p>El tipo de animal es un : ${
      perro.tipo
    }, mientras que el nombre de la marcota es: ${
      perro.nombremascota
    } y la enfermedad es: ${perro.enfermedad}</p>`;
  } else {
    const conejo = new Mascota(
      propietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    //desplegamos los datos por pantalla usando conejo
    resultado.innerHTML = `<p>${conejo.datosPropietario()}</p>
    <p>El tipo de animal es un : ${
      conejo.tipo
    }, mientras que el nombre de la marcota es: ${
      conejo.nombremascota
    } y la enfermedad es: ${conejo.enfermedad}</p>`;
  }
});
