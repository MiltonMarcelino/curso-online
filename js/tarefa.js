// 1. Nome do jogador
let nomeJogador = "Ana";

// 2. Pontos iniciais
let pontosIniciais = 100;

// 3. Ações do jogador
let monstrosDerrotados = 3;
let tesourosColetados = 2;
let armadilhas = 1;

// 4. Cálculo da pontuação final
let pontuacaoFinal = pontosIniciais 
                      + (monstrosDerrotados * 10) 
                      + (tesourosColetados * 15) 
                      - (armadilhas * 20);

// 5. Exibição dos resultados
console.log(`Jogador: ${nomeJogador}`);
console.log(`Pontos Iniciais: ${pontosIniciais}`);
console.log(`Monstros derrotados: ${monstrosDerrotados}`);
console.log(`Tesouros coletados: ${tesourosColetados}`);
console.log(`Armadilhas ativadas: ${armadilhas}`);
console.log(`Pontuação Final: ${pontuacaoFinal}`);

// 6. Desafio Extra – Nível do jogador
let nivel;

if (pontuacaoFinal >= 150) {
  nivel = "Avançado";
} else if (pontuacaoFinal >= 100) {
  nivel = "Intermediário";
} else {
  nivel = "Iniciante";
}

console.log(`Nível do Jogador: ${nivel}`);