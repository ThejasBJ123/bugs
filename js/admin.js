/**
 * Rayashree Weaving Pvt. Ltd. - Admin Portal Script
 * Executive Management, Lead CRM, Product Catalog & Public Pages CMS
 */

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

let currentFilter = "All";
let searchQuery = "";
let activeInquiryId = null;

function initDashboard() {
  initNavigation();
  initInquiryModal();
  initExportCSV();
  initProductManager();
  initCmsEditor();
  initCompanyEditor();
  renderAll();
}

/* ==========================================================================
   Tab Navigation Logic
   ========================================================================== */

function initNavigation() {
  const navBtns = document.querySelectorAll(".sidebar-btn[data-view]");
  const viewSections = document.querySelectorAll(".admin-view-section");
  const pageTitle = document.getElementById("adminPageTitle");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const viewId = btn.getAttribute("data-view");
      viewSections.forEach(sec => {
        if (sec.id === viewId) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });

      if (pageTitle) {
        const span = btn.querySelector("span");
        if (span) {
          pageTitle.textContent = span.textContent;
        }
      }
    });
  });

  // Search input filter
  const searchInput = document.getElementById("inquirySearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderInquiriesTable();
    });
  }

  // Filter status pills
  const filterPills = document.querySelectorAll(".status-filter-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-status");
      renderInquiriesTable();
    });
  });
}

function renderAll() {
  renderMetrics();
  renderInquiriesTable();
  renderProductsTable();
  loadCmsFormValues();
  renderTrafficAnalytics();
}

/* ==========================================================================
   Metrics & Traffic Rendering
   ========================================================================== */

function renderMetrics() {
  const inquiries = getInquiries();
  const traffic = typeof getViewAnalytics === "function" ? getViewAnalytics() : { totalViews: 1482, todayViews: 184, uniqueVisitors: 642 };
  
  const totalCount = inquiries.length;
  const newCount = inquiries.filter(i => i.status === "New").length;
  const quotedCount = inquiries.filter(i => i.status === "Quoted").length;
  const closedCount = inquiries.filter(i => i.status === "Order Placed").length;

  const elTotal = document.getElementById("metricTotalInquiries");
  const elNew = document.getElementById("metricNewInquiries");
  const elQuoted = document.getElementById("metricQuoted");
  const elClosed = document.getElementById("metricClosed");
  const elPublicViews = document.getElementById("metricPublicViews");
  const elTodayViews = document.getElementById("metricTodayViews");

  if (elTotal) elTotal.textContent = totalCount;
  if (elNew) elNew.textContent = newCount;
  if (elQuoted) elQuoted.textContent = quotedCount;
  if (elClosed) elClosed.textContent = closedCount;
  if (elPublicViews) elPublicViews.textContent = Number(traffic.totalViews || 1482).toLocaleString();
  if (elTodayViews) elTodayViews.textContent = Number(traffic.todayViews || 184).toLocaleString();
}

