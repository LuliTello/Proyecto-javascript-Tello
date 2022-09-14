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


//Array vacio donde iran los pasajes comprados
const carrito = [];

class destinoViaje {
    constructor(desde, hasta, precio) {
        this.from = desde.toUpperCase();
        this.to = hasta.toUpperCase();
        this.at = horario;
        this.price = precio;

    }
}

/*const descuentoPasaje = () => {
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
seleccionPago(totalPagar);*/

//DOM

const btnUsuario = document.querySelector('.btn__ingresar')
const header = document.querySelector('header')
// evento click para ingreso de usuario
btnUsuario.addEventListener('click', () => {
    const nombre = document.querySelector('.nombreUsuario__input').value
    const contraseña = document.querySelector('.contraseñaUsuario__input').value

    console.log(nombre);
    console.log(contraseña);
    const ingresoUsuarioYContraseña = () => {
        if ((nombre === '' || (!isNaN(nombre))) || contraseña === '') {
            let p = document.createElement('p')
            p.innerText = 'Ingrese Usuario y contraseñas validas'
            p.classList.add('fallo__ingreso')
            header.append(p);
        } else {
            let p = document.createElement('p')
            p.innerText = nombre.toUpperCase() + ' ha ingresado correctamente, proceda a hacer su reserva'
            p.classList.add('valido__ingreso')
            header.append(p);
        }
    }
    ingresoUsuarioYContraseña();
})
// evento change para seleccionar origen
const selectOrigen = document.querySelector('#origen')

selectOrigen.addEventListener('change', () => {
    from = selectOrigen.value
    console.log(from);
    const elegirOrigen = () => {
        if ((from === 'buenos aires' || from === 'cordoba' || from === 'santa fe') && from !== destino) {
            document.querySelector('#origenSeleccionado').innerText = `Usted ha seleccionado origen ${from}`;
        } else {
            document.querySelector('#origenSeleccionado').innerText = 'Debe seleccionar un Origen para continuar'
        }
    }
    elegirOrigen();
})
// evento change para seleccionar destino
const selectDestino = document.querySelector('#destino')
selectDestino.addEventListener('change', () => {
    to = selectDestino.value;
    console.log(to);
    const elegirDestino = () => {
        if ((to === 'buenos aires' || to === 'cordoba' || to === 'santa fe') && to !== from) {
            document.querySelector('#destinoSeleccionado').innerText = `Usted ha seleccionado origen ${to}`;
        } else {
            document.querySelector('#destinoSeleccionado').innerText = 'Debe seleccionar un destino para continuar'
        }
    }
    elegirDestino();

})

// evento change para seleccionar horario

const selectHorario = document.querySelector('#horario')
selectHorario.addEventListener('change', () => {
    horario = selectHorario.value;
    console.log(horario);
    const elegirHorario = () => {
        if (horario === '13:00' || horario === '23:00') {
            document.querySelector('#horarioSeleccionado').innerText = `Usted eligió el horario ${horario}`;
        } else {
            document.querySelector('#horarioSeleccionado').innerText = 'Debe seleccionar un horario para continuar'
        }
    }
    elegirHorario();
})
//buscar pasaje con parametros seleccionados
let reservados;
const buscar = document.querySelector('#buscar')
buscar.addEventListener('click', () => {

    const filtrarPasaje = (arr, from, to, horario) => {
        filtrado = arr.filter((el) => {

            return el.from.toLowerCase() === from && el.to.toLowerCase() === to && el.at === horario;
        });

        return filtrado
    }
    reservados = filtrarPasaje(tramos, from, to, horario);
    console.log(reservados);

    const formulario = document.querySelector('.formulario')
    for (const resultado of reservados) {
        let span = document.createElement('span')
        span.innerText = `Resultado busqueda origen desde ${resultado.from} y destino ${resultado.to} en el horario de ${resultado.at} tiene un costo de $ ${resultado.price}`
        span.classList.add('resultado__compra')
        formulario.appendChild(span)
    }
})
//agregar al carrito

const reservas = [];
const contenedorReserva = document.querySelector('.reservas')
const agregar = document.querySelector('#agregar')
agregar.addEventListener('click', () => {

    for (const elemento of reservados) {
        reservas.push(elemento);

        console.log(reservas);
    let div = document.createElement('div')
    div.innerHTML = `
    <h4> ${elemento.from} - ${elemento.to} </h4>
    <p> ${elemento.at} Hs</p>
    <h5> $ ${elemento.price} /persona</h5>`
     div.classList.add('card-reserva')   
       
     contenedorReserva.append(div)
    }
})

//sumar total de reserva para comprar
let totalCompra;
const section = document.querySelector('.reserva')
const comprar = document.querySelector('#comprar')
comprar.addEventListener('click', ()=>{
    
totalCompra = reservas.reduce((acc, el) => {
    return acc + el.price;
}, 0);

console.log(totalCompra);

let span = document.createElement('span')
span.innerText= `El total de su compra es de $ ${totalCompra} + IVA, seleccione su forma de pago`
span.classList.add('compra_span')
section.append(span);
})
//finalizar compra
/*const finalizar = document.querySelector('#finalizar')
compraFinalizada = false;
finalizar.addEventListener('click', () =>{
   
    
})*/
//forma de pago
//forma de pago

let pagar;
let totalPagar;
const formaPago = document.querySelector('#formaPago')
formaPago.addEventListener('change', ()=>{

    pagar = formaPago.value.toLowerCase()
    console.log(pagar)

    const seleccionPago = () => {
        if(pagar==='debito'){
            totalPagar = (totalCompra * 1.21) * 0.85;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} con un descuento del 15%, su compra total es de ${totalPagar} Final`;
        }else if (pagar === 'transferencia'){
            totalPagar = (totalCompra * 1.21) * 0.85;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} con un descuento del 15%, su compra total es de ${totalPagar} Final`;
        }else{
            totalPagar = totalCompra *1.21;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} su compra total es de ${totalPagar} Final`;
        }
        
        }
        seleccionPago();
})


//change para seleccionar tipo pasajero
const selectPasajero = document.querySelector('#pasajero')
selectPasajero.addEventListener('change', () => {
    pasajero = selectPasajero.value;
    console.log(pasajero);

    const elegirPasajero = () => {
        if (pasajero === 'adulto' || pasajero === 'menor' || pasajero === 'jubilado') {
            document.querySelector('#pasajeroSeleccionado').innerText = `Usted seleccionó tipo de pasajero ${pasajero}`;
        } else {
            document.querySelector('#pasajeroSeleccionado').innerText = 'por favor seleccione una opcion valida';
        }
    }
    elegirPasajero();
})

//formulario de contacto
/*const submit = document.querySelector('#submit')
submit.addEventListener('submit', (e)=>{
   
    e.preventDefault();

    let formulario =e.target
    console.log(formulario[0].value)
    console.log(formulario[1].value)
    console.log(formulario[2].value)
    console.log(formulario[3].value)
})*/

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

/*//Modifico los value de input nombre
const inputNombre = document.getElementById('nombre')
inputNombre.value = 'Ingrese nombre y apellido';

const inputMail = document.getElementById('email')
inputMail.value = 'Ingrese su mail';

const inputTel = document.getElementById('telefono')
inputTel.value = 'Ingrese su telefono';

const inputMsj = document.getElementById('consulta')
inputMsj.value = 'Ingrese su consulta o reclamo';*/

//mensaje de salida una vez hecha la compra
const p = document.createElement('p');
p.innerText = 'Muchas gracias por comprar con BulletTrain, que tenga un excelente viaje!';
p.classList.add('saludo')
document.body.append(p)






