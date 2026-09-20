/**
 * Rayashree Weaving Pvt. Ltd. - Core Data & Product Registry
 */

const COMPANY_INFO = {
  name: "Rayashree Weaving Pvt. Ltd.",
  brandName: "Rayashree Weaving",
  tagline: "Precision Woven Solutions • Global Quality Packaging & Textiles",
  logo: "assets/logo.png",
  logoWhite: "assets/logo.png",
  ceo: "Rayashree",
  designation: "Company CEO",
  phone: "+91 9108713258",
  phoneFormatted: "+91 91087 13258",
  whatsappNumber: "919108713258",
  email: "rayashreewpvtltd@gmail.com",
  address: "Sy No. 6/10 & 6/1, Kenchanapur Village, Kengeri Hobali, Sulikere Post, BENGALURU-560060, Karnataka, India",
  shortAddress: "Kenchanapur Village, Kengeri Hobli, Bengaluru - 560060",
  udyamNo: "UDYAM-AM-KR-03-0729350",
  gstinNo: "29AAHCH4322G1ZN",
  hours: "Mon - Sat: 8:30 AM - 7:30 PM",
  capacity: "5,000,000+ Sacks / Month",
  established: "2018",
  certifications: ["ISO 9001:2015", "Food Grade BRCGS Compliant", "UV Resistant Standards", "IS 14887:2014"],
  manufacturersOf: "HDPE / PP Woven Sacks, FIBC Bags, PE Liners & Container Liners, Jute & Linen Textiles",
  machinery: [
    "BCS Cutting Machine (Lohia Bag Conversion System)",
    "BCS 6 Colour Online Flexo Printing Machine",
    "48+ High-Speed Circular Weaving Looms",
    "High-Tenacity Polymer Tape Extrusion Lines",
    "Rotogravure BOPP Lamination Line",
    "AD*STAR Valve Bag Hot-Air Welding Unit"
  ]
};