function renderTrafficAnalytics() {
  if (typeof getViewAnalytics !== "function") return;

  const traffic = getViewAnalytics();

  const statTotal = document.getElementById("statTrafficTotal");
  const statToday = document.getElementById("statTrafficToday");
  const statUnique = document.getElementById("statTrafficUnique");

  if (statTotal) statTotal.textContent = Number(traffic.totalViews || 1482).toLocaleString();
  if (statToday) statToday.textContent = Number(traffic.todayViews || 184).toLocaleString();
  if (statUnique) statUnique.textContent = Number(traffic.uniqueVisitors || 642).toLocaleString();

  // Render Page Breakdown Progress Bars
  const breakdownContainer = document.getElementById("trafficBreakdownList");
  if (breakdownContainer && traffic.pageBreakdown) {
    breakdownContainer.innerHTML = "";
    const entries = Object.entries(traffic.pageBreakdown);
    const maxVal = Math.max(...entries.map(e => e[1]), 1);

    entries.forEach(([pageName, count], idx) => {
      const pct = Math.round((count / (traffic.totalViews || 1)) * 100);
      const barWidth = Math.max(Math.round((count / maxVal) * 100), 5);
      
      const colors = ["#07524a", "#b5832a", "#2563eb", "#10b981", "#7c3aed", "#d97706", "#0284c7", "#059669"];
      const barColor = colors[idx % colors.length];

      const item = document.createElement("div");
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
          <span style="color: #032b27;"><i class="fa-solid fa-file-lines" style="color: ${barColor}; margin-right: 0.35rem;"></i> ${pageName}</span>
          <strong style="color: #0f172a;">${count.toLocaleString()} views (${pct}%)</strong>
        </div>
        <div style="height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
          <div style="width: ${barWidth}%; height: 100%; background: ${barColor}; border-radius: 4px; transition: width 0.4s ease;"></div>
        </div>
      `;
      breakdownContainer.appendChild(item);
    });
  }

  // Render Recent Visitors Stream
  const streamContainer = document.getElementById("trafficRecentStream");
  if (streamContainer && traffic.recentVisitors) {
    streamContainer.innerHTML = "";
    traffic.recentVisitors.forEach(v => {
      const row = document.createElement("div");
      row.style.paddingBottom = "0.5rem";
      row.style.borderBottom = "1px solid #e2e8f0";
      row.innerHTML = `
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: #07524a;">
          <span>${v.page}</span>
          <span style="color: #64748b; font-weight: normal; font-size: 0.725rem;">${v.time}</span>
        </div>
        <div style="font-size: 0.75rem; color: #64748b; display: flex; justify-content: space-between; margin-top: 2px;">
          <span><i class="fa-solid fa-location-dot" style="color: #dfb774;"></i> ${v.location}</span>
          <span style="color: #2563eb;">${v.source}</span>
        </div>
      `;
      streamContainer.appendChild(row);
    });
  }
}

/* ==========================================================================
   Inquiries Table Rendering
   ========================================================================== */

function renderInquiriesTable() {
  const tbody = document.getElementById("inquiriesTableBody");
  if (!tbody) return;

  const inquiries = getInquiries();
  tbody.innerHTML = "";

  const filtered = inquiries.filter(item => {
    const matchesStatus = currentFilter === "All" || item.status === currentFilter;
    const matchesSearch = !searchQuery || 
      item.clientName.toLowerCase().includes(searchQuery) ||
      item.product.toLowerCase().includes(searchQuery) ||
      item.phone.toLowerCase().includes(searchQuery) ||
      item.id.toLowerCase().includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2.5rem; color: #64748b;">No inquiries found matching current filters.</td></tr>`;
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement("tr");
    
    let badgeClass = "badge-new";
    if (item.status === "Under Review") badgeClass = "badge-under-review";
    else if (item.status === "Quoted") badgeClass = "badge-quoted";
    else if (item.status === "Order Placed") badgeClass = "badge-order-placed";
    else if (item.status === "Archived") badgeClass = "badge-archived";

    const cleanPhone = item.phone.replace(/[^0-9]/g, "");
    const waText = encodeURIComponent(`Hello ${item.clientName}, This is Lakshmi Kanth from Rayashree Weaving regarding your inquiry #${item.id} for ${item.product}.`);

    tr.innerHTML = `
      <td><strong>${item.id}</strong><div style="font-size: 0.75rem; color: #94a3b8;">${item.date}</div></td>
      <td>
        <div style="font-weight: 700; color: #032b27;">${item.clientName}</div>
        <div style="font-size: 0.8rem; color: #64748b;">${item.contactPerson || ""}</div>
      </td>
      <td>
        <div style="font-weight: 600;">${item.product}</div>
        <div style="font-size: 0.8rem; color: #07524a; font-weight: 700;">Qty: ${item.quantity}</div>
      </td>
      <td style="max-width: 250px; font-size: 0.825rem; color: #475569;">
        ${item.specifications}
        ${item.notes ? `<div style="font-style: italic; color: #b45309; margin-top: 4px;">Note: ${item.notes}</div>` : ""}
      </td>
      <td>
        <div style="font-size: 0.85rem;"><a href="tel:${cleanPhone}" style="color: #0d8a7d; font-weight: 600;"><i class="fa-solid fa-phone"></i> ${item.phone}</a></div>
        <div style="font-size: 0.775rem; color: #64748b;">${item.email}</div>
      </td>
      <td><span class="badge ${badgeClass}">${item.status}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn-icon" title="Edit Status / Notes" onclick="openStatusModal('${item.id}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <a href="https://wa.me/${cleanPhone}?text=${waText}" target="_blank" class="btn-icon btn-whatsapp" title="WhatsApp Client">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <button class="btn-icon" title="Delete Inquiry" onclick="deleteInquiryRow('${item.id}')" style="color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/* ==========================================================================
   Status Modal & Actions
   ========================================================================== */

function initInquiryModal() {
  const modal = document.getElementById("statusModal");
  if (!modal) return;

  const form = document.getElementById("statusForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!activeInquiryId) return;

      const newStatus = document.getElementById("modalStatusSelect").value;
      const newNotes = document.getElementById("modalNotesText").value.trim();

      updateInquiryStatus(activeInquiryId, newStatus, newNotes);
      closeStatusModal();
      renderAll();
    });
  }
}

function openStatusModal(inquiryId) {
  activeInquiryId = inquiryId;
  const modal = document.getElementById("statusModal");
  const inquiries = getInquiries();
  const inquiry = inquiries.find(i => i.id === inquiryId);

  if (!modal || !inquiry) return;

  document.getElementById("modalInquiryTitle").textContent = `Update ${inquiry.id} (${inquiry.clientName})`;
  document.getElementById("modalStatusSelect").value = inquiry.status;
  document.getElementById("modalNotesText").value = inquiry.notes || "";

  modal.classList.add("active");
}

function closeStatusModal() {
  const modal = document.getElementById("statusModal");
  if (modal) modal.classList.remove("active");
}

function deleteInquiryRow(inquiryId) {
  if (confirm(`Are you sure you want to delete inquiry ${inquiryId}?`)) {
    let inquiries = getInquiries();
    inquiries = inquiries.filter(i => i.id !== inquiryId);
    saveInquiries(inquiries);
    renderAll();
  }
}

/* ==========================================================================
   Export CSV
   ========================================================================== */

function initExportCSV() {
  const exportBtn = document.getElementById("exportCsvBtn");
  if (!exportBtn) return;

  exportBtn.addEventListener("click", () => {
    const inquiries = getInquiries();
    if (inquiries.length === 0) {
      alert("No inquiry records to export.");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Inquiry ID,Date,Client Name,Contact Person,Phone,Email,Product,Quantity,Specifications,Status,Priority,Notes\n";

    inquiries.forEach(row => {
      const escape = (str) => `"${(str || "").toString().replace(/"/g, '""')}"`;
      csvContent += [
        escape(row.id),
        escape(row.date),
        escape(row.clientName),
        escape(row.contactPerson),
        escape(row.phone),
        escape(row.email),
        escape(row.product),
        escape(row.quantity),
        escape(row.specifications),
        escape(row.status),
        escape(row.priority),
        escape(row.notes)
      ].join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rayashree_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/* ==========================================================================
   Product Manager Logic (Image Upload, Category Edit, Live Sync)
   ========================================================================== */

function initProductManager() {
  const addProductBtn = document.getElementById("addNewProductBtn");
  const productModal = document.getElementById("productEditModal");
  const productForm = document.getElementById("productEditForm");
  const previewImg = document.getElementById("prodImagePreview");
  const imageUrlInput = document.getElementById("prodFormImageUrl");
  const imageFileInput = document.getElementById("prodFormImageFile");
  const categorySelect = document.getElementById("prodFormCategorySelect");
  const categoryCustom = document.getElementById("prodFormCategoryCustom");
  const presetBtns = document.querySelectorAll(".img-preset-btn");

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const imgPath = btn.getAttribute("data-img");
      if (previewImg) previewImg.src = imgPath;
      if (imageUrlInput) imageUrlInput.value = imgPath;
    });
  });

  if (imageUrlInput && previewImg) {
    imageUrlInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      if (val) previewImg.src = val;
    });
  }

  if (imageFileInput && previewImg && imageUrlInput) {
    imageFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          previewImg.src = evt.target.result;
          imageUrlInput.value = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (categorySelect && categoryCustom) {
    categorySelect.addEventListener("change", () => {
      if (categorySelect.value === "Custom") {
        categoryCustom.style.display = "block";
        categoryCustom.focus();
      } else {
        categoryCustom.style.display = "none";
      }
    });
  }

  if (addProductBtn && productModal) {
    addProductBtn.addEventListener("click", () => {
      document.getElementById("productModalTitle").textContent = "Add New Manufacturing Product";
      document.getElementById("prodFormId").value = "";
      document.getElementById("prodFormName").value = "";
      document.getElementById("prodFormBadge").value = "New Line";
      document.getElementById("prodFormCategorySelect").value = "Feed & Agri";
      if (categoryCustom) {
        categoryCustom.value = "";
        categoryCustom.style.display = "none";
      }
      document.getElementById("prodFormGsm").value = "80 GSM - 120 GSM";
      document.getElementById("prodFormCapacity").value = "50 kg";
      document.getElementById("prodFormMaterial").value = "100% Virgin Polypropylene (PP)";
      document.getElementById("prodFormTagline").value = "";
      
      const defaultImg = "assets/images/bags.jpg";
      if (previewImg) previewImg.src = defaultImg;
      if (imageUrlInput) imageUrlInput.value = defaultImg;
      
      productModal.classList.add("active");
    });
  }

  if (productForm && productModal) {
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const products = getProducts();
      const existingId = document.getElementById("prodFormId").value;
      const name = document.getElementById("prodFormName").value.trim();
      const badge = document.getElementById("prodFormBadge").value.trim() || name;
      
      let category = document.getElementById("prodFormCategorySelect").value;
      if (category === "Custom" && categoryCustom && categoryCustom.value.trim()) {
        category = categoryCustom.value.trim();
      }

      const gsm = document.getElementById("prodFormGsm").value.trim();
      const capacity = document.getElementById("prodFormCapacity").value.trim();
      const material = document.getElementById("prodFormMaterial").value.trim() || "Virgin Polymer";
      const tagline = document.getElementById("prodFormTagline").value.trim();
      const image = (imageUrlInput && imageUrlInput.value.trim()) ? imageUrlInput.value.trim() : "assets/images/bags.jpg";

      if (existingId) {
        const idx = products.findIndex(p => p.id === existingId);
        if (idx !== -1) {
          products[idx].name = name;
          products[idx].shortName = badge;
          products[idx].badge = badge;
          products[idx].category = category;
          products[idx].gsmRange = gsm;
          products[idx].capacityRange = capacity;
          products[idx].material = material;
          products[idx].tagline = tagline;
          products[idx].image = image;
        }
      } else {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        products.push({
          id: slug,
          slug: slug,
          name: name,
          shortName: badge,
          badge: badge,
          category: category,
          gsmRange: gsm,
          capacityRange: capacity,
          material: material,
          tagline: tagline,
          image: image,
          features: ["Custom high tensile extrusion", "Engineered for heavy logistics", "Food-grade & industrial certified"],
          specifications: {
            "Standard Sizes": capacity,
            "GSM Weight": gsm,
            "Material": material
          },
          applications: ["Industrial Logistics", "Bulk Packaging"],
          featured: true
        });
      }

      saveProducts(products);
      closeProductModal();
      renderProductsTable();
      alert(`Product "${name}" saved and published! It is now live on the public website home & products pages.`);
    });
  }
}

