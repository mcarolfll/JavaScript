// =============================================================================
// GUIA DE REFERÊNCIA RÁPIDA: JAVASCRIPT (BÁSICO AO INTERMEDIÁRIO)
// =============================================================================

// 1) VARIÁVEIS E TIPOS (BÁSICO)
// let: permite reatribuição | const: valor constante | Tipos: string, number, boolean, etc.

/*let nome = "João";
const idade = 18;
let ativo = true;     // boolean
let nota = 9.5;        // number

console.log(typeof nome, typeof idade, typeof ativo);*/


let nome = "gabi";
let idade = 17;
let comida = "lasanha";
let cor = "roxo";
let lugar = "praia";

console.log(`meu nome é ${nome}, tenho ${idade}, minha comida favorita é ${comida}, minha cor é ${cor} e meu lugar é ${lugar}`);// -----------------------------------------------------------------------------

// 2) OPERADORES E COMPARAÇÕES
/*
console.log(10 + 5);       // Adição: 15
console.log(10 === "10");  // Igualdade estrita: false (compara tipo e valor)
console.log(10 == "10");   // Igualdade solta: true (evitar no dia a dia)
console.log(10 !== 5);     // Diferente: true
*/


// -----------------------------------------------------------------------------

// 3) STRINGS E TEMPLATE STRINGS
/*
const produto = "Caderno";
const preco = 12.5;

console.log(produto.toUpperCase()); // "CADERNO"
console.log(`O produto ${produto} custa R$ ${preco.toFixed(2)}`); // Template string com interpolação
*/

// -----------------------------------------------------------------------------

// 4) CONDICIONAIS (IF / ELSE, SWITCH)
/*
const media = 7;
if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

const dia = "SEG";
switch (dia) {
  case "SEG":
    console.log("Segunda");
    break;
  default:
    console.log("Outro dia");
}
*/

// -----------------------------------------------------------------------------

// 5) LAÇOS (FOR, WHILE) E CONTROLE
/*
for (let i = 1; i <= 5; i++) {
  console.log(i); // Conta de 1 a 5
}

let tentativas = 0;
while (tentativas < 3) {
  tentativas++;
}
console.log("Fim:", tentativas);
*/

// -----------------------------------------------------------------------------

// 6) FUNÇÕES (NORMAL, ARROW) + PARÂMETROS PADRÃO
/*
function soma(a, b = 0) { // b tem valor padrão 0
  return a + b;
}

const sub = (a, b) => a - b; // Arrow function de linha única

console.log(soma(10, 2)); // 12
console.log(soma(10));    // 10 (usou o padrão b=0)
console.log(sub(10, 2));  // 8
*/

// -----------------------------------------------------------------------------

// 7) ARRAYS (MAP, FILTER, FIND, REDUCE) - INTERMEDIÁRIO

//const nums = [1, 2, 3, 4, 5];

//const dobrados = nums.map(n => n * 2);           // Cria novo array transformado
//const pares = nums.filter(n => n % 2 === 0);     // Cria novo array com filtros
//const primeiroMaiorQue3 = nums.find(n => n > 3); // Retorna o primeiro elemento que satisfaz a condição
//const somaTotal = nums.reduce((acc, n) => acc + n, 0); // Acumula valores em um único resultado

//console.log(dobrados, pares, primeiroMaiorQue3, somaTotal);

//PRÁTICA: Filtrar notas >= 7
const notasAlunos = [5.5, 8, 4, 9.5, 7];
const aprovados = notasAlunos.filter(nota => nota >= 7);
console.log("Aprovados:", aprovados);


// -----------------------------------------------------------------------------

// 8) OBJETOS E DESESTRUTURAÇÃO
/*
const aluno = {
  nome: "Maria",
  turma: "2A",
  notas: { av1: 8, av2: 7 }
};

const { nome, turma } = aluno;          // Extrai propriedades para variáveis
const { av1, av2 } = aluno.notas;       // Desestruturação de objeto aninhado

console.log(nome, turma, av1, av2);
*/

// -----------------------------------------------------------------------------

// 9) FUNÇÕES COM OBJETOS E ARRAYS (PADRÃO MERCADO)
/*
function calcularMedia({ av1, av2 }) { // Desestruturação direto nos parâmetros
  return (av1 + av2) / 2;
}

const mediaAluno = calcularMedia({ av1: 8, av2: 6 });
console.log(mediaAluno);
*/

// -----------------------------------------------------------------------------

// 10) TRATAMENTO DE ERROS (TRY/CATCH)
/*
function dividir(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (e) {
  console.log("Erro capturado:", e.message); // Evita que o programa pare de funcionar
}
*/

// -----------------------------------------------------------------------------

// 11) JSON (INTEGRAÇÃO COM APIS)
/*
const payload = { id: 1, nome: "João" };
const texto = JSON.stringify(payload); // Converte objeto para string (enviar para API)
const obj = JSON.parse(texto);         // Converte string para objeto (receber de API)

console.log(texto);
console.log(obj.nome);
*/

// -----------------------------------------------------------------------------

// 12) ASSÍNCRONO (PROMISES, ASYNC/AWAIT)
/*
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fluxo() {
  console.log("Começou");
  await esperar(500); // Pausa a execução sem travar a thread principal
  console.log("Depois de 0.5s");
}

fluxo();
*/

// -----------------------------------------------------------------------------

// 13) DOM BÁSICO (INTERAÇÃO COM O NAVEGADOR)
/*
// Exemplo de estrutura HTML necessária:
// <button id="btn">Clique</button>
// <p id="msg"></p>

const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

if (btn) {
  btn.addEventListener("click", () => {
    msg.textContent = "Você clicou!";
  });
}
*/