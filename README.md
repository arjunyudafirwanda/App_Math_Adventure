# Math Adventure v1.1 — Matematika SD Kelas 1–6

Math Adventure adalah aplikasi web edukasi Matematika untuk siswa SD usia 6–12 tahun. Anak-anak berlatih berhitung dan memahami konsep Matematika melalui kuis bergambar dengan emoji buah, hewan, sayuran, bunga, serta ilustrasi bentuk dan benda sehari-hari.

## Fitur utama

- Input nama dan umur pemain (6–12 tahun); kelas ditentukan otomatis.
- Pilihan materi sesuai kelas.
- Setiap materi memiliki jumlah soal sesuai ketentuan:
  - Kelas 1: 10 soal per materi.
  - Kelas 2: 15 soal per materi.
  - Kelas 3: 20 soal per materi.
  - Kelas 4: 25 soal per materi.
  - Kelas 5: 30 soal per materi.
  - Kelas 6: 40 soal per materi.
- Total tersedia 27 pilihan materi dan 645 soal hasil generator variasi:
  - Kelas 1: 4 materi × 10 soal = 40 soal.
  - Kelas 2: 4 materi × 15 soal = 60 soal.
  - Kelas 3: 3 materi × 20 soal = 60 soal.
  - Kelas 4: 7 materi × 25 soal = 175 soal.
  - Kelas 5: 5 materi × 30 soal = 150 soal.
  - Kelas 6: 4 materi × 40 soal = 160 soal.
- Soal visual menggunakan buah, hewan, sayuran, bunga, dan benda geometri sesuai topik.
- Pilihan jawaban ganda dengan tiga kesempatan menjawab.
- Skor: 100 poin untuk benar pada percobaan pertama, 70 poin pada percobaan kedua, dan 40 poin pada percobaan ketiga.
- Level soal, skor, progres persentase, riwayat, dan skor terbaik untuk setiap materi.
- Profil pemain terpisah berdasarkan nama (tidak peka huruf besar/kecil) dan umur.
- Setiap login selalu menampilkan pilihan materi terlebih dahulu. Progres materi dipulihkan setelah anak memilih kartu materi yang diinginkan.
- Tema terang/gelap, animasi ringan, desain responsif desktop/tablet/ponsel, dan dukungan reduced motion.
- Tidak memerlukan server, database, akun, atau API.

## Pembaruan v1.1 — Tipografi lebih besar

- Ukuran teks diperbesar pada header, halaman sambutan/login, pilihan materi, kartu soal, pilihan jawaban, feedback, hasil, toast, dan footer.
- Ukuran font untuk tablet dan ponsel disesuaikan agar lebih mudah dibaca tanpa membuat tata letak melebar.
- Tema terang/gelap, animasi, dan dukungan `prefers-reduced-motion` tetap dipertahankan.

## Cara menjalankan

1. Ekstrak `Math_Adventure_v1.1.zip`.
2. Buka folder `Math_Adventure_v1.0` di Visual Studio Code.
3. Jalankan `index.html` menggunakan ekstensi Live Server. Bisa juga membuka `index.html` langsung di browser.
4. Masukkan nama dan umur pemain, lalu pilih materi.

## Struktur folder

```text
Math_Adventure_v1.1/
├── index.html
├── README.md
├── PANDUAN_MATERI.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── question-bank.js
    │   └── app.js
    └── images/
        ├── logo.svg
        └── favicon.svg
```

## Penyimpanan progres

Progres disimpan di `localStorage` browser menggunakan profil gabungan nama pemain dan umur. Setiap profil menyimpan sesi masing-masing materi, termasuk nomor soal, percobaan, jawaban/umpan balik terakhir, skor, progres, jumlah jawaban benar, dan skor terbaik. Saat pemain login kembali, halaman pilihan materi ditampilkan terlebih dahulu; progres baru dimuat ketika kartu materi dipilih.

Data tersimpan pada browser dan perangkat yang sama. Menghapus data situs/browser atau menggunakan perangkat/browser berbeda dapat menghilangkan atau tidak menampilkan progres yang tersimpan.

## Aturan pengerjaan

- Setiap soal menyediakan maksimal tiga kesempatan.
- Jawaban benar pada percobaan pertama memperoleh 100 poin, kedua 70 poin, dan ketiga 40 poin.
- Jika tiga kali belum benar, aplikasi menampilkan jawaban yang tepat beserta penjelasan, lalu pemain dapat melanjutkan.
- Persentase progres bertambah setelah soal berhasil dijawab atau setelah tiga kesempatan habis. Membuka soal baru tidak otomatis menambah progres.
- Pemain dapat kembali ke daftar materi kapan saja. Sesi materi yang belum selesai tetap tersimpan.
- Mengulang materi yang sudah selesai memulai sesi baru, tetapi skor terbaik tetap disimpan.

## Catatan pengembangan

- Bank soal dibuat secara deterministik dari generator pada `assets/js/question-bank.js`; setiap materi menghasilkan jumlah soal sesuai kelas.
- Aplikasi menggunakan JavaScript native dan tidak menjalankan kode eksternal dari pengguna.
- Ilustrasi objek menggunakan emoji agar ringan dan dapat digunakan tanpa mengunduh kumpulan gambar tambahan.
- Jika ingin mengembangkan bank soal menjadi soal statis/terverifikasi guru, ubah generator materi di `question-bank.js`.

## Kredit

Designed & Developed by **Arjun Yuda Firwanda**.
