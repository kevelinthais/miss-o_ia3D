const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual desses fenômenos impressionantes do Universo você mais gostaria de observar de perto?:" [
            {
                texto: "Uma supernova, que é a explosão brilhante e final de uma estrela gigantesca.!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Um buraco negro, com sua força gravitacional extrema capaz de atrair tudo ao seu redor!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Ao olhar para o céu noturno, qual destas dúvidas te faz refletir mais?:" [
            {
                texto:"Como o Universo começou há bilhões de anos e para onde ele está se expandindo.  ",
                afirmacao:"afirmacao"
            },
            {
                texto:  "Se existe vida inteligente ou bactérias em outros planetas e sistemas solares..",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: " Se você tivesse a oportunidade de fazer uma viagem espacial, para onde iria?",
        alternativas: [
            {
                texto:"Explorar o solo vermelho e as montanhas de Marte.  ",
                afirmacao:"afirmacao"
            },
            {
                texto:"Viajar para além do nosso Sistema Solar e conhecer exoplanetas distantes..",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " O que você acha mais fascinante sobre a estrutura do cosmos?",
        alternativas: [
            {
                texto:"A imensidão das galáxias, com bilhões de estrelas e planetas juntos.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Os mistérios invisíveis, como a matéria escura e a energia escura que preenchem o espaço..",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado:" Para acompanhar novidades sobre o Universo, qual formato faz mais o seu estilo?",
        alternativas: [
            {
                texto: "Ver imagens impressionantes capturadas por telescópios espaciais avançados..",
                afirmacao:"afirmacao"
            },
            {
                texto: "Assistir a documentários e simulações digitais que explicam a física das estrelas e do tempo..",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();