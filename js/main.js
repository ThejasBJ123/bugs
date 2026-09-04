/**
 * Rayashree Weaving Pvt. Ltd. - Master Client Script
 */

function resolveAssetPath(path) {
  if (!path) {
    const isSub = window.location.pathname.includes('/public/') || window.location.pathname.includes('/admin/');
    return isSub ? '../assets/images/bags.jpg' : 'assets/images/bags.jpg';
  }
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const isSub = window.location.pathname.includes('/public/') || window.location.pathname.includes('/admin/');
  if (isSub && !path.startsWith('../') && !path.startsWith('/')) {
    return '../' + path;
  }
  if (!isSub && path.startsWith('../')) {
    return path.replace(/^\.\.\//, '');
  }
  return path;
}

document.addEventListener("DOMContentLoaded", () => {
  try { initPreloader(); } catch (e) { console.error("initPreloader error:", e); }
  try { initNavbar(); } catch (e) { console.error("initNavbar error:", e); }
  try { initRFQModal(); } catch (e) { console.error("initRFQModal error:", e); }
  try { initProductSpecsModal(); } catch (e) { console.error("initProductSpecsModal error:", e); }
  try { initProductThumbBar(); } catch (e) { console.error("initProductThumbBar error:", e); }
  try { initProductGrid(); } catch (e) { console.error("initProductGrid error:", e); }
  try { initContactPageForm(); } catch (e) { console.error("initContactPageForm error:", e); }
  try { applyDynamicSiteContent(); } catch (e) { console.error("applyDynamicSiteContent error:", e); }
  try { populateRFQSelect(); } catch (e) { console.error("populateRFQSelect error:", e); }

  // Sync products from server (for Hostinger or multi-device browsing)
  if (typeof syncServerProducts === "function") {
    syncServerProducts(() => {
      try { initProductThumbBar(); } catch (e) {}
      try { initProductGrid(); } catch (e) {}
      try { applyDynamicSiteContent(); } catch (e) {}
      try { populateRFQSelect(); } catch (e) {}
    });
  }
  
  // Track pageview for Admin analytics
  if (typeof trackPageView === "function") {
    try {
      const pageName = document.title ? document.title.split("|")[0].trim() : window.location.pathname;
      trackPageView(pageName);
    } catch (e) {}
  }
});

// Instant live re-render when admin updates products in another tab
window.addEventListener("storage", (e) => {
  if (e.key === "rw_products" || e.key === "rw_site_content" || e.key === "rw_company_info") {
    try { initProductThumbBar(); } catch (err) {}
    try { initProductGrid(); } catch (err) {}
    try { applyDynamicSiteContent(); } catch (err) {}
    try { populateRFQSelect(); } catch (err) {}
  }
});

/* ==========================================================================
   Dynamic CMS Site Content & Products Hydration
   ========================================================================== */

function applyDynamicSiteContent() {
  if (typeof getCompanyInfo !== "function" || typeof getSiteContent !== "function") return;

  const company = getCompanyInfo();
  const content = getSiteContent();
  const products = typeof getProducts === "function" ? getProducts() : [];

  // Update dynamic product count across headers and nav links
  const prodCount = products.length;
  
  const navProductLinks = document.querySelectorAll("a.nav-link[href*='products.html']");
  navProductLinks.forEach(link => {
    link.textContent = `Products`;
  });

  const countBadges = document.querySelectorAll(".products-count-badge, .dynamic-prod-count");
  countBadges.forEach(el => {
    el.textContent = prodCount;
  });

  const countHeadings = document.querySelectorAll(".dynamic-prod-heading");
  countHeadings.forEach(el => {
    el.textContent = `Specialized Product Categories`;
  });

  // 1. Company Contact Details across Topbar, Contact Sections & Footers
  const phoneLinks = document.querySelectorAll("a[href^='tel:']");
  phoneLinks.forEach(a => {
    a.href = `tel:${company.whatsappNumber || '919108713258'}`;
    if (a.textContent.includes("+91") || a.textContent.includes("9108713258")) {
      a.textContent = company.phone;
    }
  });

  const emailLinks = document.querySelectorAll("a[href^='mailto:']");
  emailLinks.forEach(a => {
    a.href = `mailto:${company.email}`;
    if (a.textContent.includes("@")) {
      a.textContent = company.email;
    }
  });

  const waLinks = document.querySelectorAll("a[href*='wa.me']");
  const waNum = company.whatsappNumber || '919108713258';
  waLinks.forEach(a => {
    if (a.classList.contains("floating-whatsapp")) {
      a.href = `https://wa.me/${waNum}?text=Hello%20Rayashree%20Weaving,%20I%20am%20interested%20in%20your%20products.`;
      if (!a.querySelector(".wa-tooltip")) {
        const tip = document.createElement("span");
        tip.className = "wa-tooltip";
        tip.textContent = "Chat on WhatsApp";
        a.appendChild(tip);
      }
    } else if (!a.href.includes("?text=")) {
      a.href = `https://wa.me/${waNum}`;
    }
  });

  // 2. Home Page Hero & Stats (if on index.html)
  if (content && content.home) {
    const heroTag = document.querySelector(".hero-tag");
    if (heroTag && content.home.heroTag) heroTag.textContent = content.home.heroTag;

    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle && content.home.heroTitle) heroTitle.textContent = content.home.heroTitle;

    const heroSubtitle = document.querySelector(".hero-subtitle");
    if (heroSubtitle && content.home.heroSubtitle) heroSubtitle.textContent = content.home.heroSubtitle;

    const statCards = document.querySelectorAll(".stat-card, .stat-item");
    if (statCards.length >= 4) {
      if (content.home.stat1Val) {
        const num = statCards[0].querySelector(".stat-number");
        const lbl = statCards[0].querySelector(".stat-label");
        if (num) num.textContent = content.home.stat1Val;
        if (lbl) lbl.textContent = content.home.stat1Label;
      }
      if (content.home.stat2Val) {
        const num = statCards[1].querySelector(".stat-number");
        const lbl = statCards[1].querySelector(".stat-label");
        if (num) num.textContent = content.home.stat2Val || "48+ Looms";
        if (lbl) lbl.textContent = content.home.stat2Label || "High-Speed Circular Looms";
      }
      if (content.home.stat3Val) {
        const num = statCards[2].querySelector(".stat-number");
        const lbl = statCards[2].querySelector(".stat-label");
        if (num) num.textContent = content.home.stat3Val;
        if (lbl) lbl.textContent = content.home.stat3Label;
      }
      if (content.home.stat4Val) {
        const num = statCards[3].querySelector(".stat-number");
        const lbl = statCards[3].querySelector(".stat-label");
        if (num) num.textContent = content.home.stat4Val;
        if (lbl) lbl.textContent = content.home.stat4Label;
      }
    }
  }
}

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */

