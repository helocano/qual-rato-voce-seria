// *==============================*
// * RESULTADOS
// *==============================*

const results = {

    baileyi: {
        title: "Chaetodipus baileyi",
        description: "Um ratinho grandão, discreto e independente. Você gosta de fazer as coisas do seu jeito e não precisa de muita confusão ao seu redor."
    },

    penicillatus: {
        title: "Chaetodipus penicillatus",
        description: "Pequeno, econômico e prevenido. Você pensa no futuro, gosta de ter seus recursos guardados e prefere estar preparado para qualquer coisa."
    },

    merriami: {
        title: "Dipodomys merriami",
        description: "Ágil, explorador e eficiente. Você está sempre pronto para sair por aí, investigar alguma coisa e resolver o que precisa ser resolvido."
    },

    ordii: {
        title: "Dipodomys ordii",
        description: "Estratégico e preparado. Você gosta de ter um plano, um esconderijo seguro e talvez algumas coisas guardadas para uma emergência."
    },

    spectabilis: {
        title: "Dipodomys spectabilis",
        description: "Imponente, territorial e construtor. Você gosta de ter seu próprio espaço e não brinca quando o assunto é defender o que é seu."
    },

    albigula: {
        title: "Neotoma albigula",
        description: "Caseiro, coletor e confortável. Você provavelmente teria uma casa cheia de coisas interessantes que, segundo você, podem ser úteis algum dia."
    },

    leucogaster: {
        title: "Onychomys leucogaster",
        description: "Ousado, destemido e um pouquinho ameaçador. Você não costuma fugir de um problema — às vezes você é o problema."
    },

    torridus: {
        title: "Onychomys torridus",
        description: "Intenso, feroz e ligeiramente caótico. Você tem muita energia e uma tendência preocupante a transformar situações simples em aventuras."
    },

    flavus: {
        title: "Perognathus flavus",
        description: "Pequenininho, cauteloso e econômico. Você prefere segurança, silêncio e ter exatamente o que precisa — de preferência guardado em algum lugar."
    },

    eremicus: {
        title: "Peromyscus eremicus",
        description: "Adaptável, observador e curioso. Você gosta de descobrir o que está acontecendo e consegue se virar mesmo quando as coisas mudam."
    },

    maniculatus: {
        title: "Peromyscus maniculatus",
        description: "Versátil, aventureiro e generalista. Você se adapta facilmente e provavelmente toparia experimentar praticamente qualquer coisa uma vez."
    },

    megalotis: {
        title: "Reithrodontomys megalotis",
        description: "Ágil, atento e muito ligado ao ambiente. Você percebe pequenas mudanças ao seu redor e está sempre prestando atenção no que acontece."
    },

    hispidus: {
        title: "Sigmodon hispidus",
        description: "Tranquilo, ligado à natureza e um pouco mais despreocupado. Você gosta das coisas simples e prefere aproveitar o ambiente ao seu redor."
    }

};


// *==============================*
// * PERGUNTAS
// *==============================*

