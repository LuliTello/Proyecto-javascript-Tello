//Segunda entrega complementaria

//funcion para dar bienvenida
const solicitarNombre = () => {
    alert('Usted ha ingresado a la plataforma BulletTrain para viajar seguro y rápido');
    let nombre = prompt('Por favor ingrese su nombre');
    while (nombre === '' || (!isNaN(nombre))) {
        nombre = prompt('Por favor ingrese su nombre');
    }
    //muestro al cliente
    alert('Hola' + ' ' + nombre.toUpperCase() + ' ' + 'bienvenido/a!, por favor registrate para comprar con nosotros');
}
//llamada a la funcion
solicitarNombre();

//funcion para ingresar
//variables
let usuario;
let password;
//funcion
const ingresoUsuario = () => {
    let usuario = prompt("Ingresa tu usuario para continuar");
    let password = prompt("Ingresa tu contraseña para continuar");

    while(usuario=== '' ||password === ''){
        usuario = prompt("Ingresa tu usuario para continuar");
        password = prompt("Ingresa tu contraseña para continuar");
    } 
    //muestro al usuario
    alert(usuario.toUpperCase() + ' ' + 'ingresaste correctamente');    
};
  ingresoUsuario();
//funcion para elegir destino

//Array
const carrito = [];

//Clase
class destino{
    constructor(tramo, precio) {
    this.name = tramo.toUpperCase();
    this.price = parseInt(precio);

}
}
//Objetos con tramos y precios
const destino1 = new destino('Bs.As-Cordoba', 3500);
const destino2 = new destino('Cordoba-Bs.As', 3500);
const destino3 = new destino('Bs.As-Santa Fe', 2750);
const destino4 = new destino('Santa Fe-Bs.As', 2750);
const destino5 = new destino('Santa Fe-Cordoba', 2500);
const destino6 = new destino('Cordoba-Santa Fe', 2500);

//declaracion de variables
let calcular = true;
let pasaje;

//funcion para agregar destinos al carrito
const agregarPasaje = () => {
    while (calcular === true) {
        pasaje = parseInt(prompt('Elija la opción de viaje \n 1- Bs.As-Cordoba \n 2- Cordoba-Bs.As \n 3- Bs.As-Santa Fe \n 4- Santa Fe-Bs.As \n 5- Santa Fe-Cordoba \n 6- Cordoba-Santa Fe \n 7- FINALIZAR COMPRA'));

        switch (pasaje) {
            case 1:

                carrito.push(destino1);
                alert('usted selecciono el tramo ' + ' ' + destino1.name + ' ' + 'que tiene un costo de $' + ' ' + destino1.price +  ' ' + 'IVA' );

                break;

            case 2:

                carrito.push(destino2);
                alert('usted selecciono el tramo ' + ' ' + destino2.name + ' ' + 'que tiene un costo de $' + ' ' + destino2.price +  ' ' + 'IVA');
                break;
            case 3:

                carrito.push(destino3);
                alert('usted selecciono el tramo' + ' ' + destino3.name + ' ' + 'que tiene un costo de $' + ' ' + destino3.price +  ' ' + 'IVA');
                break;
            case 4:

                carrito.push(destino4);
                alert('usted selecciono el tramo ' + ' ' + destino4.name + ' ' + 'que tiene un costo de $' + ' ' + destino4.price +  ' ' + 'IVA');
                break;
            case 5:

                carrito.push(destino5);
                alert('usted selecciono el tramo' + ' ' + destino5.name + ' ' + 'que tiene un costo de $' + ' ' + destino5.price +  ' ' + 'IVA');
                break;
            case 6:

                carrito.push(destino6);
                alert('usted selecciono el tramo' + ' ' + destino6.name + ' ' + 'que tiene un costo de $' + ' ' + destino6.price +  ' ' + 'IVA');
                break;
            case 7:

                calcular = false;
                alert('Usted ha reservado los pasajes');
                break;

            default:

                alert('Seleccionó una opción no válida');
                break;
        }
        
    }

}
console.log(carrito);
agregarPasaje();

//funcion para calcular el total
const total = carrito.reduce((acc, el) => {
    return acc + el.price;
  }, 0);

  alert('El precio de su reserva es de $' + ' ' + Math.round(total));
  console.log(carrito);

//funcion para comprar pasaje segun cantidad pasajeros
//Declaracion variables

