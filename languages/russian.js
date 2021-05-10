/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Russian.
 * @summary Russian language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const RUSSIAN = {
  GAME_LOADING: "ЗАГРУЗКА ИГРЫ",
  START_GAME: "НАЧАТЬ ИГРУ",
  CREDITS: "КРЕДИТЫ",
  OPTION_SELECT_LANGUAGE: "ВЫБЕРИТЕ ЯЗЫК",
  YEAR_2084: "2084 год",
  SETI_DETECTED: "SETI обнаружил сигналы вблизи Земли",
  UN_LAUNCHED: "ООН запустила космический корабль для расследования",
  SHORTLY_AFTER: "Вскоре после запуска космический корабль ООН был уничтожен",
  WE_ARE: "Мы",
  SKIP_INTRO: "ПРОПУСТИТЬ ВСТУПЛЕНИЕ",
  NO_LONGER_ALONE: "уже не один",
  PREPARE_FOR_BATTLE: "ПРИГОТОВЬТЕСЬ К БИТВЕ",
  LIMITED_TIME_ENERGY:
    "У нас мало времени и энергии. Защита Земли зависит от вашей способности быстро и точно щелкнуть сетку. Удачи.",
  MISSION_INFO:
    "ИНФОРМАЦИЯ О ЗАДАНИИ: Корабли пришельцев замаскированы, но все поврежденные части становятся видимыми. Корабли также могут перемещаться в произвольном порядке.",
  SELECT_SPECIAL_WEAPON: "Выберите специальное оружие",
  RADAR: "РАДАР",
  EMP_BOMB: "ЭМИ-БОМБА",
  TUTORIAL: "РУКОВОДСТВО",
  ENTER_BATTLE: "ВСТУПИТЬ В БИТВУ",
  HOW_TO_PLAY: "КАК ИГРАТЬ",
  HOW_TO_WIN: "КАК ПОБЕДИТЬ",
  HOW_TO_LOSE: "КАК ПОТЕРЯТЬ",
  WEAPONS: "ОРУЖИЕ",
  OTHER: "ДРУГИЕ",
  MENU: "МЕНЮ",
  CLICK_BUTTON: "* Нажмите кнопку выше, чтобы узнать больше.",
  CLICK_SQUARE:
    "* Щелкните квадрат на сетке поля боя, чтобы выстрелить из лазерного оружия.",
  LIMITED_ENERGY:
    "* У вас ограниченная энергия, и каждый лазерный выстрел требует 1 энергии!",
  USING_SPECIAL_WEAPON:
    "* Чтобы выстрелить из специального оружия, сначала нажмите кнопку «Использовать специальное оружие», а затем щелкните сетку. Нажмите «оружие», чтобы узнать больше.",
  GRID_APPEARS:
    "* Сетка кажется пустой, потому что инопланетяне замаскированы ... попадание в их корабль навсегда откроет эту часть корабля.",
  ALIENS_MOVE:
    "* Корабли пришельцев могут ДВИГАТЬСЯ! Они могут переместиться в ячейку, по которой вы стреляли ранее!",
  TWO_SQUADS: "* Возможны две комбинации кораблей пришельцев.",
  HSWOH: "* В эскадрилье HSWOH 3 корабля типоразмера 4, 3 и 2",
  VTLNH: "* В эскадрилье ВТЛНХ 3 корабля, все 3-го размера",
  TO_WIN:
    "* Чтобы победить, уничтожьте все 3 корабля, пока у вас не закончились время или энергия.",
  ALIENS_CHARGING:
    "* Корабли пришельцев заряжают какую-то энергетическую бомбу, которую они очень скоро запустят.",
  RUN_OUT_OF:
    "* Если у вас закончится энергия / боеприпасы, мы не сможем остановить их атаку и проиграем.",
  ATTACK_SLOW:
    "* Если атаковать слишком медленно, они выстрелят из своего оружия, и мы проиграем",
  ONLY_ENOUGH:
    "* Достаточно времени только на то, чтобы оснастить ваш корабль одним специальным оружием.",
  EACH_SPECIAL_WEAPON:
    "* Каждое специальное оружие делает что-то свое и требует разной энергии, но может быть выпущено только один раз.",
  RADAR_USES:
    "* РАДАР: расходует " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " энергии и на короткое время снимает маскировку корабля пришельцев.",
  EMP_USES:
    "* ЭМИ-бомба: использует " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " энергию и на короткое время останавливает движение пришельцев.",
  PAUL_USES:
    "* PAUL: Использует " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " энергии и уничтожит любой корабль, в который попадет.",
  CAN_PAUSE:
    "* Могу я сделать паузу? НЕТ. Пришельцы идут убить нас всех. Вы понимаете серьезность ситуации?",
  ADJUSTABLE_DIFF:
    "* Будет ли регулироваться сложно? НЕТ. Пришельцы прибывают убить нас всех, и нам нелегко будет.",
  HIGH_SCORE: "* Будут ли рекорды? Пока нет планов.",
  SEND_ME_MONEY:
    "* НЕТ. Во всяком случае, нет. Если только вы не хотите прислать мне деньги. Тогда да. Также принимаются кофе и бефстроганов.",
  TIMER: "ТАЙМЕР",
  ENERGY: "ЭНЕРГИЯ",
  WEAPON_READY: "Оружие готово",
  USE_SPECIAL_WEAPON: "ИСПОЛЬЗУЙТЕ СПЕЦИАЛЬНОЕ ОРУЖИЕ",
  PROGRAMMING: "Концепция / Программирование / CSS-Анимация",
  ART: "Иллюстрации / Музыка / Звук",
  OTHER_CREDITS: "Другие участники: см. Readme.md",
  START_NEW_GAME: "НАЧАТЬ НОВУЮ ИГРУ",
};

export { RUSSIAN };
