/**
 * Rayashree Weaving Pvt. Ltd. - Multilingual (English, Kannada, Hindi) i18n Engine
 */

const DEFAULT_TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_infra: "Infrastructure",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_staff: "Staff Portal",
    btn_request_quote: "Request Quote",
    btn_quick_quote: "Quick Quote",
    btn_view_specs: "View Specs",
    btn_all_products: "All Products",
    btn_chat_whatsapp: "Chat on WhatsApp",
    btn_direct_quote: "Request Direct Factory Quote",
    btn_explore_products: "Explore All Products",
    btn_view_infrastructure: "View Infrastructure",
    hero_tag: "Bangalore's Premier Weaving & Bag Factory",
    hero_title: "Precision Engineered Woven Packaging & Industrial Fabrics",
    hero_subtitle: "Direct factory manufacturer of heavy-duty HDPE/PP woven sacks, FIBC bulk bags, AD*STAR cement valve packaging, silage silo tubes, 100% natural jute, and linen textiles.",
    stat_monthly_capacity: "Monthly Production Capacity",
    stat_circular_looms: "High-Speed Circular Looms Operating",
    stat_monthly_extrusion: "Monthly Polymer Tape Extrusion",
    stat_virgin_polymer: "Virgin Polymer & 100% Lab Tested",
    stat_ontime_delivery: "On-Time Consignment Delivery",
    core_manufacturing_tag: "Our Core Manufacturing",
    core_manufacturing_title: "Specialized Product Categories",
    core_manufacturing_subtitle: "From moisture-lock agricultural feed packaging and heavy-duty cement sacks to 100% natural jute and 2-ton FIBC jumbo containers.",
    custom_mfg_tag: "Custom Manufacturing",
    custom_mfg_title: "Need Bespoke Sizing, GSM or Liner Fit?",
    custom_mfg_desc: "At Rayashree Weaving, we customize every parameter to match your packing machinery and logistics constraints. We engineer custom GSMs (50 to 450 GSM), multi-color rotogravure / flexo branding, gusset widths, and liner attachments.",
    ceo_label: "Company CEO",
    hours_label: "Mon - Sat: 8:30 AM - 7:30 PM (IST)",
    footer_tagline: "Premier manufacturers of HDPE / PP Woven Sacks, FIBC Bags, PE Liners, Container Liners, Jute, and Linen Fabrics in Bangalore.",
    rfq_modal_title: "Request Direct Manufacturing Quote",
    rfq_name: "Your Name / Company",
    rfq_phone: "Phone / WhatsApp",
    rfq_email: "Email Address",
    rfq_product: "Select Product Line",
    rfq_qty: "Required Quantity",
    rfq_specs: "Specific Dimensions / GSM / Custom Requirements",
    rfq_submit: "Submit Quotation Request",
    specs_modal_title: "Product Specifications",
    specs_tech_heading: "Technical Specifications",
    specs_highlights: "Key Engineering Highlights",
    specs_capacity: "Standard Capacity",
    specs_gsm: "GSM Weight",
    specs_material: "Polymer Material"
  },
  kn: {
    nav_home: "ಮುಖಪುಟ",
    nav_products: "ಉತ್ಪನ್ನಗಳು",
    nav_infra: "ಕಾರ್ಖಾನೆ ಮೂಲಸೌಕರ್ಯ",
    nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
    nav_contact: "ಸಂಪರ್ಕಿಸಿ",
    nav_staff: "ಸ್ಟಾಫ್ ಪೋರ್ಟಲ್",
    btn_request_quote: "ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ",
    btn_quick_quote: "ತ್ವರಿತ ಬೆಲೆ",
    btn_view_specs: "ವಿವರಗಳು",
    btn_all_products: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು",
    btn_chat_whatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
    btn_direct_quote: "ನೇರ ಕಾರ್ಖಾನೆ ದರ ಪಡೆಯಿರಿ",
    btn_explore_products: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
    btn_view_infrastructure: "ಮೂಲಸೌಕರ್ಯ ನೋಡಿ",
    hero_tag: "ಬೆಂಗಳೂರಿನ ಪ್ರಮುಖ ನೇಯ್ಗೆ ಮತ್ತು ಚೀಲಗಳ ತಯಾರಿಕಾ ಕಾರ್ಖಾನೆ",
    hero_title: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ನೇಯ್ದ ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಕೈಗಾರಿಕಾ ಬಟ್ಟೆಗಳು",
    hero_subtitle: "ಎಚ್‌ಡಿಪಿಇ/ಪಿಪಿ ನೇಯ್ದ ಚೀಲಗಳು, ಎಫ್‌ಐಬಿಸಿ ಜಂಬೊ ಬ್ಯಾಗ್‌ಗಳು, ಸಿಮೆಂಟ್ ವಾಲ್ವ್ ಬ್ಯಾಗ್‌ಗಳು, ಸೈಲೇಜ್ ಬ್ಯಾಗ್‌ಗಳು, ನೈಸರ್ಗಿಕ ಗೋಣಿ ಚೀಲಗಳು ಮತ್ತು ಲಿನೆನ್ ಬಟ್ಟೆಗಳ ನೇರ ತಯಾರಕರು.",
    stat_monthly_capacity: "ಮಾಸಿಕ ಉತ್ಪಾದನಾ ಸಾಮರ್ಥ್ಯ",
    stat_circular_looms: "ವೇಗದ ವೃತ್ತಾಕಾರದ ಮಗ್ಗಗಳು",
    stat_monthly_extrusion: "ಮಾಸಿಕ ಪಾಲಿಮರ್ ಎಕ್ಸ್‌ಟ್ರೂಷನ್",
    stat_virgin_polymer: "100% ಲ್ಯಾಬ್ ಪರೀಕ್ಷಿತ ಗುಣಮಟ್ಟ",
    stat_ontime_delivery: "ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ವಿತರಣೆ",
    core_manufacturing_tag: "ನಮ್ಮ ಪ್ರಮುಖ ಉತ್ಪಾದನೆ",
    core_manufacturing_title: "ವಿಶೇಷ ಪ್ಯಾಕೇಜಿಂಗ್ ಉತ್ಪನ್ನಗಳು",
    core_manufacturing_subtitle: "ಕೃಷಿ ಮೇವಿನ ಚೀಲಗಳು, ಸಿಮೆಂಟ್ ಚೀಲಗಳು, ನೈಸರ್ಗಿಕ ಗೋಣಿಚೀಲಗಳು ಮತ್ತು 2-ಟನ್ ಎಫ್‌ಐಬಿಸಿ ಜಂಬೋ ಬ್ಯಾಗ್‌ಗಳವರೆಗೆ.",
    custom_mfg_tag: "ಗ್ರಾಹಕರ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ತಯಾರಿಕೆ",
    custom_mfg_title: "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಸೈಜ್ ಅಥವಾ ಜಿಎಸ್‌ಎಂ ಬೇಕೇ?",
    custom_mfg_desc: "ರಾಯಶ್ರೀ ವೀವಿಂಗ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪ್ಯಾಕಿಂಗ್ ಯಂತ್ರಗಳು ಮತ್ತು ಸರಕು ಸಾಗಣೆಗೆ ತಕ್ಕಂತೆ ಎಲ್ಲಾ ಅಳತೆ, ಜಿಎಸ್‌ಎಂ ಮತ್ತು ಪ್ರಿಂಟಿಂಗ್ ಮಾಡಿಕೊಡಲಾಗುತ್ತದೆ.",
    ceo_label: "ಕಂಪನಿ ಸಿಇಒ",
    hours_label: "ಸೋಮ - ಶನಿ: 8:30 AM - 7:30 PM (IST)",
    footer_tagline: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಎಚ್‌ಡಿಪಿಇ/ಪಿಪಿ ನೇಯ್ದ ಚೀಲಗಳು, ಎಫ್‌ಐಬಿಸಿ ಬ್ಯಾಗ್‌ಗಳು ಮತ್ತು ನೈಸರ್ಗಿಕ ಲಿನೆನ್ ಬಟ್ಟೆಗಳ ಪ್ರಮುಖ ತಯಾರಕರು.",
    rfq_modal_title: "ನೇರ ಕಾರ್ಖಾನೆ ದರ ಕೋಟ್ ಪಡೆಯಿರಿ",
    rfq_name: "ನಿಮ್ಮ ಹೆಸರು / ಕಂಪನಿ",
    rfq_phone: "ಫೋನ್ / ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ",
    rfq_email: "ಇಮೇಲ್ ವಿಳಾಸ",
    rfq_product: "ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    rfq_qty: "ಬೇಕಾಗಿರುವ ಪ್ರಮಾಣ (ಸಂಖ್ಯೆ)",
    rfq_specs: "ಅಳತೆ / ಜಿಎಸ್‌ಎಂ / ವಿಶೇಷ ಅಗತ್ಯತೆಗಳು",
    rfq_submit: "ದರ ವಿವರಕ್ಕಾಗಿ ಕಳುಹಿಸಿ",
    specs_modal_title: "ಉತ್ಪನ್ನದ ತಾಂತ್ರಿಕ ವಿವರಗಳು",
    specs_tech_heading: "ತಾಂತ್ರಿಕ ವಿವರಣೆ",
    specs_highlights: "ಪ್ರಮುಖ ವಿಶೇಷತೆಗಳು",
    specs_capacity: "ಸಾಮರ್ಥ್ಯ / ತೂಕ",
    specs_gsm: "ಜಿಎಸ್‌ಎಂ ತೂಕ",
    specs_material: "ಪಾಲಿಮರ್ ವಸ್ತು"
  },
  hi: {
    nav_home: "होम",
    nav_products: "उत्पाद",
    nav_infra: "प्लांट और मशीनरी",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क करें",
    nav_staff: "स्टाफ पोर्टल",
    btn_request_quote: "कोटेशन प्राप्त करें",
    btn_quick_quote: "त्वरित कोटेशन",
    btn_view_specs: "विवरण देखें",
    btn_all_products: "सभी उत्पाद",
    btn_chat_whatsapp: "व्हाट्सएप पर चैट करें",
    btn_direct_quote: "फैक्टरी मूल्य कोटेशन प्राप्त करें",
    btn_explore_products: "सभी उत्पाद देखें",
    btn_view_infrastructure: "मशीनरी और क्षमता देखें",
    hero_tag: "बैंगलोर की अग्रणी बुनाई और बैग निर्माता कंपनी",
    hero_title: "प्रीमियम वोवन पैकेजिंग और औद्योगिक फैब्रिक समाधान",
    hero_subtitle: "एचडीपीई/पीपी वोवन बोरी, एफआईबीसी जंबो बैग, सीमेंट वाल्व बैग, साइलेज बैग, प्राकृतिक जूट बोरी और लिनन कपड़ों के सीधे निर्माता।",
    stat_monthly_capacity: "मासिक उत्पादन क्षमता",
    stat_circular_looms: "उच्च गति सर्कुलर लूम्स",
    stat_monthly_extrusion: "मासिक पॉलीमर एक्सट्रूज़न",
    stat_virgin_polymer: "100% लैब परीक्षित पॉलीमर",
    stat_ontime_delivery: "समय पर कंसाइनमेंट डिलीवरी",
    core_manufacturing_tag: "हमारा मुख्य निर्माण",
    core_manufacturing_title: "विशिष्ट पैकेजिंग उत्पाद श्रेणियां",
    core_manufacturing_subtitle: "कृषि आहार पैकेजिंग और सीमेंट बोरियों से लेकर 100% प्राकृतिक जूट और 2-टन एफआईबीसी जंबो बैग तक।",
    custom_mfg_tag: "कस्टम निर्माण सुविधा",
    custom_mfg_title: "कस्टम साइज, GSM या लाइनर की आवश्यकता है?",
    custom_mfg_desc: "रायश्री वीविंग में हम आपकी पैकिंग मशीनों और लॉजिस्टिक्स के अनुसार साइज, जीएसएम (50 से 450 GSM), मल्टी-कलर प्रिंटिंग और लाइनर तैयार करते हैं।",
    ceo_label: "कंपनी सीईओ",
    hours_label: "सोम - शनि: सुबह 8:30 - शाम 7:30 (IST)",
    footer_tagline: "बैंगलोर में एचडीपीई/पीपी वोवन बोरी, एफआईबीसी बैग, कंटेनर लाइनर और जूट फैब्रिक के प्रमुख निर्माता।",
    rfq_modal_title: "फैक्टरी डायरेक्ट कोटेशन अनुरोध",
    rfq_name: "आपका नाम / कंपनी",
    rfq_phone: "फोन / व्हाट्सएप नंबर",
    rfq_email: "ईमेल पता",
    rfq_product: "उत्पाद का चयन करें",
    rfq_qty: "आवश्यक मात्रा",
    rfq_specs: "साइज / जीएसएम / विशेष आवश्यकताएं",
    rfq_submit: "कोटेशन अनुरोध भेजें",
    specs_modal_title: "उत्पाद तकनीकी विवरण",
    specs_tech_heading: "तकनीकी विनिर्देश",
    specs_highlights: "मुख्य इंजीनियरिंग विशेषताएं",
    specs_capacity: "मानक क्षमता",
    specs_gsm: "जीएसएम वजन",
    specs_material: "पॉलीमर सामग्री"
  }
};