const DEFAULT_PRODUCTS = [
  {
    id: "PROD-FIBC",
    slug: "fibc-bags",
    name: "FIBC Bags",
    shortName: "FIBC Bulk Bags",
    category: "Bulk Logistics",
    badge: "SWL: 1–2 Ton",
    image: "assets/images/fibc-bags.jpg",
    capacityRange: "500–2,000 kg",
    gsmRange: "SWL: 1–2 Ton",
    material: "Virgin PP Woven Fabric with Safety Factor 5:1 / 6:1",
    tagline: "Heavy-Duty Flexible Intermediate Bulk Containers & Liners",
    specifications: {
      "Application": "Bulk Logistics",
      "Size / Capacity": "500–2,000 kg",
      "Bag Weight / Specification": "SWL: 1–2 Ton",
      "Structure Types": "U-Panel, 4-Panel, Circular, Baffle Q-Bags",
      "Lifting Loops": "Corner Loops, Cross-Corner Loops, Stevedore Straps",
      "Filling / Discharge": "Open Top, Duffle Skirt, Filling Spout, Discharge Valve",
      "Safety Factor (SF)": "5:1 (Single Trip) / 6:1 (Multi-Trip Heavy Duty)"
    },
    features: [
      "Rigid ISO 21898 safety drop and load endurance tested",
      "Baffle Q-Bag design prevents rounding to save 30% shipping space",
      "Anti-static Type B & C fabric for hazardous chemical transport",
      "Complete moisture protection with 80-120 micron PE liner"
    ]
  },
  {
    id: "PROD-LINER",
    slug: "liner-bags",
    name: "Liner Bags",
    shortName: "Liner Bags",
    category: "Bulk Logistics",
    badge: "80–200 Micron",
    image: "assets/images/liner-bags.jpg",
    capacityRange: "50 L–2,000 L",
    gsmRange: "80–200 Micron",
    material: "Food-Grade Virgin LDPE / LLDPE Polyethylene",
    tagline: "High-Barrier Moisture-Proof Liners for FIBC, Drums & Containers",
    specifications: {
      "Application": "Bulk Logistics",
      "Size / Capacity": "50 L–2,000 L",
      "Bag Weight / Specification": "80–200 Micron",
      "Types": "Form-Fit, Gusseted, Flat, Conductive (Type C), Barrier Foil",
      "Thickness": "80 - 200 Micron (Custom)",
      "Food Grade": "FDA Compliant, ROHS Certified",
      "Sealing": "Heat Sealed with Reinforced Seams"
    },
    features: [
      "Food-grade compliant for pharmaceuticals, food & chemicals",
      "100% moisture-proof and airtight seal capability",
      "Custom form-fit liners for any FIBC or container size",
      "Anti-static and conductive options for hazardous materials"
    ]
  },
  {
    id: "PROD-CATTLE",
    slug: "cattle-feed",
    name: "Cattle Feed Bags",
    shortName: "Cattle Feed Bags",
    category: "Feed & Agriculture",
    badge: "Custom Printing",
    image: "assets/images/cattle-feed.jpg",
    capacityRange: "25 / 50 / 75 kg",
    gsmRange: "Custom printing available",
    material: "100% Virgin HDPE / PP with Anti-Slip Weave",
    tagline: "High-Tensile Anti-Burst Woven Sacks for Animal Feed & Grains",
    specifications: {
      "Application": "Feed & Agriculture",
      "Size / Capacity": "25 / 50 / 75 kg",
      "Bag Weight / Specification": "Custom printing available",
      "Standard Dimensions": "24 x 38 inch / 25 x 40 inch",
      "Weave Type": "10x10 to 12x12 Anti-Slip Diamond Weave",
      "Lamination": "Extrusion BOPP Gloss / Matte Finish",
      "Closure Options": "Ultrasonic Hemmed Top, Easy-Open Stitch"
    },
    features: [
      "Zero drop burst guarantee from 10ft stacking height",
      "UV weather stabilizer masterbatch tested for 2,000+ hours",
      "Anti-slip micro-ribbed surface for pallet and truck stability",
      "Custom multi-color branding and product labeling"
    ]
  },
  {
    id: "PROD-POULTRY",
    slug: "poultry-feed",
    name: "Poultry Feed Bags",
    shortName: "Poultry Feed Bags",
    category: "Feed & Agriculture",
    badge: "BOPP Photographic",
    image: "assets/images/poultry-feed.jpg",
    capacityRange: "25 / 50 kg",
    gsmRange: "BOPP / Photographic",
    material: "Premium PP Polymer with High-Gloss BOPP",
    tagline: "Photographic Multi-Color Printed Sacks with Moisture Barrier",
    specifications: {
      "Application": "Feed & Agriculture",
      "Size / Capacity": "25 / 50 kg",
      "Bag Weight / Specification": "BOPP / Photographic Printing",
      "Standard Dimensions": "22 x 36 inch / 24 x 39 inch",
      "Printing Quality": "HD Photographic Quality (300 DPI)",
      "Handle Options": "Punch D-Cut Handle, Top Hemmed",
      "Gusseting": "Single & Double Deep Side Gussets"
    },
    features: [
      "Photo-quality 8-color graphics for retail shelf impact",
      "Moisture & humidity protection preserves feed nutritional value",
      "D-cut carrying handle engineered for 50kg retail convenience",
      "Tear-resistant stitching with safety lock seams"
    ]
  },
  {
    id: "PROD-CEMENT",
    slug: "cement-bags",
    name: "Cement Bags",
    shortName: "Cement Bags",
    category: "Building & Construction",
    badge: "AD*STAR Valve",
    image: "assets/images/cement.jpg",
    capacityRange: "50 kg",
    gsmRange: "AD*STAR Valve Bags",
    material: "High-Strength Coated Woven Polypropylene",
    tagline: "Self-Closing Valve Packaging for High-Speed Rotary Cement Fillers",
    specifications: {
      "Application": "Building & Construction",
      "Size / Capacity": "50 kg",
      "Bag Weight / Specification": "AD*STAR Valve Bags",
      "Standard Dimensions": "50 x 60 x 11 cm (50kg Standard)",
      "Valve Type": "Self-Closing Inner & Outer Flap Valve",
      "Sealing Technology": "Hot Air Welding (No Glue)",
      "Aeration": "Nano-Perforation for Fast Dust-Free Filling"
    },
    features: [
      "Brick-shape stacking eliminates spillage and optimizes transport",
      "Zero seepage of cement dust during 120-bag/minute filling lines",
      "100% water resistant under monsoon warehouse storage",
      "Automated robotic palletizer compatible"
    ]
  },
  {
    id: "PROD-AGRI",
    slug: "agriculture-bags",
    name: "Agriculture Bags",
    shortName: "Agriculture Bags",
    category: "Agriculture & Farming",
    badge: "UV Weatherproof",
    image: "assets/images/agriculture-bags.jpg",
    capacityRange: "10 / 25 / 50 kg",
    gsmRange: "UV Weatherproof options",
    material: "100% Virgin PP Woven with UV Stabilizer",
    tagline: "Durable Woven Bags for Seeds, Grains, Fertilizers & Produce",
    specifications: {
      "Application": "Agriculture & Farming",
      "Size / Capacity": "10 / 25 / 50 kg",
      "Bag Weight / Specification": "UV Weatherproof options",
      "Standard Dimensions": "18 x 28 inch / 22 x 38 inch",
      "Printing": "Up to 6-Color Flexo / Rotogravure",
      "UV Protection": "UV Masterbatch Stabilized for Field Use",
      "Closure": "Open Mouth or Valve Type"
    },
    features: [
      "Breathable weave prevents moisture buildup in stored grains",
      "UV-stabilized for outdoor farm and field storage",
      "Available in printed or plain versions for bulk labeling",
      "High-tensile stitching for rough field handling"
    ]
  },
  {
    id: "PROD-SILAGE",
    slug: "silage-bags",
    name: "Silage Bags",
    shortName: "Silage Bags",
    category: "Agriculture & Farming",
    badge: "High Barrier",
    image: "assets/images/silage-bags.jpg",
    capacityRange: "25 L–200 L / 500 kg Tube",
    gsmRange: "High Barrier / Fermentation",
    material: "Multi-Layer UV Fortified Virgin Polyethylene",
    tagline: "Anerobic Fermentation Sacks for Green Fodder & Crop Storage",
    specifications: {
      "Application": "Agriculture & Farming",
      "Size / Capacity": "25 L–200 L / 500 kg Tube",
      "Bag Weight / Specification": "High Barrier / Fermentation",
      "Available Sizes": "50kg, 100kg & Continuous Silo Tubes",
      "UV Resistance": "Minimum 24 Months Field Sunlight Rating",
      "Puncture Strength": "High Dart Impact (> 1,200 grams)",
      "Oxygen Barrier": "< 10 cc/m2/24h Oxygen Permeability"
    },
    features: [
      "White exterior reflects solar heat to preserve silage quality",
      "Black interior blocks 100% UV light and halts degradation",
      "Preserves sweet lactic fermentation for up to 18 months",
      "Supreme rodent & puncture resistance under farm conditions"
    ]
  },
  {
    id: "PROD-INDUSTRIAL",
    slug: "industrial-bags",
    name: "Industrial Bags",
    shortName: "Industrial Bags",
    category: "Industrial Packaging",
    badge: "Heavy-Duty PP/HDPE",
    image: "assets/images/industrial-bags.jpg",
    capacityRange: "10–100 kg",
    gsmRange: "Heavy-Duty PP / HDPE",
    material: "Heavy-Duty Virgin PP / HDPE Woven Polypropylene",
    tagline: "Robust Woven Sacks for Chemicals, Minerals & Industrial Bulk",
    specifications: {
      "Application": "Industrial Packaging",
      "Size / Capacity": "10–100 kg",
      "Bag Weight / Specification": "Heavy-Duty PP / HDPE",
      "Standard Dimensions": "Custom Sizes Available",
      "Lamination": "BOPP / PE Coated / Uncoated Options",
      "Printing": "Up to 8-Color Rotogravure or Flexo",
      "Closure": "Open Mouth, Valve, Heat-Sealed or Sewn"
    },
    features: [
      "High-tensile anti-burst construction for industrial bulk loads",
      "Chemical-resistant coating for corrosive material storage",
      "Custom print, sizing and lamination for brand compliance",
      "Stackable pallet-compatible design for efficient warehouse logistics"
    ]
  },
  {
    id: "PROD-COTTON",
    slug: "cotton-calico-bags",
    name: "Cotton / Calico Bags",
    shortName: "Cotton Bags",
    category: "General Packaging",
    badge: "Multi-Colour",
    image: "assets/images/linen-fabric.jpg",
    capacityRange: "Custom Size",
    gsmRange: "1–2+ Colours / Multi-Colour",
    material: "Natural Cotton & Calico Woven Fabric",
    tagline: "Eco-Friendly Reusable Packaging for Retail, Flour & General Goods",
    specifications: {
      "Application": "General Packaging",
      "Size / Capacity": "Custom Size",
      "Bag Weight / Specification": "1–2+ Colours / Multi-Colour",
      "Material": "100% Natural Cotton / Calico",
      "Printing": "1–2+ Colours / Multi-Colour Screen & Digital",
      "Handles": "Drawstring, Loop Handle, Stitched Hem",
      "Eco Grade": "100% Biodegradable & Reusable"
    },
    features: [
      "Breathable natural fiber ideal for flour, pulses, spices & retail",
      "High-definition 1 to 2+ multi-color custom brand printing",
      "Reusable, washable, and eco-friendly consumer appeal",
      "Heavy-duty lock stitching for repeated handling"
    ]
  },
  {
    id: "PROD-GUNNY-JUTE",
    slug: "gunny-jute-bags",
    name: "Gunny / Jute Bags",
    shortName: "Gunny / Jute Bags",
    category: "Agriculture & General Use",
    badge: "28 × 42 in",
    image: "assets/images/jute.jpg",
    capacityRange: "28 × 42 inches (70–80 kg capacity)",
    gsmRange: "1–1.25 kg bag weight",
    material: "100% Golden Natural Jute / Gunny Fiber",
    tagline: "Traditional High-Strength Heavy-Duty Sacks for Agri Produce",
    specifications: {
      "Application": "Agriculture & General Use",
      "Size / Capacity": "28 × 42 inches",
      "Bag Weight / Specification": "1–1.25 kg bag weight; 70–80 kg capacity",
      "Standard Dimensions": "28 × 42 inches (71 × 107 cm)",
      "Bag Weight": "1.0 kg – 1.25 kg per bag",
      "Holding Capacity": "70 kg – 80 kg",
      "Fiber Treatment": "Hydrocarbon-Free (VOT Food Grade)"
    },
    features: [
      "Golden natural high-strength jute weave for 70-80kg heavy grain loads",
      "Heavy 1 - 1.25 kg bag weight ensures puncture and rough-transit resistance",
      "Natural breathability prevents sweating and mold in grains & pulses",
      "Export quality compliant for coffee, grains, potato & onion packaging"
    ]
  },
  {
    id: "PROD-SUGAR",
    slug: "sugar-bags",
    name: "Sugar Bags",
    shortName: "Sugar Bags",
    category: "Sugar Packaging",
    badge: "26 × 37 in",
    image: "assets/images/bags.jpg",
    capacityRange: "26 × 37 inches (50 kg capacity)",
    gsmRange: "950 g–1 kg bag weight",
    material: "High-Density PP Woven Fabric with Food-Grade Inner Liner",
    tagline: "Specialized Sugar Mill Packaging with Moisture-Lock Protection",
    specifications: {
      "Application": "Sugar Packaging",
      "Size / Capacity": "26 × 37 inches",
      "Bag Weight / Specification": "950 g–1 kg bag weight; 50 kg capacity",
      "Standard Dimensions": "26 × 37 inches (66 × 94 cm)",
      "Bag Weight": "950 grams – 1.0 kg per bag",
      "Holding Capacity": "50 kg Sugar Standard",
      "Liner": "Food-grade PE liner to prevent moisture clumping"
    },
    features: [
      "Engineered strictly to sugar mill standard dimensions 26 × 37 in",
      "950g - 1kg heavy-duty construction prevents bursting under stacking pressure",
      "Total moisture barrier safeguards refined sugar against humidity caking",
      "Anti-skid weave for stable multi-tier warehouse and pallet stacking"
    ]
  },
  {
    id: "PROD-GP-GUNNY",
    slug: "general-purpose-gunny-bags",
    name: "General-Purpose Gunny Bags",
    shortName: "GP Gunny Bags",
    category: "Grain & Agriculture",
    badge: "Ragi & Wheat",
    image: "assets/images/jute.jpg",
    capacityRange: "Custom / Requirement Based",
    gsmRange: "Ragi, Wheat & Grains",
    material: "Natural Jute & Heavy Woven Twill",
    tagline: "Versatile Eco-Friendly Sacks for Ragi, Wheat & Agricultural Grains",
    specifications: {
      "Application": "Grain & Agriculture",
      "Size / Capacity": "Custom / Requirement Based",
      "Bag Weight / Specification": "Ragi, Wheat & other grains",
      "Compatible Grains": "Ragi, Wheat, Paddy, Maize, Pulses, Seeds",
      "Dimensions": "Custom sizes tailored to client mandate",
      "Weave Type": "Standard & Heavy Twill",
      "Stitching": "Herakle safety stitch with reinforced mouth"
    },
    features: [
      "Optimized for South Indian staple crops: Ragi (Finger Millet), Wheat & Cereals",
      "Customizable dimensions and weight tailored to local mandi and APMC requirements",
      "Superior aeration maintains seed germination and moisture equilibrium",
      "High reusability and biodegradable natural composition"
    ]
  }
];



