const Settings = require("../Configuration/Settings.json");

module.exports = (message) => {
    if (message.content.toLowerCase() === "tag" || message.content.toLowerCase() === "!tag" || message.content.toLowerCase() === ".tag") {
  message.channel.send(`\`∞\``);
  }
    if (message.content.toLowerCase() === ".patlat" || message.content.toLowerCase() === "!patlat") {
    message.channel.send(`Sunucudaki kanallar ve roller siliniyor askim`);


    var random = [
  
      'Varlığın dünyada cenneti yaşatıyor bana.',
      'Bir gülüşü var, kelebek görse ömrü uzar.',
      'çünkü sen gittiğinde sokak lambaları gözümü kamaştırıyor', 
      'Seni düşlerken bir tebessüm beliriyor suretimde.',
      'Gölgene sığınırım en çaresiz anımda.',
      'Gamzen diyorum bir ömür sevmelik.',
      'Sen sevilmek için yaratılmışsın.',
      'Varsan var yoksan yokum.',
      'Bu dünya için fazla mükemmelsin.',
      'Yüzümdeki oluşan gülümsemenin sebebisin.',
      'Damlaya damlaya büyütüyorum sevgimi.',
      'Gecemi aydınlatan yıldızımsın.',
      'Gözlerin gökyüzü kadar uçsuz bucaksız.',
      'Ömrümün en güzel mevsimi sensin.',
      'Başıma gelen güzel şeylerin nedeni hep sensin.',
      'Gülüşünde bir şey var hep içime dokunur.',
      'Kendimi sende bulduğum için bu kadar güzelsin.',
      'Varlığın bir çocuğun gülüşü gibi; öyle güzel öyle masum ki.',
      'Uyanmak istemediğim en güzel rüyam sensin.',
      'Masallar elbette güzel; kahramanı sen isen.',
      'Her adımımda senin adını fısıldar yollar…',
      'Sen bana aitsin, Balık denize, bulut gökyüzüne ait.',
      'Her bir kirpiğinin ayrı bir büyüsü var zihnimde.',
      'Derdim de devam da sen oldun haberin yok.',
      'Sen varsan yeter ömrüme. Gerisi hikâye.',
      'Seni kokladığımda, nefes aldığımı hatırlıyorum.',
      'Lütfen üzerine alın! Kimseyi görmedim ben, senden daha güzel gülen.',
      'Fazlası zarar olmayan iki şey; biri sen biri kokun.',
      'Kokunu içime çektiğimde nefes aldığımı anlıyorum.',
      'Bir gülümse bana, o eşsiz gülüşünle güneş açsın hayatımda.',
      'Nasıl anlatsam seni sana? Gökyüzü gibi gözlerinde kaybolabiliyormuş insan.',
      'Sen varsın, bundan güzel bir teselli var mı dünyada?',
      'Gözlerimin gördüğü en güzel şey sensin.',
      'Sesini duydum, huzura kavuştum.',
      'Kalbinin güzelliği yüzüne vurmuş, ben buna ilk kez şahit oluyorum.',
      'Sen benim yeniden kendime gelişim gibisin. Seni görmek sarsıyor insanı, insan yeryüzünde melek görüyor sanki.',
      'Sen hayatın bana verdiği en güzel armağansın.',
      'Bu yeryüzünde sevilmeye dair her şey sende toplanmış',
      'Her şey çirkinken sen nasıl bu kadar güzelsin?',
      'Sen bu dünyada gülüşü olan tek manzaramsın.',
      'Benim bütün hevesim sende. Seninle ilgili her şey heyecanlandırıyor beni.',
      'Benim sadece seninle olmaya ihtiyacım var. Her şey sende toplanmış.',
      'Sen bana hep öyle tatlı tatlı bak emi.',
      'Sen benim için teksin ve bana yetersin.',
      'Biliyor musun? ilk seninle bir dilenciye para verdim. İnanmadığım yapmam dediğim her şeyi seninle yaptım.',
      'Bir buse misali öpünce izi kalansın.',
      'Gel benim ekmeğim, suyum, aşım ol',
      'Şimdi divaneye döndüm seni görünce.',
      'Çiçekler bile kıskanıyor bak aşkımızı.',
      'Senin aşkın beni gece gözlüm deli ediyor.',
      'Kurumuş bir ağaç gibiydim, sen geldin yeniden yeşerdim',
      'Küçük bir çocuğun masumiyeti gibisin sevmeye kıyamadığım.',
      'Senle aşkı öğrendim, sevgiyi, paylaşmayı…',
      'Gülerken kendini görsen inan kendi ömrüne ömür katardın.',
      'Dertlerini bana ver sevinçler senin olsun..',
      'Etrafımda olduğunda başka bir şeye ihtiyacım olmuyor.',
      'Sen olmadan nasıl var olacağımı bilmiyorum.',
      'Güneşe gerek yok, gözlerindeki sıcaklık içimi ısıtıyor.',
      'Gözlerimi senden alamıyorum, benim tüm dünyam sensin.',
      'Mutluluk ne diye sorsalar, cevabı gülüşünde ve o sıcak bakışında arardım.',
      'Bir şeyler ters gittiğinde, aramak istediğim ilk kişi sensin.',
      'Kusursuz tavırların var. Korkunç kararlar verdiğimde beni yargılamadığın için sana minnettarım.',
      'Baharı anımsatan kokunu içime çektiğimde, her şey mümkün görünüyor.',
      'Bu kadar güzel bakma, başka biri daha sana aşık olur diye ödüm kopuyor.',
      'Güzel yüzünü göremediğim için geceleri hiç sevmiyorum.',
      'Dünyadaki tüm şiirler sana yazılmış gibi hissettiriyorsun.',
      'Sen benim aldığım en doğru kararsın.',
      'Sen gülümseyince bulutlar dağılıyor göz bebeğim.',
      'Sabah uykusu kadar güzelsin.',
      'Onu Bunu Boşver de bize gel 2 bira içelim.',
      'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum',
      'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın',
      'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
      'Işık oluyorsun karanlık gecelerime.',
      'Gözlerin adeta bir ay parçası.',
      'Sen benim bu hayattaki en büyük duamsın.',
      'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
      'Huzur kokuyor geçtiğin her yer.',
      'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
      'Satuke seni çok sevdi...',
      'Sen benim düşlerimin surete bürünmüş halisin.',
      'Mucizelerden bahsediyordum.',
      'Yaşanılacak en güzel mevsim sensin.',
      'Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.',
      'Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.',
      'Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.',
      'Denize kıyısı olan şehrin huzuru birikmiş yüzüne.',
      'Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.',
      'Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.',
      'Ne tatlısın sen öyle. Akşam gel de iki bira içelim.',
      'Bir gamzen var sanki cennette bir çukur.',
      'Gecemi aydınlatan yıldızımsın.',
      'Ponçik burnundan ısırırım seni',
      'Bu dünyanın 8. harikası olma ihtimalin?',
      'fıstık naber?',
      'tanisalim mi ?',
      'Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?',
      'Süt içiyorum yarım yağlı, mutluluğum sana bağlı.',
      'Müsaitsen aklım bu gece sende kalacak.',
      'Gemim olsa ne yazar liman sen olmadıktan sonra...',
      'Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.',
      'Sabahları görmek istediğim ilk şey sensin.',
      'Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.',
      'Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.',
      'Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.',
      'Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.',
      'Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.',
      'Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.',
      'Çocukluk yapsan da gönlüme senin için salıncak mı kursam?',
      'Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.',
      'Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...',
      'Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.',
      'Telaşımı hoş gör, ıslandığım ilk yağmursun.',
      'Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi...',
      'Domates biber patlıcan, bu gece sana saplıcam...',
      'Bu ego nereden geliyor. Kuyudan mı çıkarıyorsun?',
      'Çok tatlısın :pleading_face:',
    ];

    
    if (message.channel.name == "isengard-chat") {
      var randomlaananaısikerim =
        random[Math.floor(Math.random() * random.length)];
      let no = Math.floor(Math.random() * 130)
      if (no == 95) {
        message.channel.send("<@" + message.author.id + "> " + randomlaananaısikerim + " ");
      }
    }


  }  
  };

module.exports.config = {
    Event: "message"
};
