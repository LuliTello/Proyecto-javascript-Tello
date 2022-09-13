//Tercera entrega complementaria

//variables
let usuario;
let password;
let elegir = false;
let from;
let fromGuardado;
let continuar = false;
let to;
let toGuardado;
let filtrado;
let validar = false;
let horario;
let encontrado;
let calcular = false;
let cantidad;
let precioTramo;
let pasajero = false;
let adulto = 1;
let jubilado = 0.85;
let niño = 0;
let pago = false;
let cuota;

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

const ingresoUsuario = () => {
    let usuario = prompt("Ingresa tu usuario para continuar");
    let password = prompt("Ingresa tu contraseña para continuar");

    while (usuario === '' || password === '') {
        usuario = prompt("Ingresa tu usuario para continuar");
        password = prompt("Ingresa tu contraseña para continuar");
    }
    //muestro al usuario
    alert(usuario.toUpperCase() + ' ' + 'ingresaste correctamente');
};
ingresoUsuario();

//filtro por origen y destino en  array con la informacion de los pasajes

const tramos = [

    { from: 'Buenos Aires', to: 'Cordoba', at: '13:00', price: 3500 },
    { from: 'Buenos Aires', to: 'Cordoba', at: '23:00', price: 3500 },
    { from: 'Cordoba', to: 'Buenos Aires', at: '13:00', price: 3500 },
    { from: 'Cordoba', to: 'Buenos Aires', at: '23:00', price: 3500 },
    { from: 'Buenos Aires', to: 'Santa Fe', at: '13:00', price: 2750 },
    { from: 'Buenos Aires', to: 'Santa Fe', at: '23:00', price: 2750 },
    { from: 'Santa Fe', to: 'Buenos Aires', at: '13:00', price: 2750 },
    { from: 'Santa Fe', to: 'Buenos Aires', at: '23:00', price: 2750 },
    { from: 'Cordoba', to: 'Santa Fe', at: '13:00', price: 2500 },
    { from: 'Cordoba', to: 'Santa Fe', at: '23:00', price: 2500 },
    { from: 'Santa Fe', to: 'Cordoba', at: '13:00', price: 2500 },
    { from: 'Santa Fe', to: 'Cordoba', at: '23:00', price: 2500 },
]

//funcion para elegir origen

const elegirOrigen = () => {
    while (elegir === false) {
        from = prompt('De donde quiere salir \n Buenos Aires \n Cordoba \n Santa Fe \n');
        fromGuardado = from.toLowerCase();
        if (fromGuardado === 'buenos aires' || fromGuardado === 'cordoba' || fromGuardado === 'santa fe') {
            elegir = true;

            alert('Usted ha seleccionado origen ' + fromGuardado);

            console.log(fromGuardado)
            return (fromGuardado)
        } else {
            alert('seleccione una opcion valida');
        }
    }
}
elegirOrigen();

//funcion para elegir destino

const elegirDestino = () => {
    while (continuar === false) {
        to = prompt('A donde quiere dirigirse sin repetir origen \n Buenos Aires \n Cordoba \n Santa Fe');
        toGuardado = to.toLowerCase();

        if ((toGuardado === 'buenos aires' || toGuardado === 'cordoba' || toGuardado === 'santa fe') && toGuardado !== fromGuardado) {
            continuar = true;

            alert('Usted ha seleccionado destino ' + toGuardado);
            console.log(toGuardado)
            return (toGuardado)
        } else {
            alert('seleccione una opcion valida');
        }
    }
}
elegirDestino();

//metodo filter para filtrar por destino y origenlet filtrado;
const filtrarPasaje = (arr, fromGuardado, toGuardado) => {
    filtrado = arr.filter((el) => {

        return el.from.toLowerCase() === fromGuardado && el.to.toLowerCase() === toGuardado;
    });

    return filtrado
}
const resultados = filtrarPasaje(tramos, fromGuardado, toGuardado);
console.log(resultados);

alert(`Ahora que ya conoce el origen y destino puede elegir un horario`);

//funcion para elegir horario

const validarHorario = () => {
    while (validar === false) {
        horario = prompt('Elija el horario en el que desea salir \n  13:00 \n  23:00 ');

        if (horario === '13:00' || horario === '23:00') {
            validar = true;

            alert('Usted ha seleccionado horario' + horario);
            console.log(horario)
            return horario
        } else {
            alert('seleccione una opcion valida');
        }
    }
}
validarHorario();

//metodo find para elegir el horario deseado

const buscarHorario = (arr, horario) => {
    pasajeEncontrado = arr.find((el) => {
        return el.at === horario
    });
    return pasajeEncontrado;
}
pasajeEncontrado = buscarHorario(resultados, horario);
console.log(pasajeEncontrado);
alert(`Usted ha elegido ${pasajeEncontrado.from} por un valor de $ ${pasajeEncontrado.price}`);
//Array vacio donde iran los pasajes comprados
const carrito = [];

class destino {
    constructor(desde, hasta, precio) {
        this.from = desde.toUpperCase();
        this.to = hasta.toUpperCase();
        this.at = horario;
        this.price = precio;

    }
}
carrito.push(pasajeEncontrado);
console.log(carrito);

//calculo de IVA usando MAP
const precioIva = carrito.map((el) => {
    return {
        from: el.from,
        to: el.to,
        at: el.at,
        price: el.price * 1.21
    }
})
console.log(precioIva);


//total compra usando reduce
const total = precioIva.reduce((acc, el) => {
    return acc + el.price;
}, 0);

