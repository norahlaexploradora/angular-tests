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
});







