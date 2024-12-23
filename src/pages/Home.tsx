import { Rocket } from 'lucide-react';

export default function Home() {
  const teamMembers = [
    "Mert Dilbaz",
    "Sinem Taşdemir",
    "Eylül Yıldız",
    "Neşe Zontul",
    "Emir Talha Aydın"
    // Add more team members as needed
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Banner Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/img/image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-20 px-4 text-center text-white">
        <div className="bg-amber-900/60 p-8 rounded-lg backdrop-blur-sm">
        <img
                src="/img/Adsız tasarım.png" // Logonun yeni dosya yolu
                alt="Smart Office Logo"
                className="h-75  w-90 ml-30" // Logo boyutlandırma
              />
          <h1 className="text-4xl font-bold mb-6 text-amber-100">Smart Office Solutions</h1>
          <p className="text-lg mb-8 text-amber-50">
          "Smart Office Solutions" projesi, ofis ortamlarında güvenlik ve verimliliği artırmak amacıyla geliştirilmiştir. Bu sistem, modern ofis ihtiyaçlarını karşılamak için tasarlanmış üç temel bileşenden oluşmaktadır:
Kapıda Kart Okuma Sistemi: Güvenliği sağlamak için yalnızca yetkili kişilerin ofise giriş yapmasına olanak tanır. Bu sistem, kullanıcıların kartlarını okutarak hızlı ve güvenli bir şekilde erişim sağlar.
Sıcaklık Ölçüm Sensörü: Ofis içindeki sıcaklık seviyelerini düzenli olarak ölçerek ideal çalışma koşullarının sağlanmasına katkıda bulunur.
Işık Sensörü: Ortam ışık seviyesini algılar ve verimliliği artırmak için aydınlatma yönetimini optimize eder.
Bu yenilikçi proje, ofis güvenliği ve enerji verimliliğini artırırken, kullanıcı deneyimini de kolaylaştırmayı hedeflemektedir.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-amber-200">Ekip Üyeleri</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-amber-800/50 px-6 py-3 rounded-full text-amber-100"
                >
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}