alert('El precio de su reserva es de $' + ' ' + Math.round(total) + ' ' + 'FINAL');
console.log(precioIva);

//funcion para comprar pasaje segun cantidad pasajeros

const calcularPasaje = () => {

    while (calcular === false) {

        cantidad = parseInt(prompt('Ingrese un número de pasajeros'));

        if (!isNaN(cantidad)) {
            calcular = true;

            precioTramo = total * cantidad;

            alert('el precio de su pasaje es de: $' + precioTramo + ' ' + 'FINAL');
            return precioTramo;


        } else {
            calcular = false;
            alert('Ha elegido una opcion invalida');

        }
    }
}

//creacion de variable global y llamada a funcion
let precioPasaje = calcularPasaje(precioTramo);
//nuevo array segun cantidad de pasajeros
const precioCantidad = precioIva.map((el) => {
    return {
        from: el.from,
        to: el.to,
        at: el.at,
        price: el.price * cantidad
    }
})
console.log(precioCantidad);
//funcion descuento por tipo pasajero

const descuentoPasaje = () => {
    while (pasajero === false) {
        let tipoPasajero = parseInt(prompt('Seleccione la opción de tipo de pasajero \n 1-Adulto \n 2-Niño \n 3-Jubilado'));

        switch (tipoPasajero) {
            case 1:
                pasajero = true;

                precioPasaje = precioTramo * adulto;
                alert('Seleccionaste Adulto, tu pasaje no tiene descuento, el costo es de' + ' ' + '$' + Math.round(precioPasaje) + ' ' + 'FINAL');
                return precioPasaje;

            case 2:

                precioPasaje = precioTramo * niño;
                alert('Seleccionaste Niño, niños viajan gratis, el costo de tu pasaje es de ' + ' ' + '$' + precioPasaje + ' ' + 'FINAL');
                return precioPasaje;

            case 3:

                precioPasaje = precioTramo * jubilado;
                alert('Seleccionaste Jubilado, tu pasaje tiene un 15% de descuento, su costo es de' + ' ' + '$' + Math.round(precioPasaje) + ' ' + 'FINAL');
                return Math.round(precioPasaje);

            default:
                alert('Seleccionó una opcion no válida');
        }
    }
}
//llamado de función y creación de variable
let totalPagar = descuentoPasaje(precioPasaje);

//función para seleccionar tipo de pago
//declaración de variables

const seleccionPago = () => {
    while (pago === false) {
        let formaPago = prompt('Elija una forma de pago, debito, transferencia o credito');

        if (formaPago === 'debito' || formaPago === 'transferencia') {
            pago = true;
            totalPagar = precioPasaje * 0.85;
            alert('Usted ha seleccionado' + ' ' + formaPago + ' ' + ', tiene un 15% de descuento, debe abonar $' + ' ' + Math.round(totalPagar) + ' ' + 'FINAL');
            return Math.round(totalPagar);
        } else if (formaPago === 'credito') {

            totalPagar = precioPasaje;
            alert('Usted ha seleccionado' + ' ' + formaPago + ' ' + ', debe abonar $' + ' ' + Math.round(totalPagar) + ' ' + 'FINAL en cuotas');

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

//DOM
//agrego h2
const h2 = document.getElementById('h2');
h2.innerText = 'Servicios y Tarifas';

//genero li con la info del array en cards
const ul = document.getElementById('lista')
for (const viaje of tramos) {
    let li = document.createElement('li')

    li.innerHTML = `<div class = "card">
    <h4> ${viaje.from} - ${viaje.to} </h4>
    <p> ${viaje.at} Hs</p>
    <h5> $ ${viaje.price} /persona</h5> 
    <button class="card__link">Agregar</button>
    </div>`

    ul.append(li)
}

//agrego un h5 con terminos y condiciones
const h5 = document.createElement('h5');
h5.innerText = '* Terminos y condiciones';
h5.classList.add('terminos')
ul.append(h5)

//en los parrafos existentes de terminos y condiciones agrego contenido
let terminoClases = document.getElementsByClassName('terminos__texto')
for (const termino of terminoClases) {
    console.log(termino.innerHTML)
}

terminoClases[0].innerText = 'Los menores de 2 años no pagan pasaje y deben ir acompañados de 1 adulto.'
terminoClases[1].innerText = 'Jubilados 15% de descuento.'
terminoClases[2].innerText = 'La tarifa del pasaje incluye almuerzo o cena y un equipaje de mano.'

//agrego texto para ver el resultado de la reserva de pasajes
const formulario = document.querySelector('.formulario')
for (const resultado of precioCantidad) {
    let p = document.createElement('p')
    p.innerHTML = `Usted ha comprado un pasaje de origen ${resultado.from} con destino a ${resultado.to} en el horario de ${resultado.at} Hs. por un precio de $ ${resultado.price} Final`
    p.classList.add('resultado__compra')
    formulario.appendChild(p)
}

//Modifico los value de input nombre
const inputNombre = document.getElementById('nombre')
inputNombre.value = 'Ingrese nombre y apellido';

const inputMail = document.getElementById('email')
inputMail.value = 'Ingrese su mail';

const inputTel = document.getElementById('telefono')
inputTel.value = 'Ingrese su telefono';

const inputMsj = document.getElementById('consulta')
inputMsj.value = 'Ingrese su consulta o reclamo';

//mensaje de salida una vez hecha la compra
const p = document.createElement('p');
p.innerText = 'Muchas gracias por comprar con BulletTrain, que tenga un excelente viaje!';
p.classList.add('saludo')
document.body.append(p)