const questions = [

    // 1 — ALTURA
    {
        question: "Qual é a sua altura?",
        answers: [
            {
                text: "Menos que 160 cm",
                points: {
                    flavus: 1,
                    megalotis: 1,
                    penicillatus: 1
                }
            },
            {
                text: "Algo entre 160 cm e 170 cm",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    eremicus: 1,
                    maniculatus: 1
                }
            },
            {
                text: "Algo entre 170 cm e 180 cm",
                points: {
                    ordii: 1,
                    baileyi: 1,
                    merriami: 1
                }
            },
            {
                text: "Mais que 180 cm",
                points: {
                    spectabilis: 1,
                    albigula: 1,
                    hispidus: 1
                }
            }
        ]
    },


    // 2 — SAPATO
    {
        question: "Qual número de sapato você calça?",
        answers: [
            {
                text: "Menos que 36",
                points: {
                    flavus: 1,
                    megalotis: 1,
                    eremicus: 1
                }
            },
            {
                text: "Entre 36 e 38",
                points: {
                    torridus: 1,
                    leucogaster: 1,
                    penicillatus: 1
                }
            },
            {
                text: "Entre 38 e 40",
                points: {
                    albigula: 1,
                    ordii: 1,
                    merriami: 1
                }
            },
            {
                text: "Mais que 40",
                points: {
                    spectabilis: 1,
                    baileyi: 1,
                    hispidus: 1,
                    maniculatus: 1
                }
            }
        ]
    },


    // 3 — LUA CHEIA
    {
        question: "Qual a sua opinião sobre a Lua Cheia?",
        answers: [
            {
                text: "Eu deveria ter uma?",
                points: {
                    albigula: 1,
                    leucogaster: 1,
                    hispidus: 1
                }
            },
            {
                text: "Gosto delas!",
                points: {
                    baileyi: 1,
                    penicillatus: 1,
                    torridus: 1
                }
            },
            {
                text: "Não sou um grande fã...",
                points: {
                    merriami: 1,
                    flavus: 1,
                    maniculatus: 1
                }
            },
            {
                text: "EU ODEIO LUAS CHEIAS",
                points: {
                    ordii: 1,
                    spectabilis: 1,
                    megalotis: 1,
                    eremicus: 1
                }
            }
        ]
    },


    // 4 — COMIDA
    {
        question: "Entre os itens abaixo, o que você mais gosta de comer?",
        answers: [
            {
                text: "Doces",
                points: {
                    eremicus: 1,
                    baileyi: 1,
                    penicillatus: 1
                }
            },
            {
                text: "Vegetais",
                points: {
                    albigula: 1,
                    hispidus: 1,
                    megalotis: 1
                }
            },
            {
                text: "Castanhas",
                points: {
                    merriami: 1,
                    ordii: 1,
                    spectabilis: 1,
                    flavus: 1
                }
            },
            {
                text: "C A R N E",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    maniculatus: 1
                }
            }
        ]
    },


    // 5 — ESTAÇÃO
    {
        question: "Qual estação do ano você mais gosta?",
        answers: [
            {
                text: "Primavera",
                points: {
                    merriami: 1,
                    baileyi: 1,
                    penicillatus: 1,
                    albigula: 1
                }
            },
            {
                text: "Verão",
                points: {
                    eremicus: 1,
                    hispidus: 1,
                    torridus: 1
                }
            },
            {
                text: "Outono",
                points: {
                    ordii: 1,
                    spectabilis: 1,
                    megalotis: 1
                }
            },
            {
                text: "Inverno",
                points: {
                    maniculatus: 1,
                    leucogaster: 1,
                    flavus: 1
                }
            }
        ]
    },


    // 6 — CHUVA
    {
        question: "Começou a chover.",
        answers: [
            {
                text: "MEU DEUS CHUVA EU AMO CHUVA",
                points: {
                    merriami: 1,
                    baileyi: 1,
                    penicillatus: 1,
                    hispidus: 1
                }
            },
            {
                text: "Fico na minha casinha",
                points: {
                    ordii: 1,
                    flavus: 1,
                    spectabilis: 1
                }
            },
            {
                text: "Depois que parar de chover, saio de casa",
                points: {
                    albigula: 1,
                    eremicus: 1,
                    megalotis: 1
                }
            },
            {
                text: "Não ligo",
                points: {
                    maniculatus: 1,
                    leucogaster: 1,
                    torridus: 1
                }
            }
        ]
    },


    // 7 — BARULHO
    {
        question: "Você está andando na rua de noite, sozinho, e ouve um barulho atrás de você.",
        answers: [
            {
                text: "Corro pela minha vida",
                points: {
                    maniculatus: 1,
                    penicillatus: 1,
                    flavus: 1
                }
            },
            {
                text: "Paro e vejo o que foi",
                points: {
                    eremicus: 1,
                    megalotis: 1,
                    albigula: 1,
                    merriami: 1
                }
            },
            {
                text: "Ignoro e sigo a minha vida",
                points: {
                    baileyi: 1,
                    ordii: 1,
                    hispidus: 1
                }
            },
            {
                text: "Pego um graveto do chão, só pra garantir",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    spectabilis: 1
                }
            }
        ]
    },


    // 8 — INIMIGO
    {
        question: "Qual desses seria seu pior inimigo?",
        answers: [
            {
                text: "Um gavião",
                points: {
                    merriami: 1,
                    ordii: 1,
                    eremicus: 1
                }
            },
            {
                text: "Uma cobra",
                points: {
                    baileyi: 1,
                    penicillatus: 1,
                    spectabilis: 1
                }
            },
            {
                text: "Uma onça",
                points: {
                    flavus: 1,
                    albigula: 1,
                    maniculatus: 1,
                    hispidus: 1
                }
            },
            {
                text: "Um humano",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    megalotis: 1
                }
            }
        ]
    },


    // 9 — CASA
    {
        question: "Qual das seguintes alternativas seria sua casa perfeita?",
        answers: [
            {
                text: "Um quintal bem grande com muitas plantas",
                points: {
                    albigula: 1,
                    hispidus: 1,
                    maniculatus: 1
                }
            },
            {
                text: "Um porão e muitas passagens secretas",
                points: {
                    ordii: 1,
                    penicillatus: 1,
                    spectabilis: 1,
                    flavus: 1
                }
            },
            {
                text: "Muito espaçosa, para guardar muitas coisas",
                points: {
                    merriami: 1,
                    baileyi: 1,
                    eremicus: 1
                }
            },
            {
                text: "Uma casinha pequena e tranquilinha",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    megalotis: 1
                }
            }
        ]
    },


    // 10 — GRAVETO
    {
        question: "Você achou o melhor graveto de todos enquanto caminhava. O que você faz?",
        answers: [
            {
                text: "Levo para casa, claro",
                points: {
                    albigula: 1,
                    ordii: 1,
                    spectabilis: 1
                }
            },
            {
                text: "Analiso",
                points: {
                    eremicus: 1,
                    maniculatus: 1,
                    megalotis: 1,
                    hispidus: 1
                }
            },
            {
                text: "Oxi, é só um graveto",
                points: {
                    baileyi: 1,
                    penicillatus: 1,
                    flavus: 1
                }
            },
            {
                text: "Eu tenho um plano",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    merriami: 1
                }
            }
        ]
    },


    // 11 — SUPERPODER
    {
        question: "O que você prefere?",
        answers: [
            {
                text: "Ouvidos excelentes",
                points: {
                    eremicus: 1,
                    maniculatus: 1,
                    megalotis: 1
                }
            },
            {
                text: "Enxergar no escuro",
                points: {
                    baileyi: 1,
                    penicillatus: 1,
                    flavus: 1,
                    hispidus: 1
                }
            },
            {
                text: "Dentes poderosíssimos",
                points: {
                    leucogaster: 1,
                    torridus: 1,
                    albigula: 1
                }
            },
            {
                text: "Pernas muito rápidas",
                points: {
                    spectabilis: 1,
                    ordii: 1,
                    merriami: 1
                }
            }
        ]
    },


    // 12 — 3 DA MANHÃ
    {
        question: "Você acorda às 3 DA MANHÃ. Por quê?",
        answers: [
            {
                text: "Eu nunca estive dormindo, pra começo de conversa",
                points: {
                    baileyi: 1,
                    penicillatus: 1,
                    flavus: 1
                }
            },
            {
                text: "Porque eu estou COM FOME",
                points: {
                    albigula: 1,
                    maniculatus: 1,
                    hispidus: 1
                }
            },
            {
                text: "Porque eu ouvi um barulho",
                points: {
                    eremicus: 1,
                    megalotis: 1,
                    merriami: 1,
                    spectabilis: 1
                }
            },
            {
                text: "Porque eu sou uma pessoa ansiosa",
                points: {
                    ordii: 1,
                    leucogaster: 1,
                    torridus: 1
                }
            }
        ]
    },


    // 13 — ILHA DESERTA
    {
        question: "Você só pode levar UMA coisa pra uma ilha deserta. O que você leva?",
        answers: [
            {
                text: "Uma barraca",
                points: {
                    spectabilis: 1,
                    ordii: 1,
                    torridus: 1,
                    leucogaster: 1
                }
            },
            {
                text: "Uma lanterna",
                points: {
                    eremicus: 1,
                    megalotis: 1,
                    maniculatus: 1
                }
            },
            {
                text: "Uma mochila gigante",
                points: {
                    albigula: 1,
                    baileyi: 1,
                    penicillatus: 1
                }
            },
            {
                text: "Um saco de comida",
                points: {
                    merriami: 1,
                    flavus: 1,
                    hispidus: 1
                }
            }
        ]
    }

];

