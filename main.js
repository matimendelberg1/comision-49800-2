//funciones globales

const existeElementoId = (array, idReferencia) => {
  let existe = array.some(elemento => elemento.id === idReferencia);
  return existe;
}

//seccion paciente
let userId = 1;
let pacientes = [];
class Paciente {
  constructor(nombre, apellido, dni, mail){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.mail = mail;
    this.id = userId;
  }
}

const agregarPaciente = (paciente) => {
    pacientes.push(paciente);
    userId++
};

const mostrarPaciente = () => {
    let nombresPacientes = pacientes.map( paciente => `ID ${paciente.id} - Nombre: ${paciente.nombre}`)
    if (nombresPacientes.length > 0) {
      alert(nombresPacientes.join("\n"))
    } else{
      alert("No hay usuarios registrados")
    }
};

const eliminarPaciente = (id) => {
    
    if(existeElementoId(pacientes, id)) {
      pacientes = pacientes.filter(paciente => paciente.id !== id);
    }else {
      alert("No existe ningun usuario con ese ID")
    }
};


//seccion obra social
let OSId = 1;
let obrasSociales = [];
class ObraSocial {
  constructor(nombre, numeroCliente, plan){
    this.nombre = nombre;
    this.numeroCliente = numeroCliente;
    this.plan = plan;
    this.id = OSId;
  }
}

const agregarOS = (obraSocial) => {
    obrasSociales.push(obraSocial);
    OSId++
};

const mostrarOS = () => {
    let nombresOS = obrasSociales.map( obraSocial => `ID ${obraSocial.id} - Nombre de OS: ${obraSocial.nombre}`)
    if (nombresOS.length > 0) {
      alert(nombresOS.join("\n"))
    } else {
      alert ("No hay obra social registrada")
    }
};

const eliminarOS = (id) => {
    if (existeElementoId(obrasSociales, id)) {
      obrasSociales = obrasSociales.filter(obraSocial => obraSocial.id !== id);
    } else{
      alert("No exite ninguna OS con ese ID")
    }
}



//seccion menus

const menuPaciente = () => {
  let estado = true;
  while (estado) {
    let opcion = parseInt(
      prompt(
        `Menu de pacientes
        1- Agregar un nuevo paciente
        2- Mostrar un paciente
        3- Eliminar un paciente
        4- Volver`
      )
    )
    switch (opcion) {
      case 1:
        let nombre = prompt("Ingrese el nombre del nuevo paciente");
        let apellido = prompt("Ingrese el apellido del paciente");
        let dni = prompt("Ingrese el DNI del paciente");
        let mail = prompt("Ingrese el email del paciente");
        let paciente = new Paciente (nombre, apellido, dni, mail);
        agregarPaciente(paciente);
        break;
      case 2:
        mostrarPaciente();
        break;
      case 3:
        let idPaciente = parseInt(prompt("Ingrese el ID del usuario a eliminar"))
        eliminarPaciente(idPaciente);
        break;
      case 4:
        estado = false;
        menuPrincipal();
        break;
      default:
        alert("Ingrese una opcion valida")
        break;
    }
  }
}

const menuOS = () => {
  let estado = true;
  while (estado) {
    let opcion = parseInt(
      prompt(
        `Menu de Obra social
        1- Agregar una obra social
        2- Mostrar la obra social
        3- Eliminar obra social
        4- Volver`
      )
    )
    switch (opcion) {
      case 1:
        let nombre = prompt("Ingrese el nombre de la nueva OS");
        let numeroCliente = prompt("Ingrese el numero de cliente");
        let plan = prompt("Ingrese el plan del cliente");
        let obraSocial = new ObraSocial (nombre, numeroCliente, plan);
        agregarOS(obraSocial);
        break;
      case 2:
        mostrarOS();
        break;
      case 3:
        let idOS = parseInt(prompt("Ingrese el ID de la OS a eliminar"))
        eliminarOS(idOS);
        break;
      case 4:
        estado = false;
        menuPrincipal();
        break;
      default:
        alert("Ingrese una opcion valida")
        break;
    }
  }
}

let encendido = true;
const menuPrincipal = () => {

  while (encendido) {
    let opcion = parseInt(prompt(
      `Bienvenido a nuestra app de salud:
      1- Opciones de pacientes
      2- Opciones de obras sociales
      3- Salir
      `
    ));
    switch (opcion) {
      case 1:
        //menu de pacientes
        menuPaciente();
        break;
      case 2:
        //menu de obra social
        menuOS();
        break;
      case 3:
        encendido = false;
        break

      default:
        alert("Ingrese una opcion valida")
        break;
    }
  }
}
menuPrincipal();