const DEFAULT_INQUIRIES = [];

const DEFAULT_TESTIMONIALS = [
  {
    id: "TEST-1001",
    quote: "Rayashree Weaving has been our packaging partner for over 4 years. Their 50kg cattle feed woven sacks have zero burst rates during rough logistics, and their BOPP printing is top-class.",
    author: "R. Chandrashekar",
    role: "Head of Logistics",
    company: "Amrutha Dairy & Feeds, Karnataka",
    rating: 5,
    status: "Approved",
    date: "2026-01-15"
  },
  {
    id: "TEST-1002",
    quote: "Switching to Rayashree's block bottom valve cement bags drastically reduced cement dust loss and accelerated our automated packing line speed by 18%. Outstanding quality control.",
    author: "P. Ranganathan",
    role: "Plant Manager",
    company: "South India Infrastructure Cement Ltd.",
    rating: 5,
    status: "Approved",
    date: "2026-02-04"
  },
  {
    id: "TEST-1003",
    quote: "For our coffee exports to Europe, compliance is non-negotiable. Rayashree's Hydrocarbon-Free Jute Bags pass every international audit smoothly. Highly recommended.",
    author: "Naveen Thomas",
    role: "Managing Director",
    company: "Western Ghats Agri Exports",
    rating: 5,
    status: "Approved",
    date: "2026-02-28"
  }
];

