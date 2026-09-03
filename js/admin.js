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
          <button class="btn-icon" title="Copy Inquiry Details" onclick="copyInquiryDetails('${item.id}')">
            <i class="fa-solid fa-copy"></i>
          </button>
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
   Product Manager Logic (Image Upload, Auto Canvas Compression, Live Sync)
   ========================================================================== */

function compressImageFile(file, maxWidth = 800, maxHeight = 600, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

function initProductManager() {
  const addProductBtn = document.getElementById("addNewProductBtn");
  const productModal = document.getElementById("productEditModal");
  const productForm = document.getElementById("productEditForm");
  const previewImg = document.getElementById("prodImagePreview");
  const imageUrlInput = document.getElementById("prodFormImageUrl");
  const imageFileInput = document.getElementById("prodFormImageFile");
  const dropZone = document.getElementById("prodImageDropzone");
  const categoryInput = document.getElementById("prodFormCategory");

  // Live Card Preview Elements
  const liveCardTitle = document.getElementById("livePreviewTitle");
  const liveCardBadge = document.getElementById("livePreviewBadge");
  const liveCardCategory = document.getElementById("livePreviewCategory");
  const liveCardCapacity = document.getElementById("livePreviewCapacity");
  const liveCardGsm = document.getElementById("livePreviewGsm");
  const liveCardImg = document.getElementById("livePreviewImg");

  function updateLivePreview() {
    const name = document.getElementById("prodFormName") ? document.getElementById("prodFormName").value.trim() : "";
    const badge = document.getElementById("prodFormBadge") ? document.getElementById("prodFormBadge").value.trim() : "";
    const cat = categoryInput ? categoryInput.value.trim() : "";
    const cap = document.getElementById("prodFormCapacity") ? document.getElementById("prodFormCapacity").value.trim() : "";
    const gsm = document.getElementById("prodFormGsm") ? document.getElementById("prodFormGsm").value.trim() : "";
    const img = (imageUrlInput && imageUrlInput.value.trim()) ? imageUrlInput.value.trim() : "assets/images/bags.jpg";

    if (liveCardTitle) liveCardTitle.textContent = name || "Product Title Preview";
    if (liveCardBadge) liveCardBadge.textContent = badge || name || "New Bag";
    if (liveCardCategory) liveCardCategory.textContent = cat || "Category";
    if (liveCardCapacity) liveCardCapacity.textContent = cap || "25 kg / 50 kg";
    if (liveCardGsm) liveCardGsm.textContent = gsm || "70 - 120 GSM";
    if (liveCardImg) liveCardImg.src = img;
    if (previewImg) previewImg.src = img;
  }

  // Bind live preview listeners
  const formInputs = ["prodFormName", "prodFormBadge", "prodFormCategory", "prodFormCapacity", "prodFormGsm", "prodFormTagline"];
  formInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateLivePreview);
  });

  // URL Input
  if (imageUrlInput) {
    imageUrlInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      if (val) {
        if (previewImg) previewImg.src = val;
        updateLivePreview();
      }
    });
  }

  // Drag and drop & File Upload with Canvas Compression
  async function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload a valid image file (JPG, PNG, WebP).");
      return;
    }
    try {
      if (previewImg) previewImg.style.opacity = "0.5";
      const compressedDataUrl = await compressImageFile(file, 800, 600, 0.82);
      if (previewImg) {
        previewImg.src = compressedDataUrl;
        previewImg.style.opacity = "1";
      }
      if (imageUrlInput) imageUrlInput.value = compressedDataUrl;
      updateLivePreview();
    } catch (err) {
      console.error("Image compression error:", err);
      if (previewImg) previewImg.style.opacity = "1";
    }
  }

  if (imageFileInput) {
    imageFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) handleFile(file);
    });
  }

  if (dropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = "#b5832a";
        dropZone.style.background = "#fef9ee";
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.style.borderColor = "#cbd5e1";
        dropZone.style.background = "#f8fafc";
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      if (file) handleFile(file);
    });
  }

  if (imageUrlInput) {
    imageUrlInput.addEventListener("input", () => {
      const val = imageUrlInput.value.trim();
      if (val) {
        if (previewImg) previewImg.src = val;
        if (liveCardImg) liveCardImg.src = val;
      }
    });
  }

  const pSearch = document.getElementById("adminProductSearch");
  const pCatFilter = document.getElementById("adminProductCategoryFilter");
  if (pSearch) {
    pSearch.addEventListener("input", renderProductsTable);
  }
  if (pCatFilter) {
    pCatFilter.addEventListener("change", renderProductsTable);
  }

  if (addProductBtn && productModal) {
    addProductBtn.addEventListener("click", () => {
      document.getElementById("productModalTitle").textContent = "Add New Manufacturing Product / Bag Line";
      document.getElementById("prodFormId").value = "";
      document.getElementById("prodFormName").value = "";
      document.getElementById("prodFormBadge").value = "";
      if (categoryInput) categoryInput.value = "";
      document.getElementById("prodFormGsm").value = "";
      document.getElementById("prodFormCapacity").value = "";
      document.getElementById("prodFormMaterial").value = "";
      document.getElementById("prodFormTagline").value = "";
      if (document.getElementById("prodFormFeatures")) {
        document.getElementById("prodFormFeatures").value = "";
      }
      if (document.getElementById("prodFormSpecs")) {
        document.getElementById("prodFormSpecs").value = "";
      }
      
      const defaultImg = "assets/images/bags.jpg";
      if (previewImg) previewImg.src = defaultImg;
      if (imageUrlInput) imageUrlInput.value = "";
      
      updateLivePreview();
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
      const category = categoryInput ? categoryInput.value.trim() || "Industrial Packaging" : "Industrial Packaging";

      const gsm = document.getElementById("prodFormGsm").value.trim() || "65 - 120 GSM";
      const capacity = document.getElementById("prodFormCapacity").value.trim() || "50 kg";
      const material = document.getElementById("prodFormMaterial").value.trim() || "100% Virgin Polypropylene (PP)";
      const tagline = document.getElementById("prodFormTagline").value.trim() || "Heavy-Duty Precision Woven Packaging Solution.";
      const image = (imageUrlInput && imageUrlInput.value.trim()) ? imageUrlInput.value.trim() : "assets/images/bags.jpg";

      // Parse features
      const featuresRaw = document.getElementById("prodFormFeatures") ? document.getElementById("prodFormFeatures").value : "";
      const features = featuresRaw
        ? featuresRaw.split("\n").map(f => f.replace(/^[-*•]\s*/, '').trim()).filter(Boolean)
        : ["Custom high tensile extrusion", "Engineered for heavy logistics", "Food-grade & industrial certified"];

      // Parse specs
      const specsRaw = document.getElementById("prodFormSpecs") ? document.getElementById("prodFormSpecs").value : "";
      const specifications = {
        "Standard Sizes": capacity,
        "GSM Weight": gsm,
        "Material": material
      };
      if (specsRaw) {
        specsRaw.split("\n").forEach(line => {
          const parts = line.split(/:(.+)/);
          if (parts.length >= 2 && parts[0].trim()) {
            specifications[parts[0].trim()] = parts[1].trim();
          }
        });
      }

      if (existingId) {
        const idx = products.findIndex(p => p.id === existingId || p.slug === existingId);
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
          products[idx].features = features;
          products[idx].specifications = specifications;
        }
      } else {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Math.floor(100 + Math.random() * 900);
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
          features: features,
          specifications: specifications,
          applications: ["Industrial Logistics", "Bulk Packaging", "Commercial Distribution"],
          featured: true
        });
      }

      saveProducts(products);
      closeProductModal();
      renderProductsTable();
      showAdminToast(`Product "${name}" published live to public website!`);
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

  const searchInput = document.getElementById("adminProductSearch");
  const catFilter = document.getElementById("adminProductCategoryFilter");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedCat = catFilter ? catFilter.value : "All";

  let products = getProducts();
  if (selectedCat !== "All") {
    products = products.filter(p => p.category === selectedCat);
  }
  if (query) {
    products = products.filter(p => 
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query)) ||
      (p.gsmRange && p.gsmRange.toLowerCase().includes(query)) ||
      (p.tagline && p.tagline.toLowerCase().includes(query))
    );
  }

  const allProducts = getProducts();
  if (allProducts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3.5rem 2rem;">
          <div style="font-size: 2.5rem; color: #dfb774; margin-bottom: 0.75rem;"><i class="fa-solid fa-boxes-stacked"></i></div>
          <h4 style="font-size: 1.15rem; color: #032b27; font-weight: 800; margin-bottom: 0.35rem;">No Products in Catalog Yet</h4>
          <p style="color: #64748b; font-size: 0.875rem; margin-bottom: 1.25rem;">Your catalog is empty. Click "Add New Product" to create and publish your first manufacturing product.</p>
          <button class="btn btn-gold btn-sm" onclick="document.getElementById('addNewProductBtn').click()">
            <i class="fa-solid fa-plus"></i> Add New Product Now
          </button>
        </td>
      </tr>
    `;
    return;
  }

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: #64748b;">No products matched your filter. <button class="btn btn-sm btn-outline" style="margin-left: 0.5rem;" onclick="if(document.getElementById('adminProductSearch')) document.getElementById('adminProductSearch').value=''; if(document.getElementById('adminProductCategoryFilter')) document.getElementById('adminProductCategoryFilter').value='All'; renderProductsTable();">Clear Filters</button></td></tr>`;
    return;
  }

  products.forEach((p) => {
    const tr = document.createElement("tr");
    const viewLink = `products.html#products`;

    tr.innerHTML = `
      <td>
        <img src="${p.image}" alt="${p.name}" style="width: 58px; height: 50px; object-fit: cover; border-radius: 8px; border: 1.5px solid #dfb774; box-shadow: 0 2px 5px rgba(0,0,0,0.08);" onerror="this.src='assets/images/bags.jpg'">
      </td>
      <td>
        <div style="font-weight: 700; color: #032b27;">${p.name}</div>
        <div style="font-size: 0.775rem; color: #64748b;">${p.tagline || ""}</div>
      </td>
      <td><span class="badge badge-under-review">${p.category}</span></td>
      <td style="font-weight: 600; font-size: 0.85rem;">${p.capacityRange || "50 kg"}</td>
      <td style="font-size: 0.85rem;">${p.gsmRange || "70 - 120 GSM"}</td>
      <td><span class="badge badge-quoted"><i class="fa-solid fa-circle-check"></i> Published Live</span></td>
      <td>
        <div class="action-btns">
          <a href="${viewLink}" class="btn-icon" title="View On Public Website" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <button class="btn-icon" title="Duplicate / Clone Product" onclick="cloneProduct('${p.id}')">
            <i class="fa-solid fa-copy"></i>
          </button>
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

function cloneProduct(productId) {
  const products = getProducts();
  const prod = products.find(p => p.id === productId || p.slug === productId);
  if (!prod) return;

  editProductRow(productId);
  document.getElementById("prodFormId").value = "";
  document.getElementById("productModalTitle").textContent = `Duplicate: ${prod.name} (Copy)`;
  document.getElementById("prodFormName").value = `${prod.name} (Copy)`;
  document.getElementById("prodFormBadge").value = "New Variation";
  showAdminToast("Product cloned! Adjust specifications and click Save.");
}

function copyInquiryDetails(id) {
  const inquiries = getInquiries();
  const item = inquiries.find(i => i.id === id);
  if (!item) return;

  const text = `Rayashree Inquiry #${item.id}\nClient: ${item.clientName}\nPhone: ${item.phone}\nEmail: ${item.email}\nProduct: ${item.product}\nQuantity: ${item.quantity}\nSpecs: ${item.specifications}\nStatus: ${item.status}`;
  navigator.clipboard.writeText(text).then(() => {
    showAdminToast(`Inquiry #${item.id} copied to clipboard!`);
  }).catch(() => {
    showAdminToast(`Inquiry #${item.id} details copied.`);
  });
}

function showAdminToast(msg) {
  const toast = document.getElementById("adminToast");
  const toastMsg = document.getElementById("adminToastMsg");
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3200);
}

