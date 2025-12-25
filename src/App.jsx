import solvTechLogo from "./assets/solvTech.png";
import { useState } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden scroll-smooth">
      {/* Enhanced Background with Orange Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,165,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,140,0,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(255,165,0,0.03)_60deg,rgba(255,140,0,0.03)_120deg,transparent_180deg)]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="relative">
                <img
                  src={solvTechLogo}
                  alt="SolvTech Logo"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 filter brightness-0 invert"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="ml-4 text-2xl font-bold text-gray-900">
                SolvTech
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <a
                  href="#home"
                  className="relative text-gray-700 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-50 group"
                >
                  <span className="relative z-10">Beranda</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#about"
                  className="relative text-gray-300 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 group"
                >
                  <span className="relative z-10">Tentang</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#services"
                  className="relative text-gray-300 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 group"
                >
                  <span className="relative z-10">Layanan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#testimonials"
                  className="relative text-gray-300 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 group"
                >
                  <span className="relative z-10">Testimoni</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="#contact"
                  className="relative text-gray-300 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/5 group"
                >
                  <span className="relative z-10">Kontak</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center ml-6">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Mulai Sekarang
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-400 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
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
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-orange-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block text-white hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="#about"
                className="block text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Layanan
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimoni
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Enterprise Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        {/* Light / Professional hero layout (left copy, right visual) */}
        {/* Advanced Background System */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.03),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,140,0,0.02)_50%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,165,0,0.01)_60deg,transparent_120deg)]"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-orange-600 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Company Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-600 text-sm font-medium">
                  SolvTech - Penyedia Solusi IT
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                  <span className="block">Transformasikan</span>
                  <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Bisnis Anda
                  </span>
                  <span className="block">dengan Teknologi</span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Kami menyediakan solusi IT tingkat enterprise yang mendorong
                  pertumbuhan, efisiensi, dan inovasi untuk bisnis modern.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20untuk%20memulai%20proyek%20dengan%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Mulai Sekarang
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <button className="group px-6 py-3 md:px-8 md:py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
                  <span className="flex items-center">
                    Lihat Portfolio
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-500">Proyek</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">Klien</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Dukungan</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual card with stats */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-lg">
                <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-lg">
                  <img
                    src={solvTechLogo}
                    className="w-48 h-48 mx-auto transition-all duration-500"
                    alt="SolvTech Logo"
                  />
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        50+
                      </div>
                      <div className="text-sm text-gray-500">
                        Proyek Selesai
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        99%
                      </div>
                      <div className="text-sm text-gray-500">
                        Kepuasan Klien
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900">3+</div>
                      <div className="text-sm text-gray-500">
                        Tahun Pengalaman
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        24/7
                      </div>
                      <div className="text-sm text-gray-500">Dukungan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise About Section */}
      <section id="about" className="relative py-32 bg-gray-50 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,rgba(255,140,0,0.01)_50%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-orange-600 text-sm font-medium">
                Mengapa Memilih Kami
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Solusi IT
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Tingkat Enterprise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kami menggabungkan teknologi terdepan dengan metodologi yang
              terbukti untuk memberikan solusi yang scalable, aman, dan inovatif
              yang mendorong pertumbuhan bisnis.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Keamanan Enterprise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Protokol keamanan tingkat bank dan standar compliance untuk
                  perlindungan data maksimal.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Deployment Cepat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metodologi pengembangan agile yang memastikan time-to-market
                  lebih cepat dengan continuous delivery.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Solusi Scalable
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Arsitektur cloud-native yang dirancang untuk berkembang sesuai
                  kebutuhan bisnis dan basis pengguna Anda.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Dukungan 24/7
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dukungan teknis dan monitoring 24 jam untuk memastikan
                  performa sistem yang optimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Services Section */}
      <section
        id="services"
        className="relative py-32 bg-gray-50 overflow-hidden"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,140,0,0.01)_50%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-orange-600 text-sm font-medium">
                Layanan Kami
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Solusi IT
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Komprehensif
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dari konsep hingga deployment, kami menyediakan solusi teknologi
              end-to-end yang mentransformasi bisnis dan mendorong inovasi
              digital.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pengembangan Web
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Aplikasi web custom yang dibangun dengan framework modern,
                  dioptimalkan untuk performa dan skalabilitas.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-500 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Web%20Development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-md opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pengembangan Mobile
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Aplikasi mobile native dan cross-platform yang memberikan
                  pengalaman pengguna yang luar biasa.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Mobile%20Development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-md opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sistem Enterprise
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sistem ERP custom dan manajemen bisnis yang merampingkan
                  operasi dan meningkatkan efisiensi.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Enterprise%20Systems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-md opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Desain UI/UX
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Solusi desain berpusat pada pengguna yang meningkatkan
                  pengalaman pengguna dan mendorong engagement.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20UI/UX%20Design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-md opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pemasaran Digital
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kampanye pemasaran digital strategis yang mendorong engagement
                  dan mengkonversi prospek menjadi pelanggan.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Digital%20Marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Solusi Cloud
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Infrastruktur cloud yang scalable dan layanan migrasi untuk
                  operasi bisnis modern.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Cloud%20Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pelatihan Kreatif
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Program pelatihan intensif untuk mengembangkan skill kreatif
                  dan teknis dalam bidang teknologi dan desain.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Pelatihan%20Kreatif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-3 relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14v7a4 4 0 004-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  Pelatihan Kreator
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 mb-6">
                  Workshop dan training untuk meningkatkan skill konten kreatif
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-400 font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span className="text-sm">Pelajari Lebih Lanjut</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20layanan%20Pelatihan%20Kreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Hubungi
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Testimonials Section */}
      <section
        id="testimonials"
        className="relative py-32 bg-gray-50 overflow-hidden"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.02),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(255,140,0,0.01)_50%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-orange-400 text-sm font-medium">
                Kisah Sukses Klien
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Dipercaya oleh
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Pemimpin Industri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Temukan bagaimana kami telah membantu bisnis mentransformasi
              operasi mereka dan mencapai keunggulan digital melalui solusi IT
              yang inovatif.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-900 font-bold text-lg">
                      Sarah Johnson
                    </h4>
                    <p className="text-gray-600">CTO, InnovateCorp</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-6">
                  "SolvTech memberikan migrasi cloud yang luar biasa yang
                  mengurangi biaya infrastruktur kami sebesar 40% sambil
                  meningkatkan performa. Keahlian mereka dalam arsitektur
                  enterprise tidak tertandingi."
                </blockquote>
                <div className="flex items-center">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">5.0</span>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-900 font-bold text-lg">
                      Michael Chen
                    </h4>
                    <p className="text-gray-600">CEO, DataFlow Systems</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-6">
                  "Aplikasi mobile yang dikembangkan SolvTech untuk kami telah
                  merevolusi customer engagement kami. User experience-nya
                  sempurna dan performanya luar biasa."
                </blockquote>
                <div className="flex items-center">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">5.0</span>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/25">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-lg">
                      Emily Rodriguez
                    </h4>
                    <p className="text-gray-400">VP Technology, GlobalTech</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed mb-6">
                  "Integrasi sistem enterprise SolvTech melampaui ekspektasi
                  kami. Perhatian mereka terhadap detail dan komitmen terhadap
                  kualitas terlihat jelas dalam setiap proyek yang mereka
                  kirimkan."
                </blockquote>
                <div className="flex items-center">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="relative py-32 bg-gray-50 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(255,140,0,0.02)_50%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">
                Program Affiliate
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Bergabung dengan
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Program Affiliate Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dapatkan komisi menarik dengan mereferensikan layanan SolvTech
              kepada klien potensial. Program affiliate kami memberikan peluang
              penghasilan pasif yang menguntungkan.
            </p>
          </div>

          {/* Affiliate Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Komisi Tinggi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dapatkan komisi hingga 30% dari setiap proyek yang berhasil
                  direferensikan.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Pembayaran Cepat
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pembayaran komisi dilakukan setiap bulan tanpa penundaan.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Dukungan Lengkap
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mendapatkan materi marketing dan dukungan penjualan dari tim
                  kami.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/+62882003843947?text=Halo%20SolvTech,%20saya%20tertarik%20dengan%20Program%20Affiliate%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Daftar Program Affiliate
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <button className="group px-8 py-4 border border-orange-500/50 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center">
                  Pelajari Lebih Lanjut
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(0,0,0,0.08)_50%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.05)_60deg,transparent_120deg)]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            {/* CTA Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-medium">
                Siap Bertransformasi?
              </span>
            </div>

            {/* Main CTA Content */}
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Siap Mentransformasi
              <span className="block text-white">
                Bisnis Anda dengan Teknologi?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Bergabunglah dengan pemimpin industri yang mempercayai SolvTech
              untuk transformasi digital mereka. Dapatkan konsultasi gratis dan
              temukan bagaimana kami dapat mempercepat pertumbuhan Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group relative bg-white text-orange-600 font-bold py-5 px-10 rounded-xl text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl shadow-black/25">
                <span className="relative z-10 flex items-center">
                  Konsultasi Gratis
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button className="group px-8 py-5 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center">
                  Lihat Portfolio Kami
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-orange-100">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Konsultasi Gratis</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Dukungan 24/7</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Keamanan Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Footer */}
      <footer className="relative bg-gray-100 text-gray-800 py-20 border-t border-gray-200">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,165,0,0.02),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <img
                    src={solvTechLogo}
                    alt="SolvTech Logo"
                    className="h-16 w-auto"
                  />
                </div>
                <span className="ml-6 text-3xl font-black text-gray-900">
                  SolvTech
                </span>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">
                Penyedia terkemuka solusi IT tingkat enterprise yang mendorong
                transformasi digital dan mempercepat pertumbuhan bisnis melalui
                teknologi inovatif.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="group w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
                >
                  <svg
                    className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
                >
                  <svg
                    className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
                >
                  <svg
                    className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-8 text-orange-600">
                Hubungi Kami
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Telepon</p>
                    <a
                      href="tel:0882003843947"
                      className="text-gray-900 font-bold hover:text-orange-500 transition-colors text-lg"
                    >
                      +62 882-0038-43947
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com/solvtech.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-bold hover:text-orange-500 transition-colors text-lg"
                    >
                      @solvtech.id
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Email</p>
                    <a
                      href="mailto:info@solvtech.id"
                      className="text-gray-900 font-bold hover:text-orange-500 transition-colors text-lg"
                    >
                      solvtech4@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-orange-600">
                Tautan Cepat
              </h3>
              <div className="space-y-4">
                <a
                  href="#about"
                  className="block text-gray-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Tentang Kami
                </a>
                <a
                  href="#services"
                  className="block text-gray-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Layanan
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Testimoni
                </a>
                <a
                  href="#contact"
                  className="block text-gray-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Kontak
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Kebijakan Privasi
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-orange-600 transition-colors duration-300"
                >
                  Syarat Layanan
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-700 text-center md:text-left font-medium">
                © 2024 SolvTech. Semua hak dilindungi.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Tentang
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Layanan
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Testimoni
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
