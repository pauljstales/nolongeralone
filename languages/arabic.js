/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Arabic.
 * @summary Arabic language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Translated by Google translate, verified by Kamil Nuzha
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const ARABIC = {
  GAME_LOADING: "تحميل اللعبة",
  START_GAME: "بدء اللعبة",
  CREDITS: "حول",
  OPTION_SELECT_LANGUAGE: "اختار اللغة",
  YEAR_2084: "العام 2084",
  SETI_DETECTED: "اكتشف الباحث عن عوالم خارج الأرض إشارات قريبة من الأرض",
  UN_LAUNCHED: "الأمم المتحدة أطلقت مركبة فضائية للتحقيق",
  SHORTLY_AFTER:
    "بعد وقت قصير من الإطلاق ، دمرت المركبة الفضائية للأمم المتحدة",
  WE_ARE: "نحن",
  SKIP_INTRO: "تخطي المقدمة",
  NO_LONGER_ALONE: "لم نعد وحيدين",
  PREPARE_FOR_BATTLE: "استعد للمعركة",
  LIMITED_TIME_ENERGY:
    "لدينا وقت وطاقة محدودين. يعتمد الدفاع الأرض على قدرتك على النقر فوق الشبكة بسرعة وبدقة. بالتوفيق انشالله.",
  MISSION_INFO:
    "معلومات المهمة: السفن الفضائية متخفية ، ولكن أي أجزاء تالفة تصبح مرئية. يمكن للسفن أيضًا التحرك بشكل عشوائي.",
  SELECT_SPECIAL_WEAPON: "اختر سلاحًا خاصًا",
  RADAR: "رادار",
  EMP_BOMB: "قنبلة الكهرومغناطيسية",
  TUTORIAL: "تعليمات",
  ENTER_BATTLE: "أدخل المعركة",
  HOW_TO_PLAY: "كيف تلعب",
  HOW_TO_WIN: "كيفية الفوز",
  HOW_TO_LOSE: "كيف تخسر",
  WEAPONS: "الأسلحة",
  OTHER: "آخر",
  MENU: "قائمة",
  CLICK_BUTTON: "* انقر فوق الزر أعلاه لمعرفة المزيد.",
  CLICK_SQUARE:
    "انقر فوق مربع في شبكة ساحة المعركة لإطلاق سلاح الليزر الخاص بك.",
  LIMITED_ENERGY: "لديك طاقة محدودة ، وكل طلقة ليزر تستهلك طاقة واحدة",
  USING_SPECIAL_WEAPON:
    "لإطلاق سلاحك الخاص ، انقر أولاً على زر 'استخدام سلاح خاص' ، ثم انقر فوق الشبكة. انقر فوق 'أسلحة' لمعرفة المزيد.",
  GRID_APPEARS:
    "* تظهر الشبكة فارغة لأن الكائنات الفضائية متخفية ... ضرب سفينتهم سيكشف بشكل دائم عن ذلك الجزء من السفينة.",
  ALIENS_MOVE:
    "* يمكن للسفن الفضائية التحرك! قد تنتقل إلى خليةأطلقت عليها من قبل!",
  TWO_SQUADS: "* هناك مجموعتان محتملتان من السفن الفضائية.",
  HSWOH: "* سرب HSWOH به 3 سفن بأحجام 4 و 3 و 2.",
  VTLNH: "* سرب VTLNH به 3 سفن ، جميعها بحجم 3.",
  TO_WIN: "* للفوز ، دمر جميع السفن الثلاثة قبل نفاد الوقت أو الطاقة.",
  ALIENS_CHARGING:
    "* السفن الفضائية تشحن نوعا من قنبلة الطاقة ، والتي ستطلقها قريبا جدا.",
  RUN_OUT_OF:
    "* إذا نفدت الطاقة / الذخيرة ، لا يمكننا منعهم من الهجوم ، وسنخسر.",
  ATTACK_SLOW: "* إذا هاجمت ببطء شديد ، فسوف يطلقون سلاحهم ، وسنخسر.",
  ONLY_ENOUGH: "* هناك وقت كافٍ فقط لتجهيز سفينتك بسلاح خاص واحد.",
  EACH_SPECIAL_WEAPON:
    "* كل سلاح خاص يفعل شيئًا مختلفًا ويكلف طاقة مختلفة ، ولكن لا يمكن إطلاقه إلا مرة واحدة.",
  RADAR_USES:
    "* RADAR: يستخدم" +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " طاقة وسيزيل إخفاء هوية السفينة الغريبة لفترة قصيرة.",
  EMP_USES:
    "* القنبلة النبضية الكهرومغناطيسية: تستهلك " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " طاقة وتمنع الفضائيين من الحركة لوقت قصير.",
  PAUL_USES:
    "* بول: يستهلك طاقة مقدارها " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " وسيدمر أي سفينة تصطدم بها.",
  CAN_PAUSE:
    "* هل يمكنني التوقف؟ لا. الفضائيون قادمون لقتلنا جميعًا. هل تفهم خطورة الموقف ؟.",
  ADJUSTABLE_DIFF:
    "* هل سيكون هناك تعديل للصعوبة؟ لا. سيأتي الفضائيون لقتلنا جميعًا ، ولن يتمهلوا علينا.",
  HIGH_SCORE: "* هل ستكون هناك نقاط عالية؟ لا توجد خطط في الوقت الحالي.",
  SEND_ME_MONEY:
    "* لا. مهما كان سوالك فالجواب لا. ما لم تكن تريد أن ترسل لي المال فسيكون الجواب نعم ,القهوة والشاورما مقبولتان .",
  TIMER: "توقيت",
  ENERGY: "طاقة",
  WEAPON_READY: "سلاح جاهز",
  USE_SPECIAL_WEAPON: "استخدم سلاح خاص",
  VICTORY_TEXT:
    "عمل ممتاز أيها القائد. مع تدمير الكائنات الفضائية ، أصبحنا وحدنا مرة أخرى ، سادة هذه المجرة.",
  PROGRAMMING: "المفهوم / البرمجة / الرسوم المتحركة css",
  ART: "عمل فني / موسيقى / صوت",
  OTHER_CREDITS: "المساهمون الآخرون: انظر ملف readme.md",
  START_NEW_GAME: "بدء لعبة جديدة",
};

export { ARABIC };
