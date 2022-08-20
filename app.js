/* CONDICIONAL
let pasaje = 7000;
let pasaje2 = 5500;
let destino = prompt('Ingrese la opcion de destino Cordoba o Santa Fe');
let pasajero = prompt('Ingrese tipo de pasajero Adulto niño o jubilado');

if(( pasajero == 'Adulto' || pasajero == 'adulto' || pasajero == 'ADULTO') && (destino == 'Cordoba' || destino == 'cordoba' || destino == 'CORDOBA')){
    alert('El costo de su pasajero es de $' + ' ' + pasaje);

} else if (( pasajero == 'Adulto' || pasajero == 'adulto' || pasajero == 'ADULTO') && (destino == 'Santa Fe' || destino == 'santa fe' || destino == 'SANTA FE')){
    alert('El costo de su pasajero es de $' + ' ' + pasaje2);   

} else if (( pasajero == 'Niño' || pasajero == 'niño' || pasajero == 'NIÑO') && (destino == 'Cordoba' || destino == 'cordoba' || destino == 'CORDOBA')){
    alert ( 'El costo de su pasajero es de $' + ' ' + (pasaje-pasaje));

} else if (( pasajero == 'Niño' || pasajero == 'niño' || pasajero == 'NIÑO') && (destino == 'Santa Fe' || destino == 'santa fe' || destino == 'SANTA FE')){
    alert ( 'El costo de su pasajero es de $' + ' ' + (pasaje2-pasaje2));  

}else if(( pasajero == 'Jubilado' || pasajero == 'jubilado' || pasajero == 'JUBILADO') && (destino == 'Cordoba' || destino == 'cordoba' || destino == 'CORDOBA')){
    alert('El costo de su pasajero es de $' + ' ' + (pasaje/1.15));

}else if(( pasajero == 'Jubilado' || pasajero == 'jubilado' || pasajero == 'JUBILADO') && (destino == 'Santa Fe' || destino == 'santa fe' || destino == 'SANTA FE')){
    alert('El costo de su pasajero es de $' + ' ' + (pasaje2/1.15));  

}else{
    alert('Error: Ingrese alguna de las opciones');
}*/

// DESAFIO BUCLE
//While

let destino1 = 'cordoba';
let destino2 = 'santa fe';
let destino3 = 'buenos aires';
let condition = true;

while(condition === true){
    let compraPasaje = prompt('escriba en minusculas a donde quiere viajar');
    if(compraPasaje === destino1 || compraPasaje === destino2 || compraPasaje === destino3){
        condition = false;
        alert('Usted ha reservado su pasaje');
        
    } else {
        alert('el lugar no existe, vuelva a ingresar un destino ')
    }
}


/*//otro bucle con while
let ingresar = false;
let usuario = 'lucia';
let contraseña = 'contraseña';
let contador = 0;


while(contador < 3 && ingresar === false){
    let palabraUsuario = prompt('ingrese su usuario');
    let palabraContraseña = prompt('ingrese su contraseña');
    if( palabraUsuario === usuario && palabraContraseña === contraseña ){
        ingresar = true;
        alert('usted ha ingresado correctamente');
    }
    contador++;
}
if (contador == 3 || !ingresar){
alert('usted superó los intentos para ingresar usuario y contraseña');
}*/

//for
//guerra cartas

/*for ( let i=0; i<=5; i++){

    let cartaJugador1 = parseInt (prompt('Jugador 1 seleccione el valor de una carta'));
    let cartaJugador2 = parseInt (prompt('Jugador 2 seleccione el valor de una carta'));

    if(cartaJugador1 > cartaJugador2){
        alert('El jugador 1 ha ganado esta partida')

    } else if (cartaJugador1 == cartaJugador2){
        alert('es un empate');
    }else{
        alert('El jugador 2 ha ganado');
        
    }
}*/