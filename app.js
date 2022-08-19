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

//BUCLE

let destino1 = 'cordoba';
let destino2 = 'santa fe';
let destino3 = 'buenos aires';
let compraPasaje = prompt('escriba en minusculas a donde quiere ir');

while(compraPasaje !== destino1 && compraPasaje !== destino2 && compraPasaje !== destino3){
    alert('Usted no puede comprar su pasaje');
    compraPasaje = prompt('escriba en minusculas a donde quiere ir');
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
alert('usted supero los intentos para ingresar usuario y contraseña');
}*/



