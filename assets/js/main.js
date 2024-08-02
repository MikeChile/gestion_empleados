
// Debes crear una función constructora para crear objetos de tipo Empleado con los atributos
//‘nombre’, ‘salario’ y ‘departamento’.

// Implementa métodos dentro de la función constructora para realizar operaciones como calcular
//el salario después de un aumento, cambiar el departamento y obtener detalles del empleado.

// En los métodos solicitados, debes utilizar la palabra clave ‘this’ para referenciar las propiedades
//del objeto.

// En la imagen a continuación podemos ver la salida en la consola de los detalles del objeto cuando
//recién ha sido creado, cuando ha recibido un aumento y cuando se ha cambiado de departamento

//clase
class Empleado {

    //constructor
    constructor(nombre, salario, departamento) {
        //atributos: asignamos los parametros de la clase
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }

    //metodos
    aumentarSalario(porcentaje) {
        this.salario = this.salario + (this.salario * porcentaje / 100);
    }

    cambiarDepartamento(nuevoDepartamento) {
        this.departamento = nuevoDepartamento;
    }

    obtenerDetalles() {
        let salarioFormatado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(this.salario);
        return `Nombre: ${this.nombre}, Salario: ${salarioFormatado}, Departamento: ${this.departamento}`;
    }

}

// Creamos objetos para la clase EMpleado
let persona1 = new Empleado("Joaquín", 300000, "Ventas");
let persona2 = new Empleado("María", 250000, "Recursos Humanos");
let persona3 = new Empleado("Carlos", 400000, "Desarrollo");
let persona4 = new Empleado("Ana", 200000, "Marketing");
let persona5 = new Empleado("Pedro", 350000, "Finanzas");
let persona6 = new Empleado("Sofía", 280000, "Atención al Cliente");
let persona7 = new Empleado("Luis", 380000, "Logística");
let persona8 = new Empleado("Julia", 220000, "Diseño Gráfico");
let persona9 = new Empleado("Miguel", 330000, "Seguridad");
let persona10 = new Empleado("Daniela", 260000, "Compras");

// Verificar si hay datos guardados en localStorage
let empleadosLocalStorage = localStorage.getItem('empleados');

if (empleadosLocalStorage) {
  // Cargar datos desde localStorage
  let empleados = JSON.parse(empleadosLocalStorage);

  // Asignar datos a las variables correspondientes
  persona1 = empleados[0];
  persona2 = empleados[1];
  persona3 = empleados[2];
  persona4 = empleados[3];
  persona5 = empleados[4];
  persona6 = empleados[5];
  persona7 = empleados[6];
  persona8 = empleados[7];
  persona9 = empleados[8];
  persona10 = empleados[9];
} else {
  // Si no hay datos en localStorage, crear objetos con datos estáticos
  let persona1 = new Empleado("Joaquín", 300000, "Ventas");
  let persona2 = new Empleado("María", 250000, "Recursos Humanos");
  let persona3 = new Empleado("Carlos", 400000, "Desarrollo");
  let persona4 = new Empleado("Ana", 200000, "Marketing");
  let persona5 = new Empleado("Pedro", 350000, "Finanzas");
  let persona6 = new Empleado("Sofía", 280000, "Atención al Cliente");
  let persona7 = new Empleado("Luis", 380000, "Logística");
  let persona8 = new Empleado("Julia", 220000, "Diseño Gráfico");
  let persona9 = new Empleado("Miguel", 330000, "Seguridad");
  let persona10 = new Empleado("Daniela", 260000, "Compras");
}

function aumentarSalario(nombre) {
    let empleados = [
      persona1, persona2, persona3, persona4, persona5,
      persona6, persona7, persona8, persona9, persona10
    ];
  
    let empleado = empleados.find(e => e.nombre === nombre);
    if (empleado) {
      empleado.aumentarSalario(10); // Aumenta el salario en 10%
      mostrarEmpleados(); // Actualiza la lista de empleados
    }
}

function cambiarDepartamento(nombre) {
    let empleados = [
      persona1, persona2, persona3, persona4, persona5,
      persona6, persona7, persona8, persona9, persona10
    ];
  
    let empleado = empleados.find(e => e.nombre === nombre);
    if (empleado) {
      let nuevoDepartamento = prompt("Ingrese el nuevo departamento:");
      empleado.cambiarDepartamento(nuevoDepartamento);
      mostrarEmpleados();
    }
  }

// mostrar objetos por consola
function mostrarEmpleados() {

    // Creamos un arreglo con todos los objetos
    let empleados = [
        persona1, persona2, persona3, persona4, persona5,
        persona6, persona7, persona8, persona9, persona10
    ]; 
  
    // Recorremos el arreglo y mostramos cada objeto por consola
    empleados.forEach(empleado => {
        console.log(`Nombre: ${empleado.nombre}, Salario: ${empleado.salario}, Departamento: ${empleado.departamento}`);
    });
  

    // Obtenemos el div donde se mostrarán los objetos
    let box = document.getElementById("box");

    // Limpiamos el contenido del div
    box.innerHTML = "";

    // Recorremos el arreglo y mostramos cada objeto en el div
    box.innerHTML = `
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Salario</th>
                <th>Departamento</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="tbody-empleados">
            </tbody>
        </table>
    </div>
    `;

    empleados.forEach(empleado => {
        let salarioFormatado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(empleado.salario);
        document.getElementById('tbody-empleados').innerHTML += `
          <tr>
            <td class="filasContenido">${empleado.nombre}</td>
            <td class="filasContenido">${salarioFormatado}</td>
            <td class="filasContenido">${empleado.departamento}</td>
            <td class="filasContenido">
                <button class="btn btn-success mb-2" onclick="aumentarSalario('${empleado.nombre}')" title="Aumentar Salario">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 80c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16l0 17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1s0 0 0 0s0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1l0 17.1c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17.8c-11.2-2.1-21.7-5.7-30.9-8.9c0 0 0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5s0 0 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7l0-17.3c0-8.8 7.2-16 16-16z"/></svg>
                    <span class="d-none d-md-inline">
                        Aumentar Salario (10%)
                    </span>
                </button>
                <button class="btn btn-primary mb-2" onclick="cambiarDepartamento('${empleado.nombre}')" title="Cambiar Departamento">
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14l0 216c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381L0 184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8l0 197c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8l0-216c0-5.9 3.2-11.2 8.3-14l176-96z"/></svg>
                <span class="d-none d-md-inline">
                    Cambiar Departamento
                </span>
                </button>
            </td>
          </tr>
          
        `;
    });
}

function guardar() {
    let empleados = [
      persona1, persona2, persona3, persona4, persona5,
      persona6, persona7, persona8, persona9, persona10
    ];
  
    let empleadosJSON = JSON.stringify(empleados);
    localStorage.setItem('empleados', empleadosJSON);
  
    alert('Datos guardados con éxito en localStorage');
  }