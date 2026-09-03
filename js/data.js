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

const DEFAULT_PRODUCTS = [];

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
    "Cattle Feed (cattle-feed.html)": 182,
    "Poultry Feed (poultry-feed.html)": 146,
    "Cement (cement.html)": 118,
    "Silage Bags (silage-bags.html)": 64,
    "Jute Sacks (jute.html)": 42,
    "Linen Fabric (linen-fabric.html)": 38,
    "FIBC Jumbo Bags (bags.html)": 32
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
  if (stored !== null) {
    try { 
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (e) { 
      console.error("Error reading rw_products from localStorage:", e); 
    }
  }
  return [];
}

function saveProducts(products) {
  localStorage.setItem("rw_products", JSON.stringify(products));
  try {
    fetch('api/products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products)
    }).catch(() => {});
  } catch (e) {}
}

function syncServerProducts(callback) {
  try {
    fetch('api/products.php')
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
