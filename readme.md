# Rayashree Weaving Pvt. Ltd. - Production Website & Deployment Guide

Official corporate website, responsive product portfolio, dynamic Content Management System (CMS), and executive administration portal for **Rayashree Weaving Pvt. Ltd.**

---

## 🌐 Live Website & Admin Links

| Destination | URL | Description |
| :--- | :--- | :--- |
| **Live Hostinger Domain** | [https://rayashreeweaving.in/](https://rayashreeweaving.in/) | Official live production domain |
| **Live Hostinger Admin** | [https://rayashreeweaving.in/admin/](https://rayashreeweaving.in/admin/) | Executive management & CMS portal |
| **GitHub Pages Staging** | [https://thejasbj123.github.io/bugs/](https://thejasbj123.github.io/bugs/) | High-speed global CDN backup host |
| **GitHub Pages Admin** | [https://thejasbj123.github.io/bugs/admin/](https://thejasbj123.github.io/bugs/admin/) | Executive portal on GitHub Pages |

### 🔐 Executive Admin Portal Credentials
- **Username**: `Rayashree` *(case-insensitive)*
- **Password**: `Shree@#$9481`

---

## 🚀 Complete Hostinger Deployment Guide (Step-by-Step)

The production deployment package **`rayashree-website.zip`** is built and ready in the repository root.

### Step 1: Log in to Hostinger
1. Open your browser and navigate to [https://hpanel.hostinger.com](https://hpanel.hostinger.com).
2. Sign in to your Hostinger account.
3. In the dashboard, click **Manage** next to **rayashreeweaving.in**.

### Step 2: Open the File Manager
1. In the left navigation menu, go to **Files** → **File Manager** (or click **File Manager for rayashreeweaving.in**).
2. In File Manager, double-click on the **`public_html`** folder to enter it.
3. *(Optional)* If there are any old files (like default Hostinger placeholders or old WordPress files), you can select and delete them or move them to a backup folder.

### Step 3: Upload `rayashree-website.zip`
1. At the top right of Hostinger File Manager, click the **Upload** icon (upward arrow).
2. Choose **File** and select **`rayashree-website.zip`** from your computer (`d:\Bugs\rayashree-website.zip`).
3. Wait for the upload progress bar to reach 100%.

### Step 4: Extract the Website Package
1. In `public_html`, right-click on **`rayashree-website.zip`**.
2. Click **Extract**.
3. In the popup asking for **"Folder name or path"**:
   - Enter a single period: `.`
   - *(Entering `.` ensures files unpack directly inside `public_html` without creating an extra subfolder)*.
4. Check the box: **"Overwrite existing files"**.
5. Click **EXTRACT**.

### Step 5: Clean Up & Verify
1. Once extraction completes, right-click **`rayashree-website.zip`** and click **Delete** (to save disk space).
2. Ensure the following files and folders are visible directly inside `public_html`:
   - `index.html`
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`
   - `BingSiteAuth.xml`
   - `admin/`
   - `api/`
   - `assets/`
   - `css/`
   - `data/`
   - `js/`
   - `public/`
3. Test the live site:
   - Homepage: **`https://rayashreeweaving.in/`**
   - Products: **`https://rayashreeweaving.in/public/products.html`**
   - Admin: **`https://rayashreeweaving.in/admin/`**

---

## 🛠️ Hostinger Server Configuration Checklist

1. **PHP Version**: Ensure PHP 8.0 or 8.1/8.2 is active (*hPanel → Advanced → PHP Configuration*).
2. **SSL / HTTPS**: Ensure SSL is installed and active (*hPanel → Security → SSL*).
3. **Rewrite Rules**: The included [`.htaccess`](file:///.htaccess) automatically enforces:
   - 301 Redirect to HTTPS
   - Clean routing for `/admin` → `admin/index.html`
   - Gzip/Deflate compression and browser caching for peak performance.

---

## 📦 Rayashree Weaving - Official 12-Product Portfolio

| No. | Product | Application | Size / Capacity | Bag Weight / Specification |
| --: | :--- | :--- | :--- | :--- |
| 1 | **FIBC Bags** | Bulk Logistics | 500–2,000 kg | SWL: 1–2 Ton |
| 2 | **Liner Bags** | Bulk Logistics | 50 L–2,000 L | 80–200 Micron |
| 3 | **Cattle Feed Bags** | Feed & Agriculture | 25 / 50 / 75 kg | Custom printing available |
| 4 | **Poultry Feed Bags** | Feed & Agriculture | 25 / 50 kg | BOPP / Photographic Printing |
| 5 | **Cement Bags** | Building & Construction | 50 kg | AD*STAR Valve Bags |
| 6 | **Agriculture Bags** | Agriculture & Farming | 10 / 25 / 50 kg | UV Weatherproof options |
| 7 | **Silage Bags** | Agriculture & Farming | 25 L–200 L / 500 kg Tube | High Barrier / Fermentation |
| 8 | **Industrial Bags** | Industrial Packaging | 10–100 kg | Heavy-Duty PP / HDPE |
| 9 | **Cotton / Calico Bags** | General Packaging | Custom Size | 1–2+ Colours / Multi-Colour |
| 10 | **Gunny / Jute Bags** | Agriculture & General Use | **28 × 42 inches** | 1–1.25 kg bag weight; 70–80 kg capacity |
| 11 | **Sugar Bags** | Sugar Packaging | **26 × 37 inches** | 950 g–1 kg bag weight; 50 kg capacity |
| 12 | **General-Purpose Gunny Bags** | Grain & Agriculture | Custom / Requirement Based | Ragi, Wheat & other grains |