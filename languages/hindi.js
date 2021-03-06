/**
 * @fileoverview All of the game's text can be translated into supported languages by the translator.js file - this source is for Hindi.
 * @summary Hindi language file
 * @author Paul J Stales <https://twitter.com/pauljstales>
 * Translated by Google Translate, verified by ---------
 * Copyright (c) 2021
 */

import { CONFIGURATION } from "../configuration/configuration.js";

const HINDI = {
  GAME_LOADING: "गेम लोड हो रहा है",
  START_GAME: "खेल शुरू",
  CREDITS: "क्रेडिट",
  OPTION_SELECT_LANGUAGE: "भाषा का चयन करें",
  YEAR_2084: "वर्ष 2084 है",
  SETI_DETECTED: "SETI ने पृथ्वी के करीब संकेतों का पता लगाया",
  UN_LAUNCHED: "संयुक्त राष्ट्र ने जांच के लिए अंतरिक्ष यान लॉन्च किया",
  SHORTLY_AFTER:
    "लॉन्च के कुछ समय बाद संयुक्त राष्ट्र के अंतरिक्ष यान नष्ट हो गए",
  WE_ARE: "हम हैं",
  SKIP_INTRO: "आमुख छोड़ें",
  NO_LONGER_ALONE: "अब अकेले नहीं",
  PREPARE_FOR_BATTLE: "युद्ध की तैयारी",
  LIMITED_TIME_ENERGY:
    "हमारे पास सीमित समय और ऊर्जा है। पृथ्वी की रक्षा ग्रिड को जल्दी और सही ढंग से क्लिक करने की आपकी क्षमता पर निर्भर करती है। शुभकामनाएँ।",
  MISSION_INFO:
    "मिशन की जानकारी: विदेशी जहाजों को बंद कर दिया जाता है लेकिन कोई भी क्षतिग्रस्त भाग दिखाई देता है। जहाजों को पास में भी स्थानांतरित किया जा सकता है",
  SELECT_SPECIAL_WEAPON: "विशेष हथियार का चयन करें",
  RADAR: "राडार",
  EMP_BOMB: "ईएमपी बम",
  TUTORIAL: "ट्यूटोरियल",
  ENTER_BATTLE: "लड़ाई दर्ज करें",
  HOW_TO_PLAY: "कैसे खेलने के लिए",
  HOW_TO_WIN: "कैसे जितना",
  HOW_TO_LOSE: "कैसे खोना",
  WEAPONS: "हथियार शस्त्र",
  OTHER: "अन्य",
  MENU: "मेन्यू",
  CLICK_BUTTON: "* अधिक जानने के लिए ऊपर एक बटन पर क्लिक करें।",
  CLICK_SQUARE:
    "* अपने लेजर हथियार को आग लगाने के लिए युद्ध के मैदान पर एक वर्ग पर क्लिक करें। इसमें एक कोल्डाउन है, इसलिए बहुत तेज़ी से क्लिक न करें!",
  LIMITED_ENERGY:
    "* आपके पास सीमित ऊर्जा है, और प्रत्येक लेजर शॉट 1 ऊर्जा लेता है!",
  USING_SPECIAL_WEAPON:
    "* अपने विशेष हथियार को आग लगाने के लिए, पहले 'विशेष हथियार का उपयोग करें' बटन पर क्लिक करें, फिर ग्रिड पर क्लिक करें। अधिक जानने के लिए 'हथियार' पर क्लिक करें।",
  GRID_APPEARS:
    "* ग्रिड खाली दिखाई देता है क्योंकि एलियन लटके हुए हैं ... उनके जहाज को मारने से जहाज के उस हिस्से को स्थायी रूप से पता चल जाएगा।",
  ALIENS_MOVE:
    "* विदेशी जहाज चल सकते हैं! वे एक सेल में जा सकते हैं जिसे आपने पहले फायर किया था!",
  TWO_SQUADS: "* विदेशी जहाजों के दो संभावित संयोजन हैं।",
  HSWOH: "* HSWOH स्क्वाड्रन में 3 जहाज होते हैं आकार 4 3 और 2.",
  VTLNH: "* वीटीएलएनएच स्क्वाड्रन में 3 जहाज हैं सभी आकार 3.",
  TO_WIN:
    "* जीतने के लिए समय से पहले या ऊर्जा से बाहर सभी 3 जहाजों को नष्ट कर दें।",
  ALIENS_CHARGING:
    "* एलियंस जहाज किसी प्रकार के ऊर्जा बम को चार्ज कर रहे हैं जो बहुत जल्द आग लगा देगा।",
  RUN_OUT_OF:
    "* यदि आप ऊर्जा / बारूद से बाहर निकलते हैं तो हम उन्हें हमला करने से नहीं रोक सकते और हम हार जाएंगे।",
  ATTACK_SLOW:
    "* यदि आप बहुत धीरे-धीरे हमला करते हैं तो वे अपने हथियार को आग लगा देंगे और हम हार जाएंगे।",
  ONLY_ENOUGH:
    " * केवल एक विशेष हथियार के साथ अपने जहाज को तैयार करने के लिए पर्याप्त समय है।",
  EACH_SPECIAL_WEAPON:
    "* प्रत्येक विशेष हथियार कुछ अलग करता है और विभिन्न ऊर्जा खर्च करता है लेकिन केवल एक बार निकाल दिया जा सकता है।",
  RADAR_USES:
    "* राडार: " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_RADAR +
    " ऊर्जा का उपयोग करता है और थोड़े समय के लिए विदेशी जहाज को हटा देगा।",
  EMP_USES:
    "* ईएमपी बम: " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_EMP +
    " ऊर्जा का उपयोग करता है और कुछ समय के लिए एलियंस को आगे बढ़ने से रोक देगा।",
  PAUL_USES:
    "* पॉल: " +
    CONFIGURATION.BATTLE_ENERGY.ENERGY_COST_PAUL +
    " ऊर्जा का उपयोग करता है और इसे हिट करने वाले किसी भी जहाज को नष्ट कर देगा।",
  CAN_PAUSE:
    "* क्या मैं खेल रोक सकता हूँ? नहीं। एलियंस हम सभी को मारने के लिए आ रहे हैं। क्या आप स्थिति की गंभीरता को समझते हैं?",
  ADJUSTABLE_DIFF:
    "* क्या हम खेल को आसान बना सकते हैं? नहीं। एलियंस हम सभी को मारने के लिए आ रहे हैं, और हम पर आसानी से नहीं जाएंगे।",
  HIGH_SCORE: "* क्या उच्च स्कोर होंगे? इस समय कोई योजना नहीं है।",
  SEND_ME_MONEY:
    "* जो भी आपका प्रश्न है, उत्तर नहीं है। जब तक आप मुझे पैसे, कॉफी या टिक्का मसाला नहीं भेजना चाहते।",
  TIMER: "टाइमर",
  ENERGY: "ऊर्जा",
  WEAPON_READY: "हथियार तैयार",
  USE_SPECIAL_WEAPON: "विशेष हथियार का उपयोग करें",
  VICTORY_TEXT:
    "अच्छा हुआ, कमांडर। एलियंस नष्ट होने के साथ, हम फिर से अकेले हैं और इस आकाशगंगा के स्वामी बन गए हैं",
  PROGRAMMING: "अवधारणा / प्रोग्रामिंग / सीएसएस-एनीमेशन",
  ART: "कलाकृति / संगीत / ध्वनि",
  OTHER_CREDITS: "अन्य योगदानकर्ता: readme.md देखें",
  START_NEW_GAME: "नया खेल शुरू करें",
};

export { HINDI };
