/**
 * Rayashree Weaving Pvt. Ltd. - Core Data & Product Registry
 */

const COMPANY_INFO = {
  name: "Rayashree Weaving Pvt. Ltd.",
  brandName: "Rayashree Weaving",
  tagline: "Precision Woven Solutions • Global Quality Packaging & Textiles",
  logo: "assets/logo.png",
  logoWhite: "assets/logo.png",
  ceo: "Lakshmi Kanth",
  designation: "Company CEO",
  phone: "+91 9108713258",
  phoneFormatted: "+91 91087 13258",
  whatsappNumber: "919108713258",
  email: "rayashreewpvtltd@gmail.com",
  address: "No. 09 Survey No. 77/3, Hosahalli, Kannali, Kodigenahalli post, Yeshwanthpura Hobli, Bangalore North, Bangalore - 560112, Karnataka, India",
  shortAddress: "Hosahalli, Kannali, Bangalore North - 560112",
  hours: "Mon - Sat: 8:30 AM - 7:30 PM",
  capacity: "5,000,000+ Sacks / Month",
  established: "2018",
  certifications: ["ISO 9001:2015", "Food Grade BRCGS Compliant", "UV Resistant Standards", "IS 14887:2014"],
  manufacturersOf: "HDPE / PP Woven Sacks, FIBC Bags, PE Liners & Container Liners, Jute & Linen Textiles"
};

