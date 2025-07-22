export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
      <p className="mb-4">
        Bu web sitesi, kullanıcı deneyimini geliştirmek ve reklam hizmetleri
        sunmak amacıyla çerezler kullanır. Google AdSense gibi üçüncü taraf
        sağlayıcılar, kullanıcıların ilgi alanlarına dayalı reklamlar sunmak için
        çerezleri kullanabilir.
      </p>
      <p className="mb-4">
        Bu siteyi kullanarak çerez kullanımını kabul etmiş olursunuz. Daha fazla
        bilgi için Google’ın{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          className="underline text-blue-600"
        >
          reklam politikalarını
        </a>{" "}
        inceleyebilirsiniz.
      </p>
    </main>
  );
}