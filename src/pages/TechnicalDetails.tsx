import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechnicalDetails() {
  const technicalCards = [
    {
      title: "Raspberry Pi",
      description: "Sistemin merkezi işlem birimi olarak görev yapar.",
      image: "img/raspberry.jpg"
    },
    {
      title: "RFID Kart Okuyucu",
      description: "Kapı erişim kontrolü için kullanılır",
      image: "img/rfid.jpg"
    },
    {
      title: "DHT11 Sıcaklık ve Nem Sensörü",
      description: "Akıllı ısıtma sistemi için ortam sıcaklığı ve nem ölçümü yapar",
      image: "img/dht11.jpg"
    },
    {
      title: "LDR (Işık Sensörü)",
      description: "Akıllı aydınlatma sisteminde ortam ışık seviyesini algılar",
      image: "img/ldr.jpg"
    },
    {
      title: "Röle Modülü",
      description: "Elektrik devrelerini kontrol etmek için kullanılır.",
      image: "img/role2.jpg"
    },
    // Add more components as needed
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">Teknik Detaylar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalCards.map((card, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-amber-900">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-amber-700">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-lg font-bold text-gray-700 mt-8 pl-60">
        Projemizde kullandığımız bileşenler yukarıda belirtilmiştir. <br />
        Bu proje kapsamında, Raspberry Pi tabanlı bir akıllı ofis sistemi geliştirilerek modern <br />
        ofislerin ihtiyaçlarına yönelik uygun maliyetli, kullanıcı dostu ve sürdürülebilir bir <br />
        çözüm sunulmuştur. Sistem, güvenli erişim yönetimi, enerji tasarrufu ve çalışan <br />
        konforunu artırmayı hedefleyen üç ana alt sistemden oluşmaktadır: Kart Okuma ile <br />
        apı Kontrol Sistemi, Akıllı Isıtma Sistemi ve Akıllı Aydınlatma Sistemi. <br />
        Proje boyunca, hem donanım hem de yazılım bileşenleri başarılı bir şekilde entegre <br />
        edilerek istenen işlevsellik elde edilmiştir. Sistem, sensörlerden ve kontrol <br />
        cihazlarından alınan verileri işleyerek gerçek zamanlı otomasyon sağlamış ve ofis <br />
        ortamında enerji verimliliğini artırmıştır. <br />
        Değerlendirme sonucunda, proje hedeflerine büyük ölçüde ulaşılmıştır. Ancak sistem, <br />
        ileride daha gelişmiş sensörlerin kullanımı, yapay zeka tabanlı analizler ve bulut <br />
        entegrasyonu gibi ek geliştirmelere açıktır. Bu proje, modern ofislerde güvenlik, <br />
        konfor ve enerji tasarrufu açısından etkili bir model sunmuş ve benzer projeler için bir <br />
        temel oluşturmuştur.

      </p>
    </div>
  );
}