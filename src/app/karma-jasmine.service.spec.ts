import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });


it('verificar si un número es par', ()=>{
 
  expect(service.esPar(4)).toBe(true);
  expect(service.esPar(7)).toBe(false);

});
it('verifica si una cadena es un palíndromo', () => {

  expect(service.esPalindromo("anita lava la tina")).toBe(true);
  expect(service.esPalindromo("hola mundo")).toBe(false);
  expect(service.esPalindromo("A man a plan a canal Panama")).toBe(true);

});

it('calcula el factorial de un número', () => {

  expect(service.factorial(5)).toBe(120);
  expect(service.factorial(0)).toBe(1);
  expect(service.factorial(10)).toBe(3628800);


});

describe('obtenerMaximo', () => {
  it('debería devolver el número máximo entre dos números', () => {
    expect(service.obtenerMaximo(5, 10)).toBe(10);
    expect(service.obtenerMaximo(8, 2)).toBe(8);
    expect(service.obtenerMaximo(0, 0)).toBe(0);
    expect(service.obtenerMaximo(-5, -10)).toBe(-5);
  });
});

describe('Pruebas para la función esPrimo', () => {
  it('Debería devolver true para un número primo', () => {
    expect(service.esPrimo(17)).toBe(true);
  });

  it('Debería devolver false para un número no primo', () => {
    expect(service.esPrimo(20)).toBe(false);
  });

  it('Debería devolver false para el número 1', () => {
    expect(service.esPrimo(1)).toBe(false);
  });
 
  describe('esPositivo', () => {
    it('debería devolver true si el número es positivo', () => {
      expect(service.esPositivo(5)).toBe(true);
      expect(service.esPositivo(8)).toBe(true);
      expect(service.esPositivo(0)).toBe(false);
      expect(service.esPositivo(-5)).toBe(false);
    });
  });
  describe('obtenerNumeroElementos', () => {
    it('debería devolver el número correcto de elementos en el array', () => {
      expect(service.obtenerNumeroElementos([1, 2, 3, 4, 5])).toBe(5);
      expect(service.obtenerNumeroElementos([])).toBe(0);
      expect(service.obtenerNumeroElementos(['a', 'b', 'c'])).toBe(3);
      expect(service.obtenerNumeroElementos([true, false])).toBe(2);
    });

  });
    describe('Pruebas de verificarSubstring', () => {
      it('Debe devolver true cuando la cadena contiene el substring', () => {
        const cadena = "Hola, ¿cómo estás?";
        const substring = "cómo";
        const resultado = service.verificarSubstring(cadena, substring);
        expect(resultado).toBe(true);
      });
    
      it('Debe devolver false cuando la cadena no contiene el substring', () => {
        const cadena = "Hola, ¿cómo estás?";
        const substring = "adiós";
        const resultado = service.verificarSubstring(cadena, substring);
        expect(resultado).toBe(false);
      });
});

describe('Pruebas de obtenerPromedio', () => {
  it('Debe devolver el promedio correcto cuando el array tiene elementos', () => {
    const numeros = [5, 10, 15, 20, 25];
    const promedio = service.obtenerPromedio(numeros);
    expect(promedio).toBe(15);
  });

  it('Debe devolver 0 cuando el array está vacío', () => {
    const numerosVacios = [];
    const promedioVacio = service.obtenerPromedio(numerosVacios);
    expect(promedioVacio).toBe(0);
  });
  describe('Pruebas de convertirEnArray', () => {
    it('Debe convertir una cadena en un array de caracteres', () => {
     var cadena = 'Hola, mundo!';
      var resultado = service.convertirEnArray(cadena);
      expect(resultado).toEqual(['H', 'o', 'l', 'a', ',', ' ', 'm', 'u', 'n', 'd', 'o', '!']);
    });

 
  describe('Pruebas de calcularSumaDigitos', () => {
    it('Debe calcular la suma de los dígitos correctamente', () => {
      const numero = 12345;
      const sumaDigitos = service.calcularSumaDigitos(numero);
      expect(sumaDigitos).toBe(15);
    });
 
  });
});
describe('Pruebas de anagramas', () => {
  it('Debe retornar true si las cadenas son anagramas', () => {
    expect(service.esAnagrama('roma', 'amor')).toBe(true);
    expect(service.esAnagrama('listen', 'silent')).toBe(true);
  });

  it('Debe retornar false si las cadenas no son anagramas', () => {
    expect(service.esAnagrama('hello', 'world')).toBe(false);
    expect(service.esAnagrama('abcd', 'dcbae')).toBe(false);



});
});
describe('Cálculo de área de polígono regular', () => {
  it('Debe calcular el área correctamente', () => {
    expect(service.calcularAreaPoligonoRegular(5, 7, 6)).toBe(105);
    expect(service.calcularAreaPoligonoRegular(8, 10, 4)).toBe(160);
    expect(service.calcularAreaPoligonoRegular(3, 6, 8)).toBe(72);
  });
});
describe('Encontrar moda en un array de números', () => {
  it('Debe encontrar la moda correctamente', () => {
    expect(service.encontrarModa([1, 2, 3, 4, 4, 5, 5, 5])).toBe(5);
    expect(service.encontrarModa([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toBe(4);
    expect(service.encontrarModa([5, 5, 5, 5, 5])).toBe(5);
    expect(service.encontrarModa([1, 2, 3])).toBe(null);
  });
});

});
});
});