const DEFAULT_PRODUCTS = [
  {
    id: "PROD-CATTLE",
    slug: "cattle-feed",
    name: "Cattle Feed Woven Sacks",
    shortName: "Cattle Feed Sacks",
    category: "Feed & Agri",
    badge: "Best Seller",
    image: "assets/images/cattle-feed.jpg",
    capacityRange: "25kg / 50kg / 75kg",
    gsmRange: "80 GSM - 95 GSM",
    material: "100% Virgin HDPE / PP with Anti-Slip Weave",
    tagline: "High-Tensile Anti-Burst Woven Sacks for Animal Feed & Grains",
    specifications: {
      "Standard Dimensions": "24 x 38 inch / 25 x 40 inch",
      "Weave Type": "10x10 to 12x12 Anti-Slip Diamond Weave",
      "Lamination": "Extrusion BOPP Gloss / Matte Finish",
      "Printing": "Up to 8-Color High-Definition Rotogravure",
      "Closure Options": "Ultrasonic Hemmed Top, Easy-Open Stitch"
    },
    features: [
      "Zero drop burst guarantee from 10ft stacking height",
      "UV weather stabilizer masterbatch tested for 2,000+ hours",
      "Anti-slip micro-ribbed surface for pallet and truck stability",
      "Moisture-lock food-grade PE liner insertion available"
    ]
  },
  {
    id: "PROD-POULTRY",
    slug: "poultry-feed",
    name: "Poultry Feed Bags",
    shortName: "Poultry Feed Bags",
    category: "Feed & Agri",
    badge: "Export Grade",
    image: "assets/images/poultry-feed.jpg",
    capacityRange: "25kg / 50kg",
    gsmRange: "85 GSM - 110 GSM",
    material: "Premium PP Polymer with High-Gloss BOPP",
    tagline: "Photographic Multi-Color Printed Sacks with Moisture Barrier",
    specifications: {
      "Standard Dimensions": "22 x 36 inch / 24 x 39 inch",
      "Printing Quality": "HD Photographic Quality (300 DPI)",
      "Handle Options": "Punch D-Cut Handle, Top Hemmed",
      "Gusseting": "Single & Double Deep Side Gussets",
      "Lamination": "Micro-Perforated or High Gloss BOPP"
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
    name: "Block Bottom Cement Bags",
    shortName: "Cement Valve Bags",
    category: "Building & Construction",
    badge: "AD*STAR Tech",
    image: "assets/images/cement.jpg",
    capacityRange: "50kg Standard",
    gsmRange: "70 GSM - 85 GSM",
    material: "High-Strength Coated Woven Polypropylene",
    tagline: "Self-Closing Valve Packaging for High-Speed Rotary Cement Fillers",
    specifications: {
      "Standard Dimensions": "50 x 60 x 11 cm (50kg Cement Standard)",
      "Valve Type": "Self-Closing Inner & Outer Flap Valve",
      "Sealing Technology": "Hot Air Welding (No Adhesive/Glue)",
      "Aeration": "Nano-Perforation for Fast Dust-Free Filling",
      "Breaking Load": "High Tensile > 750 N (Warp & Weft)"
    },
    features: [
      "Brick-shape stacking eliminates spillage and optimizes transport",
      "Zero seepage of cement dust during 120-bag/minute filling lines",
      "100% water resistant under monsoon warehouse storage",
      "Automated robotic palletizer compatible"
    ]
  },
  {
    id: "PROD-SILAGE",
    slug: "silage-bags",
    name: "Agricultural Silage Bags",
    shortName: "Silage Fermentation Bags",
    category: "Agriculture & Farming",
    badge: "High Barrier",
    image: "assets/images/silage-bags.jpg",
    capacityRange: "25 - 200 L / 500kg Tube",
    gsmRange: "100 GSM - 250 GSM (150-250 Micron)",
    material: "Multi-Layer UV Fortified Virgin Polyethylene",
    tagline: "Anerobic Fermentation Sacks for Green Fodder & Crop Storage",
    specifications: {
      "Available Sizes": "50kg, 100kg & 10ft Continuous Silo Tubes",
      "UV Resistance": "Minimum 24 Months Field Sunlight Rating",
      "Puncture Strength": "High Dart Impact (> 1,200 grams)",
      "Oxygen Barrier": "< 10 cc/m²/24h Oxygen Permeability",
      "Color Options": "White/Black Dual-Tone (Sun Reflective)"
    },
    features: [
      "White exterior reflects solar heat to preserve silage quality",
      "Black interior blocks 100% UV light and halts degradation",
      "Preserves sweet lactic fermentation for up to 18 months",
      "Supreme rodent & puncture resistance under farm conditions"
    ]
  },
  {
    id: "PROD-JUTE",
    slug: "jute-sacks",
    name: "Eco-Friendly Jute & Burlap Sacks",
    shortName: "Natural Jute Sacks",
    category: "Eco & Natural",
    badge: "100% Biodegradable",
    image: "assets/images/jute.jpg",
    capacityRange: "50kg / 60kg / 100kg",
    gsmRange: "280 GSM - 450 GSM",
    material: "100% Natural Golden Jute Fibre (Hydrocarbon-Free)",
    tagline: "Breathable Natural Gunny Bags for Coffee, Cocoa, Rice & Grains",
    specifications: {
      "Standard Sizes": "Standard A-Twill, B-Twill, Heavy Cee (28x40 inch)",
      "Grade": "Food Grade MOT / Hydrocarbon-Free Processed",
      "Striping": "Standard Green Stripes / Custom Mill Identification",
      "Mouth Finish": "Selvedge & Overhead Hemmed",
      "Sewing": "Herakles Double Heavy Duty Safety Stitch"
    },
    features: [
      "100% natural, biodegradable, compostable and eco-friendly",
      "Natural fiber porosity prevents moisture sweating & mold in grains",
      "Complies with European & US organic food packaging standards",
      "Re-usable multiple times with supreme tear resistance"
    ]
  },
  {
    id: "PROD-LINEN",
    slug: "linen-fabric",
    name: "Linen Fabric & Industrial Textiles",
    shortName: "Linen Textile Fabric",
    category: "Textiles & Weaving",
    badge: "Custom Looms",
    image: "assets/images/linen-fabric.jpg",
    capacityRange: "Continuous Rolls (50m - 500m)",
    gsmRange: "120 GSM - 350 GSM",
    material: "Natural Pure Flax / Blended High-Tensile Linen",
    tagline: "Precision Woven Natural Linen Rolls for Furnishings & Technical Use",
    specifications: {
      "Roll Width": "36 inch to 120 inch (Custom Sizing)",
      "Yarn Count": "10s to 60s Natural Flax & Blend Weave",
      "Finish": "Bleached, Semi-Bleached, Natural Grey, Scoured",
      "Applications": "Home Textiles, Apparel, Industrial Filtration, Curtains",
      "Packaging": "Moisture-Proof Polywrap Rolls on Heavy Core"
    },
    features: [
      "Superior natural cooling and breathability with luxurious texture",
      "Natural antibacterial and hypoallergenic properties",
      "High tensile durability that softens gracefully with each wash",
      "Custom loom width weaving matched to export buyer specifications"
    ]
  },
  {
    id: "PROD-FIBC",
    slug: "fibc-bags",
    name: "Industrial FIBC Jumbo Bags & Liners",
    shortName: "FIBC Bulk Bags",
    category: "Bulk Logistics",
    badge: "Heavy Duty 2-Ton",
    image: "assets/images/bags.jpg",
    capacityRange: "500kg - 2,000kg (SWL 1 - 2 Ton)",
    gsmRange: "140 GSM - 240 GSM",
    material: "Virgin PP Woven Fabric with Safety Factor 5:1 / 6:1",
    tagline: "Heavy-Duty Flexible Intermediate Bulk Containers & Liners",
    specifications: {
      "Structure Types": "U-Panel, 4-Panel, Circular, Baffle Q-Bags",
      "Lifting Loops": "Corner Loops, Cross-Corner Loops, Stevedore Straps",
      "Filling / Discharge": "Open Top, Duffle Skirt, Filling Spout, Discharge Valve",
      "Safety Factor (SF)": "5:1 (Single Trip) / 6:1 (Multi-Trip Heavy Duty)",
      "Liner Attachments": "Form-Fit, Gusseted, Aluminum Barrier & Conductive Type C"
    },
    features: [
      "Rigid ISO 21898 safety drop and load endurance tested",
      "Baffle Q-Bag design prevents rounding to save 30% shipping space",
      "Anti-static Type B & C fabric for hazardous chemical transport",
      "Complete moisture protection with 80-120 micron PE liner"
    ]
  }
];

const DEFAULT_INQUIRIES = [];

const TESTIMONIALS = [
  {
    quote: "Rayashree Weaving has been our packaging partner for over 4 years. Their 50kg cattle feed woven sacks have zero burst rates during rough logistics, and their BOPP printing is top-class.",
    author: "R. Chandrashekar",
    role: "Head of Logistics",
    company: "Amrutha Dairy & Feeds, Karnataka"
  },
  {
    quote: "Switching to Rayashree's block bottom valve cement bags drastically reduced cement dust loss and accelerated our automated packing line speed by 18%. Outstanding quality control.",
    author: "P. Ranganathan",
    role: "Plant Manager",
    company: "South India Infrastructure Cement Ltd."
  },
  {
    quote: "For our coffee exports to Europe, compliance is non-negotiable. Rayashree's Hydrocarbon-Free Jute Bags pass every international audit smoothly. Highly recommended.",
    author: "Naveen Thomas",
    role: "Managing Director",
    company: "Western Ghats Agri Exports"
  }
];

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
      if (!parsed.logo || parsed.logo.endsWith('.svg')) {
        parsed.logo = "assets/logo.png";
      }
      if (!parsed.logoWhite || parsed.logoWhite.endsWith('.svg')) {
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
    ceoName: "Lakshmi Kanth",
    phone: "+91 9108713258",
    email: "rayashreewpvtltd@gmail.com",
    address: "No. 09 Survey No. 77/3, Hosahalli, Kannali, Kodigenahalli post, Yeshwanthpura Hobli, Bangalore North, Bangalore - 560112",
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
  const stored = localStorage.getItem("rw_traffic_analytics");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Migrate / reset if it had the old 1482 mock base
      if (parsed.totalViews >= 1482 && parsed.recentVisitors && parsed.recentVisitors.some(r => r.location === "Bangalore, IN" && r.source === "Direct / Organic Search")) {
        const resetData = {
          totalViews: Math.max(0, parsed.totalViews - 1482),
          uniqueVisitors: Math.max(0, parsed.uniqueVisitors - 642),
          todayViews: Math.max(0, parsed.todayViews - 184),
          lastUpdatedDate: new Date().toISOString().slice(0, 10),
          pageBreakdown: {},
          recentVisitors: []
        };
        localStorage.setItem("rw_traffic_analytics", JSON.stringify(resetData));
        return resetData;
      }
      return parsed;
    } catch (e) { console.error(e); }
  }
  return { ...DEFAULT_TRAFFIC_DATA };
}

function saveViewAnalytics(data) {
  localStorage.setItem("rw_traffic_analytics", JSON.stringify(data));
}

function trackPageView(pageIdentifier = "") {
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

  if (pageIdentifier) {
    data.pageBreakdown = data.pageBreakdown || {};
    data.pageBreakdown[pageIdentifier] = (data.pageBreakdown[pageIdentifier] || 0) + 1;
  }

  saveViewAnalytics(data);
  return data;
}

function getProducts() {
  const stored = localStorage.getItem("rw_products");
  if (stored !== null) {
    try { 
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const cleaned = parsed.filter(p => {
          if (!p || typeof p !== "object") return false;
          const name = String(p.name || "").trim().toLowerCase();
          const id = String(p.id || "").trim().toLowerCase();
          const badge = String(p.badge || "").trim().toLowerCase();
          const shortName = String(p.shortName || "").trim().toLowerCase();
          if (name === "best" || id === "best" || badge === "best" || shortName === "best") {
            return false;
          }
          return true;
        });

        if (cleaned.length > 0) {
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
  // If empty or null, seed with standard 7 demo manufacturing products
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