function closeProductModal() {
  const modal = document.getElementById("productEditModal");
  if (modal) modal.classList.remove("active");
}

function renderProductsTable() {
  const tbody = document.getElementById("productsTableBody");
  if (!tbody) return;

  const products = getProducts();
  tbody.innerHTML = "";

  products.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <img src="${p.image}" alt="${p.name}" style="width: 55px; height: 50px; object-fit: cover; border-radius: 8px; border: 1.5px solid #dfb774; box-shadow: 0 2px 5px rgba(0,0,0,0.08);">
      </td>
      <td>
        <div style="font-weight: 700; color: #032b27;">${p.name}</div>
        <div style="font-size: 0.775rem; color: #64748b;">${p.tagline || ""}</div>
      </td>
      <td><span class="badge badge-under-review">${p.category}</span></td>
      <td style="font-weight: 600; font-size: 0.85rem;">${p.capacityRange}</td>
      <td style="font-size: 0.85rem;">${p.gsmRange}</td>
      <td><span class="badge badge-quoted"><i class="fa-solid fa-circle-check"></i> Published</span></td>
      <td>
        <div class="action-btns">
          <a href="${p.slug}.html" class="btn-icon" title="View Public Page" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <button class="btn-icon" title="Edit Product" onclick="editProductRow('${p.id}')">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn-icon" title="Delete Product" onclick="deleteProductRow('${p.id}')" style="color: #ef4444;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function editProductRow(productId) {
  const products = getProducts();
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("productEditModal");
  if (!modal) return;

  document.getElementById("productModalTitle").textContent = `Edit Product: ${prod.name}`;
  document.getElementById("prodFormId").value = prod.id;
  document.getElementById("prodFormName").value = prod.name;
  document.getElementById("prodFormBadge").value = prod.badge || prod.shortName || prod.name;
  
  const catSelect = document.getElementById("prodFormCategorySelect");
  const catCustom = document.getElementById("prodFormCategoryCustom");
  
  let matchFound = false;
  for (let opt of catSelect.options) {
    if (opt.value === prod.category) {
      opt.selected = true;
      matchFound = true;
      if (catCustom) catCustom.style.display = "none";
      break;
    }
  }
  if (!matchFound && catSelect && catCustom) {
    catSelect.value = "Custom";
    catCustom.value = prod.category;
    catCustom.style.display = "block";
  }

  document.getElementById("prodFormGsm").value = prod.gsmRange;
  document.getElementById("prodFormCapacity").value = prod.capacityRange;
  document.getElementById("prodFormMaterial").value = prod.material || "100% Virgin Polymer";
  document.getElementById("prodFormTagline").value = prod.tagline || "";
  
  const imgPath = prod.image || "assets/images/bags.jpg";
  const previewImg = document.getElementById("prodImagePreview");
  const imageUrlInput = document.getElementById("prodFormImageUrl");
  if (previewImg) previewImg.src = imgPath;
  if (imageUrlInput) imageUrlInput.value = imgPath;

  modal.classList.add("active");
}

