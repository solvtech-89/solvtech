import solvTechLogo from "./assets/solvTech.png";
import { useState } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");

  function handleLeadSubmit(e) {
    e.preventDefault();
    if (!leadEmail) return;
    sendAnalyticsEvent("lead_form_submit", {
      method: "email",
      email: leadEmail,
    });
    const subject = encodeURIComponent(
      "Permintaan demo / health-check dari website",
    );
    const body = encodeURIComponent(`Email: ${leadEmail}\nSumber: Homepage`);
    window.location.href = `mailto:hello@solvtech.id?subject=${subject}&body=${body}`;
  }

  function handleBookDemo() {
    sendAnalyticsEvent("book_demo_click", { method: "email" });
    const subject = encodeURIComponent("Booking: 15-min Demo - SolvTech");
    const body = encodeURIComponent(
      "Saya tertarik untuk diskusi singkat tentang project/kolaborasi.",
    );
    window.location.href = `mailto:hello@solvtech.id?subject=${subject}&body=${body}`;
  }

  function handleMarketingAudit() {
    sendAnalyticsEvent("request_audit_click", { method: "whatsapp" });
    const msg = `Halo SolvTech, saya ingin meminta Audit Marketing Tech (30 menit) â€” mohon info dan jadwal.`;
    const url = `https://wa.me/62882003843947?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  function openWhatsApp(message) {
    const base = "https://wa.me/62882003843947";
    const text = encodeURIComponent(`Halo SolvTech, ${message}`);
    const url = `${base}?text=${text}`;
    window.open(url, "_blank");
  }

  function sendAnalyticsEvent(name, params = {}) {
    try {
      if (window.gtag) {
        window.gtag("event", name, params);
      } else {
        console.log("gtag not found â€” event:", name, params);
      }
    } catch (err) {
      console.warn("analytics error", err);
    }
  }

  function handleScheduleConsult() {
    sendAnalyticsEvent("schedule_consult_click", {
      method: "whatsapp",
      duration: "15m",
    });
    openWhatsApp("saya ingin menjadwalkan konsultasi teknis 15 menit");
  }

  function handleContact(service) {
    sendAnalyticsEvent("contact_service_click", { service });
    const message = `saya tertarik dengan layanan: ${service} â€” mohon info dan langkah selanjutnya.`;
    openWhatsApp(message);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden scroll-smooth">
      {/* Modern Energetic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.04),transparent_60%)]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-100/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <img
                  src={solvTechLogo}
                  alt="SolvTech Logo"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 rounded-md object-contain"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-orange-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="ml-4 text-2xl font-black bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                SolvTech
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <a
                  href="#home"
                  className="relative text-gray-700 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-purple-50 group"
                >
                  <span className="relative z-10">ðŸ  Beranda</span>
                </a>
                <a
                  href="#products"
                  className="relative text-gray-600 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-purple-50 group"
                >
                  <span className="relative z-10">ðŸš€ Produk</span>
                </a>
                <a
                  href="#features"
                  className="relative text-gray-600 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-purple-50 group"
                >
                  <span className="relative z-10">âœ¨ Fitur</span>
                </a>
                <a
                  href="#pricing"
                  className="relative text-gray-600 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-purple-50 group"
                >
                  <span className="relative z-10">ðŸ’° Harga</span>
                </a>
                <a
                  href="#contact"
                  className="relative text-gray-600 hover:text-purple-600 focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-purple-50 group"
                >
                  <span className="relative z-10">ðŸ“ž Hubungi</span>
                </a>
              </div>
            </div>
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center ml-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 animate-pulse-slow"
              >
                Coba Gratis! ðŸŽ‰
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 backdrop-blur-xl border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ðŸ  Beranda
              </a>
              <a
                href="#products"
                className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ðŸš€ Produk
              </a>
              <a
                href="#features"
                className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                âœ¨ Fitur
              </a>
              <a
                href="#pricing"
                className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ðŸ’° Harga
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ðŸ“ž Hubungi
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Modern & Energetic */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300/50 backdrop-blur-sm animate-bounce-slow">
              <span className="text-2xl mr-2">ðŸš€</span>
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent text-base font-black">
                Solusi Digital #1 untuk UMKM & Enterprise
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  Transformasi Digital
                </span>
                <span className="block text-gray-800 mt-2">
                  Bisnis Anda Dimulai Di Sini! âš¡
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Platform teknologi canggih dengan <span className="text-purple-600 font-bold">POS</span>, <span className="text-pink-500 font-bold">CRM</span>, <span className="text-orange-500 font-bold">ERP</span>, dan <span className="text-blue-500 font-bold">Website</span> yang bikin bisnis makin kece! ðŸ’ª
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleScheduleConsult}
                className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-black text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <span className="text-2xl">ðŸŽ¯</span>
                Mulai Gratis Sekarang!
                <span className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 text-xs font-black px-3 py-1 rounded-full animate-pulse">HOT!</span>
              </button>

              <button
                onClick={handleMarketingAudit}
                className="inline-flex items-center gap-3 px-8 py-5 bg-white border-4 border-purple-300 text-purple-700 font-black text-lg rounded-2xl shadow-lg hover:bg-purple-50 hover:border-purple-500 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">ðŸ’¬</span>
                Konsultasi Gratis
              </button>
            </div>

            {/* Product Icons Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto pt-12">
              <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-purple-100 hover:border-purple-400">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">ðŸª</div>
                <div className="text-gray-800 font-black text-lg">POS Kasir</div>
                <div className="text-gray-500 text-sm mt-1">Super Cepat</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-pink-100 hover:border-pink-400">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">ðŸ‘¥</div>
                <div className="text-gray-800 font-black text-lg">CRM</div>
                <div className="text-gray-500 text-sm mt-1">Kelola Pelanggan</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-orange-100 hover:border-orange-400">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">ðŸ“Š</div>
                <div className="text-gray-800 font-black text-lg">ERP</div>
                <div className="text-gray-500 text-sm mt-1">Semua Terintegrasi</div>
              </div>
              <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-blue-100 hover:border-blue-400">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">ðŸŒ</div>
                <div className="text-gray-800 font-black text-lg">Website</div>
                <div className="text-gray-500 text-sm mt-1">Tampil Keren</div>
              </div>
            </div>

            {/* Trust Indicators - Vibrant Style */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-12">
              <div className="text-center bg-gradient-to-br from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-110 transition-all">
                <div className="text-4xl font-black">500+</div>
                <div className="text-sm font-semibold mt-1">UMKM Senang â¤ï¸</div>
              </div>
              <div className="text-center bg-gradient-to-br from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-110 transition-all">
                <div className="text-4xl font-black">99%</div>
                <div className="text-sm font-semibold mt-1">Puas & Betah ðŸ˜</div>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-110 transition-all">
                <div className="text-4xl font-black">24/7</div>
                <div className="text-sm font-semibold mt-1">Siap Bantu ðŸ¤</div>
              </div>
            </div>

            {/* Promo Banner */}
            <div className="mt-12 inline-block">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 px-8 py-4 rounded-2xl shadow-2xl border-4 border-yellow-200 animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">ðŸŽ‰</span>
                  <div className="text-left">
                    <div className="font-black text-lg">PROMO SPESIAL!</div>
                    <div className="text-sm font-bold">Daftar sekarang gratis 3 bulan! ðŸ”¥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 bg-gradient-to-br from-purple-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300/50 mb-6">
              <span className="text-2xl mr-2">ðŸŽ</span>
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent text-base font-black">
                Produk Unggulan Kami
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Solusi Lengkap untuk
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mt-2">
                Bisnis Modern! ðŸš€
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Dari warung kecil sampai perusahaan besar, kami punya solusinya! ðŸ’¼âœ¨
            </p>
          </div>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* POS Kasir */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-4 border-purple-100 hover:border-purple-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">ðŸª</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Kasir POS
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  Sistem kasir super cepat! Input transaksi, cetak struk otomatis, tracking stok real-time. Cocok untuk toko, resto, cafe! âš¡
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Transaksi offline & online</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Multi cabang & kasir</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Laporan lengkap</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("Kasir POS")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Coba Sekarang! ðŸš€
                </button>
              </div>
            </div>

            {/* CRM */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-4 border-pink-100 hover:border-pink-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">ðŸ‘¥</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  CRM Pro
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  Kelola pelanggan jadi gampang! Database lengkap, follow-up otomatis, blast promo via WA. Bikin pelanggan makin setia! ðŸ’–
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Database pelanggan unlimited</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">WhatsApp & Email blast</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Loyalty program</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("CRM Pro")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Coba Sekarang! ðŸš€
                </button>
              </div>
            </div>

            {/* ERP */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-4 border-orange-100 hover:border-orange-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">ðŸ“Š</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                  ERP System
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  Semua bisnis terintegrasi! Inventory, keuangan, HR, produksi jadi satu. Dashboard real-time yang kece! ðŸ“ˆ
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Inventory management</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Akuntansi & keuangan</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">HR & payroll</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("ERP System")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Coba Sekarang! ðŸš€
                </button>
              </div>
            </div>

            {/* Website & Landing Page */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-4 border-blue-100 hover:border-blue-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">ðŸŒ</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Website & Landing Page
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  Website bisnis yang keren abis! Desain modern, loading cepat, SEO friendly. Bikin brand kamu makin trusted! ðŸŒŸ
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Desain custom & modern</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Mobile responsive</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">SEO optimized</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("Website & Landing Page")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Coba Sekarang! ðŸš€
                </button>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-4 border-green-100 hover:border-green-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">ðŸ›’</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Toko Online
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  Jualan online jadi mudah! Katalog produk, keranjang belanja, payment gateway. Omset naik terus! ðŸ’°
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Multi payment method</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Integrasi marketplace</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Tracking pengiriman</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("Toko Online")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Coba Sekarang! ðŸš€
                </button>
              </div>
            </div>

            {/* Mobile App */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 border-4 border-indigo-100 hover:border-indigo-400 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full -mr-16 -mt-16 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">ðŸ“±</div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                  Aplikasi Mobile
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  Bikin aplikasi Android & iOS sendiri! Fitur lengkap, UI/UX keren, performa optimal. Go digital sekarang! ðŸ“²
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Android & iOS native</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">Push notification</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2 text-xl">âœ“</span>
                    <span className="font-semibold">In-app payment</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("Aplikasi Mobile")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Coba Sekarang! ðŸš€
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-purple-100 border-2 border-orange-300/50 mb-6">
              <span className="text-2xl mr-2">âš¡</span>
              <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent text-base font-black">
                Kenapa Harus Pilih Kami?
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Fitur Unggulan yang
              <span className="block bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mt-2">
                Bikin Bisnis Makin Cuan! ðŸ’¸
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Teknologi canggih, harga terjangkau, support ngebut! ðŸ”¥
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-purple-100 hover:border-purple-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸ”’</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Aman & Terpercaya</h3>
              <p className="text-gray-600 leading-relaxed">
                Data bisnis dijaga ketat dengan enkripsi tingkat bank! ðŸ›¡ï¸
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-pink-100 hover:border-pink-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">âš¡</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Super Cepat</h3>
              <p className="text-gray-600 leading-relaxed">
                Loading ngebut, transaksi real-time! Ga ada lemot-lemot! ðŸš€
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-orange-100 hover:border-orange-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸ“±</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Mobile Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Akses dari HP, tablet, laptop - dimana aja tetap lancar! ðŸ“²
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-blue-100 hover:border-blue-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸ’ª</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Mudah Dipakai</h3>
              <p className="text-gray-600 leading-relaxed">
                User interface gampang dipahami, ga ribet! Tinggal klik-klik! ðŸ–±ï¸
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-green-100 hover:border-green-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸ’°</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Harga Terjangkau</h3>
              <p className="text-gray-600 leading-relaxed">
                Paket mulai dari ratusan ribu! Cocok untuk UMKM! ðŸ’¸
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-indigo-100 hover:border-indigo-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸŽ¨</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Desain Keren</h3>
              <p className="text-gray-600 leading-relaxed">
                Tampilan modern & aesthetic, bikin bisnis makin professional! âœ¨
              </p>
            </div>

            {/* Feature 7 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-yellow-100 hover:border-yellow-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸ¤</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Support 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim support siap bantu kapan aja! Chat langsung via WA! ðŸ“ž
              </p>
            </div>

            {/* Feature 8 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-2 border-red-100 hover:border-red-400">
              <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">ðŸ”„</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Update Gratis</h3>
              <p className="text-gray-600 leading-relaxed">
                Fitur baru terus ditambah tanpa biaya tambahan! Always fresh! ðŸ†•
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300/50 mb-6">
              <span className="text-2xl mr-2">ðŸ’Ž</span>
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent text-base font-black">
                Pilih Paket Terbaik
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Harga Spesial untuk
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mt-2">
                Kamu! ðŸŽ‰
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Pilih paket sesuai kebutuhan bisnis. Semua paket udah termasuk support 24/7! ðŸš€
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter Plan */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-purple-100 hover:border-purple-400">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">ðŸŒ±</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600">Cocok untuk UMKM pemula</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  Rp 500K
                </div>
                <div className="text-gray-500">/ bulan</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">POS Kasir Basic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">1 Cabang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">Laporan Penjualan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">Support Chat</span>
                </li>
              </ul>
              <button
                onClick={() => handleContact("Paket Starter")}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Pilih Paket Ini! ðŸš€
              </button>
            </div>

            {/* Professional Plan - Popular */}
            <div className="group bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-1 shadow-2xl transform scale-105 hover:scale-110 transition-all duration-300 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-black text-sm shadow-lg animate-bounce-slow">
                ðŸ”¥ PALING LARIS!
              </div>
              <div className="bg-white rounded-[22px] p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">ðŸš€</div>
                  <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">Professional</h3>
                  <p className="text-gray-600">Untuk bisnis yang berkembang</p>
                </div>
                <div className="text-center mb-8">
                  <div className="text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    Rp 1.5JT
                  </div>
                  <div className="text-gray-500">/ bulan</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                    <span className="text-gray-700 font-semibold">Semua fitur Starter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                    <span className="text-gray-700 font-semibold">CRM & Customer Database</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                    <span className="text-gray-700 font-semibold">Multi Cabang (5 lokasi)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                    <span className="text-gray-700 font-semibold">Inventory Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                    <span className="text-gray-700 font-semibold">WhatsApp Blast</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleContact("Paket Professional")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Pilih Paket Ini! ðŸŽ¯
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-orange-100 hover:border-orange-400">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">ðŸ‘‘</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">Solusi untuk skala besar</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-2">
                  Custom
                </div>
                <div className="text-gray-500">Sesuai kebutuhan</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">Semua fitur Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">ERP Full System</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">Unlimited Cabang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">Custom Features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl flex-shrink-0">âœ“</span>
                  <span className="text-gray-700 font-semibold">Dedicated Support</span>
                </li>
              </ul>
              <button
                onClick={() => handleContact("Paket Enterprise")}
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Hubungi Kami! ðŸ“ž
              </button>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
            <div className="text-5xl mb-4">ðŸ’¯</div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Garansi 100% Uang Kembali!</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tidak puas dalam 30 hari pertama? Kami kembalikan uang kamu 100%! No questions asked! ðŸ¤
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center text-white">
            <div className="text-6xl mb-6">ðŸ“ž</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Siap Mulai Transformasi Digital? ðŸš€
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Hubungi kami sekarang dan dapatkan konsultasi GRATIS! Tim ahli kami siap bantu bisnis kamu naik level! ðŸ’ª
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={handleScheduleConsult}
                className="group px-10 py-5 bg-white text-purple-600 font-black text-lg rounded-2xl shadow-2xl hover:bg-yellow-300 hover:text-purple-900 transform hover:scale-110 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">ðŸ’¬</span>
                  Chat via WhatsApp
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <button
                onClick={handleMarketingAudit}
                className="px-10 py-5 bg-transparent border-4 border-white text-white font-black text-lg rounded-2xl hover:bg-white hover:text-purple-600 transform hover:scale-110 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">ðŸ“§</span>
                  Kirim Email
                </span>
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">ðŸ“±</div>
                  <div className="font-bold text-lg mb-1">WhatsApp</div>
                  <div className="text-white/80">+62 882-0038-43947</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">âœ‰ï¸</div>
                  <div className="font-bold text-lg mb-1">Email</div>
                  <div className="text-white/80">hello@solvtech.id</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">â°</div>
                  <div className="font-bold text-lg mb-1">Jam Kerja</div>
                  <div className="text-white/80">24/7 Available!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  SolvTech
                </span> ðŸš€
              </h3>
              <p className="text-white/80 mb-6">
                Solusi teknologi canggih untuk UMKM dan Enterprise. Wujudkan bisnis impian Anda bersama kami!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Menu Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#produk" className="text-white/80 hover:text-pink-400 transition-colors">ðŸ“¦ Produk</a></li>
                <li><a href="#fitur" className="text-white/80 hover:text-pink-400 transition-colors">â­ Fitur</a></li>
                <li><a href="#harga" className="text-white/80 hover:text-pink-400 transition-colors">ðŸ’° Harga</a></li>
                <li><a href="#kontak" className="text-white/80 hover:text-pink-400 transition-colors">ðŸ“ž Kontak</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-4">Hubungi Kami</h4>
              <div className="space-y-3">
                <a href="https://wa.me/6281234567890" className="flex items-center text-white/80 hover:text-green-400 transition-colors">
                  <span className="text-2xl mr-2">ðŸ“±</span>
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:hello@solvtech.id" className="flex items-center text-white/80 hover:text-blue-400 transition-colors">
                  <span className="text-2xl mr-2">ðŸ“§</span>
                  <span>hello@solvtech.id</span>
                </a>
                <div className="flex items-center text-white/80">
                  <span className="text-2xl mr-2">ðŸ•</span>
                  <span>24/7 Available!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 md:mb-0">
                Â© 2024 SolvTech. All rights reserved. Made with ðŸ’œ in Indonesia
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-pink-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-pink-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

