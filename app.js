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

//DOM y Eventos

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

//eliminar una reserva
const borrar = document.querySelector('#borrar')
borrar.addEventListener('click', () => {

    for (const elemento of reservados) {
        reservas.pop(elemento);

    }
    console.log(reservas);
    })

//sumar total de reserva para comprar

const section = document.querySelector('.reserva')
const comprar = document.querySelector('#comprar')
comprar.addEventListener('click', ()=>{
    
totalCompra = reservas.reduce((acc, el) => {
    return acc + parseInt(el.price);
}, 0);

console.log(parseInt(totalCompra));

let span = document.createElement('span')
span.innerText= `El total de su compra es de $ ${totalCompra} + IVA, finalice su compra y seleccione su forma de pago`
span.classList.add('compra_span')
section.append(span);
})

//forma de pago

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
        }else if(pagar === 'credito'){
            totalPagar = totalCompra *1.21;
            document.querySelector('#pagoSeleccionado').innerText = `Usted eligió la forma de pago ${pagar} su compra total es de ${totalPagar} Final, elija cantidad de cuotas a pagar`;
            
        }
        
        }
        seleccionPago();
        console.log(parseInt(totalPagar));
})
//cuotas


const cuotas = document.querySelector('#cuotas');
cuotas.addEventListener('change', ()=>{
    valorCuota = cuotas.value.toLowerCase();
    console.log(valorCuota);
    const seleccionCuotas = () => {
        if(valorCuota === 'una'){
            totalCuota= totalPagar/1;
            document.querySelector('#cuotaSeleccionada').innerText = `Usted eligió 1 cuota sin interes, el valor de su cuota es de $ ${totalCuota}`;
        }else if(valorCuota === 'tres'){
            totalCuota = (totalPagar*1.25)/3;
            document.querySelector('#cuotaSeleccionada').innerText = `Usted eligió 1 cuota sin interes, el valor de su cuota es de $ ${totalCuota}`;
        }else{
            totalCuota = (totalPagar*1.40)/6;
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
formulario.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    console.log(nombre.value)
    console.log(email.value)
    console.log(telefono.value)
    console.log(textarea.value)


});
   

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


//mensaje de salida una vez hecha la compra
const p = document.createElement('p');
p.innerText = 'Muchas gracias por comprar con BulletTrain, que tenga un excelente viaje!';
p.classList.add('saludo')
document.body.append(p)






