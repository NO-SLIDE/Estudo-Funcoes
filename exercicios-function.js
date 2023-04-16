//A ideia é exercitar o máximo possível o uso de todos os tipos de funções com 
//javascript (com/sem parâmetro, com/sem retorno, arrow function...), de acordo 
//com as descrições abaixo criar um script js:

//1. Conversão de Graus: 
//A. Celsius para Fahrenheit:
//##Sem Retorno...
// function celsiusToFahrenheit(celsius) {
//   const fahrenheit = (celsius * 9/5) + 32;
//   console.log(`${celsius}° Celsius equivale a ${fahrenheit}° Fahrenheit.`);
// }

// const celsius = 50;
// const fahrenheit = celsiusToFahrenheit(celsius);

//----------------------------------------------------------------------------->
//##Com Retorno...
// function celsiusToFahrenheit(celsius) {
//   const fahrenheit = (celsius * 9/5) + 32;
//   return fahrenheit;
// }

// const celsius = 20;
// const fahrenheit = celsiusToFahrenheit(celsius);
// console.log(`${celsius}° Celsius equivale a ${fahrenheit}° Fahrenheit.`);

//----------------------------------------------------------------------------->
//##Com Arrow Function...
// const celsiusToFahrenheit = (celsius) => {
//   const fahrenheit = (celsius * 9/5) + 32;
//   console.log(`${celsius}° Celsius equivale a ${fahrenheit}° Fahrenheit.`);
// }

// const celsius = 20;
// const fahrenheit = celsiusToFahrenheit(celsius);

//----------------------------------------------------------------------------->
//B. Fahrenheit para Celsius:
//##Sem Retorno...
// function fahrenheitToCelsius(fahrenheit) {
//   const celsius = (fahrenheit - 32) * 5/9;
//   console.log(`${fahrenheit}° Fahrenheit equivale a ${celsius}° Celsius.`)
// }

// const fahrenheit = 68;
// const celsius = fahrenheitToCelsius(fahrenheit);

//----------------------------------------------------------------------------->
//##Com Retorno...
// function fahrenheitToCelsius(fahrenheit) {
//   const celsius = (fahrenheit - 32) * 5/9;
//   return fahrenheit;
// }

// const fahrenheit = 68;
// const celsius = fahrenheitToCelsius(fahrenheit);
// console.log(`${fahrenheit}° Fahrenheit equivale a ${celsius}° Celsius.`)

//----------------------------------------------------------------------------->
//##Com Arrow Function...
// const fahrenheitToCelsius = (fahrenheit) => {
//   const celsius = (fahrenheit - 32) * 5/9;
//   return fahrenheit;
// }

// const fahrenheit = 68;
// const celsius = fahrenheitToCelsius(fahrenheit);
// console.log(`${fahrenheit}° Fahrenheit equivale a ${celsius}° Celsius.`)

//----------------------------------------------------------------------------->
//C. Celsius para Kelvin:
//##Sem Retorno...
// function celsiusToKelvin(celsius) {
//   const kelvin = celsius + 273.15;
//   console.log(`${celsius}° Celsius equivale a ${kelvin.toLocaleString('pt-BR')} Kelvin.`)
// }

// const celsius = 20;
// const kelvin = celsiusToKelvin(celsius);

//----------------------------------------------------------------------------->
//##Com Retorno...
// function celsiusToKelvin(celsius) {
//   const kelvin = celsius + 273.15;
//   return kelvin;
// }

// const celsius = 20;
// const kelvin = celsiusToKelvin(celsius);
// console.log(`${celsius}° Celsius equivale a ${kelvin.toLocaleString('pt-BR')} Kelvin.`)

//----------------------------------------------------------------------------->
//##Com Arrow Function...
// const celsiusToKelvin = (celsius) => {
//   const kelvin = celsius + 273.15;
//   return kelvin;
// }

// const celsius = 20;
// const kelvin = celsiusToKelvin(celsius);
// console.log(`${celsius}° Celsius equivale a ${kelvin.toLocaleString('pt-BR')} Kelvin.`)

