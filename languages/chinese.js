/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Chinese.
 * @summary Chinese language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const CHINESE = {
  GAME_LOADING: "游戏加载",
  START_GAME: "开始游戏",
  CREDITS: "信用",
  OPTION_SELECT_LANGUAGE: "选择语言",
  YEAR_2084: "今年是2084",
  SETI_DETECTED: "SETI检测到接近地球的信号",
  UN_LAUNCHED: "联合国发射了航天器进行调查",
  SHORTLY_AFTER: "发射后不久，联合国航天器被摧毁",
  WE_ARE: "我们是",
  SKIP_INTRO: "跳过介绍",
  NO_LONGER_ALONE: "不再孤单",
  PREPARE_FOR_BATTLE: "战斗准备",
  LIMITED_TIME_ENERGY:
    "我们的时间和精力有限。地球的防御取决于您能否快速准确地单击网格。祝您好运。",
  MISSION_INFO:
    "任务信息：外星人的船被掩盖了，但是，任何损坏的零件都变得可见。船也可以随意移动。",
  SELECT_SPECIAL_WEAPON: "选择特殊武器",
  RADAR: "雷达",
  EMP_BOMB: "电磁脉冲炸弹",
  TUTORIAL: "教程",
  ENTER_BATTLE: "进入战斗",
  HOW_TO_PLAY: "怎么玩",
  HOW_TO_WIN: "如何取胜",
  HOW_TO_LOSE: "如何失去",
  WEAPONS: "武器",
  OTHER: "其他",
  MENU: "菜单",
  CLICK_BUTTON: "* 单击上方的按钮以了解更多信息。",
  CLICK_SQUARE: "* 单击战场网格上的一个正方形以发射激光武器。",
  LIMITED_ENERGY: "* 您的能量有限，每个激光发射需要1能量！",
  USING_SPECIAL_WEAPON:
    "* 要发射特殊武器，请先单击“使用特殊武器”按钮，然后单击网格。 点击“武器”以了解更多信息。",
  GRID_APPEARS:
    "*网格看起来是空的，因为外星人被掩盖了……撞上他们的船将永久露出船的那部分。",
  ALIENS_MOVE: "*外星飞船可以移动！它们可能会移入您之前向其发射的牢房！",
  TWO_SQUADS: "*外星飞船有两种可能的组合。",
  HSWOH: "* HSWOH中队有3艘船，大小分别为4、3和2。",
  VTLNH: "* VTLNH中队有3艘船，大小均为3。",
  TO_WIN: "*为了赢得胜利，请在时间或精力耗尽之前消灭所有3艘船。",
  ALIENS_CHARGING: "*外国人飞船正在装填某种能量炸弹，它们将很快发射。",
  RUN_OUT_OF:
    "*如果您耗尽了精力/弹药，我们将无法阻止他们发动进攻，我们将输掉比赛。",
  ATTACK_SLOW: "*如果攻击太慢，他们会开火，我们会输。",
  ONLY_ENOUGH: "*只有足够的时间为您的飞船配备一种特殊武器。",
  EACH_SPECIAL_WEAPON:
    "*每种特殊武器的作用不同，消耗的能量也不同，但只能发射一次。",
  RADAR_USES:
    "*雷达：使用" +
    CONFIGURATION.ENERGY_COST_RADAR +
    "能量，将在短时间内消除外星飞船的隐身之处。",
  EMP_USES:
    "* 电磁脉冲 炸弹：消耗" +
    CONFIGURATION.ENERGY_COST_EMP +
    "能量，将在短时间内阻止外星人移动。",
  PAUL_USES:
    "* PAUL：使用" +
    CONFIGURATION.ENERGY_COST_PAUL +
    "能量，将摧毁其命中的任何船只。",
  CAN_PAUSE:
    "*我可以暂停吗？不。外国人将要杀死我们所有人。您了解这种情况的严重性吗？",
  ADJUSTABLE_DIFF:
    "*很难进行调整吗？不。外星人将要杀死我们所有人，而且对我们来说并不容易。",
  HIGH_SCORE: "*会有高分吗？目前没有计划。",
  SEND_ME_MONEY:
    "*您有任何问题，答案是否定的。除非你想寄钱给我。咖啡和蜂蜜核桃虾也可以接受。",
  SHOT_STATUS: "拍摄状态",
  HIT: "打",
  MISS: "错过",
  AT: "在",
  COORDINATES: "R0_C3",
  THE: "， 这",
  ALIEN_SHIP_STATUS: "似乎是外星人的船",
  DAMAGED: "已损坏，但还活着。",
  DESTROYED: "毁了！",
  SW_SELECTED: "选择了特殊武器，发射特殊武器！",
  SW_FIRED: "特殊武器已被发射，不能再次发射。",
  TIMER: "计时器",
  ENERGY: "活力",
  WEAPON_READY: "准备好武器",
  USE_SPECIAL_WEAPON: "使用特殊武器",
  PROGRAMMING: "概念/编程",
  ART: "艺术品/声音",
  OTHER_CREDITS: "其他贡献者：请参阅readme.md",
  START_NEW_GAME: "开始新游戏",
};

export { CHINESE };
