/**
 * Rayashree Weaving Pvt. Ltd. - Core Data & Product Registry
 */

const COMPANY_INFO = {
  name: "Rayashree Weaving Pvt. Ltd.",
  brandName: "Rayashree Weaving",
  tagline: "Precision Woven Solutions • Global Quality Packaging & Textiles",
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
    id: "cattle-feed",
    slug: "cattle-feed",
    name: "Cattle Feed Woven Sacks",
    shortName: "Cattle Feed",
    category: "Feed & Agri",
    tagline: "Heavy-Duty, Moisture-Lock PP Woven Sacks for Livestock Feeds",
    image: "assets/images/cattle-feed.jpg",
    capacityRange: "25 kg / 50 kg / 75 kg",
    gsmRange: "65 GSM - 120 GSM",
    material: "100% Virgin Virgin Polypropylene (PP) / HDPE",
    weaveType: "Circular Weave (Anti-Slip Diamond or Ribbed Weave)",
    colorOptions: "Milky White, Green, Yellow, Transparent, Customized Multi-Color",
    features: [
      "High bursting and tensile strength against drop impacts",
      "Anti-slip surface for high-stack warehouse stability",
      "Micro-perforations or PE liner insertion for breathability & moisture control",
      "High-definition flexographic & BOPP photographic multi-color branding",
      "UV protection for extended outdoor storage without degradation"
    ],
    specifications: {
      "Standard Sizes": "20x36 inch, 22x38 inch, 24x40 inch (Customizable)",
      "Mesh Count": "10x10 to 14x14 per sq. inch",
      "Denier": "700D to 1200D",
      "Lamination": "Corona Treated BOPP / PP Extrusion Coated (15 - 30 micron)",
      "Bottom Stitch": "Single/Double Fold with Heavy Duty Chain/Lock Stitching",
      "Top Finish": "Heat cut, Zig-zag cold cut, or Hemmed with draw-string"
    },
    applications: [
      "Commercial Dairy Cattle Feed Pellets & Mash",
      "Silage & Mineral Supplement Packaging",
      "Calf Starter & Cattle Concentrates",
      "Cereal Grains & Animal Fodder"
    ],
    featured: true,
    badge: "Best Seller"
  },
  {
    id: "poultry-feed",
    slug: "poultry-feed",
    name: "Poultry Feed Bags",
    shortName: "Poultry Feed",
    category: "Feed & Agri",
    tagline: "Vibrant BOPP Gloss Sacks for Broiler, Layer & Chick Feeds",
    image: "assets/images/poultry-feed.jpg",
    capacityRange: "25 kg / 50 kg",
    gsmRange: "70 GSM - 115 GSM",
    material: "Polypropylene (PP) with High Gloss / Matte BOPP Film",
    weaveType: "Ultra-Fine Tight Flat & Circular Weave",
    colorOptions: "Full CMYK Multicolor Photographic Print",
    features: [
      "100% Aroma retention and moisture protection for feed freshness",
      "Eye-catching retail presentation with glossy BOPP reverse printing",
      "Gusseted sides for upright retail display and space optimization",
      "Tamper-proof closure with easy-open pull tape options",
      "Food-contact safe and non-toxic virgin polymer certification"
    ],
    specifications: {
      "Standard Sizes": "18x32 inch, 20x35 inch, 22x38 inch",
      "Mesh Count": "11x11 to 14x14",
      "Denier": "650D to 1000D",
      "Lamination": "Multi-layer BOPP Sandwich Lamination (18 - 25 Micron)",
      "Handle Options": "Punch hole handle, D-cut handle, or Top stitched handle",
      "Gusset Width": "2 inch to 4.5 inch side gusseting"
    },
    applications: [
      "Broiler Starter, Grower & Finisher Crumble",
      "Layer Bird Mash & Pellet Nutrition",
      "Chick Pre-starter Nutrition Diets",
      "Aqua Feed & Bird Specialty Feeds"
    ],
    featured: true,
    badge: "High Demand"
  },
  {
    id: "cement",
    slug: "cement",
    name: "Cement & Construction Bags",
    shortName: "Cement",
    category: "Building & Construction",
    tagline: "AD*STAR Block Bottom Valve Bags with Zero Seepage & High Drop Resistance",
    image: "assets/images/cement.jpg",
    capacityRange: "25 kg / 50 kg",
    gsmRange: "60 GSM - 90 GSM",
    material: "High-Tensile PP Woven Fabric with Nano-Perforation",
    weaveType: "Tubular Hot-Air Welded Block Bottom Valve",
    colorOptions: "Kraft Brown, Bleached White, Customized 4-Color Flexo",
    features: [
      "Brick-shape block bottom for perfect automated palletization",
      "Micro-star nano perforations for rapid air release without powder leakage",
      "100% moisture proof hot-melt sealing eliminating adhesive degradation",
      "High drop endurance tested up to 2.5 meters drop heights",
      "Automatic filling compatibility with rotary and inline packing spouts"
    ],
    specifications: {
      "Standard Sizes": "50x60x11 cm, 50x65x11 cm (50kg standard)",
      "Mesh Count": "10x10 to 12x12",
      "Bursting Strength": "> 950 kPa",
      "Valve Type": "Internal self-closing valve or external tuck-in sleeve",
      "Coating": "Extrusion coated 18-22 GSM with anti-slip micro embossing",
      "Drop Resistance": "Standardized 8-drop drop-tower test compliant"
    },
    applications: [
      "Portland & Pozzolana Cement Packaging",
      "Ready-Mix Plaster, Tile Adhesives & Grouts",
      "Wall Putty, Gypsum Powder & Dry Mortar",
      "Calcium Carbonate, Hydrated Lime & Minerals"
    ],
    featured: true,
    badge: "Heavy Duty"
  },
  {
    id: "silage-bags",
    slug: "silage-bags",
    name: "Agricultural Silage & Tube Bags",
    shortName: "Silage Bags",
    category: "Feed & Agri",
    tagline: "Multi-Layer UV-Stabilized Anaerobic Fermentation Storage Sacks & Silo Tubes",
    image: "assets/images/silage-bags.jpg",
    capacityRange: "50 kg Bags to 200+ Ton Storage Tubes (8ft - 10ft Dia x 300ft)",
    gsmRange: "180 GSM - 250 GSM / 200 - 250 Micron Multi-layer",
    material: "100% Virgin Co-Extruded Polyethylene (White/Black UV Treated)",
    weaveType: "Seamless Co-extruded Triple/Quintuple Layer Film & Heavy Woven",
    colorOptions: "White exterior (thermal reflection) / Black interior (UV block)",
    features: [
      "White exterior reflects 90% solar heat to prevent temperature spikes inside",
      "Black interior blocks all harmful UV and sunlight for strict anaerobic fermentation",
      "High puncture, tear and bird-peck resistance in open fields",
      "Maintains essential nutritional value, sugar content and protein in green fodder",
      "18 to 24-month all-weather outdoor lifespan guarantee"
    ],
    specifications: {
      "Tube Diameters": "6ft, 8ft, 9ft, 10ft x Lengths up to 300ft",
      "Small Bag Sizing": "60x100 cm, 70x110 cm for 50-80kg hand-fed baled silage",
      "Dart Impact": "> 850 grams",
      "Tensile Strength": "MD > 28 MPa, TD > 26 MPa",
      "Oxygen Permeability": "< 250 cc/m²/24hr (Guaranteed Anaerobic)",
      "UV Warranty": "Up to 24 Months in tropical weather"
    ],
    applications: [
      "Corn / Maize Silage & Sorghum Fodder Fermentation",
      "Baled Sugarcane Tops & Green Grass Fodder",
      "Temporary Field Grain & Soybean Storage",
      "Organic Fertilizer & Compost Preservation"
    ],
    featured: true,
    badge: "UV Fortified"
  },
  {
    id: "jute",
    slug: "jute",
    name: "Eco-Friendly Jute & Burlap Sacks",
    shortName: "Jute",
    category: "Eco & Natural",
    tagline: "100% Biodegradable, Breathable Hessian & Hydro-Carbon Free Jute Bags",
    image: "assets/images/jute.jpg",
    capacityRange: "40 kg / 50 kg / 60 kg / 100 kg",
    gsmRange: "280 GSM - 450 GSM",
    material: "100% Golden Jute Fiber (Hydro-Carbon Free Treated for Food Packing)",
    weaveType: "Hessian Plain Weave / Twill (A-Twill, B-Twill, Binola)",
    colorOptions: "Natural Golden Brown, Custom Green Edge Identification Stripes",
    features: [
      "100% natural, biodegradable and renewable ecological packaging",
      "Superior natural breathability preventing condensation and mold in grains",
      "High friction coefficient allowing 20+ tiers warehouse stacking without slipping",
      "Hydrocarbon-Free (HCF / IJO standard) for cocoa and coffee export certification",
      "Reinforced heavy selvage and double overhead stitching"
    ],
    specifications: {
      "Popular Types": "B-Twill (44x26.5 inch), A-Twill, Hessian Sacks, Sandbags",
      "Porter & Shots": "6x7, 6x8, 8x9 per inch",
      "Weight per Bag": "600g to 1020g standard weights",
      "Mouth Finish": "Hemmed mouth with heavy jute twine lock stitching",
      "Printing": "Custom non-toxic water-based logo and batch marking"
    ],
    applications: [
      "Raw Arabica & Robusta Coffee Beans Export",
      "Cocoa Beans, Cashew Nuts & Spices",
      "Potatoes, Onions, Paddy & Wheat Grains",
      "Flood Control Sandbags & Landscaping Nursery Sacks"
    ],
    featured: true,
    badge: "100% Eco"
  },
  {
    id: "linen-fabric",
    slug: "linen-fabric",
    name: "Linen Fabric & Industrial Textiles",
    shortName: "Linen Fabric",
    category: "Textiles",
    tagline: "Premium High-Density Woven Natural & Blended Linen Fabric Rolls",
    image: "assets/images/linen-fabric.jpg",
    capacityRange: "Rolls of 100m to 1000m / Custom Bolt Lengths",
    gsmRange: "140 GSM - 380 GSM",
    material: "Pure Flax Linen / Linen-Cotton Blend / High Count Industrial Weaves",
    weaveType: "Plain, Dobby, Herringbone & Canvas Weave",
    colorOptions: "Raw Ecru, Bleached Optic White, Dyed Seasonal Hues, Customized",
    features: [
      "Exceptional natural tensile durability and abrasion resistance",
      "Thermo-regulating, breathable, and highly absorbent natural fibers",
      "Precision circular and flat loom weaving ensuring consistent yarn density",
      "Pre-shrunk, soft-washed or raw calendered finish options",
      "Customizable width up to 120 inches for diverse commercial applications"
    ],
    specifications: {
      "Width Available": "44 inch, 58 inch, 60 inch, 110 inch, 120 inch",
      "Yarn Count": "10s, 14s, 20s, 28s, 40s Leas",
      "Shrinkage": "< 3% after commercial washing",
      "Finish Types": "Greige (Raw), Enzyme Softened, Water Repellent, Anti-Mildew",
      "Roll Packaging": "Heavy core tube with moisture-barrier PE shrink wrapping"
    ],
    applications: [
      "Industrial Protective Covers & Workwear Linings",
      "Home Furnishings, Curtains, Table Linens & Upholstery",
      "Apparel, Designer Suiting & Ethnic Garments",
      "Hospitality & Luxury Hotel Linen Collections"
    ],
    featured: false,
    badge: "Premium Weave"
  },
  {
    id: "bags",
    slug: "bags",
    name: "Industrial FIBC Jumbo Bags & Liners",
    shortName: "Bags",
    category: "Industrial Bulk",
    tagline: "1 Ton to 2 Ton FIBC Bulk Sacks, HDPE Sacks, PE & Container Liners",
    image: "assets/images/bags.jpg",
    capacityRange: "500 kg to 2500 kg (Safe Working Load SWL)",
    gsmRange: "140 GSM - 240 GSM (Heavy Duty Fabric)",
    material: "Virgin UV-Stabilized Polypropylene Fabric & LDPE Liners",
    weaveType: "U-Panel, 4-Panel, Circular & Baffle (Q-Bag) Configurations",
    colorOptions: "White, Blue, Beige, Custom Loop Color Coding",
    features: [
      "Engineered Safety Factor (SF) 5:1 for Single Trip or 6:1 for Multi-Trip",
      "Reinforced corner / cross-corner heavy lifting loops for crane/forklift operations",
      "Integrated form-fit or tubular PE liners to eliminate dust and liquid moisture",
      "Discharge spout, duffle top, and filling spout configurations for rapid automation",
      "Available with Baffle internal walls to maintain compact cube footprint during transit"
    ],
    specifications: {
      "Safety Working Load (SWL)": "500 kg, 1000 kg (1 Ton), 1500 kg, 2000 kg (2 Ton)",
      "Standard Dimensions": "90x90x100 cm, 95x95x120 cm, 105x105x140 cm",
      "Lifting Loops": "4 Corner Loops / Cross Corner (25cm - 30cm free height)",
      "Top Options": "Open Top, Skirt (Duffle) Top, Fill Spout with tie",
      "Bottom Options": "Flat Bottom, Discharge Spout with petal closure",
      "Liners": "Form-Fit, Suspended, Gusseted or Conductive Type-C Liners"
    ],
    applications: [
      "Bulk Minerals, Silica Sand, Quartz, Chemicals & Polymers",
      "Bulk Agricultural Exports (Grain, Pulses, Sugar, Rice)",
      "Recycling & Heavy Metal Scrap Handling",
      "20ft & 40ft Sea Shipping Container Liners for Dry Bulk"
    ],
    featured: true,
    badge: "Bulk Heavy Duty"
  }
];

