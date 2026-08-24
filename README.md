# AI & Kripto Portföyü — Takip Paneli

Kişisel 9 pozisyonluk portföy (AI altyapısı + kripto madenciliği temalı) için tek
dosyalık, self-contained bir HTML gösterge paneli.

## İçerik

- `index.html` — tüm sayfa (CSS + JS dahil, tek dosya). Açık/koyu tema, gizlilik
  modu, 24S/7G/30G/Tümü zaman aralıkları, pozisyon katkısı grafiği, kart
  görünümlü holding listesi, sektör/makro görünüm, pozisyon bazlı "neden bu
  değişim" analizleri, tıklanınca detay açılan haber zaman çizelgesi (bkz.
  "Portföyün Büyük Resmi: Neler Oldu?").
- `Uygulamayi_Baslat.bat` — çift tıklayınca `index.html`'i doğrudan Google
  Chrome'da açan Windows başlatıcısı (Chrome'u yaygın kurulum yollarından bulur).

## Canlı özellikler

- **Canlı fiyat güncelleme** — üstteki "Güncelle" panelinden ücretsiz bir
  [Finnhub](https://finnhub.io/register) API key girilirse, holding listesi,
  toplam değer ve 24 saatlik değişim gerçek zamanlı fiyatlarla güncellenir.
  Key sadece tarayıcının `localStorage`'ında saklanır. 7G/30G/Tümü grafikleri ve
  katkı tabloları geçmiş veri gerektirdiği için bu canlı güncellemeyle değişmez.
- **Para birimi seçici** — sağ üstteki $/₺/£/€ anahtarı, sayfadaki tüm portföy
  rakamlarını (toplam değer, holding listesi, grafik, katkı çubukları, istatistik
  kartları) seçilen para birimine çevirir. Kur [Frankfurter](https://frankfurter.dev)
  API'sinden (ücretsiz, key gerektirmez) canlı çekilir; bağlantı yoksa yaklaşık
  sabit kurlara düşer ve bunu arayüzde belirtir. Şirket düzeyi rakamlar (ör.
  piyasa değeri) ve haber metinleri içindeki dolar tutarları kasıtlı olarak
  USD'de kalır.
- **Haber zaman çizelgesi** — her girdiye tıklandığında, o olayın portföydeki
  hangi pozisyonları ne kadar etkilediğini gösteren bir "Portföye etkisi" detayı
  açılır.

## Veri kaynağı ve tarih

- Fiyat temeli: **21 Ağustos 2026 kapanışı**, stockanalysis.com üzerinden
  doğrulandı (24 Ağustos 2026'da yeniden teyit edildi).
- Haberler/gelişmeler: Haziran–Ağustos 2026 döneminden, her biri kaynak linkiyle.

## Devam ettirmek için notlar

- Sayfa dışarıya sadece Google Fonts, Finnhub (canlı fiyat, opsiyonel key ile)
  ve Frankfurter (döviz kuru) için bağlanır — başka hiçbir dış servise istek
  atmaz.
- Renk teması: açık lavanta zemin + **indigo/mor accent (#6D2BD9 açık tema,
  #9B6BFF koyu tema)**, hero bölümünde koyu indigo→mor gradyan ve mint/yeşil
  (#17C793) grafik rengi — kullanıcının paylaştığı bir yatırım uygulaması ekran
  görüntüsünden ilham alındı. Kazanç/kayıp renkleri (yeşil/kırmızı) ayrı, sabit
  bir semantik palet kullanıyor — accent rengiyle karıştırılmamalı. Grafik
  çizgisi kâr/zarar farketmeksizin her zaman marka rengi mint/yeşil.
- Tipografi: tamamen **Plus Jakarta Sans** (Google Fonts) — başlıklar 800
  ağırlık, tablo/rakamlar `tabular-nums` ile hizalı.
- Logo görselleri `<img>` içinde base64 data-URI olarak gömülü (PIL ile 240px'e
  küçültülmüş) — harici görsel isteği yok.
- Holding listesi görsel olarak bir tablo (`<table class="holdings">`) ama CSS
  Grid ile kart listesi gibi render ediliyor; hisse adedi ve birleşik K/Z
  gösterimi sayfa yüklenirken JS ile hesaplanıp yazılıyor (bkz. `index.html`
  içindeki ikinci `<script>` bloğu, `holdings` dizisi).
