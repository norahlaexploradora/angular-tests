import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }
   esPar(numero:any) {
  return numero % 2 === 0;
  
}
 
  esPalindromo(cadena: string) {

    cadena = cadena.replace(/\s/g, '').toLowerCase();
  
  
    var cadenaInvertida = cadena.split('').reverse().join('');
  
    
    return cadena === cadenaInvertida;
  }

 factorial(numero: number) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * this.factorial(numero - 1);
    }
  }

 obtenerMaximo(numero1: number, numero2: number) {
    return Math.max(numero1, numero2);
  }

  convertirAMayusculas({ cadena }: { cadena: any; }) {
    return cadena.toUpperCase();
  }

 esPrimo(numero: number) {
    if (numero <= 1) {
      return false;
    }

}

 esPositivo(numero: number) {
  if (numero > 0) {
    return true;
  } else {
    return false;
  }
}
 obtenerNumeroElementos(array) {
  return array.length;

}
 verificarSubstring(cadena, substring) {
  if (cadena.includes(substring)) {
    return true;
  } else {
    return false;
  }
}

obtenerPromedio(array) {
  if (array.length === 0) {
    return 0;
  }

  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  const promedio = suma / array.length;
  return promedio;
}

convertirEnArray(cadena: string) {
  return cadena.split('');
}
calcularSumaDigitos(numero: Number) {
  let suma = 0;
  const numeroString = numero.toString();

  for (let i = 0; i < numeroString.length; i++) {
    suma += parseInt(numeroString[i]);
  }

  return suma;
}
}