const DEFAULT_INQUIRIES = [
  {
    id: "RFQ-1082",
    date: "2026-08-29 14:30",
    clientName: "Karnataka Milk Producers Co-op",
    contactPerson: "Dr. Suresh Gowda",
    phone: "+91 98450 12874",
    email: "procurement@karnatakamilk.org",
    product: "Cattle Feed Woven Sacks",
    quantity: "25,000 Pcs",
    specifications: "50kg Capacity, 85 GSM, Anti-slip diamond weave, 4-color BOPP print",
    status: "New",
    priority: "High",
    notes: "Urgent delivery required for upcoming quarter batch. Sample requested."
  },
  {
    id: "RFQ-1081",
    date: "2026-08-28 11:15",
    clientName: "Southern Agro Feeds Ltd.",
    contactPerson: "Rajesh Varma",
    phone: "+91 94480 33219",
    email: "r.varma@southernagro.in",
    product: "Poultry Feed Bags",
    quantity: "50,000 Pcs",
    specifications: "25kg and 50kg, 90 GSM, High gloss BOPP lamination with D-cut handle",
    status: "Quoted",
    priority: "Medium",
    notes: "Quotation sent via email. Follow up scheduled for Monday."
  },
  {
    id: "RFQ-1080",
    date: "2026-08-27 16:45",
    clientName: "Deccan Cements & Infrastructure",
    contactPerson: "Manjunath Swamy",
    phone: "+91 97312 88402",
    email: "purchases@deccancement.com",
    product: "Cement & Construction Bags",
    quantity: "100,000 Pcs",
    specifications: "50kg Block bottom valve bags, micro-perforated, 75 GSM",
    status: "Order Placed",
    priority: "High",
    notes: "Advance PO received. Production scheduled on Loom line 3."
  },
  {
    id: "RFQ-1079",
    date: "2026-08-26 09:20",
    clientName: "Malnad Coffee Exporters",
    contactPerson: "Anand Hegde",
    phone: "+91 94801 55621",
    email: "anand@malnadexport.com",
    product: "Eco-Friendly Jute & Burlap Sacks",
    quantity: "15,000 Pcs",
    specifications: "60kg Arabica Coffee export spec, Hydrocarbon-free, 3-stripe green edge",
    status: "Quoted",
    priority: "Medium",
    notes: "Shared lab certificate of food grade compliance."
  },
  {
    id: "RFQ-1078",
    date: "2026-08-25 18:00",
    clientName: "Apex Minerals & Chemicals",
    contactPerson: "Vikram Singhania",
    phone: "+91 98860 41290",
    email: "vikram@apexminerals.com",
    product: "Industrial FIBC Jumbo Bags & Liners",
    quantity: "3,500 Pcs",
    specifications: "1 Ton SWL, 4 Corner cross loop, Discharge Spout with 80 micron PE liner",
    status: "Under Review",
    priority: "High",
    notes: "Evaluating technical drawing for chemical grade liner fit."
  }
];

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
    try { return { ...COMPANY_INFO, ...JSON.parse(stored) }; } catch (e) { console.error(e); }
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
  contact: {
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
  totalViews: 1482,
  uniqueVisitors: 642,
  todayViews: 184,
  lastUpdatedDate: new Date().toISOString().slice(0, 10),
  pageBreakdown: {
    "Home (index.html)": 548,
    "Products Catalog (products.html)": 312,
    "1. Cattle Feed (cattle-feed.html)": 182,
    "2. Poultry Feed (poultry-feed.html)": 146,
    "3. Cement (cement.html)": 118,
    "4. Silage Bags (silage-bags.html)": 64,
    "5. Jute Sacks (jute.html)": 42,
    "6. Linen Fabric (linen-fabric.html)": 38,
    "7. FIBC Jumbo Bags (bags.html)": 32
  },
  recentVisitors: [
    { time: "Just now", page: "Home (index.html)", source: "Direct / Organic Search", location: "Bangalore, IN" },
    { time: "4 mins ago", page: "Cattle Feed Woven Sacks", source: "WhatsApp Share", location: "Mysore, IN" },
    { time: "18 mins ago", page: "Cement Packaging Bags", source: "Google Search", location: "Hyderabad, IN" },
    { time: "42 mins ago", page: "Poultry Feed Bags", source: "Direct Referral", location: "Hosur, IN" },
    { time: "1 hr ago", page: "Products Catalog", source: "Direct / Organic Search", location: "Bangalore, IN" }
  ]
};

function getViewAnalytics() {
  const stored = localStorage.getItem("rw_traffic_analytics");
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { console.error(e); }
  }
  localStorage.setItem("rw_traffic_analytics", JSON.stringify(DEFAULT_TRAFFIC_DATA));
  return DEFAULT_TRAFFIC_DATA;
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

  // Track unique sessions
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
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { console.error(e); }
  }
  localStorage.setItem("rw_products", JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem("rw_products", JSON.stringify(products));
}

function getInquiries() {
  const stored = localStorage.getItem("rw_inquiries");
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { console.error(e); }
  }
  localStorage.setItem("rw_inquiries", JSON.stringify(DEFAULT_INQUIRIES));
  return DEFAULT_INQUIRIES;
}

function saveInquiries(inquiries) {
  localStorage.setItem("rw_inquiries", JSON.stringify(inquiries));
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
