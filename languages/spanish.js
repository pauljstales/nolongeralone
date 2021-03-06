/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Spanish.
 * @summary Spanish language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Translated by Google translate, verified by Samuel Soto and Logan B
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const SPANISH = {
  GAME_LOADING: "JUEGO CARGANDO",
  START_GAME: "INICIAR JUEGO",
  CREDITS: "CRÉDITOS",
  OPTION_SELECT_LANGUAGE: "SELECCIONE EL IDIOMA",
  YEAR_2084: "Es el año 2084",
  SETI_DETECTED: "SETI detectó señales cercanas a la Tierra",
  UN_LAUNCHED: "La ONU envió naves espaciales para investigar",
  SHORTLY_AFTER:
    "Poco después del lanzamiento, las naves de la ONU fueron destruidas",
  WE_ARE: "Ya no",
  SKIP_INTRO: "SALTAR INTRO",
  NO_LONGER_ALONE: "estamos solos",
  PREPARE_FOR_BATTLE: "PREPÁRATE PARA LA BATALLA",
  LIMITED_TIME_ENERGY:
    "Tenemos tiempo y energía limitados. La defensa de la Tierra depende de tu capacidad para hacer clic en una cuadrícula de forma rápida y precisa. Buena suerte",
  MISSION_INFO:
    "INFORMACIÓN DE LA MISIÓN: Las naves alienígenas están ocultas, pero cualquier parte destruida se hará visible. Las naves también pueden moverse al azar.",
  SELECT_SPECIAL_WEAPON: "Seleccionar arma especial",
  RADAR: "RADAR",
  EMP_BOMB: "BOMBA EMP",
  TUTORIAL: "TUTORIAL",
  ENTER_BATTLE: "ENTRAR A LA BATALLA",
  HOW_TO_PLAY: "CÓMO JUGAR",
  HOW_TO_WIN: "CÓMO GANAR",
  HOW_TO_LOSE: "CÓMO PERDER",
  WEAPONS: "ARMAS",
  OTHER: "OTRO",
  MENU: "MENÚ",
  CLICK_BUTTON:
    "* Haz clic en un cuadrado de la cuadrícula del campo de batalla para disparar tu arma láser.",
  CLICK_SQUARE:
    "* Haz clic en un cuadrado de la cuadrícula del campo de batalla para disparar tu arma de energía.",
  LIMITED_ENERGY:
    "* ¡Tienes energía limitada y cada disparo de láser requiere 1 punto de energía!",
  USING_SPECIAL_WEAPON:
    "* Para disparar tu arma especial, primero haz clic en el botón 'usar arma especial' y luego haz clic en la cuadrícula. Has clic en 'armas' para obtener más información.",
  GRID_APPEARS:
    "* La cuadrícula parece estar vacía porque los alienígenas están camuflados... Atacar su nave revelará la parte atacada permanentemente.",
  ALIENS_MOVE:
    "* ¡Las naves alienígenas se pueden MOVER! ¡Pueden moverse a una celda a la que disparaste anteriormente!",
  TWO_SQUADS: "* Hay dos posibles combinaciones de naves alienígenas.",
  HSWOH: "* El escuadrón HSWOH tiene 3 naves, de tamaños 4, 3 y 2",
  VTLNH: "* El escuadrón VTLNH tiene 3 naves, todas de tamaño 3.",
  TO_WIN:
    "* Para ganar, destruye las 3 naves antes de que te quedes sin tiempo o energía.",
  ALIENS_CHARGING:
    "* Las naves alienígenas están cargando algún tipo de bomba de energía, que dispararán muy pronto.",
  RUN_OUT_OF:
    "* Si te quedas sin energía / munición, no podremos evitar que ataquen y perderemos.",
  ATTACK_SLOW: "* Si atacas demasiado lento, dispararán su arma y perderemos.",
  ONLY_ENOUGH:
    "* Solo hay tiempo suficiente para equipar tu nave con un arma especial.",
  EACH_SPECIAL_WEAPON:
    "* Cada arma especial hace algo diferente y cuesta una cantidad diferente de energía, pero solo se puede disparar una vez.",
  RADAR_USES:
    "* RADAR: Usa " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " puntos de energía y eliminará el camuflaje de la nave alienígena por un corto tiempo.",
  EMP_USES:
    "* Bomba EMP: Usa " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " puntos de energía y evitará que los alienígenas se muevan por un corto tiempo.",
  PAUL_USES:
    "* PAUL: Usa " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " puntos de energía y destruirá cualquier nave que golpee.",
  CAN_PAUSE:
    "* ¿Puedo hacer una pausa? NO. Los extraterrestres vienen a matarnos a todos. ¿Entiendes la gravedad de la situación?",
  ADJUSTABLE_DIFF:
    "* ¿Habrá ajustes de dificultad? NO. Los extraterrestres vienen a matarnos a todos, y no será fácil para nosotros.",
  HIGH_SCORE: "* ¿Habrá puntajes? No hay planes en este momento.",
  SEND_ME_MONEY:
    "* NO. Sea lo que sea, no. A menos que quieras enviarme dinero. Entonces sí. También puedes comprarme café o churros de chocolate.",
  TIMER: "TIEMPO",
  ENERGY: "ENERGÍA",
  WEAPON_READY: "ARMA LISTA",
  USE_SPECIAL_WEAPON: "USAR ARMA ESPECIAL",
  VICTORY_TEXT:
    "Excelente trabajo, comandante. Con los alienígenas destruidos, estamos solos otra vez, maestros de esta galaxia.",
  PROGRAMMING: "Concepto / Programación / Animación CSS",
  ART: "Arte / Música / Sonido",
  OTHER_CREDITS: "Otros colaboradores: consulte readme.md",
  START_NEW_GAME: "EMPIEZA UNA PARTIDA NUEVA",
};

export { SPANISH };
