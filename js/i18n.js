/**
 * Rayashree Weaving Pvt. Ltd. - Pure English Engine
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
  }
};

// Force language to English in localStorage to clear any old Kannada/Hindi selections
try {
  localStorage.setItem("rw_lang", "en");
  localStorage.removeItem("rw_translations");
} catch (e) {}

function getStoredTranslations() {
  return DEFAULT_TRANSLATIONS;
}

function saveStoredTranslations() {}

function getCurrentLang() {
  return "en";
}

function setLanguage() {
  localStorage.setItem("rw_lang", "en");
  applyTranslations("en");
}

function t(key) {
  return (DEFAULT_TRANSLATIONS.en && DEFAULT_TRANSLATIONS.en[key]) || key;
}

function applyTranslations() {
  const tr = DEFAULT_TRANSLATIONS.en;

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

// Auto-initialize English on load
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
});

window.setLanguage = setLanguage;
window.getCurrentLang = getCurrentLang;
window.t = t;
window.applyTranslations = applyTranslations;
window.getStoredTranslations = getStoredTranslations;
window.saveStoredTranslations = saveStoredTranslations;