const TESTIMONIALS = DEFAULT_TESTIMONIALS;


const INFRASTRUCTURE_STATS = [
  { label: "Circular Weaving Looms", value: "48+ Looms", desc: "High-speed Starlinger & Lohia circular looms" },
  { label: "Tape Extrusion Capacity", value: "350 MT / Month", desc: "Virgin polymer masterbatch extrusion" },
  { label: "Monthly Bag Production", value: "5,000,000+", desc: "Automated bag conversion & printing lines" },
  { label: "Facility Area", value: "45,000 Sq. Ft.", desc: "Bangalore North industrial campus" },
  { label: "Quality Lab Tests", value: "100% Tested", desc: "Tensile, drop, UV-weathering, burst testing" }
];

// Persistent Store Helpers
function getCompanyInfo() {
  const stored = localStorage.getItem("rw_company_info");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (!parsed.logo || parsed.logo.includes(".svg")) {
        parsed.logo = "assets/logo.png";
      }
      if (!parsed.logoWhite || parsed.logoWhite.includes(".svg")) {
        parsed.logoWhite = "assets/logo.png";
      }
      return { ...COMPANY_INFO, ...parsed };
    } catch (e) { console.error(e); }
  }
  return COMPANY_INFO;
}

function saveCompanyInfo(info) {
  localStorage.setItem("rw_company_info", JSON.stringify(info));
}

