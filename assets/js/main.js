
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
        return `Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento:
        ${this.departamento}`
    }

}

// Creamos objetos para la clase EMpleado
let persona1 = new Empleado("Joaquín", "$300.000", "Ventas");
let persona2 = new Empleado("María", "$250.000", "Recursos Humanos");
let persona3 = new Empleado("Carlos", "$400.000", "Desarrollo");
let persona4 = new Empleado("Ana", "$200.000", "Marketing");
let persona5 = new Empleado("Pedro", "$350.000", "Finanzas");
let persona6 = new Empleado("Sofía", "$280.000", "Atención al Cliente");
let persona7 = new Empleado("Luis", "$380.000", "Logística");
let persona8 = new Empleado("Julia", "$220.000", "Diseño Gráfico");
let persona9 = new Empleado("Miguel", "$330.000", "Seguridad");
let persona10 = new Empleado("Daniela", "$260.000", "Compras");
  
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
    empleados.forEach(empleado => {
        box.innerHTML += `
            <p>Nombre: ${empleado.nombre}</p>
            <p>Salario: ${empleado.salario}</p>
            <p>Departamento: ${empleado.departamento}</p>
        <hr>
        `;
    });
}
        