// *==============================*
// * VARIÁVEIS
// *==============================*

let currentQuestion = 0;
let scores = {};


// *==============================*
// * RESETAR PONTUAÇÃO
// *==============================*

function resetScores() {

    scores = {};

    for (const result in results) {
        scores[result] = 0;
    }

}


// *==============================*
// * COMEÇAR
// *==============================*

function startQuiz() {

    resetScores();

    currentQuestion = 0;

    document.getElementById("intro").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    showQuestion();

}


// *==============================*
// * MOSTRAR PERGUNTA
// *==============================*

function showQuestion() {

    const question = questions[currentQuestion];

    if (!question) {
        showResult();
        return;
    }

    document.getElementById("question-number").textContent =
        currentQuestion + 1;

    document.getElementById("question").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer.text;

        button.onclick = () => selectAnswer(answer.points);

        answersContainer.appendChild(button);

    });

}


// *==============================*
// * ESCOLHER RESPOSTA
// *==============================*

function selectAnswer(points) {

    // Soma os pontos de todas as espécies
    // relacionadas à resposta escolhida.

    for (const species in points) {

        if (scores.hasOwnProperty(species)) {
            scores[species] += points[species];
        }

    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}


// *==============================*
// * CALCULAR RESULTADO
// *==============================*

function showResult() {

    let highestScore = -1;
    let winners = [];

    // Descobre a maior pontuação
    for (const species in scores) {

        if (scores[species] > highestScore) {

            highestScore = scores[species];
            winners = [species];

        } else if (scores[species] === highestScore) {

            winners.push(species);
        }
    }

    // Se houver empate, escolhe aleatoriamente
    const winningResult =
        winners[Math.floor(Math.random() * winners.length)];


    // Esconde o quiz e mostra o resultado
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");


    // Nome da espécie
    document.getElementById("result-title").textContent =
        results[winningResult].title;


    // Descrição
    document.getElementById("result-description").textContent =
        results[winningResult].description;


    // IMAGEM DO RATINHO 🐭
    const resultImage = document.getElementById("result-image");

    resultImage.src = `img/${winningResult}.png`;

    resultImage.alt = results[winningResult].title;
}


// *==============================*
// * RECOMEÇAR
// *==============================*

function restartQuiz() {

    document.getElementById("result").classList.add("hidden");

    document.getElementById("intro").classList.remove("hidden");

}