function editProductRow(productId) {
  const products = getProducts();
  const prod = products.find(p => p.id === productId || p.slug === productId);
  if (!prod) return;

  const modal = document.getElementById("productEditModal");
  if (!modal) return;

  document.getElementById("productModalTitle").textContent = `Edit Product: ${prod.name}`;
  document.getElementById("prodFormId").value = prod.id;
  document.getElementById("prodFormName").value = prod.name;
  document.getElementById("prodFormBadge").value = prod.badge || prod.shortName || prod.name;
  
  const catInput = document.getElementById("prodFormCategory");
  if (catInput) catInput.value = prod.category || "";

  document.getElementById("prodFormGsm").value = prod.gsmRange || "70 - 120 GSM";
  document.getElementById("prodFormCapacity").value = prod.capacityRange || "50 kg";
  document.getElementById("prodFormMaterial").value = prod.material || "100% Virgin Polymer";
  document.getElementById("prodFormTagline").value = prod.tagline || "";
  
  if (document.getElementById("prodFormFeatures")) {
    document.getElementById("prodFormFeatures").value = Array.isArray(prod.features) ? prod.features.join("\n") : "";
  }
  if (document.getElementById("prodFormSpecs") && prod.specifications) {
    const lines = Object.entries(prod.specifications).map(([k, v]) => `${k}: ${v}`).join("\n");
    document.getElementById("prodFormSpecs").value = lines;
  }

  const imgPath = prod.image || "assets/images/bags.jpg";
  const previewImg = document.getElementById("prodImagePreview");
  const imageUrlInput = document.getElementById("prodFormImageUrl");
  if (previewImg) previewImg.src = imgPath;
  if (imageUrlInput) imageUrlInput.value = imgPath;

  // Update Live preview
  const liveCardTitle = document.getElementById("livePreviewTitle");
  const liveCardBadge = document.getElementById("livePreviewBadge");
  const liveCardCategory = document.getElementById("livePreviewCategory");
  const liveCardCapacity = document.getElementById("livePreviewCapacity");
  const liveCardGsm = document.getElementById("livePreviewGsm");
  const liveCardImg = document.getElementById("livePreviewImg");

  if (liveCardTitle) liveCardTitle.textContent = prod.name;
  if (liveCardBadge) liveCardBadge.textContent = prod.badge || prod.shortName || prod.name;
  if (liveCardCategory) liveCardCategory.textContent = prod.category;
  if (liveCardCapacity) liveCardCapacity.textContent = prod.capacityRange;
  if (liveCardGsm) liveCardGsm.textContent = prod.gsmRange;
  if (liveCardImg) liveCardImg.src = imgPath;

  modal.classList.add("active");
}