function deleteProductRow(productId) {
  if (confirm(`Are you sure you want to remove product line "${productId}" from the public catalog?`)) {
    let products = getProducts();
    products = products.filter(p => p.id !== productId);
    saveProducts(products);
    renderProductsTable();
  }
}

function resetDefaultProducts() {
  if (confirm("Restore all original 7 manufacturing product lines to factory defaults?")) {
    localStorage.removeItem("rw_products");
    getProducts();
    renderProductsTable();
    alert("Products restored to default 7 lines.");
  }
}

/* ==========================================================================
   Public Pages CMS Editor Logic
   ========================================================================== */

function initCmsEditor() {
  // CMS Tab switching
  const cmsTabs = document.querySelectorAll(".cms-tab-btn");
  const cmsPanels = document.querySelectorAll(".cms-tab-content");

  cmsTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      cmsTabs.forEach(b => {
        b.style.borderBottom = "none";
        b.style.color = "#64748b";
        b.classList.remove("active");
      });
      btn.style.borderBottom = "3px solid #032b27";
      btn.style.color = "#032b27";
      btn.classList.add("active");

      const tabTarget = btn.getAttribute("data-cms-tab");
      cmsPanels.forEach(panel => {
        panel.style.display = panel.id === tabTarget ? "block" : "none";
      });
    });
  });

  loadCmsFormValues();
}