const DEFAULT_PAGE_CONTENT = {
  home: {
    heroTag: "Bangalore's Premier Weaving & Bag Factory",
    heroTitle: "Precision Engineered Woven Packaging & Industrial Fabrics",
    heroSubtitle: "Direct factory manufacturer of heavy-duty HDPE/PP woven sacks, FIBC bulk bags, AD*STAR cement valve packaging, silage silo tubes, 100% natural jute, and linen textiles.",
    stat1Val: "5M+ Sacks",
    stat1Label: "Monthly Production Capacity",
    stat2Val: "48+ Looms",
    stat2Label: "High-Speed Circular Looms",
    stat3Val: "350 MT",
    stat3Label: "Extrusion Tape Line",
    stat4Val: "100%",
    stat4Label: "Virgin Polymer & Lab Tested"
  },
  about: {
    heading: "Pioneering High-Tensile Technical Woven Solutions in South India",
    subheading: "Rayashree Weaving Pvt. Ltd. operates one of Bangalore's most advanced circular loom weaving and extrusion plants.",
    ceoMessage: "Our goal is simple: deliver zero-burst, precision-weight woven packaging that protects our clients' cargo under the most severe logistical conditions.",
    coreVision: "To be India's premier high-speed woven packaging manufacturer, recognized for zero-defect standards and rapid custom turnaround."
  },
  infrastructure: {
    heading: "State-of-the-Art Extrusion, Weaving & Conversion Facility",
    subheading: "Located in Bangalore North across 45,000 sq. ft., our integrated plant processes 350 MT of polymer tape monthly.",
    loomsCount: "48+ High-Speed Looms",
    extrusionCapacity: "350 Metric Tons / Month",
    printingTech: "8-Color High-Definition Flexo & Rotogravure BOPP Printing",
    qualityStandards: "Tensile, UV weathering, Drop test, Burst factor tested to IS 14887:2014"
  },
  products: {
    heroTitle: "Complete Manufacturing Portfolio",
    heroSubtitle: "Explore our full range of heavy-duty HDPE/PP sacks, AD*STAR cement bags, silage tubes, jute packaging, linen fabrics, and 2-ton FIBC containers.",
    customTitle: "Need Bespoke Sizing, GSM or Liner Fit?",
    customDesc: "At Rayashree Weaving, we customize every parameter to match your packing machinery and logistics constraints. We engineer custom GSMs (50 to 450 GSM), multi-color rotogravure / flexo branding, gusset widths, and liner attachments."
  },
  contact: {
    ceoName: "Rayashree",
    phone: "+91 9108713258",
    email: "rayashreewpvtltd@gmail.com",
    address: "Sy No. 6/10 & 6/1, Kenchanapur Village, Kengeri Hobali, Sulikere Post, BENGALURU-560060",
    timings: "Monday - Saturday: 8:30 AM - 7:30 PM (IST)"
  }
};