function getStoredTranslations() {
  const stored = localStorage.getItem("rw_translations");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return {
        en: { ...DEFAULT_TRANSLATIONS.en, ...(parsed.en || {}) },
        kn: { ...DEFAULT_TRANSLATIONS.kn, ...(parsed.kn || {}) },
        hi: { ...DEFAULT_TRANSLATIONS.hi, ...(parsed.hi || {}) }
      };
    } catch (e) {
      console.error("Error reading rw_translations:", e);
    }
  }
  return DEFAULT_TRANSLATIONS;
}

function saveStoredTranslations(trans) {
  localStorage.setItem("rw_translations", JSON.stringify(trans));
}

function getCurrentLang() {
  return localStorage.getItem("rw_lang") || "en";
}

function setLanguage(lang) {
  if (!["en", "kn", "hi"].includes(lang)) lang = "en";
  localStorage.setItem("rw_lang", lang);
  
  // Update active status on all language switchers
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  applyTranslations(lang);
}

function t(key, lang = null) {
  const current = lang || getCurrentLang();
  const dict = getStoredTranslations();
  return (dict[current] && dict[current][key]) || (dict.en && dict.en[key]) || key;
}

function applyTranslations(lang = null) {
  const current = lang || getCurrentLang();
  const dict = getStoredTranslations();
  const tr = dict[current] || dict.en;

  // 1. Elements with data-i18n
  const translatables = document.querySelectorAll("[data-i18n]");
  translatables.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (tr[key]) {
      el.textContent = tr[key];
    }
  });

  // 2. Placeholder attributes with data-i18n-placeholder
  const placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderEls.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (tr[key]) {
      el.placeholder = tr[key];
    }
  });

  // 3. Navigation Links (if standard classes exist)
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href.includes("index.html") || href === "#" || href === "./") {
      link.textContent = tr.nav_home;
    } else if (href.includes("products.html")) {
      link.textContent = tr.nav_products;
    } else if (href.includes("infrastructure.html")) {
      link.textContent = tr.nav_infra;
    } else if (href.includes("about.html")) {
      link.textContent = tr.nav_about;
    } else if (href.includes("contact.html")) {
      link.textContent = tr.nav_contact;
    }
  });

  // 4. Hero Content (if dynamic)
  const heroTag = document.querySelector(".hero-tag");
  if (heroTag && tr.hero_tag) heroTag.textContent = tr.hero_tag;
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle && tr.hero_title) heroTitle.textContent = tr.hero_title;
  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle && tr.hero_subtitle) heroSubtitle.textContent = tr.hero_subtitle;

  // 5. Quote buttons
  const rfqBtns = document.querySelectorAll(".btn-request-quote");
  rfqBtns.forEach(btn => {
    btn.innerHTML = `<i class="fa-solid fa-calculator"></i> ${tr.btn_request_quote}`;
  });
}

// Auto-initialize on load
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getCurrentLang();
  applyTranslations(currentLang);

  // Set active buttons
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    if (btn.getAttribute("data-lang") === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
});

window.setLanguage = setLanguage;
window.getCurrentLang = getCurrentLang;
window.t = t;
window.applyTranslations = applyTranslations;
window.getStoredTranslations = getStoredTranslations;
window.saveStoredTranslations = saveStoredTranslations;