function loadCmsFormValues() {
  const content = getSiteContent();
  const company = getCompanyInfo();

  // Home
  if (document.getElementById("cmsHomeHeroTag")) document.getElementById("cmsHomeHeroTag").value = content.home.heroTag || "";
  if (document.getElementById("cmsHomeHeroTitle")) document.getElementById("cmsHomeHeroTitle").value = content.home.heroTitle || "";
  if (document.getElementById("cmsHomeHeroSubtitle")) document.getElementById("cmsHomeHeroSubtitle").value = content.home.heroSubtitle || "";
  if (document.getElementById("cmsHomeStat1Val")) document.getElementById("cmsHomeStat1Val").value = content.home.stat1Val || "";
  if (document.getElementById("cmsHomeStat1Label")) document.getElementById("cmsHomeStat1Label").value = content.home.stat1Label || "";
  if (document.getElementById("cmsHomeStat2Val")) document.getElementById("cmsHomeStat2Val").value = content.home.stat2Val || "";
  if (document.getElementById("cmsHomeStat2Label")) document.getElementById("cmsHomeStat2Label").value = content.home.stat2Label || "";
  if (document.getElementById("cmsHomeStat3Val")) document.getElementById("cmsHomeStat3Val").value = content.home.stat3Val || "";
  if (document.getElementById("cmsHomeStat3Label")) document.getElementById("cmsHomeStat3Label").value = content.home.stat3Label || "";
  if (document.getElementById("cmsHomeStat4Val")) document.getElementById("cmsHomeStat4Val").value = content.home.stat4Val || "";
  if (document.getElementById("cmsHomeStat4Label")) document.getElementById("cmsHomeStat4Label").value = content.home.stat4Label || "";

  // About
  if (document.getElementById("cmsAboutHeading")) document.getElementById("cmsAboutHeading").value = content.about.heading || "";
  if (document.getElementById("cmsAboutSubheading")) document.getElementById("cmsAboutSubheading").value = content.about.subheading || "";
  if (document.getElementById("cmsAboutCeoMessage")) document.getElementById("cmsAboutCeoMessage").value = content.about.ceoMessage || "";
  if (document.getElementById("cmsAboutCoreVision")) document.getElementById("cmsAboutCoreVision").value = content.about.coreVision || "";

  // Infra
  if (document.getElementById("cmsInfraHeading")) document.getElementById("cmsInfraHeading").value = content.infrastructure.heading || "";
  if (document.getElementById("cmsInfraSubheading")) document.getElementById("cmsInfraSubheading").value = content.infrastructure.subheading || "";
  if (document.getElementById("cmsInfraLoomsCount")) document.getElementById("cmsInfraLoomsCount").value = content.infrastructure.loomsCount || "";
  if (document.getElementById("cmsInfraExtrusion")) document.getElementById("cmsInfraExtrusion").value = content.infrastructure.extrusionCapacity || "";
  if (document.getElementById("cmsInfraPrinting")) document.getElementById("cmsInfraPrinting").value = content.infrastructure.printingTech || "";
  if (document.getElementById("cmsInfraQuality")) document.getElementById("cmsInfraQuality").value = content.infrastructure.qualityStandards || "";

  // Contact
  if (document.getElementById("cmsContactCeoName")) document.getElementById("cmsContactCeoName").value = company.ceo || "Lakshmi Kanth";
  if (document.getElementById("cmsContactPhone")) document.getElementById("cmsContactPhone").value = company.phone || "+91 9108713258";
  if (document.getElementById("cmsContactEmail")) document.getElementById("cmsContactEmail").value = company.email || "rayashreewpvtltd@gmail.com";
  if (document.getElementById("cmsContactHours")) document.getElementById("cmsContactHours").value = company.hours || "Mon - Sat: 8:30 AM - 7:30 PM (IST)";
  if (document.getElementById("cmsContactAddress")) document.getElementById("cmsContactAddress").value = company.address || "";
}

