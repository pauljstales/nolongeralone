/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Japanese.
 * @summary Japanese language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Translated by Google Translate, verified by ---------
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const JAPANESE = {
  GAME_LOADING: "ゲームローディング",
  START_GAME: "ゲームをスタート",
  CREDITS: "クレジット",
  OPTION_SELECT_LANGUAGE: "言語を選択する",
  YEAR_2084: "年は2084年",
  SETI_DETECTED: "SETIは地球に近い信号を検出しました",
  UN_LAUNCHED: "国連は調査のために宇宙船を打ち上げました",
  SHORTLY_AFTER: "打ち上げ直後、国連の宇宙船は破壊された",
  WE_ARE: "私たちです",
  SKIP_INTRO: "イントロをスキップ",
  NO_LONGER_ALONE: "もはや一人ではない",
  PREPARE_FOR_BATTLE: "戦いに備える",
  LIMITED_TIME_ENERGY:
    "時間とエネルギーには限りがあります。地球の防御は、グリッドをすばやく正確にクリックできるかどうかにかかっています。頑張ってください。",
  MISSION_INFO:
    "ミッション情報：エイリアンの船はクロークされていますが、損傷した部分が見えるようになります。船はランダムに移動することもできます。",
  SELECT_SPECIAL_WEAPON: "特別な武器を選択してください",
  RADAR: "レーダー",
  EMP_BOMB: "EMP爆弾",
  TUTORIAL: "チュートリアル",
  ENTER_BATTLE: "エンターバトル",
  HOW_TO_PLAY: "遊び方",
  HOW_TO_WIN: "勝つ方法",
  HOW_TO_LOSE: "失う方法",
  WEAPONS: "兵器",
  OTHER: "その他",
  MENU: "メニュー",
  CLICK_BUTTON: "*詳細については、上のボタンをクリックしてください。",
  CLICK_SQUARE:
    "* 戦場グリッドの四角をクリックして、レーザー兵器を発射します。 クールダウンがありますので、あまり速くクリックしないでください！",
  LIMITED_ENERGY:
    "* エネルギーが限られており、各レーザーショットには1つのエネルギーが必要です。",
  USING_SPECIAL_WEAPON:
    "* 特別な武器を発射するには、最初に[特別な武器を使用する]ボタンをクリックしてから、グリッドをクリックします。 詳細については、「武器」をクリックしてください。",
  GRID_APPEARS:
    "*エイリアンがクロークされているため、グリッドは空に見えます...彼らの船にぶつかると、船のその部分が永久に明らかになります。",
  ALIENS_MOVE:
    "*エイリアンの船は移動できます！以前に発射したセルに移動する可能性があります！",
  TWO_SQUADS: "エイリアンの船には2つの可能な組み合わせがあります。",
  HSWOH: "* HSWOH飛行隊には、サイズ4、3、2の3隻の船があります。",
  VTLNH: "* VTLNH飛行隊には3隻の船があり、すべてサイズ3です。",
  TO_WIN:
    "*勝つには、時間やエネルギーがなくなる前に3隻すべてを破壊してください。",
  ALIENS_CHARGING:
    "*エイリアンの船はある種のエネルギー爆弾を充電していて、すぐに発砲するでしょう。",
  RUN_OUT_OF:
    "*エネルギー/弾薬が不足した場合、攻撃を阻止することはできず、負けます。",
  ATTACK_SLOW: "*攻撃が遅すぎると、彼らは武器を発射し、私たちは負けます。",
  ONLY_ENOUGH:
    "*あなたの船に1つの特別な武器を装備するのに十分な時間しかありません。",
  EACH_SPECIAL_WEAPON:
    "*それぞれの特別な武器は異なることをし、異なるエネルギーを消費しますが、一度しか発射できません。",
  RADAR_USES:
    "*レーダー：" +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    "エネルギーを使用し、エイリアンの船のクローキングを短時間除去します。",
  EMP_USES:
    "* EMP爆弾：" +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    "つのエネルギーを使用し、エイリアンの移動を短時間停止します。",
  PAUL_USES:
    "*ポール：" +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    "つのエネルギーを使用し、命中した船を破壊します。",
  CAN_PAUSE:
    "*一時停止できますか？いいえ。エイリアンが私たち全員を殺すために来ています。状況の深刻さを理解していますか？",
  ADJUSTABLE_DIFF:
    "*調整が難しいのでしょうか？いいえ。エイリアンが私たち全員を殺しに来ており、私たちを楽にすることはできません。",
  HIGH_SCORE: "*ハイスコアはありますか？現時点では予定はありません。",
  SEND_ME_MONEY:
    "*いいえ、それが何であれ。あなたが送金したいのでなければ。そのとおり。コーヒーやうどんカレーも美味しいです。",
  TIMER: "タイマー",
  ENERGY: "エネルギー",
  WEAPON_READY: "武器の準備ができました",
  USE_SPECIAL_WEAPON: "特別な武器を使用する",
  VICTORY_TEXT:
    "よくやった、司令官。 エイリアンが破壊されると、私たちは再び一人になり、この銀河のマスターになります",
  PROGRAMMING: "コンセプト / プログラミング / CSS-アニメーション",
  ART: "アートワーク / 音楽 / サウンド",
  OTHER_CREDITS: "その他の寄稿者：readme.mdを参照",
  START_NEW_GAME: "新しいゲームを開始する",
};

export { JAPANESE };
