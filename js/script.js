// //Esta é uma forma incorreta de declarar uma variavel!
// /*
// comentario de
// bloco
// */
// // var nomeCompleto; aqui foi utilizada a técnica de camelCase


// // Dê exemplo e 3 variaveis sobre algo que exista em um carro:
// var tipoMaterialVolante = "Metalico";
// var marcha;
// var bancoDeCouro;
// //Python - Java
// var tipoLinguagem = "orientadaObjetos";
// var nomeLinguagem = "Java";
// var curvaDeAprendizado = "Dificil";
// anoLançamento = 1991;
// criador = "Guido Van Rossum";

// let notaFinal = null;

// console.log(typeof nome); //string
// console.log(typeof idade); //

// // Existe três formas de criar variáveis/constantes em Javascript
// //1° Forma
// //Utilizando o var para declaração de variáveis
// //var é ultrapassado e pode causar problemas!!!

// //2° Forma
// // let nome;
// // console.log(nome);

// //3° Forma
// //Constantes devem ser inicializadas assim que são declaradas;
// //Não podem ter o seu valor alterado durante a execução do programa!
// const PI = 3.14;
// console.log(PI);

// DOM - Document Object Model

//let botao = document.getElementById("btnAbrir");

//botao.addEventListener("click", function() {
//    alert("Olá mundo aqui de dentro do JS..."); 
//});

let boxModal = document.getElementById("meuModal");

//boxModal.showModal();

let linkjs = document.getElementById("linkJs");
let linkHtml = document.getElementById("linkHtml");
let linkCss = document.getElementById("linkCss");

linkjs.addEventListener("click", function(e){
  e.preventDefault();
boxModal.showModal();

//Inserindo o texto do curso no modal via innerHTML.
//Inserindo o texto do curso no modal via innerHTML.
let boxInner = document.getElementById("box");

boxInner.innerHTML = "";
  boxInner.innerHTML += "<div><p>JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p><p>JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.[4] É atualmente a principal linguagem para programação client-side em navegadores web. É também bastante utilizada do lado do servidor através de ambientes como o node.js.</p></div>"
 
});

linkHtml.addEventListener("click", function(e){
  e.preventDefault();
boxModal.showModal();
let boxInner = document.getElementById("box");
boxInner.innerHTML = "";
boxInner.innerHTML += "<div<p>Criada pelo britânico Tim Berners-Lee, o acrônimo HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto. O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.</p></div>"
});


linkCss.addEventListener("click", function(e){
  e.preventDefault();
boxModal.showModal();
let boxInner = document.getElementById("box");
boxInner.innerHTML = "";
boxInner.innerHTML += "<div<p>O CSS foi desenvolvido pelo W3C (World Wide Web Consortium) em 1996 por um motivo bastante simples: a linguagem HTML não foi projetada para ter tags que ajudassem a formatar a página — o objetivo era apenas escrever a marcação para o conteúdo da web.Tags como <font> foram introduzidas na versão 3.2 do HTML e causaram muitos problemas para os desenvolvedores. Devido ao fato de as páginas da web terem fontes diferentes, fundos coloridos e vários estilos, reescrever o código era um processo longo, trabalhoso e caro. Desta forma, o CSS foi criado pelo W3C para resolver esse problema.</p></div>"
});






/// Capturando o botão de fechar do Modal!

let botaoFecharModal = document.querySelector('.close');

botaoFecharModal.addEventListener("click", function(e){
  boxModal.close();
});