calcular = false;
let precioTramo;
//funcion 
const calcularPasaje = () => {

    while (calcular === false) {

        let cantidad = parseInt(prompt('Ingrese un número de pasajeros'));

        if (!isNaN(cantidad)) {
            calcular = true;
            precioTramo = total * cantidad;

            alert('el precio de su pasaje es de: $' + precioTramo + ' ' + '+ IVA');
            return precioTramo;

        } else {
            calcular = false;
            alert('Ha elegido una opcion invalida');

        }
    }
}

//creacion de variable global y llamada a funcion
let precioPasaje = calcularPasaje(precioTramo);

//funcion descuento por tipo pasajero
//declaracion de variables
let pasajero = false;
//funcion
const descuentoPasaje = () => {
    while (pasajero === false) {
        let tipoPasajero = parseInt(prompt('Seleccione la opción de tipo de pasajero \n 1-Adulto \n 2-Niño \n 3-Jubilado'));

        switch (tipoPasajero) {
            case 1:
                pasajero = true;
                precioPasaje = precioTramo * 1;
                alert('Seleccionaste Adulto, tu pasaje no tiene descuento, el costo es de' + ' ' + '$' + Math.round(precioPasaje) + '' + '+IVA');
                return precioPasaje;
            case 2:
                precioPasaje = precioTramo * 0;
                alert('Seleccionaste Niño, niños viajan gratis, el costo de tu pasaje es de ' + ' ' + '$' + precioPasaje + '' + '+IVA');
                return precioPasaje;
            case 3:
                precioPasaje = precioTramo * 0.85;
                alert('Seleccionaste Jubilado, tu pasaje tiene un 15% de descuento, su costo es de' + ' ' + '$' + Math.round(precioPasaje) + '' + '+IVA');
                return Math.round(precioPasaje);
            default:
                alert('Seleccionó una opcion no válida');
        }
    }
}
//llamado de función y creación de variable
let precioDescuento = descuentoPasaje(precioPasaje);

//funcion para calcular IVA
const calcularIva = () =>{
    alert('El costo de su compra con IVA es de $' + ' ' + Math.round(precioDescuento * 1.21))
    return Math.round(precioDescuento * 1.21);
}
//creacion de variable global y llamada a funcion
let totalPagar = calcularIva(precioDescuento);

//función para seleccionar tipo de pago
//declaración de variables
let pago = false;
let cuota;
//función 
const seleccionPago = () => {
    while (pago === false) {
        let formaPago = prompt('Elija una forma de pago, debito, transferencia o credito');

        if (formaPago === 'debito' || formaPago === 'transferencia') {
            pago = true;
            valorReserva = totalPagar * 0.85;
            alert('Usted ha seleccionado' + ' ' + formaPago + ' ' + ', tiene un 15% de descuento, debe abonar $' + ' ' + Math.round(valorReserva) + ' ' + 'FINAL');
            return Math.round(valorReserva);
        } else if (formaPago === 'credito') {

            valorReserva = totalPagar;
            alert('Usted ha seleccionado' + ' ' + formaPago + ' ' + ', debe abonar $' + ' ' + Math.round(valorReserva) + ' ' + 'FINAL en cuotas');

            //switch para seleccionar cuotas a pagar y calcular el valor de la cuota
            let ingreseCuotas = parseInt(prompt('Elija la opción de cuotas que desee  \n 1- 1 cuota sin interés \n 2- 3 cuotas con 25% de interés \n 3- 6 cuotas con 40% de interés'));
            switch (ingreseCuotas) {
                case 1:
                    cuota = 1;
                    valorCuota = totalPagar / cuota;
                    alert('Ha seleccionado 1 cuota, el valor de su cuota por mes es de: $ ' + Math.round(valorCuota) + ' ' + 'FINAL');
                    return Math.round(valorCuota);
                case 2:
                    cuota = 3;
                    valorCuota = (totalPagar * 1.25) / cuota;
                    alert('Ha seleccionado 3 cuotas, el valor de su cuota por mes es de: $ ' + Math.round(valorCuota) + ' ' + 'FINAL');
                    return Math.round(valorCuota);
                case 3:
                    cuota = 6;
                    valorCuota = (totalPagar * 1.40) / cuota;
                    alert('Ha seleccionado 6 cuotas, el valor de su cuota por mes es de: $ ' + Math.round(valorCuota) + ' ' + 'FINAL');
                    return Math.round(valorCuota);
                default:
                    alert('Ingrese una opción válida');
            }

        }
    }

}
//llamada funcion
seleccionPago(totalPagar);

alert('Muchas gracias por comprar con BulletTrain, que tenga un excelente viaje!');
