//---- CARDÁPIO DE LANCHES----

let lanches = [
  {
  nome: "Cheeseburguer",
  ingredientes: ["hambúrguer", "bacon", "cheddar", "cebola"],
  valor: 15.90
  },
  {
  nome: "X-Bacon",
  ingredientes: ["hambúrguer", "bacon fatiado", "cheddar", "maionese", ],
  valor: 13.90
  },
  {
  nome: "X-Burguer",
  ingredientes: ["hambúrguer", "cheddar", "maionese"],
  valor: 16.90
  },
  {
  nome: "X-Salada",
  ingredientes: ["hambúrguer", "queijo prato", "alface"],
  valor: 12.90
  },
  {
  nome: "X-Frango",
  ingredientes: ["hambúrguer", "carne de frango", "ovo frito", "milho verde"],
  valor: 18.90
  },
  {
  nome: "X-Tudo",
  ingredientes: ["hambúrguer", "bacon picado", "ovo", "muçarela"],
  valor: 14.90
  },
  {
  nome: "X-Egg",
  ingredientes: ["hambúrguer", "muçarela", "ovo", "maionese"],
  valor: 12.90
  },
  {
  nome: "X-Calabresa",
  ingredientes: ["hambúrguer", "calabresa picada", "alface", "presunto"],
  valor: 18.90
  },
];

// console.log(lanches);


//______________________________________________________________________________
//EXERCÍCIOS:

//1##Crie uma função que retorne o valor total de todos os lanches.
// function valorTotal(lanches) {
//   let somaValores = lanches.reduce((acumulador, lanche) => acumulador + lanche.valor, 0);
//   return somaValores.toFixed(2);
// }
// let resultado = valorTotal(lanches);
// console.log(`O valor total dos lanches é de R$${resultado} reais.`);

//______________________________________________________________________________

//2##Crie uma função que retorne o valor médio dos lanches.
// function valorMedio(lanches) {
//   let somaValores = lanches.reduce((acumulador, lanche) => acumulador + lanche.valor, 0);
//   let media = somaValores / lanches.length;
//   return media.toFixed(2);
// }
// let resultado = valorMedio(lanches);
// console.log(`O valor total da média dos lanches é de R$${resultado} reais.`);

//______________________________________________________________________________

//3##Crie uma função que retorne a lista de lanches que contêm um ingrediente 
// function listaIngredientes(nomeLanche) {
//   let lanche = lanches.find(lanche => lanche.nome === nomeLanche);
//   if(lanches) {
//     return lanche.ingredientes.slice(0, -1).join(", ") + " e " + lanche.ingredientes.slice(-1);
//   } else {
//     return "O lanche não está na minha lista";
//   }
// }
// let lista = listaIngredientes("X-Frango");
// let nomeLanche = "X-Frango";
// console.log(`O meu lanche favorito é o ${nomeLanche} e seus ingredientes são ${lista}.`)

//______________________________________________________________________________

//4##Crie uma função que retorne a lista de lanches ordenada por valor, do mais 
// function ordenarValor(lista) {
//   return lista.sort((a, b) => a.valor - b.valor);
// }
// let listaOrdenada = ordenarValor(lanches);
// console.log(listaOrdenada);


//5##Crie uma função que retorne a lista de lanches ordenada por nome, em ordem 
//alfabética.
// function ordenarPorNome(lanches) {
//   return lanches.sort((a, b) => a.nome.localeCompare(b.nome));
// }
// console.log(ordenarPorNome(lanches));
//______________________________________________________________________________

//6##Crie uma função que receba um valor máximo e retorne a lista de lanches cujo 
//valor é menor ou igual a esse valor.
// function filtarPorValorMaximo(valorMaximo) {
//   return lanches.filter(lanche => lanche.valor <= valorMaximo);
// }
// let valorMaximo = 12.90;
// let lanchesFiltrados = filtarPorValorMaximo(valorMaximo);
// console.log(lanchesFiltrados);




//7##Crie uma função que retorne o nome e o valor do lanche mais caro.

//8##Crie uma função que retorne a lista de lanches cujo nome começa com a letra "X".

//9##Crie uma função que retorne a quantidade de ingredientes total em todos os 
//lanches.

//10##Crie uma função que receba um ingrediente e um valor máximo, e retorne a 
//lista de lanches que contêm esse ingrediente e cujo valor é menor ou igual 
//ao valor máximo.