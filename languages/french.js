/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for French.
 * @summary French language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const FRENCH = {
  GAME_LOADING: "JEU EN COURS DE CHARGEMENT",
  START_GAME: "DÉMARRER JEU",
  CREDITS: "CRÉDITS",
  OPTION_SELECT_LANGUAGE: "CHOISIR LA LANGUE",
  YEAR_2084: "Nous sommes 2084",
  SETI_DETECTED: "SETI a détecté des signaux proches de la Terre",
  UN_LAUNCHED: "L'ONU a lancé un vaisseau spatial pour enquêter",
  SHORTLY_AFTER:
    "Peu de temps après le lancement, le vaisseau spatial de l'ONU a été détruit",
  WE_ARE: "Nous sommes",
  SKIP_INTRO: "SAUTER L'INTRO",
  NO_LONGER_ALONE: "plus seul",
  PREPARE_FOR_BATTLE: "PRÉPAREZ-VOUS POUR LA BATAILLE",
  LIMITED_TIME_ENERGY:
    "Nous avons peu de temps et d'énergie. La défense de la Terre dépend de votre capacité à cliquer rapidement et avec précision sur une grille. Bonne chance.",
  MISSION_INFO:
    "INFORMATIONS SUR LA MISSION: Les vaisseaux extraterrestres sont masqués, mais toutes les pièces endommagées deviennent visibles. Les vaisseaux peuvent également se déplacer au hasard.",
  SELECT_SPECIAL_WEAPON: "Sélectionnez une arme spéciale",
  RADAR: "RADAR",
  EMP_BOMB: "BOMBE EMP",
  TUTORIAL: "DIDACTICIEL",
  ENTER_BATTLE: "ENTRER EN BATAILLE",
  HOW_TO_PLAY: "COMMENT JOUER",
  HOW_TO_WIN: "COMMENT GAGNER",
  HOW_TO_LOSE: "COMMENT PERDRE",
  WEAPONS: "ARMES",
  OTHER: "AUTRE",
  MENU: "MENU",
  CLICK_BUTTON: "* Cliquez sur un bouton ci-dessus pour en savoir plus.",
  CLICK_SQUARE:
    "* Cliquez sur une case de la grille du champ de bataille pour tirer votre arme laser.",
  LIMITED_ENERGY:
    "* Vous avez une énergie limitée et chaque tir laser prend 1 énergie!",
  USING_SPECIAL_WEAPON:
    "* Pour tirer avec votre arme spéciale, cliquez d'abord sur le bouton «utiliser une arme spéciale», puis cliquez sur la grille. Cliquez sur «armes» pour en savoir plus.",
  GRID_APPEARS:
    "* La grille semble vide car les extraterrestres sont masqués ... frapper leur vaisseau révélera définitivement cette partie du vaisseau.",
  ALIENS_MOVE:
    "* Les vaisseaux extraterrestres peuvent se déplacer! Ils pourraient se déplacer dans une cellule sur laquelle vous avez tiré auparavant!",
  TWO_SQUADS:
    "* Il existe deux combinaisons possibles de vaisseaux extraterrestres.",
  HSWOH: "* L'escadron HSWOH a 3 navires, de tailles 4, 3 et 2.",
  VTLNH: "* L'escadron VTLNH dispose de 3 navires, tous de taille 3.",
  TO_WIN:
    "* Pour gagner, détruisez les 3 vaisseaux avant de manquer de temps ou d'énergie.",
  ALIENS_CHARGING:
    "* Les vaisseaux extraterrestres chargent une sorte de bombe à énergie, qu'ils vont tirer très bientôt.",
  RUN_OUT_OF:
    "* Si vous manquez d'énergie / de munitions, nous ne pouvons pas les empêcher d'attaquer et nous perdrons.",
  ATTACK_SLOW:
    "* Si vous attaquez trop lentement, ils tireront avec leur arme et nous perdrons.",
  ONLY_ENOUGH:
    "* Il n'y a que suffisamment de temps pour équiper votre vaisseau d'une arme spéciale.",
  EACH_SPECIAL_WEAPON:
    "* Chaque arme spéciale fait quelque chose de différent et coûte une énergie différente, mais ne peut être tirée qu'une seule fois.",
  RADAR_USES:
    "* RADAR: utilise " +
    CONFIGURATION.ENERGY_COST_RADAR +
    " énergie et supprimera le camouflage du vaisseau extraterrestre pendant une courte période.",
  EMP_USES:
    "* Bombe EMP: utilise " +
    CONFIGURATION.ENERGY_COST_EMP +
    " énergie et empêchera les extraterrestres de bouger pendant une courte période.",
  PAUL_USES:
    "* PAUL: Utilise " +
    CONFIGURATION.ENERGY_COST_PAUL +
    " énergies et détruira tout vaisseau touché.",
  CAN_PAUSE:
    "* Puis-je faire une pause? NON. Les extraterrestres viennent nous tuer tous. Comprenez-vous la gravité de la situation?",
  ADJUSTABLE_DIFF:
    "* Y aura-t-il des ajustements difficiles? NON. Les extraterrestres viennent nous tuer tous, et ne seront pas faciles avec nous.",
  HIGH_SCORE: "* Y aura-t-il des scores élevés? Aucun plan pour le moment.",
  SEND_ME_MONEY:
    "* NON. La réponse à toutes les questions est NON. A moins que vous ne vouliez m'envoyer de l'argent. Alors oui! Le café et la mousse au chocolat sont également acceptés.",
  SHOT_STATUS: "ÉTAT DU TIR",
  HIT: "Frappé",
  MISS: "Manquer",
  AT: "à",
  COORDINATES: "R0_C3",
  THE: ", les",
  ALIEN_SHIP_STATUS: "un vaisseau extraterrestre semble être",
  DAMAGED: "endommagé, mais vivant.",
  DESTROYED: "détruit!",
  SW_SELECTED: "Arme spéciale sélectionnée, tirez avec l'arme spéciale!",
  SW_FIRED: "Une arme spéciale a été tirée, elle ne peut plus être tirée.",
  TIMER: "MINUTEUR",
  ENERGY: "ÉNERGIE",
  WEAPON_READY: "ARME PRÊT",
  USE_SPECIAL_WEAPON: "UTILISER UNE ARME SPÉCIALE ",
  PROGRAMMING: "Concept / Programmation",
  ART: "Illustration / Son",
  OTHER_CREDITS: "Autres contributeurs: voir readme.md",
  START_NEW_GAME: "COMMENCER UNE NOUVELLE PARTIE",
};

export { FRENCH };