function initNavbar() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    const toggleMenu = (open) => {
      const shouldOpen = open !== undefined ? open : !navMenu.classList.contains("active");
      if (shouldOpen) {
        navMenu.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.className = shouldOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    };

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Add Staff Portal link to mobile menu if not present
    if (!navMenu.querySelector("a[href*='admin']")) {
      const adminLink = document.createElement("a");
      const isSub = window.location.pathname.includes('/public/') || window.location.pathname.includes('/admin/');
      adminLink.href = window.location.pathname.includes('/admin/') ? "index.html" : (isSub ? "../admin/index.html" : "admin/index.html");
      adminLink.className = "nav-link";
      adminLink.style.borderColor = "var(--gold-400)";
      adminLink.style.color = "var(--gold-600)";
      adminLink.innerHTML = `<span><i class="fa-solid fa-lock" style="margin-right: 0.5rem; color: var(--gold-500);"></i> Staff Portal</span> <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem;"></i>`;
      navMenu.appendChild(adminLink);
    }

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleMenu(false);
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // Header scroll shadow effect
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
      } else {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
      }
    });
  }
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */

function showToast(message, iconClass = "fa-solid fa-circle-check", duration = 4000) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="${iconClass}" style="color: var(--gold-400); font-size: 1.25rem;"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ==========================================================================
   Dynamic RFQ Product Select Options Hydration
   ========================================================================== */

function populateRFQSelect() {
  const select = document.getElementById("rfqProduct");
  if (!select || typeof getProducts !== "function") return;

  const products = getProducts();
  const currentValue = select.value;
  select.innerHTML = "";

  products.forEach((prod) => {
    const opt = document.createElement("option");
    opt.value = prod.name;
    opt.textContent = prod.name;
    select.appendChild(opt);
  });

  const customOpt = document.createElement("option");
  customOpt.value = "Custom Packaging Requirement";
  customOpt.textContent = "Custom Bespoke Packaging Specification";
  select.appendChild(customOpt);

  if (currentValue) {
    for (let opt of select.options) {
      if (opt.value === currentValue) {
        opt.selected = true;
        break;
      }
    }
  }
}

