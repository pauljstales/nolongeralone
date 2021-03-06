/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Portuguese.
 * @summary Portuguese language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Translated by Google Translate, verified by "shadow"
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const PORTUGUESE = {
  GAME_LOADING: "CARREGANDO O JOGO",
  START_GAME: "COMEÇAR O JOGO",
  CREDITS: "CRÉDITOS",
  OPTION_SELECT_LANGUAGE: "SELECIONE O IDIOMA",
  YEAR_2084: "O ano é 2084",
  SETI_DETECTED: "SETI detectou sinais próximos à Terra",
  UN_LAUNCHED: "A ONU lançou uma espaçonave para investigar",
  SHORTLY_AFTER:
    "Pouco depois do lançamento, as espaçonaves da ONU foram destruídas",
  WE_ARE: "Não estamos mais...",
  SKIP_INTRO: "PULAR INTRODUÇÃO",
  NO_LONGER_ALONE: "Sozinhos na galáxia",
  PREPARE_FOR_BATTLE: "PREPARE-SE PARA A BATALHA",
  LIMITED_TIME_ENERGY:
    "Temos tempo e energia limitados. A defesa da Terra depende da sua capacidade de clicar nos quadrados com rapidez e precisão. Boa sorte.",
  MISSION_INFO:
    "INFORMAÇÕES DA MISSÃO: As naves alienígenas estão camufladas, mas quando danificadas as partes se tornam visíveis. As naves também podem se mover aleatoriamente.",
  SELECT_SPECIAL_WEAPON: "Selecione a arma especial",
  RADAR: "RADAR",
  EMP_BOMB: "BOMBA EMP",
  TUTORIAL: "TUTORIAL",
  ENTER_BATTLE: "ENTRE NA BATALHA",
  HOW_TO_PLAY: "COMO JOGAR",
  HOW_TO_WIN: "COMO GANHAR",
  HOW_TO_LOSE: "COMO PERDER",
  WEAPONS: "ARMAS",
  OTHER: "OUTRO",
  MENU: "CARDÁPIO",
  CLICK_BUTTON: "* Clique em um botão acima para saber mais.",
  CLICK_SQUARE:
    "* Clique em um quadrado na grade do campo de batalha para disparar sua arma a laser. Tem um tempo de espera, então não clique muito rápido!",
  LIMITED_ENERGY:
    "* Você tem energia limitada e cada disparo de laser consome 1 de energia!",
  USING_SPECIAL_WEAPON:
    "* Para disparar sua arma especial, primeiro clique no botão 'usar arma especial' e, em seguida, clique na grade. Clique em 'armas' para saber mais.",
  GRID_APPEARS:
    "* A grade parece vazia porque os alienígenas estão camuflados ... bater em sua nave revelará permanentemente aquela parte da nave.",
  ALIENS_MOVE:
    "* Navios alienígenas podem se MOVER! Eles podem se mover para um quadrado no qual você atirou anteriormente!",
  TWO_SQUADS: "* Existem duas combinações possíveis de naves alienígenas.",
  HSWOH: "* O esquadrão HSWOH possui 3 navios, de tamanhos 4, 3 e 2.",
  VTLNH: "* O esquadrão VTLNH possui 3 navios, todos de tamanho 3.",
  TO_WIN:
    "* Para vencer, destrua todos os 3 navios antes de ficar sem tempo ou energia.",
  ALIENS_CHARGING:
    "* As naves alienígenas estão carregando algum tipo de bomba de energia, que eles vão disparar muito em breve.",
  RUN_OUT_OF:
    "* Se você ficar sem energia / munição, não podemos impedi-los de atacar e vamos perder.",
  ATTACK_SLOW:
    "* Se você atacar muito devagar, eles dispararão suas armas e nós perderemos.",
  ONLY_ENOUGH:
    "* Só há tempo suficiente para equipar sua nave com uma arma especial.",
  EACH_SPECIAL_WEAPON:
    "* Cada arma especial faz algo diferente e custa energia diferente, mas só poderão ser disparadas uma vez.",
  RADAR_USES:
    "* RADAR: Usa energia " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " e removerá a camuflagem da nave alienígena por um curto período de tempo.",
  EMP_USES:
    "* Bomba EMP: usa " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " energia e impede os alienígenas de se moverem por um curto período de tempo.",
  PAUL_USES:
    "* PAUL: Usa " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " energias e destruirá qualquer nave que atingir.",
  CAN_PAUSE:
    "* Posso fazer uma pausa? NÃO. Os alienígenas estão vindo para matar todos nós. Você entende a gravidade da situação?",
  ADJUSTABLE_DIFF:
    "* Haverá dificuldade ajustável? NÃO. Os alienígenas estão vindo para matar todos nós e não será fácil para nós.",
  HIGH_SCORE: "* Haverá pontuações altas? Não há planos no momento.",
  SEND_ME_MONEY:
    "* NÃO FAÇA. Seja o que for, não. A menos que você queira me enviar dinheiro. Então sim. Pastel e garapa também são aceitos.",
  TIMER: "CRONÔMETRO",
  ENERGY: "ENERGIA",
  WEAPON_READY: "ARMA PRONTA",
  USE_SPECIAL_WEAPON: "USAR ARMA ESPECIAL",
  VICTORY_TEXT:
    "Muito bem, comandante. Com os alienígenas sendo destruídos, estamos sozinhos novamente e nos tornamos os mestres desta galáxia",
  PROGRAMMING: "Conceito / Programação / CSS-Animação",
  ART: "Arte / Música / Som",
  OTHER_CREDITS: "Outros contribuidores: Veja readme.md",
  START_NEW_GAME: "COMEÇAR NOVO JOGO",
};

export { PORTUGUESE };
