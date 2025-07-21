
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-800 font-pacifico">Ağaçören Ev Yemekleri</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Menümüz</Link>
                <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">Hakkımızda</Link>
                <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">İletişim</Link>
                <a href="tel:05452829734" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
                  Sipariş Ver
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-top"
               style={{
                 backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Traditional%20Turkish%20home%20cooking%20scene%20with%20warm%20kitchen%20atmosphere%2C%20wooden%20table%20with%20homemade%20dishes%2C%20clay%20pots%20and%20traditional%20cookware%2C%20cozy%20family%20kitchen%20setting%20with%20natural%20lighting%2C%20rustic%20authentic%20Turkish%20home%20interior%20design%2C%20warm%20colors%20and%20inviting%20ambiance&width=1920&height=1080&seq=hero1&orientation=landscape')`
               }}>
        <div className="text-center text-white z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-pacifico">Ağaçören</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ev Yemekleri</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Geleneksel lezzetler, ev yapımı tarifler ve sevgiyle hazırlanan yemekler
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05452829734" 
               className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
              Hemen Sipariş Ver
            </a>
            <Link href="#menu" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
              Menüyü İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Geleneksel Türk mutfağının en lezzetli örneklerini ev yapımı kalitesiyle sunuyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-home-heart-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ev Yapımı Lezzet</h3>
              <p className="text-gray-600">Tüm yemeklerimiz günlük taze malzemelerle ev ortamında özenle hazırlanır</p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Doğal Malzemeler</h3>
              <p className="text-gray-600">Sadece doğal ve organik malzemeler kullanarak sağlığınızı düşünüyoruz</p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hızlı Teslimat</h3>
              <p className="text-gray-600">Siparişinizi hızlı ve güvenli şekilde kapınıza kadar getiriyoruz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Günlük Menümüz</h2>
            <p className="text-lg text-gray-600">Her gün taze hazırlanan özel yemeklerimiz</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilav - Makarna */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Turkish%20rice%20pilaf%20and%20pasta%20dishes%20on%20elegant%20white%20plates%2C%20bulgur%20pilaf%2C%20Turkish%20rice%20with%20vermicelli%2C%20traditional%20Turkish%20pilaf%20varieties%2C%20beautifully%20presented%20grain%20dishes&width=400&height=250&seq=pilav1&orientation=landscape" 
                   alt="Pilav - Makarna" className="w-full h-48 object-cover object-top"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🍚 Pilav - Makarna</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Bulgur Pilavı - 70 TL</li>
                  <li>• Pirinç Pilavı - 70 TL</li>
                  <li>• Makarna - 70 TL</li>
                </ul>
              </div>
            </div>

            {/* Ayrılmaz İkili */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Turkish%20combination%20meals%20with%20beans%20and%20meat%2C%20dry%20beans%20with%20rice%2C%20Turkish%20home-style%20combination%20dishes%2C%20traditional%20paired%20meals%20on%20white%20plates&width=400&height=250&seq=ikili1&orientation=landscape" 
                   alt="Ayrılmaz İkililer" className="w-full h-48 object-cover object-top"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🍽️ Ayrılmaz İkililer</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Kuru Fasulye + Pilav - 175 TL</li>
                  <li>• Nohut + Pilav - 175 TL</li>
                  <li>• Köfte Ekmek + Ayran - 200 TL</li>
                  <li>• Kavurma (180 gr) + Pilav - 280 TL</li>
                </ul>
              </div>
            </div>

            {/* İçecekler */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Turkish%20beverages%20cola%20ayran%20water%20ice%20tea%20soda%20drinks%20in%20glasses%20and%20bottles%2C%20refreshing%20drinks%20selection%2C%20traditional%20Turkish%20drink%20presentation&width=400&height=250&seq=icecek1&orientation=landscape" 
                   alt="İçecekler" className="w-full h-48 object-cover object-top"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🥤 İçecekler</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Kola - 40 TL</li>
                  <li>• Ayran - 25 TL</li>
                  <li>• Su - 10 TL</li>
                  <li>• Ice Tea - 40 TL</li>
                  <li>• Sade Soda - 20 TL</li>
                </ul>
              </div>
            </div>

            {/* Kombine Menüler */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=Turkish%20combination%20meal%20sets%20with%20soup%20main%20course%20salad%2C%20complete%20Turkish%20meal%20presentation%2C%20traditional%20Turkish%20lunch%20combinations%2C%20variety%20of%20dishes%20on%20wooden%20table&width=400&height=250&seq=kombin1&orientation=landscape" 
                   alt="Kombine Menüler" className="w-full h-48 object-cover object-top"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🍽️ Kombine Menüler</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Çorba + Bakliyat + Sebze İçerikli Ana Yemek + Pilav + Salata - 200 TL</li>
                  <li>• Çorba + Tavuk Sote + Pilav + Salata - 220 TL</li>
                  <li>• Çorba + Orman Kebabı/Taş Kebabı + Pilav + Salata - 270 TL</li>
                  <li>• Çorba + Kavurma (180 gr) + Salata - 300 TL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Özel Not */}
          <div className="mt-12 bg-orange-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Özel Notlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">📞 Sipariş İçin:</h4>
                <p className="text-orange-600">0545 282 97 34 numarasından bizi arayabilirsiniz</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">🕐 Servis Saatleri:</h4>
                <p className="text-orange-600">09:00 - 22:00 arası sipariş alınır</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://readdy.ai/api/search-image?query=Traditional%20Turkish%20kitchen%20with%20grandmother%20cooking%2C%20authentic%20home%20cooking%20scene%2C%20Turkish%20woman%20preparing%20traditional%20meals%2C%20warm%20family%20kitchen%20atmosphere%2C%20clay%20pots%20and%20traditional%20cookware%2C%20cozy%20home%20environment&width=600&height=400&seq=about1&orientation=landscape" 
                   alt="Hakkımızda" className="rounded-2xl shadow-lg object-cover object-top"/>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ağaçören Ev Yemekleri olarak, geleneksel Türk mutfağının en lezzetli tariflerini 
                modern hayatın hızına uygun şekilde sizlere sunuyoruz. 15 yıllık deneyimimizle, 
                anneannelerimizden öğrendiğimiz tarifleri özenle hazırlıyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Her tabağımızda sevgi, özen ve geleneksel lezzetlerin muhteşem uyumu var. 
                Taze malzemeler, doğal tatlar ve ev yapımı kalitesiyle sizlere hizmet vermekten 
                gurur duyuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg text-gray-600">Siparişleriniz ve sorularınız için bizimle iletişime geçin</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sipariş Ver</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Sipariş Hattı</p>
                    <a href="tel:05452829734" className="text-2xl font-bold text-orange-600 cursor-pointer">0545 282 97 34</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-time-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Çalışma Saatleri</p>
                    <p className="text-lg font-semibold text-gray-900">09:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-gray-600">Teslimat Alanı</p>
                    <p className="text-lg font-semibold text-gray-900">Çankaya ve Çevresi</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="tel:05452829734" 
                   className="w-full bg-orange-600 text-white py-4 px-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Hemen Ara ve Sipariş Ver
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nasıl Sipariş Verebilirim?</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Telefon ile Arayın</h4>
                    <p className="text-gray-600">0545 282 97 34 numarasından bizi arayın</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Menüyü Seçin</h4>
                    <p className="text-gray-600">İstediğiniz yemekleri seçin ve miktarını belirtin</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Adres Bilgisi</h4>
                    <p className="text-gray-600">Teslimat adresinizi ve iletişim bilgilerinizi verin</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teslimat</h4>
                    <p className="text-gray-600">Siparişiniz 30-45 dakika içinde kapınıza!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-pacifico">Ağaçören Ev Yemekleri</h3>
              <p className="text-gray-300 mb-4">
                Geleneksel Türk mutfağının en lezzetli örneklerini ev yapımı kalitesiyle sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-facebook-fill text-white"></i>
                </div>
                <a href="https://instagram.com/agacorenevyemekleri" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="ri-twitter-line text-white"></i>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#menu" className="hover:text-orange-400 transition-colors cursor-pointer">Menümüz</Link></li>
                <li><Link href="#about" className="hover:text-orange-400 transition-colors cursor-pointer">Hakkımızda</Link></li>
                <li><Link href="#contact" className="hover:text-orange-400 transition-colors cursor-pointer">İletişim</Link></li>
                <li><a href="tel:05452829734" className="hover:text-orange-400 transition-colors cursor-pointer">Sipariş Ver</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim Bilgileri</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  <a href="tel:05452829734" className="hover:text-orange-400 transition-colors cursor-pointer">0545 282 97 34</a>
                </p>
                <p className="flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  09:00 - 22:00
                </p>
                <p className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  Çankaya, Ankara
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ağaçören Ev Yemekleri. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