function saveAllSitePages() {
  const content = getSiteContent();
  const company = getCompanyInfo();

  // Home
  content.home = {
    heroTag: document.getElementById("cmsHomeHeroTag").value.trim(),
    heroTitle: document.getElementById("cmsHomeHeroTitle").value.trim(),
    heroSubtitle: document.getElementById("cmsHomeHeroSubtitle").value.trim(),
    stat1Val: document.getElementById("cmsHomeStat1Val").value.trim(),
    stat1Label: document.getElementById("cmsHomeStat1Label").value.trim(),
    stat2Val: document.getElementById("cmsHomeStat2Val").value.trim(),
    stat2Label: document.getElementById("cmsHomeStat2Label").value.trim(),
    stat3Val: document.getElementById("cmsHomeStat3Val").value.trim(),
    stat3Label: document.getElementById("cmsHomeStat3Label").value.trim(),
    stat4Val: document.getElementById("cmsHomeStat4Val").value.trim(),
    stat4Label: document.getElementById("cmsHomeStat4Label").value.trim(),
  };

  // About
  content.about = {
    heading: document.getElementById("cmsAboutHeading").value.trim(),
    subheading: document.getElementById("cmsAboutSubheading").value.trim(),
    ceoMessage: document.getElementById("cmsAboutCeoMessage").value.trim(),
    coreVision: document.getElementById("cmsAboutCoreVision").value.trim(),
  };

  // Infra
  content.infrastructure = {
    heading: document.getElementById("cmsInfraHeading").value.trim(),
    subheading: document.getElementById("cmsInfraSubheading").value.trim(),
    loomsCount: document.getElementById("cmsInfraLoomsCount").value.trim(),
    extrusionCapacity: document.getElementById("cmsInfraExtrusion").value.trim(),
    printingTech: document.getElementById("cmsInfraPrinting").value.trim(),
    qualityStandards: document.getElementById("cmsInfraQuality").value.trim(),
  };

  // Company & Contact
  const phone = document.getElementById("cmsContactPhone").value.trim();
  company.ceo = document.getElementById("cmsContactCeoName").value.trim();
  company.phone = phone;
  company.whatsappNumber = phone.replace(/[^0-9]/g, "");
  company.email = document.getElementById("cmsContactEmail").value.trim();
  company.hours = document.getElementById("cmsContactHours").value.trim();
  company.address = document.getElementById("cmsContactAddress").value.trim();

  saveSiteContent(content);
  saveCompanyInfo(company);

  alert("Success! All public pages (Home, About, Infrastructure, Contact) have been updated and published.");
}

