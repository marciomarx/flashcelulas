let flashcards = [
    { front: "Qual é a unidade básica da vida e o que permite que cada célula sobreviva por longos períodos?", back: "A célula. Ela sobrevive enquanto os líquidos circundantes forneçam os nutrientes apropriados." },
    { front: "Quais são as duas partes principais de uma célula típica?", back: "O núcleo e o citoplasma." },
    { front: "Como o núcleo e o citoplasma são separados na célula?", back: "O núcleo é envolvido pela membrana nuclear (carioteca) e o citoplasma é delimitado pela membrana plasmática." },
    { front: "O que é protoplasma e quais são suas cinco substâncias básicas?", back: "Protoplasma é o material que compõe a célula, constituído por água, eletrólitos, proteínas, lipídios e carboidratos." },
    { front: "Qual a porcentagem aproximada de água na maioria das células e qual a exceção mencionada?", back: "Entre 70% e 85%, exceto nos adipócitos, que armazenam grandes quantidades de triglicerídeos." },
    { front: "Quais são alguns dos íons importantes presentes na célula e sua relevância?", back: "Potássio, magnésio, fosfato, sulfato, bicarbonato, sódio, cloreto e cálcio. Eles participam de reações químicas e do funcionamento de mecanismos de controle celular." },
    { front: "Em que porcentagem as proteínas compõem a massa celular e como elas se classificam?", back: "Aproximadamente 10 a 20% da massa celular, divididas em proteínas estruturais e funcionais." },
    { front: "Qual a função das proteínas estruturais dentro da célula?", back: "Elas formam filamentos (como microtúbulos) que compõem o citoesqueleto, garantindo suporte estrutural e organizacional." },
    { front: "O que caracterizam as proteínas funcionais e qual sua principal função?", back: "São, em sua maioria, enzimas que catalisam reações químicas específicas essenciais para o metabolismo celular." },
    { front: "Quais os principais lipídios da membrana celular e qual a sua função?", back: "Fosfolipídios e colesterol. Juntos, formam a bicamada lipídica que atua como barreira seletiva, regulando a passagem de substâncias." },
    { front: "Em que forma os triglicerídeos são armazenados e em qual tipo celular eles predominam?", back: "Armazenados como gordura neutra, predominando nos adipócitos (células de gordura)." },
    { front: "Qual o papel dos carboidratos na célula e como eles estão presentes?", back: "Desempenham funções nutricionais e estruturais (como em glicoproteínas); estão presentes na forma de glicose dissolvida e como reservas de glicogênio." },
    { front: "O que são organelas e por que são essenciais para a célula?", back: "São estruturas especializadas do citoplasma que realizam funções específicas (energia, síntese, digestão, etc.), garantindo a eficiência celular." },
    { front: "Como é constituída a membrana celular?", back: "Por uma bicamada lipídica de fosfolipídios intercalados com proteínas integrais e periféricas, além de carboidratos ligados (glicocálix)." },
    { front: "Qual a função dos esfingolipídios na membrana celular?", back: "Presentes em menor quantidade (especialmente em células nervosas), participam na proteção, transmissão de sinais e adesão celular." },
    { front: "Como o colesterol atua na membrana celular?", back: "Regula a fluidez e a permeabilidade da membrana, mantendo sua integridade e funcionalidade." },
    { front: "Diferencie proteínas integrais de proteínas periféricas na membrana plasmática.", back: "As integrais atravessam toda a bicamada e atuam como canais, transportadores, enzimas ou receptores; as periféricas estão associadas a uma das superfícies, desempenhando funções enzimáticas ou regulatórias." },
    { front: "Qual a importância do glicocálix na superfície celular?", back: "Atua na proteção, adesão entre células, recepção de sinais (como hormônios) e em respostas imunológicas." },
    { front: "O que compõe o citoplasma e qual a função do citosol?", back: "O citoplasma contém organelas imersas no citosol, uma matriz aquosa rica em proteínas, eletrólitos e glicose, onde ocorrem reações metabólicas." },
    { front: "Quais são as características e função do retículo endoplasmático rugoso?", back: "É uma rede de membranas com ribossomos aderidos; participa da síntese e processamento de proteínas destinadas à secreção ou incorporação em membranas." }
];

let currentCardIndex = 0;
let showingFront = true;

const homeScreen = document.getElementById("home-screen");
const flashcardContainer = document.getElementById("flashcard-container");
const startButton = document.getElementById("start-button");
const flashcard = document.getElementById("flashcard");
const flashcardText = document.getElementById("flashcard-text");
const prevButton = document.getElementById("prev-card");
const nextButton = document.getElementById("next-card");
const homeButton = document.getElementById("home-button");

startButton.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    flashcardContainer.classList.remove("hidden");
    updateFlashcard();
});

flashcard.addEventListener("click", () => {
    showingFront = !showingFront;
    updateFlashcard();
});

prevButton.addEventListener("click", () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showingFront = true;
        updateFlashcard();
    }
});

nextButton.addEventListener("click", () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        showingFront = true;
        updateFlashcard();
    }
});

homeButton.addEventListener("click", () => {
    flashcardContainer.classList.add("hidden");
    homeScreen.classList.remove("hidden");
});

function updateFlashcard() {
    flashcardText.textContent = showingFront ? flashcards[currentCardIndex].front : flashcards[currentCardIndex].back;
    flashcard.className = showingFront ? "front" : "back";
}
