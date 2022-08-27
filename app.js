//simulador interactivo

//funcion para dar bienvenida
function solicitarNombre() {
    alert('Usted ha ingresado a la plataforma BulletTrain para viajar seguro y rápido');
    let nombre = prompt('Por favor ingrese su nombre');
    while (nombre === '') {
        nombre = prompt('Por favor ingrese su nombre');
    }
    //muestro al cliente
    alert('Hola' + ' ' + nombre + ' ' + 'bienvenido/a!');
}
//llamada a la funcion
solicitarNombre();


//funcion para comprar pasaje
//Declaracion variables
let resultado = 0;
let precio;
let calcular = false;
//funcion compra pasaje segun destino y cantidad
function calcularPasaje() {

    while (calcular === false) {

        let destino = prompt('Elija un destino entre cordoba y santa fe');
        let cantidad = parseInt(prompt('Ingrese un número de pasajeros'));

        if (destino === 'cordoba' && !isNaN(cantidad)) {
            calcular = true;
            precio = 7000
            resultado += cantidad * precio;
            alert('el precio de su pasaje es de: $' + resultado + '' + '+IVA');
            return resultado;

        } else if (destino === 'santa fe' && !isNaN(cantidad)) {
            precio = 5500
            resultado += cantidad * precio;
            alert('el precio de su pasaje es de: $' + resultado + '' + '+IVA');
            return resultado;

        }
    }
}
//creacion de variable global y llamada a funcion
let precioPasaje = calcularPasaje();

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
            precioPasaje = resultado*1;
            alert('Seleccionaste Adulto, tu pasaje no tiene descuento, el costo es de' + ' ' + '$' + Math.round(precioPasaje)) + '' + '+IVA';
            return precioPasaje;
        case 2:
            precioPasaje = resultado * 0;
            alert('Seleccionaste Niño, niños viajan gratis, el costo de tu pasaje es de ' + ' ' + '$' + precioPasaje) + '' + '+IVA';
            return precioPasaje;
        case 3:
            precioPasaje = resultado * 0.85;
            alert('Seleccionaste Jubilado, tu pasaje tiene un 15% de descuento, su costo es de' + ' ' + '$' + Math.round(precioPasaje)) + '' + '+IVA';
            return Math.round(precioPasaje);
        default:
            alert('Seleccionó una opcion no válida');
    }
}
}
//llamado de función y creación de variable
let precioDescuento = descuentoPasaje(precioPasaje);

//funcion para calcular IVA
function calcularIva(){
    alert('El costo de su compra con IVA es de $' + ' ' + Math.round(precioDescuento*1.21))
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
            valorReserva = totalPagar*0.85;
            alert('Usted ha seleccionado' + ' ' + formaPago + ' ' + ', tiene un 15% de descuento, debe abonar $' + ' ' + Math.round(valorReserva));
            return Math.round(valorReserva);
        } else if (formaPago === 'credito') {

            valorReserva = totalPagar;
            alert('Usted ha seleccionado' + ' ' + formaPago + ' ' + ', debe abonar $' + ' ' + Math.round(valorReserva) + ' ' + 'por favor seleccione número de cuotas');
            
            //switch para seleccionar cuotas a pagar y calcular el valor de la cuota
            let ingreseCuotas = parseInt(prompt('Elija la opción de cuotas que desee  \n 1- 1 cuota sin interés \n 2- 3 cuotas con 25% de interés \n 3- 6 cuotas con 40% de interés'));
            switch (ingreseCuotas) {
                case 1:
                    cuota = 1;
                    valorCuota = totalPagar/cuota;
                    alert('Ha seleccionado 1 cuota, el valor de su cuota por mes es de: $ ' + Math.round(valorCuota) + ' ' + 'FINAL');
                    return Math.round(valorCuota);
                case 2: 
                    cuota=3; 
                    valorCuota = (totalPagar*1.25)/cuota;
                    alert('Ha seleccionado 3 cuotas, el valor de su cuota por mes es de: $ ' + Math.round(valorCuota) + ' ' + 'FINAL');
                    return Math.round(valorCuota);
                case 3:  
                    cuota = 6;
                    valorCuota = (totalPagar*1.40)/cuota;
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