//=========================================================================================
//2. Função que recebe 3 números como parâmetro e retorne:
//##Maior Entre 2 Parâmetros Com Retorno...
// function maiorNumero(n1, n2) {
//   if(n1 > n2) {
//     return `O maior número entre ${n1} e ${n2} é o número ${n1}`;
//   } else {
//     return `O maior número entre ${n1} e ${n2} é o número ${n2}`;
//   }
// }

// console.log(maiorNumero(12, 23));

//----------------------------------------------------------------------------->
//##Maior Entre 2 Parâmetros Sem Retorno...
// function maiorNumero(n1, n2) {
//   if(n1 > n2) {
//     console.log("O maior número entre " + n1 + " e " + n2 + " é o número " + n1);
//   } else {
//     console.log("O maior número entre " + n1 + " e " + n2 + " é o número " + n2);
//   }
// }

// maiorNumero(22, 34);

//----------------------------------------------------------------------------->
//##Maior Entre 2 Parâmetros Com Arrow Function...
// const maiorNumero = (n1, n2) => {
//   if(n1 > n2) {
//     console.log("O maior número entre " + n1 + " e " + n2 + " é o número " + n1);
//   } else {
//     console.log("O maior número entre " + n1 + " e " + n2 + " é o número " + n2);
//   }
// }

// maiorNumero(22, 34);

//----------------------------------------------------------------------------->
//##Menor Entre 2 Parâmetros Com Retorno...
// function menorNumero(n1, n2) {
//   if(n1 < n2) {
//     return `O menor número entre ${n1} e ${n2} é o número ${n1}`;
//   } else {
//     return `O menor número entre ${n1} e ${n2} é o número ${n2}`;
//   }
// }

// console.log(menorNumero(12, 23));
//----------------------------------------------------------------------------->
//##Menor Entre 2 Parâmetros Sem Retorno...
// function menorNumero(n1, n2) {
//   if(n1 < n2) {
//     return `O menor número entre ${n1} e ${n2} é o número ${n1}`;
//   } else {
//     return `O menor número entre ${n1} e ${n2} é o número ${n2}`;
//   }
// }

// console.log(menorNumero(12, 23));

//Ou

// function menorNumero(n1, n2) {
//   n1 < n2 ?
//     console.log("O menor número entre " + n1 + " e " + n2 + " é o número " + n1) :
//     console.log("O menor número entre " + n1 + " e " + n2 + " é o número " + n2);
// }

// menorNumero(12, 23);

//----------------------------------------------------------------------------->
//##Menor Entre 2 Parâmetros Com Arrow Function...
// const menorNumero = (n1, n2) => {
//   if(n1 < n2) {
//     return `O menor número entre ${n1} e ${n2} é o número ${n1}`;
//   } else {
//     return `O menor número entre ${n1} e ${n2} é o número ${n2}`;
//   }
// }

// console.log(menorNumero(12, 23));

//----------------------------------------------------------------------------->
//##Maior Entre 3 Parâmetros Com Retorno...
// function maiorNumero(n1, n2, n3) {
//   if(n1 > n2 && n1 > n3) {
//     return `O maior número entre ${n1}, ${n2} e ${n3} é o número ${n1}.`;
//   } else if(n2 > n1 && n2 > n3) {
//     return `O maior número entre ${n1}, ${n2} e ${n3} é o número ${n2}.`;
//   } else {
//     return `O maior número entre ${n1}, ${n2} e ${n3} é o número ${n3}.`;
//   }
// }

// console.log(maiorNumero(10, 34, 54));

//----------------------------------------------------------------------------->
//##Maior Entre 3 Parâmetros Sem Retorno...
// function maiorNumero(n1, n2, n3) {
//   if(n1 > n2 && n1 > n3) {
//     console.log("O maior número entre " + n1 + ", " + n2 + " e " + n3 + " é o número " + n1);
//   } else if(n2 > n1 && n2 > n3) {
//     console.log("O maior número entre " + n1 + ", " + n2 + " e " + n3 + " é o número " + n2);
//   } else {
//     console.log("O maior número entre " + n1 + ", " + n2 + " e " + n3 + " é o número " + n3);
//   }
// }

// maiorNumero(10, 34, 54);