function getSiteContent() {
  const stored = localStorage.getItem("rw_site_content");
  if (stored) {
    try { return { ...DEFAULT_PAGE_CONTENT, ...JSON.parse(stored) }; } catch (e) { console.error(e); }
  }
  return DEFAULT_PAGE_CONTENT;
}

function saveSiteContent(content) {
  localStorage.setItem("rw_site_content", JSON.stringify(content));
}

/* ==========================================================================
   Public Website Views & Traffic Analytics System
   ========================================================================== */

const DEFAULT_TRAFFIC_DATA = {
  totalViews: 0,
  uniqueVisitors: 0,
  todayViews: 0,
  lastUpdatedDate: new Date().toISOString().slice(0, 10),
  pageBreakdown: {},
  recentVisitors: []
};

function getViewAnalytics() {
  // Automated purge of legacy mock data & old keys
  if (localStorage.getItem("rw_traffic_clean_v5") !== "true") {
    localStorage.setItem("rw_traffic_clean_v5", "true");
    localStorage.removeItem("rw_traffic_reset_v3");
    localStorage.removeItem("rw_traffic_reset_v4");
    localStorage.removeItem("rw_page_views");
    localStorage.setItem("rw_traffic_analytics", JSON.stringify(DEFAULT_TRAFFIC_DATA));
    return { ...DEFAULT_TRAFFIC_DATA };
  }

  const stored = localStorage.getItem("rw_traffic_analytics");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // If legacy mock dummy counts are detected (e.g. > 100 or dummy breakdown keys)
      if (parsed && typeof parsed === "object") {
        if (parsed.totalViews >= 100 || (parsed.pageBreakdown && (parsed.pageBreakdown["Home (index.html)"] >= 100 || parsed.pageBreakdown["Cattle Feed (cattle-feed.html)"]))) {
          localStorage.setItem("rw_traffic_analytics", JSON.stringify(DEFAULT_TRAFFIC_DATA));
          return { ...DEFAULT_TRAFFIC_DATA };
        }
        return parsed;
      }
    } catch (e) { console.error(e); }
  }
  return { ...DEFAULT_TRAFFIC_DATA };
}

function saveViewAnalytics(data) {
  localStorage.setItem("rw_traffic_analytics", JSON.stringify(data));
}

