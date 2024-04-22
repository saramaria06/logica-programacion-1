let numero1 = prompt("ingrese el primer numero");
let numero2 = prompt("ingrese el segundo numero");
let numero3 = prompt("ingrese el tercer numero");

let numeros = [numero1, numero2, numero3]

function validacion(cantidades){
    if (cantidades[0] > cantidades[1] && cantidades[0] > cantidades[2]){
        return "la cantidad mayor es : " + cantidades[0]
    }else if (cantidades[1] > cantidades[2] && cantidades[1] > cantidades[2]) {
        return "la cantidad mayor es: " + cantidades[1]
    }else {
        return "la cantidad mayor es: " + cantidades[2]
    }    
}

console.log(validacion(cantidades))

if (numero1 >= numero2 && numero1 >= numero3){
    numeros = numero1;
    if(numer2 >= numero3){
        numeros = numero2;
        numeros = numero3;
    }else {
        numeros = numero3;
        numeros = numero2;
    }if (numero2 >= numero3 && numero2 >= numero1){
        numeros = numero2;
        if(numero3 >= numero1){
            numeros = numero3;
            numeros = numero1;
        }else {
            numeros = numero1;
            numeros = numero3;
        }
    }
}

console.log("el numero mayor es: " + numero1 + ", " + numero2 + ", " + numero3  );

if (numero1 === numero2 && numero2 === numero3) {
    console.log("los numeros son inguales")
}