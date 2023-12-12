const v = document.querySelector(".compound-v");
const injete = document.querySelector(".p");
const clique = document.querySelector(".clique");
const power = document.querySelector(".power");
const foi = document.getElementById("h2");
const poderAdquirido = document.getElementById("poder");
const superpoderes = [
  "Invisibilidade",
  "Telecinese",
  "Voo",
  "Superforça",
  "Regeneração",
  "Controle do Tempo",
  "Teletransporte",
  "Leitura da Mente",
  "Manipulação de Elementos",
  "Ilusão",
  "Mimetismo Animal",
  "Visão de Raio-X",
  "Telepatia",
  "Criação de Portais",
  "Elasticidade",
  "Intangibilidade",
  "Campo de Força",
  "Controle Magnético",
  "Poder de Fogo",
  "Criação de clones",
  "Transmutação",
  "Camuflagem",
  "Geração de Energia",
  "Cura Acelerada",
  "Superinteligência",
  "Rajadas de Energia",
  "Adaptação Ambiental",
  "Manipulação de Sonhos",
  "Incorporalidade",
  "Manipulação de Plantas",
  "Visão Térmica",
  "Invocação",
  "Campo Gravitacional",
  "Super Velocidade",
  "Transformação de Matéria",
  "Resistência Psíquica",
  "Criação de Ilusões",
  "Mimetismo Líquido",
  "Manipulação de Tecnologia",
  "Absorção de Energia",
  "Manipulação de Som",
  "Telecinese Molecular",
  "Telepatia Animal",
  "Criação de Terremotos",
  "Controle de Auras",
  "Projeção Astral",
  "Criação de Escudos",
  "Visão Astral",
  "Criação de Campos de Força",
  "Manipulação de Gravidade",
  "Eletrocinese",
  "Criação de Portais Dimensionais",
  "Incorporação Elemental",
  "Imortalidade",
  "Manipulação de Energia Quântica",
  "Telecinese Psíquica",
  "Manipulação de Tempo",
  "Retrocognição",
  "Persuasão",
  "Hipnose",
  "Deslocamento Temporal",
  "Vampirismo",
  "Metamorfose",
  "Teletransporte Dimensional",
  "Explosões de Energia",
  "Rastreamento Psíquico",
  "Manipulação de Matéria Escura",
  "Telecinese Cinética",
  "Telepatia Galáctica",
  "Controle de Probabilidades",
  "Criação de Campos de Distorção",
  "Manipulação de Antimatéria",
  "Criação de Ilusões Coletivas",
  "Manipulação de Realidades Alternativas",
  "Sugestão",
  "Geração de Campos de Antigravidade",
  "Leitura de Códigos Genéticos",
  "Criação de Portais Interdimensionais",
  "Controle de Energia Vital",
  "Manipulação de Bioenergia",
  "Criação de Armaduras Energéticas",
  "Comunicação Telepática",
  "Telecinese Quântica",
  "Criação de Vórtices Temporais",
  "Intuição Cósmica",
  "Telepatia Cibernética",
  "Manipulação de Energia Espiritual",
  "Desmaterialização",
  "Criação de Campos de Distorção Temporal",
  "Criação de Realidades Virtuais",
  "Desintegração Molecular",
  "Manipulação de Energia Celestial",
  "Transcendência",
  'Manipulação de elementos',
  'Transformação shape-shifting',
  'Criação de portais dimensionais',
  'Controle da mente',
  'Intangibilidade',
  'Teletransporte',
  'Superinteligência',
  'Campo de força',
  'Criação de ilusões',
  'Adaptação camaleônica',
  'Leitura da aura',
  'Eletrocinese',
  'Manipulação de gravidade',
  'Cura acelerada',
  'Incorporalidade',
  'Mimetismo animal',
  'Invocação de objetos',
  'Controle de plantas',
  'Incorruptibilidade',
  'Absorção de energia',
  'Visão de raio-X',
  'Manipulação de sonhos',
  'Visão térmica',
  'Ressurreição',
  'Elasticidade',
  'Mimetismo de objetos',
  'Imortalidade',
  'Escudo psíquico',
  'Manipulação de som',
  'Rajadas de energia',
  'Manipulação de tecnologia',
  'Teleportação temporal',
  'Criação de hologramas',
  'Invulnerabilidade',
  'Viagem interdimensional',
  'Geração de campo de força',
  'Manipulação de sorte',
  'Criação de clones',
  'Vampirismo',
  'Criação de ilusões',
  'Transmutação de matéria',
  'Supervisão cósmica',
  'Absorção de conhecimento',
  'Telecinese molecular',
  'Camuflagem',
  'Desmaterialização',
  'Manipulação de probabilidade',
  'Controle de temperatura',
  'Manipulação de sombras',
  'Magnetismo',
  'Aceleração molecular',
  'Absorção de emoções',
  'Controle de pesadelos',
  'Influência magnética',
  'Retrocognição',
  'Telepatia animal',
  'Criação de campos de força',
  'Conversão de energia',
  'Manipulação de substâncias químicas',
  'Sugestão mental',
  'Sopro congelante',
  'Visão astral',
  'Manipulação de ilusões de massa',
  'Manipulação de nanobots',
  'Manipulação de sorte',
  'Controle de ondas cerebrais',
  'Criação de portais dimensionais',
  'Desintegração molecular',
  'Manipulação de luz',
  'Retrocognição',
  'Deslocamento temporal',
  'Manipulação de memória',
  'Criação de campos de antimatéria',
  'Criação de antigravidade',
  'Desintegração de objetos',
  'Manipulação de emoções',
  'Camuflagem dimensional',
  'Supersentidos',
];


// const vGone = () => {
//   v.style.cssText = `
//   visibility: hidden;
//   `
// }

// setTimeout(function vGone(){
//   v.style.cssText = `
//   visibility: hidden;
//   `
// }, 3000);

function vGone () {
  clique.style.visibility = 'hidden'
  injete.style.visibility = 'hidden'
  power.style.cssText = `
  transform: Scale(1);
  transition: 0.5s;
  `
}

const useCompoundV = () => {
  v.style.cssText = `
  transform: Scale(0);
  transition: 0.5s;
  `
  clique.innerText = 'Usando Composto V...'

  setTimeout(vGone, 2000)
}


const randomPower = superpoderes[Math.floor(Math.random() * (superpoderes.length))]

poderAdquirido.innerHTML = randomPower