function resetTrafficAnalytics() {
  if (confirm("Are you sure you want to reset all website traffic and visitor analytics to 0?")) {
    saveViewAnalytics({ ...DEFAULT_TRAFFIC_DATA });
    if (typeof renderMetrics === "function") renderMetrics();
    if (typeof renderTrafficAnalytics === "function") renderTrafficAnalytics();
    if (typeof showAdminToast === "function") showAdminToast("Website traffic and visitor analytics reset to 0.");
  }
}

function trackPageView(pageIdentifier = "") {
  // Skip logging when navigating inside Admin portal
  if (window.location.pathname.includes("/admin/")) return;

  const data = getViewAnalytics();
  const today = new Date().toISOString().slice(0, 10);

  if (data.lastUpdatedDate !== today) {
    data.todayViews = 1;
    data.lastUpdatedDate = today;
  } else {
    data.todayViews = (data.todayViews || 0) + 1;
  }

  data.totalViews = (data.totalViews || 0) + 1;

  if (!sessionStorage.getItem("rw_session_counted")) {
    sessionStorage.setItem("rw_session_counted", "true");
    data.uniqueVisitors = (data.uniqueVisitors || 0) + 1;
  }

  const page = pageIdentifier || (document.title ? document.title.split("|")[0].trim() : "Home");
  if (page) {
    data.pageBreakdown = data.pageBreakdown || {};
    data.pageBreakdown[page] = (data.pageBreakdown[page] || 0) + 1;
  }

  // Add to recent visitors stream
  data.recentVisitors = data.recentVisitors || [];
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const ref = document.referrer ? (document.referrer.includes("whatsapp") ? "WhatsApp Share" : (document.referrer.includes("google") ? "Google Search" : "Referral Link")) : "Direct / Organic";
  
  data.recentVisitors.unshift({
    page: page,
    time: `Just now (${timeStr})`,
    location: "Bangalore, IN",
    source: ref
  });

  if (data.recentVisitors.length > 8) {
    data.recentVisitors = data.recentVisitors.slice(0, 8);
  }

  saveViewAnalytics(data);
  return data;
}

function getProducts() {
  const stored = localStorage.getItem("rw_products");
  if (stored !== null) {
    try { 
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter(p => {
          if (!p || typeof p !== "object") return false;
          const name = String(p.name || "").trim().toLowerCase();
          const id = String(p.id || "").trim().toLowerCase();
          const badge = String(p.badge || "").trim().toLowerCase();
          const shortName = String(p.shortName || "").trim().toLowerCase();
          const category = String(p.category || "").trim().toLowerCase();
          
          if (name === "best" || id === "best" || badge === "best" || shortName === "best") {
            return false;
          }
          if (name.includes("silage bag ss") || category.includes("jute bangs") || name.includes("test")) {
            return false;
          }
          return true;
        });

        if (cleaned.length >= DEFAULT_PRODUCTS.length) {
          if (cleaned.length !== parsed.length) {
            localStorage.setItem("rw_products", JSON.stringify(cleaned));
          }
          return cleaned;
        }
      }
    } catch (e) { 
      console.error("Error reading rw_products from localStorage:", e); 
    }
  }
  // If empty, null or outdated, seed with all 12 standard manufacturing products
  localStorage.setItem("rw_products", JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

function getApiEndpoint(endpoint) {
  const isSubfolder = window.location.pathname.includes('/public/') || window.location.pathname.includes('/admin/');
  return (isSubfolder ? '../' : '') + endpoint;
}

function saveProducts(products) {
  localStorage.setItem("rw_products", JSON.stringify(products));
  try {
    fetch(getApiEndpoint('api/products.php'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products)
    }).catch(() => {});
  } catch (e) {}
}

function syncServerProducts(callback) {
  try {
    fetch(getApiEndpoint('api/products.php'))
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          localStorage.setItem("rw_products", JSON.stringify(data));
          if (typeof callback === "function") callback(data);
        }
      })
      .catch(() => {});
  } catch (e) {}
}

function getProductById(idOrSlug) {
  const products = getProducts();
  return products.find(p => p.id === idOrSlug || p.slug === idOrSlug) || null;
}

function addProduct(prod) {
  const products = getProducts();
  products.push(prod);
  saveProducts(products);
  return prod;
}

function updateProduct(id, updatedFields) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === id || p.slug === id);
  if (idx !== -1) {
    products[idx] = { ...products[idx], ...updatedFields };
    saveProducts(products);
    return products[idx];
  }
  return null;
}

