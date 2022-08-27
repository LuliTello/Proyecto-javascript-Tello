//simulador interactivo

//funcion para dar bienvenida
function solicitarNombre() {
    alert('Usted ha ingresado a la plataforma BulletTrain para viajar seguro y rápido');
    let nombre = prompt('Por favor ingrese su nombre');
    while (nombre === '' || (!isNaN(nombre))) {
        nombre = prompt('Por favor ingrese su nombre');
    }
    //muestro al cliente
    alert('Hola' + ' ' + nombre + ' ' + 'bienvenido/a!');
}
//llamada a la funcion
solicitarNombre();

//funcion para elegir destino
//Declaracion variables

let calcular = false;
let destino;
let precio = 0;
//funcion 

function elegirDestino() {
    while (calcular === false) {

        destino = parseInt(prompt('Elija la opción de viaje \n 1- Bs.As-Cordoba \n 2- Cordoba-Bs.As \n 3- Bs.As-Santa Fe \n 4- Santa Fe-Bs.As \n 5- Santa Fe-Cordoba \n 6- Cordoba-Santa Fe'));

        switch (destino) {
            case 1:
                calcular = true;
                destino = 'Bs.As-Cba';
                precio = 3500;
                alert('Usted ha seleccionado tipo de viaje IDA' + ' ' + destino + ' ' + 'que tiene un costo de $' + ' ' + precio + ' ' + '+ IVA');
                return precio;
            case 2:
                destino = 'Cba-Bs.As';
                precio = 3500;
                alert('Usted ha seleccionado tipo de viaje IDA' + ' ' + destino + ' ' + 'que tiene un costo de $' + ' ' + precio + ' ' + '+ IVA');
                return precio;
            case 3:
                destino = 'Bs.As-Sta Fe';
                precio = 2750;
                alert('Usted ha seleccionado tipo de viaje IDA' + ' ' + destino + ' ' + 'que tiene un costo de $' + ' ' + precio + ' ' + '+ IVA');
                return precio;
            case 4:
                destino = 'Sta Fe-Bs.As';
                precio = 2750;
                alert('Usted ha seleccionado tipo de viaje IDA' + ' ' + destino + ' ' + 'que tiene un costo de $' + ' ' + precio + ' ' + '+ IVA');
                return precio;
            case 5:
                destino = 'Sta Fe-Cba';
                precio = 2750;
                alert('Usted ha seleccionado tipo de viaje IDA' + ' ' + destino + ' ' + 'que tiene un costo de $' + ' ' + precio + ' ' + '+ IVA');
                return precio;
            case 6:
                destino = 'Cba-Sta Fe';
                precio = 2750;
                alert('Usted ha seleccionado tipo de viaje IDA' + ' ' + destino + ' ' + 'que tiene un costo de $' + ' ' + precio + ' ' + '+ IVA');
                return precio;

            default:
                alert('Seleccionó una opción no válida');

        }

    }
}

let precioTramo = elegirDestino();

//funcion para elegir ida y vuelta

//declaracion de variable
let tramo = false;
//funcion
function idaVuelta() {
    while (tramo === false) {
        let elijaTramo = prompt('Seleccione la opción ida o idavuelta');

        if (elijaTramo === 'ida') {
            tramo = true;
            precioTramo = precio;
            alert('Eligió la opción ida, el precio del pasaje es de $' + ' ' + precioTramo + ' ' + '+ IVA');
            return precioTramo;
        } else if (elijaTramo === 'idavuelta') {
            precioTramo = precio * 2;
            alert('Eligió la opción idavuelta, el precio del pasaje es de $' + ' ' + precioTramo + ' ' + '+ IVA');
            return precioTramo;
        }
    }
}
let precioCantidad = idaVuelta(precioTramo);

//funcion para comprar pasaje segun cantidad pasajeros
//Declaracion variables

calcular = false;
//funcion 
function calcularPasaje() {

    while (calcular === false) {

        let cantidad = parseInt(prompt('Ingrese un número de pasajeros'));

        if (!isNaN(cantidad)) {
            calcular = true;
            precioCantidad = cantidad * precioTramo;
            alert('el precio de su pasaje es de: $' + precioCantidad + ' ' + '+ IVA');
            return precioCantidad;

        } else if (!isNaN(cantidad)) {
            precioCantidad = cantidad * precioTramo;
            alert('el precio de su pasaje es de: $' + precioCantidad + ' ' + '+ IVA');
            return precioCantidad;

        }
    }
}

//creacion de variable global y llamada a funcion
let precioPasaje = calcularPasaje(precioCantidad);

//funcion descuento por tipo pasajero
//declaracion de variables
let pasajero = false;
//funcion
function descuentoPasaje() {
    while (pasajero === false) {
        let tipoPasajero = parseInt(prompt('Seleccione la opción de tipo de pasajero \n 1-Adulto \n 2-Niño \n 3-Jubilado'));

        switch (tipoPasajero) {
            case 1:
                pasajero = true;
                precioPasaje = precioCantidad * 1;
                alert('Seleccionaste Adulto, tu pasaje no tiene descuento, el costo es de' + ' ' + '$' + Math.round(precioPasaje) + '' + '+IVA');
                return precioPasaje;
            case 2:
                precioPasaje = precioCantidad * 0;
                alert('Seleccionaste Niño, niños viajan gratis, el costo de tu pasaje es de ' + ' ' + '$' + precioPasaje + '' + '+IVA');
                return precioPasaje;
            case 3:
                precioPasaje = precioCantidad * 0.85;
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
function calcularIva() {
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
function seleccionPago() {
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

