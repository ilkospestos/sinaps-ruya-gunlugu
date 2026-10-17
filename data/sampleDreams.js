export const currentUser = {
  name: "İlkem",
  username: "@ilkem",
  bio: "Bilinçaltı ve lucid rüya gezgini ✨",
  followersCount: 142,
  followingCount: 89,
  avatarText: "İ"
};

export const initialNotifications = [
  { id: 1, type: "comment", user: "Deniz", text: "rüyana yorum yaptı: 'O düşerken uçma hissi inanılmaz oluyor ya.'", time: "10 dk önce", read: false },
  { id: 2, type: "like", user: "Merve", text: "adlı rüyanı favorilerine ekledi.", time: "1 saat önce", read: false },
  { id: 3, type: "follow", user: "Kaan", text: "seni takip etmeye başladı.", time: "3 saat önce", read: true }
];

export const initialDreams = [
  {
    id: "1",
    title: "Yüksek binadan düşerken birden uçmaya başladım",
    content: "Bi anda kendimi çok yüksek bi binanın balkonunda buldum, aşağı bakarken ayağım kaydı düştüm ama yere çakılmak yerine rüzgarı arkama alıp süzülmeye başladım. O kadar gerçekçiydi ki rüzgarın soğukluğunu yüzümde hissediyordum sanki.",
    category: "Lucid",
    date: "16.10.2026",
    author: "İlkem",
    authorUsername: "@ilkem",
    sentiment: "Heyecanlı (%75)",
    symbols: ["Yükseklik", "Uçmak", "Rüzgar"],
    analysis: "Kontrolü ele alma arzusu ve günlük hayattaki stresin rüyada avantaja çevrilmesi.",
    comments: [
      { id: 1, author: "Deniz", text: "Aynı rüyayı ben de görmüştüm, o düşerken uçma hissi inanılmaz oluyor ya." },
      { id: 2, author: "Merve", text: "Lucid rüya bu bence, kontrol tamamen sende kalmış ne güzel." }
    ]
  },
  {
    id: "2",
    title: "Dişlerimin dökülmesi ve kimsenin duymaması",
    content: "Konuşurken birden ağzıma sert bişeyler geldi, elime tükürdüm hep dişlerim parça parça dökülmüş. Arkadaşlarıma bağrıyorum ama kimse sesimi duymuyor, yüzüme bakıp gülüyorlar. Çok fena bi kabustu uyanınca üstümü değiştirdim terden sırılsıklam olmuştum.",
    category: "Kabus",
    date: "15.10.2026",
    author: "Burak",
    authorUsername: "@burak_r",
    sentiment: "Korku (%90)",
    symbols: ["Diş Dökülmesi", "Çaresizlik", "Sessizlik"],
    analysis: "Kontrol kaybı korkusu, iletişim sorunları veya yaşamsal bir kaygı.",
    comments: [
      { id: 1, author: "Zeynep", text: "Geçmiş olsun, diş dökülmesi genelde çok stresli dönemlerde olur derler." },
      { id: 2, author: "İlkem", text: "En nefret ettiğim kabus türü ya, çok gerçekçi hissediliyor." }
    ]
  },
  {
    id: "3",
    title: "Eski evimizde çocukluğumu ararken",
    content: "Yıllar önce taşındığımız o eski evde geziyodum. Odaların yerleri değişmiş, koridorun sonundaki kapı hiç açmadığımız bi yere açılıyordu. İçeri bi baktım bizim kedinin küçüklüğü miyavlıyor ama kedi çok büyümüş falan acayip bi rüyaydı.",
    category: "Bilinçaltı",
    date: "14.10.2026",
    author: "Esra",
    authorUsername: "@esra_dreams",
    sentiment: "Nostaljik (%60)",
    symbols: ["Eski Ev", "Kedi", "Gizli Kapı"],
    analysis: "Geçmişe duyulan özlem ve unutulmuş anıların zihinde yeniden şekillenmesi.",
    comments: [
      { id: 1, author: "Emre", text: "Eski ev rüyaları insanı bi garip yapıyor uyanınca ya." }
    ]
  },
  {
    id: "4",
    title: "Denizin ortasında kayıkta tek başıma",
    content: "Hava aydınlanmak üzereydi, denizde ufak bi kayıktayım kürek yok bişey yok akıntıyla gidiyorum. Su o kadar berraktı ki balıkların ve dipteki batık geminin ışıklarını görüyodum, hiç korkmuyodum ama çok sessizdi.",
    category: "Mistik",
    date: "12.10.2026",
    author: "Selin",
    authorUsername: "@selin_s",
    sentiment: "Huzurlu (%85)",
    symbols: ["Deniz", "Kayık", "Sessizlik"],
    analysis: "Zihinsel dinginlik, akışa bırakma ve içsel huzur arayışı.",
    comments: [
      { id: 1, author: "İlkem", text: "Böyle huzurlu rüyalar güne güzel başlatır insanı ya." },
      { id: 2, author: "Merve", text: "Batık gemi detayı çok film sahnesi gibiymiş." }
    ]
  },
  {
    id: "5",
    title: "Sınava çalışmadığımı okulun bahçesinde anladım",
    content: "Okulun bahçesindeyim herkes elinde kitapla koşturuyo, ben de 'aa bugün matematik sınavı mı vardı' diye şok oluyorum. Sınıfa bi girdim sorular çince gibi okunmuyo hiçbir şey yazamadım kağıda.",
    category: "Stres",
    date: "11.10.2026",
    author: "Ahmet",
    authorUsername: "@ahmet_t",
    sentiment: "Panik (%95)",
    symbols: ["Sınav", "Okul", "Yetersizlik"],
    analysis: "Performans kaygısı ve günlük hayatın üzerindeki sorumluluk baskısı.",
    comments: [
      { id: 1, author: "Esra", text: "Mezun olalı yıllar oldu hala bu rüyayı görüp uyanıyorum ya ahaha." }
    ]
  },
  {
    id: "6",
    title: "Gökyüzünde iki tane dolunay vardı",
    content: "Gece dışarı çıkmış sigara içiyodum, bi baktım gökte koskoca iki tane ay var biri turuncu diğeri masmavi parlıyo. Yıldızlar kayıyo gibi değil sanki havai fişek gibi patlıyodu. Komşular falan sokağa dökülmüştü izliyoduk.",
    category: "Mistik",
    date: "10.10.2026",
    author: "Merve",
    authorUsername: "@merve_m",
    sentiment: "Büyülenmiş (%90)",
    symbols: ["İki Ay", "Gökyüzü", "Yıldızlar"],
    analysis: "Hayal gücünün zirvesi ve olağanüstü olaylara duyulan hayranlık.",
    comments: [
      { id: 1, author: "Selin", text: "Çok estetik bi rüya olmuş keşke gerçeğe dönüşse." }
    ]
  },
  {
    id: "7",
    title: "Uçan bi otobüse biniyorum",
    content: "İstanbul'dayım normalde otobüse biniyorum ama otobüs birden tekerleklerini içeri çekip bulutların arasına doğru uçmaya başlıyo. Köprülerin üstünden kuş bakışı geçiyoruz, herkes camdan dışarıyı fotoğraflıyo.",
    category: "Lucid",
    date: "09.10.2026",
    author: "Can",
    authorUsername: "@can_c",
    sentiment: "Neşeli (%70)",
    symbols: ["Uçan Araç", "Bulutlar", "İstanbul"],
    analysis: "Rutinden kaçma isteği ve yaratıcı düşüncelerin dışavurumu.",
    comments: [
      { id: 1, author: "Burak", text: "İETT uçan hat açarsa kesin böyle olur." }
    ]
  },
  {
    id: "8",
    title: "Kediye dönüşüp çatılarda gezinmek",
    content: "Kendimi siyah bi kedi olarak gördüm, gece çatıdan çatıya atlıyorum aşağıda köpekler havlıyo ama ben çok rahatım. Bi kedinin gözünden dünyayı görmek acayip esnekti hissi.",
    category: "Soyut",
    date: "08.10.2026",
    author: "Deniz",
    authorUsername: "@deniz_d",
    sentiment: "Özgürlük (%80)",
    symbols: ["Kedi", "Çatı", "Gece"],
    analysis: "Özgür olma, sorumluluklardan sıyrılma ve çevreyi farklı bir perspektiften algılama.",
    comments: [
      { id: 1, author: "İlkem", text: "Bunu ben de görmüştüm geçen yıl, acayip bi deneyimdi." }
    ]
  },
  {
    id: "9",
    title: "Zamanın durduğu an ve boş sokaklar",
    content: "İzmir Kordon'dayım ama insan yok, ne araba ne ses var. Saate bakıyorum kollar durmuş, rüzgar esmiyo deniz çarşaf gibi. Tek başıma yürüyodum bomboş sahil boyunca.",
    category: "Bilinçaltı",
    date: "07.10.2026",
    author: "İlkem",
    authorUsername: "@ilkem",
    sentiment: "Huzurlu (%50)",
    symbols: ["Boş Sokak", "Zaman", "Kordon"],
    analysis: "Yalnız kalma ihtiyacı, dünyadan soyutlanma isteği.",
    comments: [
      { id: 1, author: "Selin", text: "Kordonu bomboş görmek ürkütücü ama bi yandan da dinlendirici." }
    ]
  },
  {
    id: "10",
    title: "Yürüyen devasa ağaçlar ormanı",
    content: "Ormanda yürüyüş yaparken ağaçlar köklerini topraktan çıkarıp yavaş yavaş yürümeye başladı. Bana zarar vermediler ama geçmeme izin vermek için yer değiştirdiler. Doğa sanki canlı bi organizma gibiydi.",
    category: "Mistik",
    date: "06.10.2026",
    author: "Zeynep",
    authorUsername: "@zeynep_z",
    sentiment: "Saygı (%85)",
    symbols: ["Yürüyen Ağaç", "Orman", "Doğa"],
    analysis: "Doğayla bütünleşme hissi ve çevreye duyulan derin bilinçaltı saygısı.",
    comments: [
      { id: 1, author: "Ahmet", text: "Yüzüklerin Efendisi Entler gibi olmuş resmen." }
    ]
  },
  {
    id: "11",
    title: "Büyük bi malikanede kaybolmak",
    content: "İçi antika eşyalarla dolu devasa bi evdeyim ama dışarı çıkış kapısını bi türlü bulamıyorum. Her açtığım kapı başka bi odaya çıkıyo, odalarda hiç tanımadığım eski portreler var bana bakıyolar.",
    category: "Kabus",
    date: "05.10.2026",
    author: "Ozan",
    authorUsername: "@ozan_o",
    sentiment: "Gergin (%75)",
    symbols: ["Malikane", "Portre", "Çıkışsızlık"],
    analysis: "Hayatta hangi yöne gideceğini bilememe kararsızlığı.",
    comments: [
      { id: 1, author: "Merve", text: "Korku filmi sahnesi gibi, ben olsam uyanana kadar çığlık atardım." }
    ]
  },
  {
    id: "12",
    title: "Eski lise arkadaşlarıyla kopuk bi buluşma",
    content: "Lisedeki sınıftayız ama herkes çok yaşlanmış ya da çocuk kalmış, garip bi yaş karmaşası var. Hocamız tahtaya hayatın anlamını yazıyodu ama ben arka sırada camdan dışarıyı izliyodum.",
    category: "Nostalji",
    date: "04.10.2026",
    author: "Elif",
    authorUsername: "@elif_e",
    sentiment: "Hüzünlü (%40)",
    symbols: ["Okul", "Arkadaşlar", "Zaman"],
    analysis: "Geçen zamana duyulan nostalji ve eski dostlukları özleme.",
    comments: [
      { id: 1, author: "Esra", text: "Lise günleri özlendi sanırım :)" }
    ]
  },
  {
    id: "13",
    title: "Sualtında nefes alabildiğimi fark etmek",
    content: "Denize dalmıştım yüzmek için ama yukarı çıkmayı unuttum, bi baktım suyun altında balıklar gibi rahatça nefes alabiliyorum. Mercanların arasında yürüyüp rengarenk balıklarla konuştum.",
    category: "Lucid",
    date: "03.10.2026",
    author: "Burak",
    authorUsername: "@burak_r",
    sentiment: "Mutluluk (%95)",
    symbols: ["Sualtı", "Nefes", "Mercan"],
    analysis: "Sınırlardan kurtulma, yeni ortamlara kolay uyum sağlama.",
    comments: [
      { id: 1, author: "Deniz", text: "Oha su altında nefes alma rüyası efsanedir, aşırı huzurludur." }
    ]
  },
  {
    id: "14",
    title: "Kendi düğünümde ne giyeceğimi bulamamak",
    content: "Herkes salonda beni bekliyo ama ben odada dolabı karıştırıyorum giyecek tek bi parça düzgün kıyafetim yok, hepsi ya yırtık ya çok eski. Delirmek üzereydim uyanmışım.",
    category: "Stres",
    date: "02.10.2026",
    author: "Merve",
    authorUsername: "@merve_m",
    sentiment: "Panik (%90)",
    symbols: ["Kıyafet", "Düğün", "Kriz"],
    analysis: "Önemli bir etkinlik öncesi yetersizlik hissi ve onaylanma korkusu.",
    comments: [
      { id: 1, author: "Selin", text: "Moda kabuslarının şahı bu olsa gerek geçmiş olsun :D" }
    ]
  },
  {
    id: "15",
    title: "Trende cam kenarında sonsuz yolculuk",
    content: "Hiç durmayan bi trendeyim, dışarda sarı sonbahar yaprakları uçuşuyo ama tren rayların üstünde değil sanki havada süzülerek gidiyo. Kondaktör bilet sordu ama bilet yerine avcuma bi parça deniz kabuğu bıraktı.",
    category: "Mistik",
    date: "01.10.2026",
    author: "Kaan",
    authorUsername: "@kaan_k",
    sentiment: "Merak (%80)",
    symbols: ["Tren", "Yolculuk", "Deniz Kabuğu"],
    analysis: "Hayatın akışına duyulan merak ve bilinmeyene doğru yapılan içsel seyahat.",
    comments: [
      { id: 1, author: "İlkem", text: "Deniz kabuğu detayı çok şiirselmiş, bayıldım bu rüyaya." }
    ]
  }
];