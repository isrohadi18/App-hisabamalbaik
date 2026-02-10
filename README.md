
# 🕌 Zakat & Infaq Calculator

## 👋 Pengantar
![Zakat & Donasi Banner](https://github.com/rafi-zimraan/Elementory-Wordpress-BPD/blob/main/assets/backgroundApp.png)

Aplikasi kalkulator berbasis **HTML, CSS, dan JavaScript murni** yang dirancang untuk membantu pengguna menghitung kewajiban **Zakat Mal**, **Zakat Fitrah**, serta **Infaq** secara cepat, akurat, dan **sepenuhnya *offline***.

Aplikasi ini ideal untuk penggunaan pribadi, komunitas, atau institusi keagamaan seperti masjid, karena tidak memerlukan *backend* atau koneksi internet.

---

## 🚀 Fitur Utama
*️⃣ **Hitung Cepat & Akurat**

* ✨ **Perhitungan Infaq**
    * Cukup input nominal. Hasil langsung ditampilkan.
* ✨ **Perhitungan Zakat Mal (2.5%)**
    * Menghitung zakat dari harta tunai, tabungan, emas/setara emas.
    * **Fitur Spesial**: Input nisab dalam Rupiah dan indikator otomatis apakah harta sudah mencapai nisab.
* ✨ **Perhitungan Zakat Fitrah**
    * Dukungan untuk dua metode: **Beras (kg)** dan **Uang (Rupiah)**.
    * Fleksibel mengikuti standar takaran dan harga beras/nominal per jiwa daerah setempat.

> 💡 **Offline-Ready**: Seluruh logika perhitungan murni menggunakan JavaScript dan berjalan secara lokal di *browser* Anda.

---

## 🛠 Tech Stack
Aplikasi ini dibangun menggunakan teknologi dasar *web* untuk memastikan kinerja ringan dan *portabilitas* maksimal:

* **HTML5** (Struktur halaman)
* **CSS / TailwindCSS** *(Opsional: Untuk kustomisasi UI)*
* **JavaScript murni** (Logika perhitungan)

*No Framework, No Backend — Ringan & Berjalan Offline.*

---

## 📦 Getting Started

Karena aplikasi ini murni berbasis HTML, tidak ada proses instalasi yang rumit. Anda hanya perlu menjalankan *file* utama di *browser* Anda.

### 1️⃣ Buka Aplikasi

Anda dapat langsung membuka *file* `index.html` di *browser* pilihan Anda.

* **Jalur Langsung:**
    ```
    index.html
    ```
* **Melalui Terminal (Opsional):**

| Sistem Operasi | Perintah |
| :--- | :--- |
| **Windows** | `start index.html` |
| **macOS/Linux** | `open index.html` |

---

## 📂 Struktur Project

/ (root) ├─ index.html # Halaman utama aplikasi ├─ css/ │  └─ styles.css # Gaya CSS (termasuk Tailwind jika digunakan) ├─ js/ │  └─ kalkulator.js # Logika JavaScript untuk perhitungan └─ assets/    └─ banner-zakat.jpg # Aset gambar (banner/icon)


---

## 📝 Contoh Logika Perhitungan (JavaScript)

Kode berikut menunjukkan inti logika perhitungan yang digunakan dalam `js/kalkulator.js`:

```javascript
// Zakat Mal
function hitungZakatMal(harta, nisab) {
  const wajib = harta >= nisab;
  const zakat = wajib ? harta * 0.025 : 0;
  return { wajib, zakat: Math.round(zakat) };
}

// Zakat Fitrah
function hitungZakatFitrah(jiwa, metode, takaran, harga) {
  if (metode === "beras") {
    // takaran default 2.5 kg
    const totalKg = jiwa * takaran;
    const totalRupiah = totalKg * harga;
    return { totalKg, totalRupiah };
  }
  // Metode uang
  return { totalRupiah: jiwa * harga };
}

// Infaq
function hitungInfaq(nominal) {
  return Number(nominal);
}
🛠️ Kustomisasi Lanjut
Anda dapat memodifikasi proyek ini sesuai kebutuhan:

Nilai Nisab: Ubah nilai nisab dan harga emas di js/kalkulator.js agar sesuai dengan ketentuan daerah terbaru.

Takaran Fitrah: Sesuaikan takaran beras fitrah (default 2.5 kg).

Formatting: Terapkan format mata uang Rupiah (Rp.) pada hasil perhitungan.

Desain UI: Tingkatkan antarmuka menggunakan framework CSS seperti TailwindCSS.

PWA: Kembangkan menjadi Progressive Web App (PWA) agar dapat di-install dan diakses lebih mudah secara offline.

🤝 Kontribusi
Kami menyambut baik segala bentuk kontribusi untuk menyempurnakan kalkulator ini!

Fork repositori ini.

Buat branch fitur baru (git checkout -b feature/nama-fitur).

Lakukan commit perubahan Anda.

Push ke branch Anda (git push origin feature/nama-fitur).

Ajukan Pull Request (PR).

📜 Lisensi
Proyek ini dilindungi di bawah MIT License.

MIT License

Copyright (c) 2025 [RAFI ZIMRAAN ARJUNA WIJAYA]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



