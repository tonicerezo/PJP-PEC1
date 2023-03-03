export function ex1(temp) {

    /*La función devuelve true si el argumento recibido temp es mayor o igual a 37*/
    return (temp>=37)

}

export function ex2(price, tax) { 

    /*Se calcula el incremento y se almacena en la variable inc*/
    let inc = price*tax;

    /*Una vez calculado se devuelve el precio de venta al público sumando dicho incremento al precio inicial recibido como
    parámetro*/

    return price+inc;
}

 