function deleteProductRow(productId) {
  if (confirm(`Are you sure you want to remove product "${productId}" from the public catalog?`)) {
    let products = getProducts();
    products = products.filter(p => p.id !== productId && p.slug !== productId);
    saveProducts(products);
    renderProductsTable();
  }
}

function resetDefaultProducts() {
  if (confirm("Are you sure you want to remove all products from the catalog? You can then add new products from scratch.")) {
    saveProducts([]);
    renderProductsTable();
    showAdminToast("All products removed from catalog.");
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
  const trans = typeof getStoredTranslations === "function" ? getStoredTranslations() : null;

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

  // Languages & Translations
  if (trans) {
    if (document.getElementById("langKnHeroTitle")) document.getElementById("langKnHeroTitle").value = trans.kn.hero_title || "";
    if (document.getElementById("langKnHeroTag")) document.getElementById("langKnHeroTag").value = trans.kn.hero_tag || "";
    if (document.getElementById("langKnHeroSubtitle")) document.getElementById("langKnHeroSubtitle").value = trans.kn.hero_subtitle || "";
    if (document.getElementById("langKnBtnQuote")) document.getElementById("langKnBtnQuote").value = trans.kn.btn_request_quote || "";
    if (document.getElementById("langKnNavProducts")) document.getElementById("langKnNavProducts").value = trans.kn.nav_products || "";

    if (document.getElementById("langHiHeroTitle")) document.getElementById("langHiHeroTitle").value = trans.hi.hero_title || "";
    if (document.getElementById("langHiHeroTag")) document.getElementById("langHiHeroTag").value = trans.hi.hero_tag || "";
    if (document.getElementById("langHiHeroSubtitle")) document.getElementById("langHiHeroSubtitle").value = trans.hi.hero_subtitle || "";
    if (document.getElementById("langHiBtnQuote")) document.getElementById("langHiBtnQuote").value = trans.hi.btn_request_quote || "";
    if (document.getElementById("langHiNavProducts")) document.getElementById("langHiNavProducts").value = trans.hi.nav_products || "";
  }
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

  // Multilingual Translations Save
  if (typeof getStoredTranslations === "function" && typeof saveStoredTranslations === "function") {
    const trans = getStoredTranslations();
    if (document.getElementById("langKnHeroTitle")) {
      trans.kn.hero_title = document.getElementById("langKnHeroTitle").value.trim() || trans.kn.hero_title;
      trans.kn.hero_tag = document.getElementById("langKnHeroTag").value.trim() || trans.kn.hero_tag;
      trans.kn.hero_subtitle = document.getElementById("langKnHeroSubtitle").value.trim() || trans.kn.hero_subtitle;
      trans.kn.btn_request_quote = document.getElementById("langKnBtnQuote").value.trim() || trans.kn.btn_request_quote;
      trans.kn.nav_products = document.getElementById("langKnNavProducts").value.trim() || trans.kn.nav_products;
    }
    if (document.getElementById("langHiHeroTitle")) {
      trans.hi.hero_title = document.getElementById("langHiHeroTitle").value.trim() || trans.hi.hero_title;
      trans.hi.hero_tag = document.getElementById("langHiHeroTag").value.trim() || trans.hi.hero_tag;
      trans.hi.hero_subtitle = document.getElementById("langHiHeroSubtitle").value.trim() || trans.hi.hero_subtitle;
      trans.hi.btn_request_quote = document.getElementById("langHiBtnQuote").value.trim() || trans.hi.btn_request_quote;
      trans.hi.nav_products = document.getElementById("langHiNavProducts").value.trim() || trans.hi.nav_products;
    }
    saveStoredTranslations(trans);
  }

  alert("Success! All public pages and language translations (English, Kannada, Hindi) have been updated and published.");
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
