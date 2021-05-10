/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Arabic.
 * @summary Arabic language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const ARABIC = {
  GAME_LOADING: "تحميل اللعبة",
  START_GAME: "بدء اللعبة",
  CREDITS: "الائتمانات",
  OPTION_SELECT_LANGUAGE: "اختار اللغة",
  YEAR_2084: "العام 2084",
  SETI_DETECTED: "اكتشف SETI إشارات قريبة من الأرض",
  UN_LAUNCHED: "الأمم المتحدة أطلقت مركبة فضائية للتحقيق",
  SHORTLY_AFTER:
    "بعد وقت قصير من الإطلاق ، دمرت المركبة الفضائية للأمم المتحدة",
  WE_ARE: "نحن",
  SKIP_INTRO: "تخطي المقدمة",
  NO_LONGER_ALONE: "لم تعد وحيدة",
  PREPARE_FOR_BATTLE: "الاستعداد للمعركة",
  LIMITED_TIME_ENERGY:
    "لدينا وقت وطاقة محدودان. يعتمد دفاع الأرض على قدرتك على النقر فوق الشبكة بسرعة وبدقة. حظ سعيد.",
  MISSION_INFO:
    "معلومات المهمة: السفن الفضائية مغطاة بغطاء للرأس ، ولكن أي أجزاء تالفة تصبح مرئية. يمكن للسفن أيضًا التحرك بشكل عشوائي.",
  SELECT_SPECIAL_WEAPON: "اختر سلاحًا خاصًا",
  RADAR: "رادار",
  EMP_BOMB: "قنبلة الكهرومغناطيسية",
  TUTORIAL: "درس تعليمي",
  ENTER_BATTLE: "أدخل المعركة",
  HOW_TO_PLAY: "كيف ألعب",
  HOW_TO_WIN: "كيفية الفوز",
  HOW_TO_LOSE: "كيف تخسر",
  WEAPONS: "الأسلحة",
  OTHER: "آخر",
  MENU: "قائمة",
  CLICK_BUTTON: "* انقر فوق الزر أعلاه لمعرفة المزيد.",
  CLICK_SQUARE:
    "انقر فوق مربع في شبكة ساحة المعركة لإطلاق سلاح الليزر الخاص بك.",
  LIMITED_ENERGY: "لديك طاقة محدودة ، وكل طلقة ليزر تستهلك طاقة واحدة!",
  USING_SPECIAL_WEAPON:
    "لإطلاق سلاحك الخاص ، انقر أولاً على زر 'استخدام سلاح خاص' ، ثم انقر فوق الشبكة. انقر فوق 'أسلحة' لمعرفة المزيد.",
  GRID_APPEARS:
    "* تظهر الشبكة فارغة لأن الأجانب متخفين ... ضرب سفينتهم سيكشف بشكل دائم عن ذلك الجزء من السفينة.",
  ALIENS_MOVE:
    "* يمكن للسفن الفضائية التحرك! قد تنتقل إلى زنزانة أطلقت عليها من قبل!",
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
    "* هل سيكون هناك تعديل صعب؟ لا. سيأتي الفضائيون لقتلنا جميعًا ، ولن يهدأوا علينا.",
  HIGH_SCORE: "* هل ستكون هناك درجات عالية؟ لا توجد خطط في هذا الوقت.",
  SEND_ME_MONEY:
    "* لا. مهما كان الأمر ، لا. ما لم تكن تريد أن ترسل لي المال ثم نعم تناولي القهوة والكفتة والشاورما.",
  TIMER: "توقيت",
  ENERGY: "طاقة",
  WEAPON_READY: "سلاح جاهز",
  USE_SPECIAL_WEAPON: "استخدم سلاح خاص",
  VICTORY_TEXT:
    "عمل ممتاز أيها القائد. مع تدمير الكائنات الفضائية ، أصبحنا وحدنا مرة أخرى ، سادة هذه المجرة.",
  PROGRAMMING: "المفهوم / البرمجة / الرسوم المتحركة css",
  ART: "عمل فني / موسيقى / صوت",
  OTHER_CREDITS: "المساهمون الآخرون: انظر readme.md",
  START_NEW_GAME: "بدء لعبة جديدة",
};

export { ARABIC };