/* ==========================================================================
   RFQ Modal & Inquiry Handler
   ========================================================================== */

function initRFQModal() {
  const modal = document.getElementById("rfqModal");
  if (!modal) return;

  const closeBtns = modal.querySelectorAll(".modal-close-trigger");
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      closeRFQModal();
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeRFQModal();
    }
  });

  const rfqForm = document.getElementById("rfqForm");
  if (rfqForm) {
    rfqForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const clientName = document.getElementById("rfqName").value.trim();
      const phone = document.getElementById("rfqPhone").value.trim();
      const email = document.getElementById("rfqEmail").value.trim();
      const product = document.getElementById("rfqProduct").value;
      const quantity = document.getElementById("rfqQuantity").value.trim();
      const specifications = document.getElementById("rfqSpecs").value.trim();

      if (!clientName || !phone || !product) {
        alert("Please fill in your name, contact phone, and product category.");
        return;
      }

      const newInquiry = addInquiry({
        clientName: clientName,
        contactPerson: clientName,
        phone: phone,
        email: email || "N/A",
        product: product,
        quantity: quantity || "Custom Requirement",
        specifications: specifications || "Standard Factory Specification",
        priority: "High"
      });

      // Dispatch to Hostinger PHP backend if hosted on server
      try {
        const apiEndpoint = (typeof getApiEndpoint === 'function' ? getApiEndpoint('api/send-inquiry.php') : ((window.location.pathname.includes('/public/') || window.location.pathname.includes('/admin/')) ? '../api/send-inquiry.php' : 'api/send-inquiry.php'));
        fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientName: clientName,
            phone: phone,
            email: email,
            product: product,
            quantity: quantity,
            specifications: specifications
          })
        }).catch(() => {});
      } catch (e) {}

      closeRFQModal();
      rfqForm.reset();

      showToast(`Thank you, ${clientName}! RFQ #${newInquiry.id} submitted. Our CEO Lakshmi Kanth will contact you shortly.`);

      // Optional direct WhatsApp option prompt
      setTimeout(() => {
        if (confirm("Would you like to open WhatsApp now to speak directly with CEO Lakshmi Kanth about this quote?")) {
          const msg = encodeURIComponent(`Hello Mr. Lakshmi Kanth, I have submitted RFQ #${newInquiry.id} on your website for ${product} (Qty: ${quantity}). Please share best pricing.`);
          window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, "_blank");
        }
      }, 800);
    });
  }
}

function initContactPageForm() {
  const contactForm = document.getElementById("contactPageForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName") ? document.getElementById("cName").value.trim() : "";
    const phone = document.getElementById("cPhone") ? document.getElementById("cPhone").value.trim() : "";
    const email = document.getElementById("cEmail") ? document.getElementById("cEmail").value.trim() : "";
    const product = document.getElementById("cProduct") ? document.getElementById("cProduct").value : "General Inquiry";
    const message = document.getElementById("cMessage") ? document.getElementById("cMessage").value.trim() : "";

    if (!name || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    const newInquiry = addInquiry({
      clientName: name,
      contactPerson: name,
      phone: phone,
      email: email || "N/A",
      product: product,
      quantity: "Standard Order",
      specifications: message || "Direct Inquiry from Contact Page",
      priority: "High"
    });

    // Dispatch to Hostinger PHP backend if hosted on server
    try {
      const apiEndpoint = (typeof getApiEndpoint === 'function' ? getApiEndpoint('api/send-inquiry.php') : ((window.location.pathname.includes('/public/') || window.location.pathname.includes('/admin/')) ? '../api/send-inquiry.php' : 'api/send-inquiry.php'));
      fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: name,
          phone: phone,
          email: email,
          product: product,
          quantity: "Standard Order",
          specifications: message
        })
      }).catch(() => {});
    } catch (e) {}

    contactForm.reset();
    showToast(`Thank you, ${name}! Your inquiry #${newInquiry.id} has been submitted.`);

    setTimeout(() => {
      if (confirm("Would you like to speak directly with CEO Lakshmi Kanth on WhatsApp?")) {
        const msg = encodeURIComponent(`Hello Mr. Lakshmi Kanth, I submitted inquiry #${newInquiry.id} on your website regarding ${product}.`);
        window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, "_blank");
      }
    }, 800);
  });
}