//----------------------------------------------------------------------------->
//##Maior Entre 3 Parâmetros Com Arrow Function...
// const maiorNumero = (n1, n2, n3) => {
//   if(n1 > n2 && n1 > n3) {
//     console.log("O maior número entre " + n1 + ", " + n2 + " e " + n3 + " é o número " + n1);
//   } else if(n2 > n1 && n2 > n3) {
//     console.log("O maior número entre " + n1 + ", " + n2 + " e " + n3 + " é o número " + n2);
//   } else {
//     console.log("O maior número entre " + n1 + ", " + n2 + " e " + n3 + " é o número " + n3);
//   }
// }

// maiorNumero(10, 34, 54);

//----------------------------------------------------------------------------->
//##Maior e Menor Entre 5 Parâmetros Com Retorno...
// function maiorEMenorNumero(n1, n2, n3, n4, n5) {
//   const maior = Math.max(n1, n2, n3, n4, n5);
//   const menor = Math.min(n1, n2, n3, n4, n5);
//   return `O maior número é o ${maior}, e o menor número é o ${menor}.`;
// }

// console.log(maiorEMenorNumero(43, 28, 39, 12, 03));

//----------------------------------------------------------------------------->
//##Maior e Menor Entre 5 Parâmetros Sem Retorno...
// function maiorEMenorNumero(n1, n2, n3, n4, n5) {
//   const maior = Math.max(n1, n2, n3, n4, n5);
//   const menor = Math.min(n1, n2, n3, n4, n5);
//   console.log("O maior número é o " + maior + ", e o menor número é o " + menor);
// }

// maiorEMenorNumero(43, 28, 39, 12, 03);

//Ou

// function maiorEMenorNumero(n1, n2, n3, n4, n5) {
//   let maior = n1;
//   let menor = n1;
//   if(n2 > maior) {
//     maior = n2;
//   }
//   if(n3 > maior) {
//     maior = n3;
//   }
//   if(n4 > maior) {
//     maior = n4;
//   }
//   if(n5 > maior) {
//     maior = n5;
//   }
//   if(n2 < menor) {
//     menor = n2;
//   }
//   if(n3 < menor) {
//     menor = n3;
//   }
//   if(n4 < menor) {
//     menor = n4;
//   }
//   if(n5 < menor) {
//     menor = n5;
//   }
//   console.log(`O maior número é o ${maior}, e o menor número é o ${menor}.`);
// }

// maiorEMenorNumero(3, 6, 2, 8, 5);
//----------------------------------------------------------------------------->
//##Maior e Menor Entre 5 Parâmetros Com Arrow Function...
// const maiorEMenorNumero = (n1, n2, n3, n4, n5) => {
//   const maior = Math.max(n1, n2, n3, n4, n5);
//   const menor = Math.min(n1, n2, n3, n4, n5);
//   console.log("O maior número é o " + maior + ", e o menor número é o " + menor);
// }

// maiorEMenorNumero(45, 28, 19, 12, 83);

//=========================================================================================
//3. Função que recebe um inteiro positivo e teste para saber se ele é primo ou não. 
//Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.














//=========================================================================================
//4. Função que recebe 1 número que representa dia e retorna a quantidade de horas: 
//Ex: 2 dias, 48hrs.
//##Com Retorno;
// function calcularHoras(dias) {
//   return dias * 24;
// }

// console.log(calcularHoras(2));

//----------------------------------------------------------------------------->
//##Sem Retorno...
// function calcularHoras(dias) {
//   const horas = dias * 24;
//   const resultado = `Em ${dias} dias equivalem a ${horas} horas.`;
//   console.log(resultado);
// }

// calcularHoras(2);

//----------------------------------------------------------------------------->
//##Com Arrow Function...
// const calcularHoras = (dias) => {
//   const horas = dias * 24;
//   const resultado = `Em ${dias} dias equivalem a ${horas} horas.`;
//   console.log(resultado);
// }

// calcularHoras(3);

//=========================================================================================
//5. Função que recebe 5 números e retorna o quadrado da média entre eles:
// function calculoQuadradoDaMedia(n1, n2, n3, n4, n5) {
//##Com Retorno...
// function mediaDoQuadrado(n1, n2, n3, n4, n5) {
//     const calcularMedia = (n1, n2, n3, n4, n5) / 5;
//     return calcularMedia * calcularMedia;
// }
// console.log(mediaDoQuadrado(12, 24, 46, 28, 39))

