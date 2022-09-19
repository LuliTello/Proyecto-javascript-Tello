//Segunda entrega Proyecto final

//variables
let from;
let to;
let filtrado;
let horario;
let cantidad;
let cuota;
let reservados;
let totalCompra;
let pagar;
let totalPagar;
let valorCuota;

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

//clase para crear objetos
class destinoViaje {
    constructor(desde, hasta, precio) {
        this.from = desde.toUpperCase();
        this.to = hasta.toUpperCase();
        this.at = horario;
        this.price = precio;

    }
}

//DOM y Eventos

// evento click para ingreso de usuario
const btnUsuario = document.querySelector('.btn__ingresar');
const header = document.querySelector('header');
btnUsuario.addEventListener('click', () => {
    const nombre = document.querySelector('.nombreUsuario__input').value
    const contraseña = document.querySelector('.contraseñaUsuario__input').value

    console.log(nombre);
    console.log(contraseña);

    //almacenamos usuario 

    localStorage.setItem('user', JSON.stringify(nombre));

    //funcion para validar ingreso
    const ingresoUsuarioYContraseña = () => {
        if ((nombre === '' || (!isNaN(nombre))) || contraseña === '') {
            let p = document.createElement('p')
            p.innerText = 'Ingrese Usuario y contraseñas validas'
            p.classList.add('fallo__ingreso')
            header.append(p);
        } else {
            //accedemos a los datos usuario para saludar al ingresar

            userAlmacenado = JSON.parse(localStorage.getItem('user'));
            let p = document.createElement('p')
            p.innerText = `${userAlmacenado} ha ingresado correctamente, proceda a hacer su reserva`/*nombre.toUpperCase() + ' ha ingresado correctamente, proceda a hacer su reserva'*/
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
//buscar pasaje con parametros seleccionados usando filter

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
//evento para agregar la reserva con click

const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
const contenedorReserva = document.querySelector('.reservas')
const agregar = document.querySelector('#agregar')
agregar.addEventListener('click', () => {

    for (const elemento of reservados) {
        //llamada a funcion agregar
        agregarReserva(elemento)

    }
})
//funcion para agregar reserva al arreglo
function agregarReserva(elemento) {
    let existe = reservas.some(elem => elem.from === elemento.from && elem.to === elemento.to);
    if (existe === false) {
        elemento.cantidad = 1;
        reservas.push(elemento);
    } else {
        let elemFind = reservas.find(elem => elem.from === elemento.from && elem.to === elemento.to)
        elemFind.cantidad++;

    }
    console.log(reservas)
    //llamada a funcion mostrar
    mostrarReserva();
}
//funcion mostrar reserva en formato cards
function mostrarReserva() {
    contenedorReserva.innerHTML = "";
    for (const elemento of reservas) {
        contenedorReserva.innerHTML += `<div class="card-reserva">
        <h4> ${elemento.from} - ${elemento.to} </h4>
        <p> ${elemento.at} Hs</p>
        <h5> $ ${elemento.price} /persona</h5>
        <p>${elemento.cantidad}</p>
        </div>`
    }
    //almacenamiento de reservas con localStorage
    localStorage.setItem('reservas', JSON.stringify(reservas));
}
//eliminar una reserva con evento click
const borrar = document.querySelector('#borrar')
borrar.addEventListener('click', () => {

    for (const elemento of reservados) {
        borrarCarrito(elemento);
    }
    console.log(reservas);
})

function borrarCarrito(elemento) {
    const findIndex = reservas.indexOf(elemento);
    reservas.splice(findIndex, 1);
    mostrarReserva();

}
//sumar total de reserva para comprar usando reduce y evento click

const section = document.querySelector('.reserva')
const comprar = document.querySelector('#comprar')
comprar.addEventListener('click', () => {

    totalCompra = reservas.reduce((acc, elemento) => {
        return acc + parseInt(elemento.price * elemento.cantidad);
    }, 0);

    console.log(parseInt(totalCompra));

    let span = document.createElement('span')
    span.innerText = `El total de su compra es de $ ${totalCompra} + IVA, finalice su compra y seleccione su forma de pago`
    span.classList.add('compra_span')
    section.append(span);
})

//forma de pago con evento change

const formaPago = document.querySelector('#formaPago')
formaPago.addEventListener('change', () => {

    pagar = formaPago.value.toLowerCase()
    console.log(pagar)

    const seleccionPago = () => {
        if (pagar === 'debito') {
            totalPagar = (totalCompra * 1.21) * 0.85;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} con un descuento del 15%, su compra total es de ${totalPagar} Final`;
        } else if (pagar === 'transferencia') {
            totalPagar = (totalCompra * 1.21) * 0.85;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} con un descuento del 15%, su compra total es de ${totalPagar} Final`;
        } else if (pagar === 'credito') {
            totalPagar = totalCompra * 1.21;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} su compra total es de ${totalPagar} Final, elija cantidad de cuotas a pagar`;

        } else {
            document.querySelector('#pagoSeleccionado').innerText = `Seleccione una opcion valida`
        }

    }
    seleccionPago();
    console.log(parseInt(totalPagar));
    // borrar almacenamiento una vez hecha la compra
    localStorage.clear();
})
//evento change para elegor cuotas
const cuotas = document.querySelector('#cuotas');
cuotas.addEventListener('change', () => {
    valorCuota = cuotas.value.toLowerCase();
    console.log(valorCuota);
    //funcion para elegir cuotas
    const seleccionCuotas = () => {
        if (valorCuota === 'una') {
            totalCuota = totalPagar / 1;
            document.querySelector('#cuotaSeleccionada').innerText = `Usted eligió 1 cuota sin interes, el valor de su cuota es de $ ${totalCuota}`;
        } else if (valorCuota === 'tres') {
            totalCuota = (totalPagar * 1.25) / 3;
            document.querySelector('#cuotaSeleccionada').innerText = `Usted eligió 1 cuota sin interes, el valor de su cuota es de $ ${totalCuota}`;
        } else {
            totalCuota = (totalPagar * 1.40) / 6;
            document.querySelector('#cuotaSeleccionada').innerText = `Usted eligió 1 cuota sin interes, el valor de su cuota es de $ ${totalCuota}`;
        }
    }
    seleccionCuotas();
    console.log(parseInt(totalCuota));
})

//formulario de contacto
const formulario = document.querySelector('.form-contacto')
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const telefono = document.querySelector('#telefono')
const textarea = document.querySelector('#consulta')
formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log(nombre.value)
    console.log(email.value)
    console.log(telefono.value)
    console.log(textarea.value)


    //almacenar informacion de formulario
    localStorage.setItem('nombre', JSON.stringify(nombre.value));


    //acceder a la informacion
    let nombreAlmacenado = JSON.parse(localStorage.getItem('nombre'));

    //mensaje de saludo una vez enviado el formulario con el nombre guardado en localStorage
    const p = document.createElement('p');
    p.innerText = `${nombreAlmacenado} Muchas gracias por elegirnos, que tenga un excelente viaje!`;
    p.classList.add('saludo')
    document.body.append(p)
});

//agrego h2
const h2 = document.getElementById('h2');
h2.innerText = 'Servicios y Tarifas';

//genero cards con la info del array
const divCard = document.querySelector('.card__flex')
for (const viaje of tramos) {
    let divServ = document.createElement('div')

    divServ.innerHTML = `<div class = "card">
    <h4> ${viaje.from} - ${viaje.to} </h4>
    <p> ${viaje.at} Hs</p>
    <h5> $ ${viaje.price} /persona</h5> 
    </div>`
    divCard.append(divServ)
}

//agrego un h5 con terminos y condiciones
const servicios = document.querySelector('.terminosTitulo');
const h5 = document.createElement('h5');
h5.innerText = '* Terminos y condiciones';
h5.classList.add('terminos')
servicios.append(h5)

//en los parrafos existentes de terminos y condiciones agrego contenido
let terminoClases = document.getElementsByClassName('terminos__texto')
for (const termino of terminoClases) {

}

terminoClases[0].innerText = 'Los menores de 2 años no pagan pasaje y deben ir acompañados de 1 adulto.'
terminoClases[1].innerText = 'Jubilados 15% de descuento.'
terminoClases[2].innerText = 'La tarifa del pasaje incluye almuerzo o cena y un equipaje de mano.'