function openRFQModal(productName = "") {
  const modal = document.getElementById("rfqModal");
  if (!modal) return;

  populateRFQSelect();

  const select = document.getElementById("rfqProduct");
  if (select && productName) {
    for (let opt of select.options) {
      if (opt.text.toLowerCase().includes(productName.toLowerCase()) || opt.value.toLowerCase().includes(productName.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (!window.location.hash.includes("quote")) {
    history.pushState({ modalOpen: true }, "", "#quote");
  }
}

function closeRFQModal() {
  const modal = document.getElementById("rfqModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    
    if (window.location.hash === "#quote") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }
}

/* ==========================================================================
   Dynamic Quick Visual Product Thumbnail Bar Rendering
   ========================================================================== */

function initProductThumbBar() {
  const bar = document.getElementById("productThumbBar") || document.querySelector(".product-thumb-bar");
  if (!bar || typeof getProducts !== "function") return;

  const products = getProducts();
  if (products.length === 0) {
    bar.style.display = "none";
    return;
  }
  bar.style.display = "grid";
  bar.innerHTML = "";

  products.forEach((prod) => {
    const item = document.createElement("div");
    item.style.cursor = "pointer";
    item.style.background = "var(--white)";
    item.style.border = "1.5px solid var(--dark-200)";
    item.style.borderRadius = "var(--radius-md)";
    item.style.padding = "0.75rem";
    item.style.textAlign = "center";
    item.style.transition = "all var(--transition-normal)";
    item.style.boxShadow = "var(--shadow-sm)";

    item.onmouseover = () => {
      item.style.borderColor = "var(--gold-500)";
      item.style.transform = "translateY(-3px)";
      item.style.boxShadow = "var(--shadow-md)";
    };
    item.onmouseout = () => {
      item.style.borderColor = "var(--dark-200)";
      item.style.transform = "translateY(0)";
      item.style.boxShadow = "var(--shadow-sm)";
    };

    const linkTarget = `javascript:openProductSpecsModal('${prod.id}')`;

    item.innerHTML = `
      <a href="${linkTarget}" style="text-decoration: none; color: inherit; display: block;">
        <img src="${resolveAssetPath(prod.image)}" alt="${prod.name}" style="width: 100%; height: 75px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 0.4rem;" onerror="this.src='${resolveAssetPath('assets/images/bags.jpg')}'">
        <strong style="font-size: 0.8rem; color: var(--primary-900); display: block; line-height: 1.2; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${prod.shortName || prod.name}
        </strong>
      </a>
    `;

    bar.appendChild(item);
  });
}

/* ==========================================================================
   Dynamic Product Showcase Grid & Dynamic Filter Bar
   ========================================================================== */

function initProductGrid() {
  const container = document.getElementById("productShowcaseGrid");
  if (!container || typeof getProducts !== "function") return;

  const products = getProducts();
  const filterBar = document.getElementById("productFilterBar") || document.querySelector(".product-filter-bar");

  if (products.length === 0) {
    if (filterBar) filterBar.style.display = "none";
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--white); border-radius: var(--radius-lg); border: 2px dashed var(--dark-200);">
        <div style="font-size: 3rem; color: var(--gold-500); margin-bottom: 1rem;"><i class="fa-solid fa-boxes-packing"></i></div>
        <h3 style="font-size: 1.35rem; color: var(--primary-900); font-weight: 800; margin-bottom: 0.5rem;">Product Catalog Ready</h3>
        <p style="color: var(--dark-600); max-width: 500px; margin: 0 auto 1.5rem auto;">
          Add your manufacturing bag lines and custom specifications in the Staff Admin Portal to display them live here.
        </p>
        <a href="${(window.location.pathname.includes('/public/') ? '../admin/index.html' : 'admin/index.html')}" class="btn btn-gold">
          <i class="fa-solid fa-plus"></i> Go to Admin Portal to Add Products
        </a>
      </div>
    `;
    return;
  }

  // Extract unique categories
  const categories = [...new Set(products.map(p => p.category ? p.category.trim() : "").filter(Boolean))];

  if (filterBar) {
    if (categories.length <= 1) {
      filterBar.style.display = "none";
    } else {
      filterBar.style.display = "flex";
      filterBar.innerHTML = "";

      // "All Products" button
      const allBtn = document.createElement("button");
      allBtn.className = "filter-btn active";
      allBtn.setAttribute("data-filter", "All");
      allBtn.textContent = `All Products (${products.length})`;
      filterBar.appendChild(allBtn);

      // Category Filter Buttons
      categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.setAttribute("data-filter", cat);
        btn.textContent = cat;
        filterBar.appendChild(btn);
      });

      const filterBtns = filterBar.querySelectorAll(".filter-btn");
      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          renderGrid(btn.getAttribute("data-filter"));
        });
      });
    }
  }

  function renderGrid(filterKey = "All") {
    container.innerHTML = "";
    
    const filtered = (filterKey === "All" || !filterKey)
      ? products 
      : products.filter(p => {
          const key = filterKey.toLowerCase().trim();
          return (p.category && p.category.toLowerCase().trim() === key) ||
                 (p.category && p.category.toLowerCase().includes(key)) ||
                 (p.name && p.name.toLowerCase().includes(key));
        });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--dark-500); font-weight: 600;">No products found in this category.</div>`;
      return;
    }

    filtered.forEach((prod) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <div class="product-card-img" onclick="openProductSpecsModal('${prod.id}')" style="cursor: pointer;">
          <img src="${resolveAssetPath(prod.image)}" alt="${prod.name}" loading="lazy" onerror="this.src='${resolveAssetPath('assets/images/bags.jpg')}'">
          <span class="product-badge">${prod.shortName || prod.badge || prod.name}</span>
        </div>
        <div class="product-card-body">
          <span class="product-category">${prod.category || "Industrial Packaging"}</span>
          <h3 class="product-title" onclick="openProductSpecsModal('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
          <p class="product-tagline">${prod.tagline || "Heavy-Duty Precision Woven Packaging Solution."}</p>
          
          <div class="product-specs-preview">
            <div class="spec-preview-item">
              <span class="spec-preview-label">${typeof t === "function" ? t("card_spec_capacity") : "Capacity / Load:"}</span>
              <span class="spec-preview-val">${prod.capacityRange || "Custom Sizing"}</span>
            </div>
            <div class="spec-preview-item">
              <span class="spec-preview-label">${typeof t === "function" ? t("card_spec_gsm") : "GSM Weight:"}</span>
              <span class="spec-preview-val">${prod.gsmRange || "50 - 250 GSM"}</span>
            </div>
          </div>

          <div class="product-card-footer">
            <button class="btn btn-outline btn-sm" onclick="openProductSpecsModal('${prod.id}')" style="flex: 1;"><i class="fa-solid fa-circle-info"></i> ${typeof t === "function" ? t("btn_view_specs") : "View Specs"}</button>
            <button class="btn btn-gold btn-sm" onclick="openRFQModal('${prod.name}')" style="flex: 1.2;">
              <i class="fa-solid fa-paper-plane"></i> ${typeof t === "function" ? t("btn_quick_quote") : "Quick Quote"}
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderGrid("All");
}

/* ==========================================================================
   Product Specs & Technical Details Modal Handler
   ========================================================================== */

function initProductSpecsModal() {
  let modal = document.getElementById("productSpecsModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "productSpecsModal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-card" style="max-width: 780px; max-height: 90vh; overflow-y: auto;">
        <div class="modal-header">
          <h3 id="specsModalTitle" style="color: var(--primary-900); display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-box-open text-gold"></i> Product Specifications
          </h3>
          <button class="modal-close-btn" onclick="closeProductSpecsModal()"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body" id="specsModalBody">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProductSpecsModal();
    });
  }
}

function openProductSpecsModal(productId) {
  if (typeof getProducts !== "function") return;
  const products = getProducts();
  const prod = products.find(p => p.id === productId || p.slug === productId);
  if (!prod) return;

  initProductSpecsModal();
  const modal = document.getElementById("productSpecsModal");
  const modalTitle = document.getElementById("specsModalTitle");
  const modalBody = document.getElementById("specsModalBody");

  if (!modal || !modalBody) return;

  modalTitle.innerHTML = `<i class="fa-solid fa-box-open text-gold"></i> ${prod.name}`;

  // Build specs rows
  let specsHtml = "";
  if (prod.specifications && typeof prod.specifications === "object") {
    specsHtml = Object.entries(prod.specifications).map(([key, val]) => `
      <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--dark-200); font-size: 0.875rem;">
        <strong style="color: var(--dark-700);">${key}:</strong>
        <span style="color: var(--dark-900); font-weight: 600; text-align: right;">${val}</span>
      </div>
    `).join("");
  }

  // Build features list
  let featuresHtml = "";
  if (Array.isArray(prod.features) && prod.features.length > 0) {
    featuresHtml = prod.features.map(f => `
      <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--dark-800); font-size: 0.9rem; margin-bottom: 0.4rem;">
        <i class="fa-solid fa-circle-check text-emerald" style="margin-top: 3px;"></i> <span>${f}</span>
      </li>
    `).join("");
  }

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.75rem; margin-bottom: 1.5rem; align-items: start;">
      <div>
        <div style="border-radius: 12px; overflow: hidden; border: 2px solid var(--gold-300); box-shadow: var(--shadow-md); margin-bottom: 1rem;">
          <img src="${resolveAssetPath(prod.image)}" alt="${prod.name}" style="width: 100%; height: 260px; object-fit: cover; display: block;" onerror="this.src='${resolveAssetPath('assets/images/bags.jpg')}'">
        </div>
        <div style="background: var(--dark-50); border: 1px solid var(--dark-200); border-radius: 10px; padding: 1rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold-700); text-transform: uppercase; margin-bottom: 0.25rem;">Category</div>
          <div style="font-weight: 800; color: var(--primary-900);">${prod.category || "Industrial Manufacturing"}</div>
          <div style="font-size: 0.85rem; color: var(--dark-600); margin-top: 0.5rem;">${prod.tagline || ""}</div>
        </div>
      </div>

      <div>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-900); margin-bottom: 0.75rem;">
          Technical Specifications
        </h4>
        <div style="background: var(--white); border: 1px solid var(--dark-200); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--dark-200); font-size: 0.875rem;">
            <strong style="color: var(--dark-700);">Standard Capacity:</strong>
            <span style="color: var(--dark-900); font-weight: 700;">${prod.capacityRange || "Custom"}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--dark-200); font-size: 0.875rem;">
            <strong style="color: var(--dark-700);">GSM Weight:</strong>
            <span style="color: var(--dark-900); font-weight: 700;">${prod.gsmRange || "50 - 250 GSM"}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--dark-200); font-size: 0.875rem;">
            <strong style="color: var(--dark-700);">Polymer Material:</strong>
            <span style="color: var(--dark-900); font-weight: 600;">${prod.material || "100% Virgin Polymer"}</span>
          </div>
          ${specsHtml}
        </div>

        ${featuresHtml ? `
          <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--primary-900); margin-bottom: 0.5rem;">
            Key Engineering Highlights
          </h4>
          <ul style="padding-left: 0; list-style: none; margin-bottom: 1.25rem;">
            ${featuresHtml}
          </ul>
        ` : ''}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; border-top: 1px solid var(--dark-200); padding-top: 1.25rem; flex-wrap: wrap;">
      <button class="btn btn-gold btn-lg" onclick="closeProductSpecsModal(); openRFQModal('${prod.name}');" style="flex: 1.5;">
        <i class="fa-solid fa-calculator"></i> Request Direct Factory Quote
      </button>
      <a href="https://wa.me/919108713258?text=Hello%20CEO%20Lakshmi%20Kanth,%20I%20am%20interested%20in%20${encodeURIComponent(prod.name)}." target="_blank" class="btn btn-primary" style="flex: 1;">
        <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductSpecsModal() {
  const modal = document.getElementById("productSpecsModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Handle Browser Back button closing modals
window.addEventListener("popstate", (e) => {
  const modal = document.getElementById("rfqModal");
  if (modal && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  closeProductSpecsModal();
});

// Handle ESC key closing modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.keyCode === 27) {
    closeRFQModal();
    closeProductSpecsModal();
  }
});

/* ==========================================================================
   5-Second Intro Preloader Controller with Letter-by-Letter Animation
   ========================================================================== */

function initPreloader() {
  const preloader = document.getElementById("sitePreloader");
  if (!preloader) return;

  const titleElem = document.getElementById("animatedPreloaderTitle");
  if (titleElem) {
    const text = "RAYASHREE WEAVING PVT. LTD.";
    titleElem.innerHTML = "";
    
    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "letter" + (char === " " ? " space" : "") + (index < 9 ? " gold-char" : "");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${0.35 + index * 0.075}s`;
      titleElem.appendChild(span);
    });
  }

  const hidePreloader = () => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 850);
  };

  const autoHideTimer = setTimeout(hidePreloader, 5000);

  const skipBtn = document.getElementById("skipPreloaderBtn");
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      clearTimeout(autoHideTimer);
      hidePreloader();
    });
  }
}

window.openRFQModal = openRFQModal;
window.openProductSpecsModal = openProductSpecsModal;
window.closeProductSpecsModal = closeProductSpecsModal;
window.closeRFQModal = closeRFQModal;
window.showToast = showToast;