//----------------------------------------------------------------------------->
//##Sem Retorno...
// function mediaDoQuadrado(n1, n2, n3, n4, n5) {
//     const calcularMedia = (n1, n2, n3, n4, n5) / 5;
//     console.log(calcularMedia * calcularMedia);
// }
// mediaDoQuadrado(12, 24, 46, 28, 39)

//----------------------------------------------------------------------------->
//##Com Arrow Function...
// const mediaDoQuadrado = (n1, n2, n3, n4, n5) => {
//     const calcularMedia = (n1, n2, n3, n4, n5) / 5;
//     console.log(calcularMedia * calcularMedia);
// }
// mediaDoQuadrado(12, 24, 46, 28, 39)

//=========================================================================================
//6. Função que dado dois valores (passados como parâmetros) mostre no console 
//a soma, subtração, multiplicação e divisão desses valores:
//##Sem Retorno..
// function operacoesMatematica(n1, n2) {
//     const somar = n1 + n2;
//     const subtracao = n1 - n2;
//     const multiplicacao = n1 * n2;
//     const divisao = n1 / n2;
//     const somarTudo = somar + subtracao + multiplicacao + divisao;
//     console.log(`Somar: ${a} + ${b} = ${somar}.`);
//     console.log(`Subtração: ${a} - ${b} = ${subtracao}.`);
//     console.log(`Multiplicação: ${a} * ${b} = ${multiplicacao}.`);
//     console.log(`Divisão: ${a} / ${b} = ${divisao.toFixed(2)}.`);
//     console.log(`A soma de todos os resultados é ${somarTudo.toFixed(2)} `);
// }

// const a = 9;
// const b = 8;
// const resultado = operacoesMatematica(a, b)

//----------------------------------------------------------------------------->
//##Com Retorno...
// function operacoesMatematica(n1, n2) {
//     const somar = n1 + n2;
//     const subtracao = n1 - n2;
//     const multiplicacao = n1 * n2;
//     const divisao = n1 / n2;
//     return {
//         somar: somar,
//         subtrair: subtracao,
//         multiplicar: multiplicacao,
//         dividir: divisao.toFixed(2),
//     };
// }

// const resultado = operacoesMatematica(2, 3);
// console.log(`Somar: ${resultado.somar}.`);
// console.log(`Subtrair: ${resultado.subtrair}.`);
// console.log(`Multiplicar: ${resultado.multiplicar}.`);
// console.log(`Dividir: ${resultado.dividir}.`);

//----------------------------------------------------------------------------->
//##Com Arrow Function...
// const operacaoMatematica = (n1, n2) => {
//     const soma = n1 + n2;
//     const subtracao = n1 - n2;
//     const multiplica = n1 * n2;
//     const divisao = n1 / n2;
//     console.log(`Soma: ${soma}`);
//     console.log(`Subtração: ${subtracao}`); 
//     console.log(`Multiplicação: ${multiplica}`);
//     console.log(`Divisão: ${divisao.toFixed(2)}`);
// }

// operacaoMatematica(5, 3);

//=========================================================================================
//7. Função que recebe um número (de 1 a 12) e retorne o mês correspondente como 
//uma string
// function mesesAno(n1) {
//     if(n1 == 1) {
//         return "Janeiro";
//     }
//     if(n1 == 2) {
//         return "Fevereiro";
//     }
//     if(n1 == 3) {
//         return "Março";
//     }
//     if(n1 == 4) {
//         return "Abril";
//     }
//     if(n1 == 5) {
//         return "Maio";
//     }
//     if(n1 == 6) {
//         return "Junho";
//     }
//     if(n1 == 7) {
//         return "Julho";
//     }
//     if(n1 == 8) {
//         return "Agosto";
//     }
//     if(n1 == 9) {
//         return "Setembro";
//     }
//     if(n1 == 10) {
//         return "Outubro";
//     }
//     if(n1 == 11) {
//         return "Novembro";
//     } 
//     if(n1 == 12) {
//         return "Dezembro";
//     }
// }

// // console.log("Eu faço aniversário no mês de " + mesesDoAno(4))



























