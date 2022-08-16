let pasaje = 7000;
let viajeCB = prompt('Ingrese tipo de pasajero Adulto niño o jubilado');

if( viajeCB == 'Adulto' || viajeCB == 'adulto' || viajeCB == 'ADULTO'){
    alert('El costo de su viaje es de $' + ' ' + pasaje);
} else if ( viajeCB == 'Niño' || viajeCB == 'niño' || viajeCB == 'NIÑO'){
    alert ( 'El costo de su viaje es de $' + ' ' + (pasaje-pasaje));
}else if( viajeCB == 'Jubilado' || viajeCB == 'jubilado' || viajeCB == 'JUBILADO'){
    alert('El costo de su viaje es de $' + ' ' + (pasaje/1.15));
}else{
    alert('Error: Ingrese alguna de las opciones');
}