function resetDefaultSiteContent() {
  if (confirm("Reset all public pages content back to factory defaults?")) {
    localStorage.removeItem("rw_site_content");
    localStorage.removeItem("rw_company_info");
    loadCmsFormValues();
    alert("Public pages content restored to defaults.");
  }
}

/* ==========================================================================
   Company Profile Editor Modal Logic
   ========================================================================== */

function initCompanyEditor() {
  const form = document.getElementById("companyEditForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const company = getCompanyInfo();

      company.name = document.getElementById("compEditName").value.trim();
      company.ceo = document.getElementById("compEditCeo").value.trim();
      const phone = document.getElementById("compEditPhone").value.trim();
      company.phone = phone;
      company.whatsappNumber = phone.replace(/[^0-9]/g, "");
      company.email = document.getElementById("compEditEmail").value.trim();
      company.hours = document.getElementById("compEditHours").value.trim();
      company.address = document.getElementById("compEditAddress").value.trim();

      saveCompanyInfo(company);
      closeCompanyModal();
      loadCmsFormValues();
      alert("Company profile & contact credentials updated across all public pages!");
    });
  }
}

function openCompanyModal() {
  const company = getCompanyInfo();
  const modal = document.getElementById("companyEditModal");
  if (!modal) return;

  if (document.getElementById("compEditName")) document.getElementById("compEditName").value = company.name || "RAYASHREE WEAVING PVT. LTD.";
  if (document.getElementById("compEditCeo")) document.getElementById("compEditCeo").value = company.ceo || "Lakshmi Kanth";
  if (document.getElementById("compEditPhone")) document.getElementById("compEditPhone").value = company.phone || "+91 9108713258";
  if (document.getElementById("compEditEmail")) document.getElementById("compEditEmail").value = company.email || "rayashreewpvtltd@gmail.com";
  if (document.getElementById("compEditHours")) document.getElementById("compEditHours").value = company.hours || "Mon - Sat: 8:30 AM - 7:30 PM (IST)";
  if (document.getElementById("compEditAddress")) document.getElementById("compEditAddress").value = company.address || "";

  modal.classList.add("active");
}

function closeCompanyModal() {
  const modal = document.getElementById("companyEditModal");
  if (modal) modal.classList.remove("active");
}

window.openStatusModal = openStatusModal;
window.closeStatusModal = closeStatusModal;
window.closeProductModal = closeProductModal;
window.deleteInquiryRow = deleteInquiryRow;
window.editProductRow = editProductRow;
window.deleteProductRow = deleteProductRow;
window.resetDefaultProducts = resetDefaultProducts;
window.openCompanyModal = openCompanyModal;
window.closeCompanyModal = closeCompanyModal;
window.saveAllSitePages = saveAllSitePages;
window.resetDefaultSiteContent = resetDefaultSiteContent;
