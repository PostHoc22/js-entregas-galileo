//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const esPar = (numero) => {
  if (numero % 2 === 0) return "es par";
  else return "no es par, es impar";
};
console.log(esPar(2));
console.log(esPar(3));

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayorOMenor = (num1, num2) => {
  if (num1 > num2) return `${num1} es mayor que ${num2}`;
  else if (num1 < num2) return `${num2} es mayor que ${num1}`;
  else return `ambos numeros ingresados son iguales`;
};
console.log(mayorOMenor(10, 8));
console.log(mayorOMenor(18, 22));
console.log(mayorOMenor(5, 5));

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploDeCinco = (numero) => {
  if (numero % 5 === 0) return `El numero ${numero} es multiplo de 5`;
  else return "el valor ingresado no es multiplo de 5";
};
console.log(multiploDeCinco(15));
console.log(multiploDeCinco(23));

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const imprimeNumeros = (num) => {
  let inicio = 0;
  while (inicio <= num) {
    console.log(inicio);
    inicio++;
    if (inicio > num) break;
  }
};
imprimeNumeros(9);

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const imprimePalabra = (palabra, numero) => {
  for (let n = 1; n <= numero; n++) {
    console.log(`imprime palabra "${palabra}" por ${n}º vez`);
  }
};
imprimePalabra("tito", 3);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const recibeUnArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Funcion recibeUnArray: indice ${i} del array = ${array[i]}`);
  }
};
recibeUnArray(["tito", "cortito", 22, 33, true]);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const arrayDe10Numeros = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4)
      console.log(`funcion arrayDe10Numeros: indice ${i} = ${array[i]}`);
  }
  for (let i = 0; i < array.length; i++) {
    if (i === 4)
      console.log(
        `el quinto valor del array que se omite es el indice ${i} con valor ${array[i]}`
      );
  }
};
arrayDe10Numeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const arrayYNumeroComoParametro = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
};
arrayYNumeroComoParametro([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
