/**
 * Rayashree Weaving Pvt. Ltd. - Master Client Script
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initToast();
  initRFQModal();
  initProductGrid();
  applyDynamicSiteContent();
  
  // Track pageview for Admin analytics
  if (typeof trackPageView === "function") {
    const pageName = document.title ? document.title.split("|")[0].trim() : window.location.pathname;
    trackPageView(pageName);
  }
});

/* ==========================================================================
   Dynamic CMS Site Content Hydration
   ========================================================================== */

function applyDynamicSiteContent() {
  if (typeof getCompanyInfo !== "function" || typeof getSiteContent !== "function") return;

  const company = getCompanyInfo();
  const content = getSiteContent();

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
  waLinks.forEach(a => {
    a.href = `https://wa.me/${company.whatsappNumber || '919108713258'}`;
  });

  // 2. Home Page Hero & Stats (if on index.html)
  if (content && content.home) {
    const heroTag = document.querySelector(".hero-tag");
    if (heroTag && content.home.heroTag) heroTag.textContent = content.home.heroTag;

    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle && content.home.heroTitle) heroTitle.textContent = content.home.heroTitle;

    const heroSubtitle = document.querySelector(".hero-subtitle");
    if (heroSubtitle && content.home.heroSubtitle) heroSubtitle.textContent = content.home.heroSubtitle;

    const statCards = document.querySelectorAll(".stat-card");
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
        if (num) num.textContent = content.home.stat2Val;
        if (lbl) lbl.textContent = content.home.stat2Label;
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
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.className = "fa-solid fa-xmark";
        } else {
          icon.className = "fa-solid fa-bars";
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
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
   RFQ Modal & Inquiry Handler
   ========================================================================== */

let selectedProductForRFQ = "";

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

function openRFQModal(productName = "") {
  const modal = document.getElementById("rfqModal");
  if (!modal) return;

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

  // Push history state so browser Back button closes modal
  if (!window.location.hash.includes("quote")) {
    history.pushState({ modalOpen: true }, "", "#quote");
  }
}

function closeRFQModal() {
  const modal = document.getElementById("rfqModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    
    // Clear hash if present without triggering navigation
    if (window.location.hash === "#quote") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }
}

// Handle Browser Back button closing modal
window.addEventListener("popstate", (e) => {
  const modal = document.getElementById("rfqModal");
  if (modal && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Handle ESC key closing modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.keyCode === 27) {
    closeRFQModal();
  }
});

/* ==========================================================================
   Dynamic Product Showcase Grid Rendering
   ========================================================================== */

function initProductGrid() {
  const container = document.getElementById("productShowcaseGrid");
  if (!container) return;

  const products = getProducts();
  const filterBtns = document.querySelectorAll(".filter-btn");

  function render(filterKey = "All") {
    container.innerHTML = "";
    
    const filtered = (filterKey === "All" || !filterKey)
      ? products 
      : products.filter(p => {
          const key = filterKey.toLowerCase().trim();
          return p.id.toLowerCase() === key || 
                 p.slug.toLowerCase() === key || 
                 p.shortName.toLowerCase() === key || 
                 p.shortName.toLowerCase().includes(key) ||
                 p.name.toLowerCase().includes(key) || 
                 p.category.toLowerCase().includes(key);
        });

    filtered.forEach((prod, index) => {
      const card = document.createElement("div");
      card.className = "product-card";
      
      const specsKeys = Object.keys(prod.specifications || {});
      const spec1Key = specsKeys[0] || "Capacity";
      const spec1Val = prod.specifications ? prod.specifications[spec1Key] : prod.capacityRange;
      const spec2Key = specsKeys[1] || "GSM Range";
      const spec2Val = prod.specifications ? prod.specifications[spec2Key] : prod.gsmRange;

      card.innerHTML = `
        <div class="product-card-img">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
          <span class="product-badge">${prod.shortName || prod.name}</span>
        </div>
        <div class="product-card-body">
          <span class="product-category">${prod.category}</span>
          <h3 class="product-title">${prod.name}</h3>
          <p class="product-tagline">${prod.tagline}</p>
          
          <div class="product-specs-preview">
            <div class="spec-preview-item">
              <span class="spec-preview-label">Capacity / Load:</span>
              <span class="spec-preview-val">${prod.capacityRange}</span>
            </div>
            <div class="spec-preview-item">
              <span class="spec-preview-label">GSM Weight:</span>
              <span class="spec-preview-val">${prod.gsmRange}</span>
            </div>
          </div>

          <div class="product-card-footer">
            ${['cattle-feed', 'poultry-feed', 'cement', 'silage-bags', 'jute', 'linen-fabric', 'bags'].includes(prod.slug)
              ? `<a href="${prod.slug}.html" class="btn btn-outline btn-sm" style="flex: 1;"><i class="fa-solid fa-circle-info"></i> View Specs</a>`
              : `<button class="btn btn-outline btn-sm" onclick="openRFQModal('${prod.name}')" style="flex: 1;"><i class="fa-solid fa-circle-info"></i> View Specs</button>`
            }
            <button class="btn btn-gold btn-sm" onclick="openRFQModal('${prod.name}')" style="flex: 1.2;">
              <i class="fa-solid fa-paper-plane"></i> Quick Quote
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.getAttribute("data-filter"));
    });
  });

  render("All");
}

window.openRFQModal = openRFQModal;
window.closeRFQModal = closeRFQModal;
window.showToast = showToast;