function deleteProduct(id) {
  let products = getProducts();
  products = products.filter(p => p.id !== id && p.slug !== id);
  saveProducts(products);
  return products;
}

function getInquiries() {
  const stored = localStorage.getItem("rw_inquiries");
  if (stored !== null) {
    try { 
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Filter out legacy demo entries if present
        const filtered = parsed.filter(i => !["RFQ-1082", "RFQ-1081", "RFQ-1080", "RFQ-1079", "RFQ-1078"].includes(i.id));
        if (filtered.length !== parsed.length) {
          localStorage.setItem("rw_inquiries", JSON.stringify(filtered));
        }
        return filtered;
      }
    } catch (e) { console.error(e); }
  }
  return [];
}

function saveInquiries(inquiries) {
  localStorage.setItem("rw_inquiries", JSON.stringify(inquiries));
}

function clearAllInquiries() {
  if (confirm("Clear all inquiries? Only new incoming customer inquiries will be recorded.")) {
    saveInquiries([]);
    if (typeof renderAll === "function") renderAll();
    if (typeof showAdminToast === "function") showAdminToast("Inquiries cleared. Ready for real customer submissions.");
  }
}

function addInquiry(inquiryData) {
  const inquiries = getInquiries();
  const newInquiry = {
    id: "RFQ-" + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toISOString().slice(0, 16).replace("T", " "),
    status: "New",
    priority: inquiryData.priority || "High",
    notes: "Submitted via Website Online Portal",
    ...inquiryData
  };
  inquiries.unshift(newInquiry);
  saveInquiries(inquiries);
  return newInquiry;
}

function updateInquiryStatus(id, newStatus, internalNotes = null) {
  const inquiries = getInquiries();
  const idx = inquiries.findIndex(i => i.id === id);
  if (idx !== -1) {
    inquiries[idx].status = newStatus;
    if (internalNotes !== null) {
      inquiries[idx].notes = internalNotes;
    }
    saveInquiries(inquiries);
    return inquiries[idx];
  }
  return null;
}

/* ==========================================================================
   Testimonials & Feedback Persistent Storage System
   ========================================================================== */

function getTestimonials() {
  const stored = localStorage.getItem("rw_testimonials");
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (e) {
      console.error("Error reading rw_testimonials from localStorage:", e);
    }
  }
  localStorage.setItem("rw_testimonials", JSON.stringify(DEFAULT_TESTIMONIALS));
  return DEFAULT_TESTIMONIALS;
}

function saveTestimonials(testimonials) {
  localStorage.setItem("rw_testimonials", JSON.stringify(testimonials));
}

function getApprovedTestimonials() {
  const all = getTestimonials();
  const approved = all.filter(t => t.status === "Approved");
  return approved.length > 0 ? approved : DEFAULT_TESTIMONIALS;
}

function addFeedback(feedbackData) {
  const testimonials = getTestimonials();
  const newFeedback = {
    id: "TEST-" + Math.floor(1000 + Math.random() * 9000),
    date: new Date().toISOString().slice(0, 10),
    status: "Pending", // Default pending admin approval!
    rating: Number(feedbackData.rating) || 5,
    quote: feedbackData.quote || feedbackData.message || "",
    author: feedbackData.author || feedbackData.name || "Valued Client",
    role: feedbackData.role || feedbackData.designation || "Customer",
    company: feedbackData.company || "Partner Company",
    email: feedbackData.email || ""
  };
  testimonials.unshift(newFeedback);
  saveTestimonials(testimonials);
  return newFeedback;
}

function updateTestimonialStatus(id, newStatus) {
  const testimonials = getTestimonials();
  const idx = testimonials.findIndex(t => t.id === id);
  if (idx !== -1) {
    testimonials[idx].status = newStatus;
    saveTestimonials(testimonials);
    return testimonials[idx];
  }
  return null;
}

function updateTestimonial(id, updatedFields) {
  const testimonials = getTestimonials();
  const idx = testimonials.findIndex(t => t.id === id);
  if (idx !== -1) {
    testimonials[idx] = { ...testimonials[idx], ...updatedFields };
    saveTestimonials(testimonials);
    return testimonials[idx];
  }
  return null;
}

function deleteTestimonial(id) {
  let testimonials = getTestimonials();
  testimonials = testimonials.filter(t => t.id !== id);
  saveTestimonials(testimonials);
  return testimonials;
}

