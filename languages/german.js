/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for German.
 * @summary German language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Translated by Google Translate, verified by --------
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const GERMAN = {
  GAME_LOADING: "SPIEL LÄD",
  START_GAME: "SPIEL STARTEN",
  CREDITS: "CREDITS",
  OPTION_SELECT_LANGUAGE: "SPRACHE AUSWÄHLEN",
  YEAR_2084: "Das Jahr ist 2084",
  SETI_DETECTED: "SETI hat erdnahe Signale erkannt",
  UN_LAUNCHED:
    "Die UNO startete ein Raumschiff, um Nachforschungen anzustellen",
  SHORTLY_AFTER: "Kurz nach dem Start wurden die UN-Raumschiffe zerstört",
  WE_ARE: "Wir sind",
  SKIP_INTRO: "INTRO ÜBERSPRINGEN",
  NO_LONGER_ALONE: "nicht mehr allein",
  PREPARE_FOR_BATTLE: "BEREITMACHEN ZU KÄMPFEN",
  LIMITED_TIME_ENERGY:
    "Wir haben nur begrenzte Zeit und Energie. Die Verteidigung der Erde hängt von Ihrer Fähigkeit ab, schnell und genau auf ein Gitter zu klicken. Viel Glück.",
  MISSION_INFO:
    "MISSIONSINFORMATIONEN: Die außerirdischen Schiffe sind getarnt, aber beschädigte Teile werden sichtbar. Schiffe können sich auch nach dem Zufallsprinzip bewegen.",
  SELECT_SPECIAL_WEAPON: "Spezialwaffe auswählen",
  RADAR: "RADAR",
  EMP_BOMB: "EMP BOMBE",
  TUTORIAL: "LERNPROGRAMM",
  ENTER_BATTLE: "SCHLACHT EINGEBEN",
  HOW_TO_PLAY: "SPIELANLEITUNG",
  HOW_TO_WIN: "WIE GEWINNT MAN",
  HOW_TO_LOSE: "WIE ZU VERLIEREN",
  WEAPONS: "WAFFEN",
  OTHER: "ANDERE",
  MENU: "SPEISEKARTE",
  CLICK_BUTTON:
    "* Klicken Sie oben auf eine Schaltfläche, um mehr zu erfahren.",
  CLICK_SQUARE:
    "* Klicke auf ein Feld im Schlachtfeldgitter, um deine Laserwaffe abzufeuern. Es hat eine Abklingzeit, also klicke nicht zu schnell!",
  LIMITED_ENERGY:
    "* Sie haben nur begrenzte Energie und jeder Laserschuss benötigt 1 Energie!",
  USING_SPECIAL_WEAPON:
    "* Um Ihre Spezialwaffe abzufeuern, klicken Sie zuerst auf die Schaltfläche 'Spezialwaffe verwenden' und dann auf das Raster. Klicken Sie auf 'Waffen', um mehr zu erfahren.",
  GRID_APPEARS:
    "* Das Gitter erscheint leer, weil die Außerirdischen getarnt sind. Wenn sie auf ihr Schiff treffen, wird dieser Teil des Schiffes dauerhaft sichtbar.",
  ALIENS_MOVE:
    "* Außerirdische Schiffe können sich bewegen! Sie könnten in eine Zelle ziehen, auf die Sie zuvor geschossen haben!",
  TWO_SQUADS:
    "* Es gibt zwei mögliche Kombinationen von außerirdischen Schiffen.",
  HSWOH: "* HSWOH-Geschwader hat 3 Schiffe der Größen 4, 3 und 2.",
  VTLNH: "* VTLNH Geschwader hat 3 Schiffe, alle der Größe 3.",
  TO_WIN:
    "* Um zu gewinnen, zerstöre alle 3 Schiffe, bevor dir Zeit oder Energie ausgehen.",
  ALIENS_CHARGING:
    "* Die außerirdischen Schiffe laden eine Art Energiebombe auf, die sie sehr bald abfeuern werden.",
  RUN_OUT_OF:
    "* Wenn dir die Energie / Munition ausgeht, können wir sie nicht davon abhalten, anzugreifen, und wir werden verlieren.",
  ATTACK_SLOW:
    "* Wenn du zu langsam angreifst, werden sie ihre Waffe abfeuern und wir werden verlieren.",
  ONLY_ENOUGH:
    "* Es bleibt nur genug Zeit, um Ihr Schiff mit einer speziellen Waffe auszustatten.",
  EACH_SPECIAL_WEAPON:
    "* Jede Spezialwaffe macht etwas anderes und kostet andere Energie, kann aber nur einmal abgefeuert werden.",
  RADAR_USES:
    "* RADAR: Verbraucht " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " Energie und entfernt für kurze Zeit die Tarnung des außerirdischen Schiffes.",
  EMP_USES:
    "* EMP-Bombe: Verbraucht " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " Energie und verhindert, dass sich die Außerirdischen für kurze Zeit bewegen.",
  PAUL_USES:
    "* PAUL: Verbraucht " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " Energie und zerstört jedes Schiff, das es trifft.",
  CAN_PAUSE:
    "* Kann ich pausieren? NEIN. Die Außerirdischen kommen, um uns alle zu töten. Verstehst du die Schwere der Situation?",
  ADJUSTABLE_DIFF:
    "* Wird es schwierig einstellbar sein? NEIN. Die Außerirdischen kommen, um uns alle zu töten, und werden uns nicht leicht machen.",
  HIGH_SCORE: "* Wird es Highscores geben? Derzeit keine Pläne.",
  SEND_ME_MONEY:
    "* NEIN. Was auch immer es ist, nein. Es sei denn, Sie möchten mir Geld schicken. Dann ja. Kaffee und Kartoffelpuffer werden ebenfalls akzeptiert.",
  TIMER: "TIMER",
  ENERGY: "ENERGIE",
  WEAPON_READY: "WAFFE BEREIT",
  USE_SPECIAL_WEAPON: "BENUTZEN SIE SPEZIELLE WAFFE",
  VICTORY_TEXT:
    "Gut gemacht, Commander. Nachdem die Außerirdischen zerstört wurden, sind wir wieder allein und werden die Meister dieser Galaxie",
  PROGRAMMING: "Konzept / Programmierung / CSS-Animation",
  ART: "Grafik / Musik / Ton",
  OTHER_CREDITS: "Andere Mitwirkende: Siehe readme.md",
  START_NEW_GAME: "NEUES SPIEL STARTEN",
};

export { GERMAN };
