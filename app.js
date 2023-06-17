
// Öğrenci bilgilerini içeren bir dizi oluşturun
var ogrenciler = [];

// Öğrenci ekleme fonksiyonu
function ogrenciEkle(adSoyad, puan) {
  ogrenciler.push({
    adSoyad: adSoyad,
    puan: puan
  });
}

// Öğrenci formunu yakalayın
var ogrenciForm = document.getElementById("ogrenciForm");

// Öğrenci formunu dinleyin
ogrenciForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

  // Giriş değerlerini al
  var adSoyadInput = document.getElementById("adSoyad");
  var puanInput = document.getElementById("puan");

  // Değerleri al ve öğrenci ekleme fonksiyonunu çağır
  var adSoyad = adSoyadInput.value;
  var puan = parseInt(puanInput.value);
  ogrenciEkle(adSoyad, puan);

  // Giriş alanlarını temizle
  adSoyadInput.value = "";
  puanInput.value = "";

  // Sınıf listesini güncelleme fonksiyonunu çağır
  sinifListesiniGuncelle();
});

// Sınıf listesini güncelleme fonksiyonu
function sinifListesiniGuncelle() {
  // Sınıfı puanlara göre sıralama
  ogrenciler.sort(function(a, b) {
    return b.puan - a.puan;
  });

  // Sınıf ortalamasını hesapla
  var sinifToplamPuan = 0;
  for (var j = 0; j < ogrenciler.length; j++) {
    sinifToplamPuan += ogrenciler[j].puan;
  }
  var sinifOrtalamasi = sinifToplamPuan / ogrenciler.length;

  // Sınıf ortalamasını güncelle
  var sinifOrtalamasiSpan = document.getElementById("sinifOrtalamasi");
  sinifOrtalamasiSpan.textContent = sinifOrtalamasi.toFixed(2);

  // Öğrenci listesini güncelle
  var ogrenciListesi = document.getElementById("ogrenciListesi");
  var ogrenciListesiHTML = "";
  for (var i = 0; i < ogrenciler.length; i++) {
    var ogrenci = ogrenciler[i];
    ogrenciListesiHTML += "<tr><td>" + (i + 1) + "</td><td>" + ogrenci.adSoyad + "</td><td>" + ogrenci.puan + "</td></tr>";
  }
  ogrenciListesi.querySelector("tbody").innerHTML = ogrenciListesiHTML;
}
