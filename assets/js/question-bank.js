(() => {
  "use strict";

  const MATERIALS = {
    1: [
      {
        id: "g1-bilangan",
        title: "Bilangan & Nilai Tempat",
        icon: "🔢",
        color: "blue",
        kind: "g1_numbers",
        description:
          "Mengenal angka, menghitung benda, membandingkan, dan puluhan-satuan.",
        skill: "Membilang · Mengurutkan · Nilai tempat",
      },
      {
        id: "g1-operasi",
        title: "Penjumlahan & Pengurangan",
        icon: "🍎",
        color: "orange",
        kind: "g1_operations",
        description:
          "Belajar tambah dan kurang lewat buah, hewan, sayuran, serta bunga.",
        skill: "Tambah · Kurang · Soal cerita",
      },
      {
        id: "g1-geometri",
        title: "Bentuk di Sekitar Kita",
        icon: "🔺",
        color: "purple",
        kind: "g1_geometry",
        description:
          "Mengenal bangun datar dan bangun ruang dari benda sehari-hari.",
        skill: "Segitiga · Persegi · Lingkaran · Bangun ruang",
      },
      {
        id: "g1-pengukuran",
        title: "Pengukuran & Data",
        icon: "⏰",
        color: "green",
        kind: "g1_measure",
        description:
          "Membandingkan ukuran, mengenal waktu, hari, dan data gambar sederhana.",
        skill: "Panjang · Waktu · Hari · Piktogram",
      },
    ],
    2: [
      {
        id: "g2-bilangan",
        title: "Bilangan Cacah",
        icon: "🔢",
        color: "blue",
        kind: "g2_numbers",
        description:
          "Membaca bilangan sampai 999, nilai tempat, perbandingan, dan urutan.",
        skill: "Ratusan · Puluhan · Satuan · Urutan",
      },
      {
        id: "g2-operasi",
        title: "Operasi Hitung Dasar",
        icon: "🧺",
        color: "orange",
        kind: "g2_operations",
        description:
          "Penjumlahan, pengurangan, perkalian sebagai kelompok, dan pembagian.",
        skill: "Tambah · Kurang · Kali · Bagi",
      },
      {
        id: "g2-pengukuran",
        title: "Pengukuran Waktu & Berat",
        icon: "⚖️",
        color: "green",
        kind: "g2_measure",
        description:
          "Membaca jam, menghitung durasi, serta mengenal cm, m, gram, dan kilogram.",
        skill: "Waktu · Panjang · Berat",
      },
      {
        id: "g2-geometri",
        title: "Geometri & Pola",
        icon: "🧩",
        color: "purple",
        kind: "g2_geometry",
        description:
          "Mengenal sisi bangun, bangun ruang, pola, dan posisi benda.",
        skill: "Bangun datar · Bangun ruang · Pola",
      },
    ],
    3: [
      {
        id: "g3-bilangan",
        title: "Bilangan & Operasi Hitung",
        icon: "🧮",
        color: "blue",
        kind: "g3_numbers",
        description:
          "Operasi bilangan sampai ribuan, kalimat matematika, dan pecahan sederhana.",
        skill: "Nilai tempat · Operasi · Pecahan",
      },
      {
        id: "g3-pengukuran",
        title: "Pengukuran & Uang",
        icon: "🪙",
        color: "green",
        kind: "g3_measure",
        description:
          "Konversi panjang dan berat, waktu, serta hitung uang dalam jual beli.",
        skill: "Satuan · Waktu · Uang",
      },
      {
        id: "g3-geometri-data",
        title: "Geometri & Pengolahan Data",
        icon: "📐",
        color: "purple",
        kind: "g3_geometry_data",
        description:
          "Sudut, simetri, keliling, luas, serta membaca data sederhana.",
        skill: "Bangun datar · Sudut · Data",
      },
    ],
    4: [
      {
        id: "g4-bilangan",
        title: "Bilangan Cacah & Operasi",
        icon: "🧮",
        color: "blue",
        kind: "g4_numbers",
        description:
          "Nilai tempat bilangan besar serta operasi tambah, kurang, kali, dan bagi.",
        skill: "Bilangan besar · Operasi hitung",
      },
      {
        id: "g4-pecahan",
        title: "Pecahan",
        icon: "🍕",
        color: "orange",
        kind: "g4_fractions",
        description:
          "Mengenal, membandingkan, dan menghitung pecahan sederhana.",
        skill: "Pembilang · Penyebut · Operasi pecahan",
      },
      {
        id: "g4-faktor",
        title: "Kelipatan, Faktor, KPK & FPB",
        icon: "🔍",
        color: "purple",
        kind: "g4_factors",
        description: "Mencari kelipatan, faktor, bilangan prima, KPK, dan FPB.",
        skill: "Kelipatan · Faktor · KPK · FPB",
      },
      {
        id: "g4-pola",
        title: "Pola Gambar & Bilangan",
        icon: "🟣",
        color: "pink",
        kind: "g4_patterns",
        description:
          "Menemukan aturan dan melanjutkan pola bilangan maupun gambar.",
        skill: "Pola · Aturan · Prediksi",
      },
      {
        id: "g4-pengukuran",
        title: "Pengukuran",
        icon: "📏",
        color: "green",
        kind: "g4_measure",
        description:
          "Mengukur panjang, berat, waktu, sudut, luas, dan volume sederhana.",
        skill: "Satuan · Sudut · Luas · Volume",
      },
      {
        id: "g4-geometri",
        title: "Bangun Datar & Simetri",
        icon: "📐",
        color: "purple",
        kind: "g4_geometry",
        description: "Sifat bangun datar, keliling, luas, dan simetri.",
        skill: "Keliling · Luas · Simetri",
      },
      {
        id: "g4-data",
        title: "Penyajian Data",
        icon: "📊",
        color: "teal",
        kind: "g4_data",
        description: "Membaca piktogram, tabel, dan diagram batang sederhana.",
        skill: "Tabel · Piktogram · Diagram batang",
      },
    ],
    5: [
      {
        id: "g5-bilangan",
        title: "Bilangan, KPK & FPB",
        icon: "🔢",
        color: "blue",
        kind: "g5_numbers",
        description:
          "Bilangan besar, operasi campuran, bilangan prima, KPK, dan FPB.",
        skill: "Bilangan · Operasi campuran · Faktor",
      },
      {
        id: "g5-pecahan-desimal",
        title: "Pecahan & Desimal",
        icon: "🍰",
        color: "orange",
        kind: "g5_fractions",
        description:
          "Operasi pecahan dan desimal serta hubungan berbagai bentuk bilangan.",
        skill: "Pecahan · Desimal · Operasi",
      },
      {
        id: "g5-pengukuran-rasio",
        title: "Pengukuran & Perbandingan",
        icon: "🚴",
        color: "green",
        kind: "g5_measure_ratio",
        description: "Jarak, waktu, kecepatan, satuan, dan rasio sederhana.",
        skill: "Konversi · Kecepatan · Rasio",
      },
      {
        id: "g5-geometri",
        title: "Geometri",
        icon: "📐",
        color: "purple",
        kind: "g5_geometry",
        description:
          "Keliling dan luas bangun datar serta volume kubus dan balok.",
        skill: "Luas · Keliling · Volume",
      },
      {
        id: "g5-data",
        title: "Data & Diagram",
        icon: "📊",
        color: "teal",
        kind: "g5_data",
        description:
          "Mengumpulkan, membaca, dan menyajikan data dalam tabel serta diagram.",
        skill: "Tabel · Diagram · Rata-rata",
      },
    ],
    6: [
      {
        id: "g6-pecahan-desimal",
        title: "Pecahan & Desimal",
        icon: "🍰",
        color: "orange",
        kind: "g6_fractions",
        description:
          "Perkalian dan pembagian pecahan serta membandingkan bilangan desimal.",
        skill: "Operasi pecahan · Desimal",
      },
      {
        id: "g6-rasio",
        title: "Rasio & Perbandingan",
        icon: "⚖️",
        color: "green",
        kind: "g6_ratio",
        description:
          "Menyederhanakan rasio, rasio satuan, perbandingan, dan skala.",
        skill: "Rasio · Skala · Rasio satuan",
      },
      {
        id: "g6-bangun-ruang",
        title: "Bangun Ruang",
        icon: "🧊",
        color: "purple",
        kind: "g6_solids",
        description:
          "Ciri, jaring-jaring, luas permukaan, dan volume kubus serta balok.",
        skill: "Jaring-jaring · Luas permukaan · Volume",
      },
      {
        id: "g6-data-peluang",
        title: "Data & Peluang",
        icon: "🎲",
        color: "teal",
        kind: "g6_data_chance",
        description:
          "Membaca data, menentukan rata-rata, dan memahami peluang sederhana.",
        skill: "Data · Rata-rata · Peluang",
      },
    ],
  };

  const OBJECTS = [
    "🍎",
    "🍌",
    "🍊",
    "🍓",
    "🐰",
    "🐱",
    "🐼",
    "🐸",
    "🥕",
    "🥦",
    "🌽",
    "🍅",
    "🌻",
    "🌷",
    "🌹",
    "🌼",
  ];
  const OBJECT_LABELS = {
    "🍎": { name: "apel", unit: "buah" },
    "🍌": { name: "pisang", unit: "buah" },
    "🍊": { name: "jeruk", unit: "buah" },
    "🍓": { name: "stroberi", unit: "buah" },
    "🐰": { name: "kelinci", unit: "ekor" },
    "🐱": { name: "kucing", unit: "ekor" },
    "🐼": { name: "panda", unit: "ekor" },
    "🐸": { name: "katak", unit: "ekor" },
    "🥕": { name: "wortel", unit: "batang" },
    "🥦": { name: "brokoli", unit: "buah" },
    "🌽": { name: "jagung", unit: "tongkol" },
    "🍅": { name: "tomat", unit: "buah" },
    "🌻": { name: "bunga matahari", unit: "bunga" },
    "🌷": { name: "tulip", unit: "bunga" },
    "🌹": { name: "mawar", unit: "bunga" },
    "🌼": { name: "bunga", unit: "bunga" },
  };
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function hashSeed(text) {
    let hash = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function seededShuffle(items, seed) {
    const result = [...items];
    let state = seed >>> 0;
    const random = () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function makeQuestion(
    prompt,
    answer,
    distractors,
    explanation,
    visual = "",
    hint = "",
  ) {
    const correct = String(answer);
    const candidates = [correct, ...distractors.map(String)];
    const unique = [...new Set(candidates)].slice(0, 4);
    while (unique.length < 4)
      unique.push(`${correct} (pilihan ${unique.length + 1})`);
    const options = seededShuffle(unique, hashSeed(`${prompt}|${correct}`));
    return { prompt, answer: correct, options, explanation, visual, hint };
  }

  function numericQuestion(
    prompt,
    answer,
    explanation,
    visual = "",
    unit = "",
    hint = "",
  ) {
    const n = Number(answer);
    const candidates = [
      n + 1,
      Math.max(0, n - 1),
      n + 2,
      Math.max(0, n - 2),
      n + 5,
      Math.max(0, n - 5),
    ];
    const distractors = [...new Set(candidates.filter((v) => v !== n))].slice(
      0,
      3,
    );
    const suffix = unit ? ` ${unit}` : "";
    return makeQuestion(
      prompt,
      `${n}${suffix}`,
      distractors.map((v) => `${v}${suffix}`),
      explanation,
      visual,
      hint,
    );
  }

  function formatMoney(value) {
    return `Rp${Number(value).toLocaleString("id-ID")}`;
  }
  function objectVisual(icon, count) {
    return Array.from({ length: clamp(count, 1, 12) }, () => icon).join(" ");
  }
  function plusVisual(icon, a, b) {
    return `${objectVisual(icon, a)}　+　${objectVisual(icon, b)}`;
  }
  function timesVisual(icon, groups, each) {
    return Array.from({ length: groups }, () => objectVisual(icon, each)).join(
      "　　",
    );
  }

  function generateOne(kind, i) {
    const r = Math.floor(i / 6);
    const p = i % 6;
    const obj = OBJECTS[(i * 3 + kind.length) % OBJECTS.length];
    switch (kind) {
      case "g1_numbers": {
        const n = 3 + ((i * 3 + r) % 17);
        if (p === 0) {
          const count = 3 + ((i * 2 + r) % 8);
          return numericQuestion(
            `Ada berapa ${obj} pada gambar?`,
            count,
            `Kita menghitung satu per satu. Jumlahnya ${count}.`,
            objectVisual(obj, count),
          );
        }
        if (p === 1)
          return numericQuestion(
            `Bilangan setelah ${n} adalah ...`,
            n + 1,
            `Setelah ${n} adalah ${n + 1}.`,
          );
        if (p === 2)
          return numericQuestion(
            `Bilangan sebelum ${n} adalah ...`,
            n - 1,
            `Satu angka sebelum ${n} adalah ${n - 1}.`,
          );
        if (p === 3)
          return makeQuestion(
            `Bilangan yang lebih besar dari ${n} adalah ...`,
            String(n + 2),
            [String(n - 1), String(n + 1), String(Math.max(1, n - 2))],
            `${n + 2} lebih besar daripada ${n}.`,
          );
        if (p === 4)
          return makeQuestion(
            `${n} terdiri dari ...`,
            `${Math.floor(n / 10)} puluhan dan ${n % 10} satuan`,
            [
              `${Math.floor(n / 10) + 1} puluhan dan ${n % 10} satuan`,
              `${Math.floor(n / 10)} puluhan dan ${(n + 1) % 10} satuan`,
              `${n} puluhan dan 0 satuan`,
            ],
            `Angka puluhan menunjukkan kelompok sepuluh, sisanya satuan.`,
          );
        return makeQuestion(
          `Urutan bilangan yang benar dari kecil ke besar adalah ...`,
          `${n - 2}, ${n - 1}, ${n}`,
          [
            `${n}, ${n - 1}, ${n - 2}`,
            `${n - 1}, ${n - 2}, ${n}`,
            `${n - 2}, ${n}, ${n - 1}`,
          ],
          `Urutan naik berarti dimulai dari bilangan terkecil.`,
        );
      }
      case "g1_operations": {
        const a = 2 + ((i * 2 + r) % 8);
        const b = 1 + ((i * 3 + 1) % 7);
        const subtract = p % 2 === 1;
        const x = subtract ? Math.max(a, b) : a;
        const y = subtract ? Math.min(a, b) : b;
        const ans = subtract ? x - y : x + y;
        const icon = OBJECTS[(i + p * 2) % OBJECTS.length];
        const object = OBJECT_LABELS[icon] || { name: "benda", unit: "buah" };
        const visual = subtract
          ? `${objectVisual(icon, x)}　−　${objectVisual(icon, y)}`
          : plusVisual(icon, x, y);
        const prompt = subtract
          ? `Ada ${x} ${object.name} ${icon}. Lalu ${y} ${object.name} diambil. Berapa ${object.unit} yang tersisa?`
          : `Ada ${x} ${object.name} ${icon}. Datang lagi ${y} ${object.name}. Berapa jumlahnya sekarang?`;
        return numericQuestion(
          prompt,
          ans,
          subtract
            ? `Kita kurangi ${x} dengan ${y}, hasilnya ${ans}.`
            : `Kita jumlahkan ${x} dan ${y}, hasilnya ${ans}.`,
          visual,
          object.unit,
          subtract
            ? "Hitung benda yang tersisa."
            : "Gabungkan kedua kelompok benda.",
        );
      }
      case "g1_geometry": {
        const shapes = [
          ["segitiga", "3 sisi", "4 sisi", "0 sisi", "2 sisi"],
          [
            "persegi",
            "4 sisi sama panjang",
            "3 sisi",
            "1 sisi lengkung",
            "5 sisi",
          ],
          [
            "lingkaran",
            "tidak memiliki sudut",
            "3 sudut",
            "4 sudut",
            "5 sudut",
          ],
          [
            "kubus",
            "6 sisi berbentuk persegi",
            "1 sisi lingkaran",
            "2 sisi segitiga",
            "4 sisi lengkung",
          ],
          [
            "bola",
            "berbentuk bulat",
            "memiliki 6 sisi persegi",
            "memiliki 4 sudut",
            "berbentuk tabung",
          ],
          [
            "tabung",
            "memiliki dua sisi berbentuk lingkaran",
            "memiliki 3 titik sudut",
            "memiliki 6 sisi persegi",
            "tidak memiliki sisi",
          ],
        ];
        const s = shapes[(p + r) % shapes.length];
        const shapeIcons = {
          segitiga: "🔺",
          persegi: "🟦",
          lingkaran: "⚪",
          kubus: "🧊",
          bola: "⚽",
          tabung: "🥫",
        };
        return makeQuestion(
          p < 3
            ? `Bangun ${s[0]} memiliki ciri ...`
            : `Benda berbentuk ${s[0]} memiliki ciri ...`,
          s[1],
          s.slice(2),
          `Ciri yang tepat untuk ${s[0]} adalah ${s[1]}.`,
          shapeIcons[s[0]],
        );
      }
      case "g1_measure": {
        const dayNames = [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ];
        const length = 20 + (r % 6) * 5;
        const flowerA = 2 + (r % 4);
        const flowerB = 1 + (r % 3);
        const cases = [
          () => {
            const periods = [
              {
                prompt: "Matahari terbit pada waktu ...",
                answer: "pagi",
                wrong: ["malam", "siang", "tengah malam"],
              },
              {
                prompt: "Matahari berada tinggi di langit pada waktu ...",
                answer: "siang",
                wrong: ["malam", "dini hari", "tengah malam"],
              },
              {
                prompt: "Bintang biasanya terlihat jelas pada waktu ...",
                answer: "malam",
                wrong: ["pagi", "siang", "sore"],
              },
            ];
            const item = periods[r % periods.length];
            return makeQuestion(
              item.prompt,
              item.answer,
              item.wrong,
              item.answer === "malam" ? "🌙 ✨" : "🌅 ☀️",
              "Pagi, siang, dan malam adalah bagian waktu dalam sehari.",
            );
          },
          () => {
            const day = dayNames[r % 7];
            return makeQuestion(
              `Setelah hari ${day} adalah ...`,
              dayNames[(r + 1) % 7],
              [
                dayNames[(r + 2) % 7],
                dayNames[(r + 3) % 7],
                dayNames[(r + 5) % 7],
              ],
              `Urutan hari setelah ${day} adalah ${dayNames[(r + 1) % 7]}.`,
            );
          },
          () =>
            makeQuestion(
              `Mana yang lebih panjang: penggaris ${length} cm atau penghapus 4 cm?`,
              `Penggaris ${length} cm`,
              [`Penghapus 4 cm`, "Keduanya sama", "Tidak dapat dibandingkan"],
              `${length} cm lebih panjang daripada 4 cm.`,
              "📏　🧽",
            ),
          () =>
            makeQuestion(
              `Jika ada ${flowerA} bunga 🌷 dan ${flowerB} bunga 🌻, jumlah semua bunga adalah ...`,
              `${flowerA + flowerB} bunga`,
              [
                `${flowerA + flowerB + 1} bunga`,
                `${Math.max(1, flowerA + flowerB - 1)} bunga`,
                `${flowerA + flowerB + 2} bunga`,
              ],
              `Jumlah bunga adalah ${flowerA} + ${flowerB} = ${flowerA + flowerB}.`,
              `${objectVisual("🌷", flowerA)}　${objectVisual("🌻", flowerB)}`,
            ),
          () => {
            const activities = [
              {
                prompt: "Kita biasanya makan malam pada waktu ...",
                answer: "malam",
                wrong: ["pagi", "siang", "subuh"],
              },
              {
                prompt: "Kita biasanya sarapan pada waktu ...",
                answer: "pagi",
                wrong: ["malam", "tengah malam", "larut malam"],
              },
              {
                prompt: "Matahari terbenam pada waktu menjelang ...",
                answer: "malam",
                wrong: ["pagi", "siang", "tengah hari"],
              },
            ];
            const item = activities[r % activities.length];
            return makeQuestion(
              item.prompt,
              item.answer,
              item.wrong,
              item.answer === "malam" ? "🌙" : "🥣 ☀️",
              "Kenali kegiatan dan keadaan alam pada pagi atau malam hari.",
            );
          },
          () => {
            const tools = [
              {
                prompt: "Alat untuk mengukur panjang meja adalah ...",
                answer: "penggaris atau meteran",
                wrong: ["gelas", "piring", "sendok"],
              },
              {
                prompt: "Alat untuk mengetahui berat badan adalah ...",
                answer: "timbangan",
                wrong: ["penggaris", "jam", "termometer"],
              },
              {
                prompt: "Alat untuk melihat waktu adalah ...",
                answer: "jam",
                wrong: ["penghapus", "gelas", "sapu"],
              },
            ];
            const item = tools[r % tools.length];
            return makeQuestion(
              item.prompt,
              item.answer,
              item.wrong,
              "📏 ⚖️ ⏰",
              "Setiap alat memiliki fungsi pengukuran yang berbeda.",
            );
          },
        ];
        return cases[p]();
      }
      case "g2_numbers": {
        const n = 120 + ((i * 37 + r * 11) % 780);
        if (p === 0)
          return numericQuestion(
            `Nilai angka puluhan pada bilangan ${n} adalah ...`,
            (Math.floor(n / 10) % 10) * 10,
            `Angka puluhan dikalikan 10.`,
            "🔢",
          );
        if (p === 1)
          return makeQuestion(
            `Tanda yang tepat untuk ${n} ... ${n + 8} adalah`,
            "<",
            [">", "=", "≤"],
            `${n} lebih kecil dari ${n + 8}.`,
          );
        if (p === 2)
          return numericQuestion(
            `Bilangan ${n} ditambah 1 menjadi ...`,
            n + 1,
            `Satu lebih besar dari ${n} adalah ${n + 1}.`,
          );
        if (p === 3) {
          const hundreds = Math.floor(n / 100);
          const distractors = [1, 2, 3].map((step) =>
            String((hundreds + step) % 10),
          );
          return makeQuestion(
            `Angka ratusan pada bilangan ${n} adalah ...`,
            String(hundreds),
            distractors,
            `Angka ratusan adalah angka pertama dari kiri pada bilangan tiga angka.`,
          );
        }
        if (p === 4)
          return makeQuestion(
            `Urutan dari terbesar untuk ${n}, ${n + 5}, ${n - 3} adalah ...`,
            `${n + 5}, ${n}, ${n - 3}`,
            [
              `${n - 3}, ${n}, ${n + 5}`,
              `${n}, ${n + 5}, ${n - 3}`,
              `${n + 5}, ${n - 3}, ${n}`,
            ],
            `Urutan terbesar dimulai dari ${n + 5}.`,
          );
        return numericQuestion(
          `Bilangan ${n} memiliki berapa satuan?`,
          n % 10,
          `Angka satuannya adalah angka paling kanan.`,
        );
      }
      case "g2_operations": {
        const a = 12 + ((i * 7 + r) % 60);
        const b = 2 + ((i * 3 + 2) % 12);
        if (p === 0)
          return numericQuestion(
            `${a} + ${b} = ...`,
            a + b,
            `Jumlah ${a} dan ${b} adalah ${a + b}.`,
          );
        if (p === 1)
          return numericQuestion(
            `${a + b} − ${b} = ...`,
            a,
            `Kurangi ${a + b} dengan ${b}, hasilnya ${a}.`,
          );
        if (p === 2) {
          const groups = 2 + (r % 4);
          const each = 2 + ((i + r) % 4);
          return numericQuestion(
            `${groups} kelompok, setiap kelompok berisi ${each} apel. Berapa semua apel?`,
            groups * each,
            `Perkalian adalah penjumlahan berulang: ${groups} × ${each} = ${groups * each}.`,
            timesVisual("🍎", groups, each),
          );
        }
        if (p === 3) {
          const each = 2 + (r % 5);
          const total = each * b;
          return numericQuestion(
            `${total} kue dibagi sama banyak kepada ${b} anak. Setiap anak mendapat ... kue.`,
            each,
            `Pembagian sama rata: ${total} ÷ ${b} = ${each}.`,
            "🍪　👧 👦",
          );
        }
        if (p === 4)
          return numericQuestion(
            `${a} + ${a} = ...`,
            a * 2,
            `Dua kelompok yang sama: ${a} + ${a} = ${a * 2}.`,
          );
        {
          const carrots = 3 + (r % 6);
          const more = 1 + (i % 5);
          return numericQuestion(
            `Ada ${carrots} wortel 🥕. Ibu menambah ${more} wortel lagi. Berapa semuanya?`,
            carrots + more,
            `Tambahkan ${carrots} dan ${more}.`,
            plusVisual("🥕", carrots, more),
          );
        }
      }
      case "g2_measure": {
        const hours = 2 + (r % 4);
        const meters = 2 + (r % 5);
        const kilograms = 1 + (r % 4);
        const hourOnClock = 2 + (r % 10);
        const cases = [
          () =>
            numericQuestion(
              `${hours} jam sama dengan ... menit`,
              hours * 60,
              `1 jam = 60 menit, jadi ${hours} × 60 = ${hours * 60}.`,
              "🕑",
              "menit",
            ),
          () =>
            numericQuestion(
              `${meters} meter sama dengan ... sentimeter`,
              meters * 100,
              "1 meter = 100 sentimeter.",
              "📏",
              "cm",
            ),
          () =>
            numericQuestion(
              `${kilograms} kilogram sama dengan ... gram`,
              kilograms * 1000,
              "1 kilogram = 1.000 gram.",
              "⚖️",
              "gram",
            ),
          () =>
            makeQuestion(
              `Jarum pendek pada angka ${hourOnClock} dan jarum panjang pada angka 12 menunjukkan pukul ...`,
              `${String(hourOnClock).padStart(2, "0")}.00`,
              [
                `${String((hourOnClock % 12) + 1).padStart(2, "0")}.00`,
                `${String(hourOnClock).padStart(2, "0")}.30`,
                "12.15",
              ],
              "Jarum panjang di angka 12 berarti tepat jam.",
              "🕒",
            ),
          () =>
            numericQuestion(
              "Satu hari terdiri dari ... jam",
              24,
              "Satu hari terdiri dari 24 jam.",
              "🌞 🌙",
              "jam",
            ),
          () =>
            numericQuestion(
              "60 detik sama dengan ... menit",
              1,
              "60 detik sama dengan 1 menit.",
              "⏱️",
              "menit",
            ),
        ];
        return cases[p]();
      }
      case "g2_geometry": {
        const cases = [
          () => {
            const shapes = [
              { name: "persegi", sides: 4, icon: "🟦" },
              { name: "persegi panjang", sides: 4, icon: "▭" },
              { name: "segitiga", sides: 3, icon: "🔺" },
            ];
            const shape = shapes[r % shapes.length];
            return numericQuestion(
              `Bangun ${shape.name} memiliki ... sisi`,
              shape.sides,
              `${shape.name} mempunyai ${shape.sides} sisi.`,
              shape.icon,
              "sisi",
            );
          },
          () => {
            const shapes = [
              { name: "segitiga", corners: 3, icon: "🔺" },
              { name: "persegi panjang", corners: 4, icon: "▭" },
              { name: "persegi", corners: 4, icon: "🟦" },
            ];
            const shape = shapes[r % shapes.length];
            return numericQuestion(
              `${shape.name[0].toUpperCase() + shape.name.slice(1)} memiliki ... sudut`,
              shape.corners,
              `${shape.name} memiliki ${shape.corners} sudut.`,
              shape.icon,
              "sudut",
            );
          },
          () => {
            const objects = [
              {
                item: "dadu",
                answer: "kubus",
                wrong: ["bola", "tabung", "kerucut"],
                icon: "🎲",
              },
              {
                item: "kaleng susu",
                answer: "tabung",
                wrong: ["kubus", "bola", "limas"],
                icon: "🥫",
              },
              {
                item: "bola sepak",
                answer: "bola",
                wrong: ["kubus", "tabung", "balok"],
                icon: "⚽",
              },
            ];
            const item = objects[r % objects.length];
            return makeQuestion(
              `Benda seperti ${item.item} berbentuk ...`,
              item.answer,
              item.wrong,
              item.icon,
              "Bangun ruang dapat dikenali dari bentuk benda di sekitar kita.",
            );
          },
          () => {
            const patterns = [
              {
                seq: "🔴 🔵 🔴 🔵",
                answer: "merah 🔴",
                wrong: ["hijau 🟢", "kuning 🟡", "ungu 🟣"],
              },
              {
                seq: "⭐ 🌙 ⭐ 🌙",
                answer: "bintang ⭐",
                wrong: ["matahari ☀️", "bulan 🌙", "awan ☁️"],
              },
              {
                seq: "🍎 🍌 🍎 🍌",
                answer: "apel 🍎",
                wrong: ["pisang 🍌", "jeruk 🍊", "anggur 🍇"],
              },
            ];
            const item = patterns[r % patterns.length];
            return makeQuestion(
              `Perhatikan pola ${item.seq}. Gambar berikutnya adalah ...`,
              item.answer,
              item.wrong,
              item.seq + "　❓",
              "Pola berulang mengikuti urutan yang sama.",
            );
          },
          () => {
            const positions = [
              {
                prompt: "Buku berada di atas meja. Posisi buku adalah ...",
                answer: "di atas meja",
                wrong: ["di bawah meja", "di dalam meja", "di belakang meja"],
              },
              {
                prompt:
                  "Sepatu disimpan di bawah rak. Posisi sepatu adalah ...",
                answer: "di bawah rak",
                wrong: ["di atas rak", "di dalam rak", "di depan rak"],
              },
              {
                prompt: "Bola berada di dalam kotak. Posisi bola adalah ...",
                answer: "di dalam kotak",
                wrong: ["di atas kotak", "di belakang kotak", "di bawah meja"],
              },
            ];
            const item = positions[r % positions.length];
            return makeQuestion(
              item.prompt,
              item.answer,
              item.wrong,
              "📚 📦 ⚽",
              "Kata posisi menjelaskan letak suatu benda.",
            );
          },
          () => {
            const shapes = [
              {
                prompt: "Bangun datar yang tidak memiliki sudut adalah ...",
                answer: "lingkaran",
                wrong: ["persegi", "segitiga", "persegi panjang"],
                icon: "⚪",
              },
              {
                prompt: "Bangun datar yang memiliki 3 sudut adalah ...",
                answer: "segitiga",
                wrong: ["lingkaran", "persegi", "persegi panjang"],
                icon: "🔺",
              },
              {
                prompt: "Bangun datar yang memiliki 4 sudut adalah ...",
                answer: "persegi",
                wrong: ["lingkaran", "segitiga", "setengah lingkaran"],
                icon: "🟦",
              },
            ];
            const item = shapes[r % shapes.length];
            return makeQuestion(
              item.prompt,
              item.answer,
              item.wrong,
              item.icon,
              "Hitung sudut pada bangun datar.",
            );
          },
        ];
        return cases[p]();
      }
      case "g3_numbers": {
        const n = 1200 + ((i * 173 + r * 37) % 7800);
        if (p === 0)
          return numericQuestion(
            `${n} + ${240 + r * 3} = ...`,
            n + 240 + r * 3,
            "Jumlahkan kedua bilangan.",
          );
        if (p === 1)
          return numericQuestion(
            `${n + 500} − ${n} = ...`,
            500,
            "Selisih kedua bilangan adalah 500.",
          );
        if (p === 2)
          return makeQuestion(
            "Nilai angka 7 pada bilangan 7.325 adalah ...",
            "7.000",
            ["7", "70", "700"],
            "Angka 7 berada pada tempat ribuan, jadi nilainya 7.000.",
          );
        if (p === 3)
          return numericQuestion(
            `Jika □ + ${12 + r} = ${30 + r}, nilai □ adalah ...`,
            18,
            `Cari selisih ${30 + r} dan ${12 + r}.`,
          );
        if (p === 4)
          return makeQuestion(
            `Pecahan yang menunjukkan satu dari empat bagian sama besar adalah ...`,
            "1/4",
            ["1/2", "2/4", "3/4"],
            "Satu bagian dari empat bagian sama besar ditulis 1/4.",
            "🍕 dibagi 4",
          );
        return makeQuestion(
          `Manakah pecahan yang lebih besar?`,
          "3/4",
          ["1/4", "1/2", "2/4"],
          "Tiga perempat lebih besar daripada satu perempat maupun setengah.",
        );
      }
      case "g3_measure": {
        const km = 2 + (r % 5);
        const kg = 2 + (r % 4);
        const hours = 1 + (r % 3);
        const extraMinutes = 15 + (r % 3) * 15;
        const price = 2000 + (r % 4) * 1000;
        const paid = price + 3000;
        const meters = 1 + (r % 5);
        const cases = [
          () =>
            numericQuestion(
              `${km} kilometer sama dengan ... meter`,
              km * 1000,
              `1 km = 1.000 m, jadi ${km} × 1.000 = ${km * 1000}.`,
              "🛣️",
              "m",
            ),
          () =>
            numericQuestion(
              `${kg} kilogram sama dengan ... gram`,
              kg * 1000,
              `1 kg = 1.000 gram, jadi ${kg} × 1.000 = ${kg * 1000}.`,
              "⚖️",
              "gram",
            ),
          () =>
            numericQuestion(
              `${hours} jam ${extraMinutes} menit sama dengan ... menit`,
              hours * 60 + extraMinutes,
              `${hours} × 60 + ${extraMinutes} = ${hours * 60 + extraMinutes} menit.`,
              "🕒",
              "menit",
            ),
          () =>
            makeQuestion(
              `${formatMoney(price)} + Rp2.000 = ...`,
              formatMoney(price + 2000),
              [
                formatMoney(price + 1000),
                formatMoney(price + 3000),
                formatMoney(price + 4000),
              ],
              `Jumlah uangnya ${formatMoney(price + 2000)}.`,
              "💵",
            ),
          () =>
            makeQuestion(
              `Harga buku ${formatMoney(price)}. Jika membayar ${formatMoney(paid)}, kembaliannya ...`,
              formatMoney(paid - price),
              [
                formatMoney(paid - price - 1000),
                formatMoney(paid - price + 1000),
                formatMoney(paid - price + 2000),
              ],
              `Kembalian = uang dibayar − harga, yaitu ${formatMoney(paid - price)}.`,
              "📘 💵",
            ),
          () =>
            numericQuestion(
              `${meters} meter sama dengan ... sentimeter`,
              meters * 100,
              `1 m = 100 cm, jadi ${meters} × 100 = ${meters * 100}.`,
              "📏",
              "cm",
            ),
        ];
        return cases[p]();
      }
      case "g3_geometry_data": {
        const n = 4 + (r % 8);
        const cases = [
          () =>
            numericQuestion(
              `Persegi memiliki sisi ${n} cm. Kelilingnya ...`,
              4 * n,
              `Keliling persegi = 4 × sisi = ${4 * n} cm.`,
              "🟦",
              "cm",
            ),
          () =>
            numericQuestion(
              `Persegi panjang berukuran ${n} cm × 3 cm. Luasnya ...`,
              n * 3,
              `Luas = panjang × lebar = ${n * 3} cm².`,
              "▭",
              "cm²",
            ),
          () =>
            makeQuestion(
              "Sudut yang besarnya 90° disebut sudut ...",
              "siku-siku",
              ["lancip", "tumpul", "lurus"],
              "Sudut 90° adalah sudut siku-siku.",
              "📐",
            ),
          () =>
            makeQuestion(
              "Bangun yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah ...",
              "persegi",
              ["segitiga", "lingkaran", "trapesium"],
              "Persegi memiliki empat sisi sama panjang.",
              "🟦",
            ),
          () =>
            numericQuestion(
              `Data buah: apel ${n}, jeruk ${n + 2}. Buah yang lebih banyak jumlahnya adalah jeruk sebanyak ...`,
              n + 2,
              "Jumlah jeruk adalah angka yang ditampilkan pada data.",
              "🍎　🍊",
            ),
          () =>
            makeQuestion(
              "Bangun datar yang mempunyai 2 simetri lipat adalah ...",
              "persegi panjang",
              ["segitiga sembarang", "jajar genjang", "lingkaran"],
              "Persegi panjang memiliki dua simetri lipat.",
              "▭",
            ),
        ];
        return cases[p]();
      }
      case "g4_numbers": {
        const n = 12500 + i * 137 + r * 211;
        const cases = [
          () =>
            numericQuestion(
              `${n.toLocaleString("id-ID")} + 2.450 = ...`,
              n + 2450,
              "Jumlahkan kedua bilangan.",
            ),
          () =>
            numericQuestion(
              `${n + 5000} − ${n} = ...`,
              5000,
              "Selisih kedua bilangan adalah 5.000.",
            ),
          () =>
            numericQuestion(
              `${120 + r * 5} × 6 = ...`,
              (120 + r * 5) * 6,
              "Kalikan bilangan dengan 6.",
            ),
          () =>
            numericQuestion(
              `${3600 + r * 60} ÷ 6 = ...`,
              (3600 + r * 60) / 6,
              "Bagikan bilangan dengan 6.",
            ),
          () =>
            makeQuestion(
              "Nilai angka 8 pada bilangan 284.615 adalah ...",
              "80.000",
              ["8", "800", "8.000"],
              "Angka 8 berada pada posisi puluh ribuan.",
            ),
          () =>
            numericQuestion(
              `Bilangan ${n} dibulatkan ke ribuan terdekat menjadi ...`,
              Math.round(n / 1000) * 1000,
              "Lihat tiga angka terakhir untuk pembulatan ribuan.",
            ),
        ];
        return cases[p]();
      }
      case "g4_fractions": {
        const d = 4 + 2 * (r % 3);
        const numerator = 1 + (r % 2);
        const cases = [
          () =>
            makeQuestion(
              `Pecahan yang lebih besar antara 1/2 dan 1/${d} adalah ...`,
              "1/2",
              [`1/${d}`, "keduanya sama", "tidak dapat dibandingkan"],
              `Setengah lebih besar daripada satu per ${d}.`,
              "🍕",
            ),
          () =>
            makeQuestion(
              `${numerator}/${d} + 1/${d} = ...`,
              `${numerator + 1}/${d}`,
              [
                `${numerator + 1}/${d + 1}`,
                `${Math.max(1, numerator)}/${d + 1}`,
                `${numerator + 2}/${d + 1}`,
              ],
              "Penyebut sama, jumlahkan pembilang.",
            ),
          () =>
            makeQuestion(
              `${numerator + 2}/${d} − 1/${d} = ...`,
              `${numerator + 1}/${d}`,
              [
                `${numerator + 1}/${d + 1}`,
                `${Math.max(1, numerator)}/${d}`,
                `${numerator + 2}/${d + 1}`,
              ],
              "Penyebut sama, kurangi pembilang.",
            ),
          () =>
            makeQuestion(
              `Angka ${numerator + 2} pada pecahan ${numerator + 2}/${d + 2} disebut ...`,
              "pembilang",
              ["penyebut", "bilangan bulat", "pembagi"],
              "Pembilang terletak di atas garis pecahan.",
            ),
          () =>
            makeQuestion(
              `Angka ${d + 2} pada pecahan ${numerator}/${d + 2} disebut ...`,
              "penyebut",
              ["pembilang", "hasil bagi", "hasil kali"],
              "Penyebut terletak di bawah garis pecahan.",
            ),
          () =>
            makeQuestion(
              `Pecahan yang senilai dengan 1/2 adalah ...`,
              `${d / 2}/${d}`,
              [`${d / 2}/${d + 1}`, `${d / 2 + 1}/${d}`, `${d / 2 - 1}/${d}`],
              "Pecahan senilai diperoleh dengan mengalikan pembilang dan penyebut dengan bilangan yang sama.",
            ),
        ];
        return cases[p]();
      }
      case "g4_factors": {
        const n = 2 + (r % 5);
        const cases = [
          () =>
            numericQuestion(
              `Kelipatan ${n} yang ke-4 adalah ...`,
              n * 4,
              `Kelipatan keempat ${n} adalah ${n} × 4.`,
            ),
          () =>
            numericQuestion(
              `Faktor terbesar dari ${n * 12} selain bilangan itu sendiri adalah ...`,
              n * 6,
              `Faktor membagi habis bilangan tersebut.`,
            ),
          () =>
            numericQuestion(
              `KPK dari ${n} dan ${n * 2 + 2} adalah ...`,
              lcm(n, n * 2 + 2),
              "KPK adalah kelipatan persekutuan terkecil.",
            ),
          () =>
            numericQuestion(
              `FPB dari ${n * 6} dan ${n * 9} adalah ...`,
              n * 3,
              "FPB adalah faktor persekutuan terbesar.",
            ),
          () =>
            makeQuestion(
              "Bilangan prima di bawah ini adalah ...",
              "13",
              ["12", "15", "21"],
              "13 hanya memiliki dua faktor, yaitu 1 dan 13.",
            ),
          () =>
            makeQuestion(
              `Apakah ${n * 2} merupakan kelipatan ${n}?`,
              "Ya",
              ["Tidak", "Kadang-kadang", "Tidak dapat diketahui"],
              `${n} × 2 = ${n * 2}, jadi benar.`,
            ),
        ];
        return cases[p]();
      }
      case "g4_patterns": {
        const start = 3 + r * 2;
        const step = 2 + (r % 5);
        const flowerPatterns = [
          {
            sequence: "🌻 🌷 🌻 🌷 🌻",
            answer: "🌷",
            wrong: ["🌻", "🌹", "🌼"],
          },
          {
            sequence: "🌹 🌼 🌼 🌹 🌼 🌼",
            answer: "🌹",
            wrong: ["🌼", "🌷", "🌻"],
          },
          {
            sequence: "🌷 🌹 🌼 🌷 🌹 🌼",
            answer: "🌷",
            wrong: ["🌹", "🌼", "🌻"],
          },
          {
            sequence: "🌼 🌻 🌻 🌼 🌻 🌻",
            answer: "🌼",
            wrong: ["🌻", "🌹", "🌷"],
          },
          {
            sequence: "🌻 🌹 🌷 🌻 🌹 🌷",
            answer: "🌻",
            wrong: ["🌹", "🌷", "🌼"],
          },
        ];
        const flower = flowerPatterns[r % flowerPatterns.length];
        const fifthStart = 2 + r;
        const fifthStep = 3 + (r % 4);
        const ruleStep = 3 + (r % 6);
        const cases = [
          () =>
            numericQuestion(
              `Lanjutkan pola: ${start}, ${start + step}, ${start + 2 * step}, ...`,
              start + 3 * step,
              `Pola bertambah ${step} setiap langkah.`,
            ),
          () =>
            numericQuestion(
              `Lanjutkan pola kelipatan 2: ${start * 2}, ${start * 4}, ${start * 6}, ...`,
              start * 8,
              "Perhatikan bahwa setiap suku merupakan kelipatan genap dari bilangan yang sama.",
            ),
          () =>
            makeQuestion(
              `Pola gambar ${flower.sequence}. Gambar berikutnya adalah ...`,
              flower.answer,
              flower.wrong,
              `Pola bunga berulang: ${flower.sequence}.`,
            ),
          () =>
            numericQuestion(
              `Pola menurun: ${start + 20}, ${start + 16}, ${start + 12}, ...`,
              start + 8,
              "Setiap langkah berkurang 4.",
            ),
          () =>
            numericQuestion(
              `Bilangan ke-5 dari pola ${fifthStart}, ${fifthStart + fifthStep}, ${fifthStart + 2 * fifthStep}, ${fifthStart + 3 * fifthStep}, ... adalah`,
              fifthStart + 4 * fifthStep,
              `Pola bertambah ${fifthStep} setiap langkah.`,
            ),
          () =>
            makeQuestion(
              `Aturan pola ${ruleStep}, ${ruleStep * 2}, ${ruleStep * 3}, ${ruleStep * 4} adalah ...`,
              `bertambah ${ruleStep}`,
              [
                `bertambah ${ruleStep + 1}`,
                `berkurang ${ruleStep}`,
                `dikali ${ruleStep}`,
              ],
              `Selisih setiap bilangan adalah ${ruleStep}.`,
            ),
        ];
        return cases[p]();
      }
      case "g4_measure": {
        const n = 2 + r;
        const cases = [
          () =>
            numericQuestion(
              `${n} meter = ... sentimeter`,
              n * 100,
              "1 meter = 100 cm.",
              "📏",
              "cm",
            ),
          () =>
            numericQuestion(
              `${n} kilogram = ... gram`,
              n * 1000,
              "1 kg = 1.000 gram.",
              "⚖️",
              "gram",
            ),
          () =>
            numericQuestion(
              `${n} jam = ... menit`,
              n * 60,
              "1 jam = 60 menit.",
              "🕒",
              "menit",
            ),
          () =>
            numericQuestion(
              `Sudut lurus besarnya ... derajat`,
              180,
              "Sudut lurus membentuk garis lurus.",
              "📐",
              "°",
            ),
          () =>
            numericQuestion(
              `Persegi dengan sisi ${n + 2} cm memiliki luas ...`,
              (n + 2) ** 2,
              "Luas persegi = sisi × sisi.",
              "🟦",
              "cm²",
            ),
          () =>
            numericQuestion(
              `Balok berukuran 2 × 3 × ${n} cm memiliki volume ...`,
              6 * n,
              "Volume balok = panjang × lebar × tinggi.",
              "📦",
              "cm³",
            ),
        ];
        return cases[p]();
      }
      case "g4_geometry": {
        const s = 4 + r;
        const cases = [
          () =>
            numericQuestion(
              `Keliling persegi dengan sisi ${s} cm adalah ...`,
              4 * s,
              "Keliling persegi = 4 × sisi.",
              "🟦",
              "cm",
            ),
          () =>
            numericQuestion(
              `Luas persegi dengan sisi ${s} cm adalah ...`,
              s * s,
              "Luas persegi = sisi × sisi.",
              "🟦",
              "cm²",
            ),
          () =>
            numericQuestion(
              `Persegi panjang panjang ${s + 3} cm dan lebar 4 cm. Kelilingnya ...`,
              2 * (s + 3 + 4),
              "Keliling = 2 × (panjang + lebar).",
              "▭",
              "cm",
            ),
          () =>
            numericQuestion(
              `Persegi panjang berukuran ${s + 3} cm × 4 cm. Luasnya ...`,
              (s + 3) * 4,
              "Luas = panjang × lebar.",
              "▭",
              "cm²",
            ),
          () =>
            makeQuestion(
              "Persegi memiliki berapa simetri lipat?",
              "4",
              ["1", "2", "3"],
              "Persegi memiliki empat simetri lipat.",
            ),
          () =>
            makeQuestion(
              "Bangun datar dengan sepasang sisi sejajar adalah ...",
              "trapesium",
              ["lingkaran", "segitiga sama sisi", "layang-layang"],
              "Trapesium memiliki satu pasang sisi sejajar.",
            ),
        ];
        return cases[p]();
      }
      case "g4_data": {
        const a = 4 + r;
        const b = 7 + r;
        const c = 5 + r;
        const cases = [
          () =>
            numericQuestion(
              `Data buku: Senin ${a}, Selasa ${b}, Rabu ${c}. Jumlah buku adalah ...`,
              a + b + c,
              "Jumlahkan seluruh data.",
              "📚",
            ),
          () =>
            makeQuestion(
              `Hari dengan jumlah buku terbanyak (${a}, ${b}, ${c}) adalah ...`,
              "Selasa",
              ["Senin", "Rabu", "semua sama"],
              "Nilai Selasa paling besar.",
            ),
          () =>
            numericQuestion(
              `Selisih data ${b} dan ${a} adalah ...`,
              b - a,
              "Selisih diperoleh dengan pengurangan.",
            ),
          () =>
            numericQuestion(
              `Jika data 4, 6, 8, jumlah seluruhnya adalah ...`,
              18,
              "4 + 6 + 8 = 18.",
            ),
          () =>
            makeQuestion(
              "Diagram yang menggunakan batang untuk membandingkan data disebut ...",
              "diagram batang",
              ["diagram garis", "peta", "denah"],
              "Diagram batang membandingkan banyak data dengan batang.",
            ),
          () =>
            numericQuestion(
              `Ada ${a} siswa suka apel dan ${b} suka jeruk. Jumlah siswa ...`,
              a + b,
              "Jumlah siswa adalah penjumlahan kedua kelompok.",
              "🍎 🍊",
            ),
        ];
        return cases[p]();
      }
      case "g5_numbers": {
        const a = 12450 + i * 317;
        const b = 3250 + r * 137;
        const mixA = 80 + r * 12;
        const mixB = 4 + (r % 5);
        const kpkA = 4 + (r % 4);
        const kpkB = 6 + (r % 5);
        const factor = 2 + r;
        const factorization = [
          {
            number: 12,
            answer: "2 × 2 × 3",
            wrong: ["2 × 6", "3 × 4", "1 × 12"],
          },
          {
            number: 18,
            answer: "2 × 3 × 3",
            wrong: ["2 × 9", "3 × 6", "1 × 18"],
          },
          {
            number: 20,
            answer: "2 × 2 × 5",
            wrong: ["2 × 10", "4 × 5", "1 × 20"],
          },
          {
            number: 24,
            answer: "2 × 2 × 2 × 3",
            wrong: ["2 × 12", "3 × 8", "4 × 6"],
          },
          {
            number: 30,
            answer: "2 × 3 × 5",
            wrong: ["2 × 15", "3 × 10", "5 × 6"],
          },
          {
            number: 36,
            answer: "2 × 2 × 3 × 3",
            wrong: ["2 × 18", "3 × 12", "4 × 9"],
          },
          {
            number: 42,
            answer: "2 × 3 × 7",
            wrong: ["2 × 21", "3 × 14", "6 × 7"],
          },
        ][r % 7];
        const cases = [
          () =>
            numericQuestion(
              `${a.toLocaleString("id-ID")} + ${b.toLocaleString("id-ID")} = ...`,
              a + b,
              "Jumlahkan kedua bilangan.",
            ),
          () =>
            numericQuestion(
              `${a + b} − ${b} = ...`,
              a,
              "Pengurangan membalik operasi penjumlahan.",
            ),
          () =>
            numericQuestion(
              `Operasi campuran ${mixA} + ${mixB} × 5 = ...`,
              mixA + mixB * 5,
              `Kerjakan perkalian lebih dahulu: ${mixB} × 5, lalu tambahkan ${mixA}.`,
            ),
          () =>
            numericQuestion(
              `KPK dari ${kpkA} dan ${kpkB} adalah ...`,
              lcm(kpkA, kpkB),
              "KPK adalah kelipatan persekutuan terkecil.",
            ),
          () =>
            numericQuestion(
              `FPB dari ${factor * 4} dan ${factor * 6} adalah ...`,
              factor * 2,
              `Faktor persekutuan terbesar dari ${factor * 4} dan ${factor * 6} adalah ${factor * 2}.`,
            ),
          () =>
            makeQuestion(
              `Faktorisasi prima dari ${factorization.number} adalah ...`,
              factorization.answer,
              factorization.wrong,
              `${factorization.number} diuraikan menjadi perkalian bilangan-bilangan prima.`,
            ),
        ];
        return cases[p]();
      }
      case "g5_fractions": {
        const d = 4 + (r % 5);
        const a = 1 + (r % 3);
        const b = 1 + ((r + 1) % 3);
        const decimalPairs = [
          { value: "0,25", fraction: "1/4", wrong: ["1/2", "1/5", "2/5"] },
          { value: "0,5", fraction: "1/2", wrong: ["1/4", "1/5", "2/5"] },
          { value: "0,75", fraction: "3/4", wrong: ["1/4", "1/2", "2/5"] },
          { value: "0,2", fraction: "1/5", wrong: ["1/2", "1/4", "2/5"] },
          { value: "0,4", fraction: "2/5", wrong: ["1/4", "1/2", "3/5"] },
          { value: "0,6", fraction: "3/5", wrong: ["1/5", "1/2", "4/5"] },
          { value: "0,8", fraction: "4/5", wrong: ["1/5", "2/5", "3/5"] },
        ];
        const firstDecimal = decimalPairs[r % decimalPairs.length];
        const secondDecimal = decimalPairs[(r + 3) % decimalPairs.length];
        const largestPairs = [
          {
            prompt:
              "Bandingkan 0,9; 0,09; 0,19; dan 0,5. Nilai terbesar adalah ...",
            answer: "0,9",
            wrong: ["0,09", "0,19", "0,5"],
          },
          {
            prompt:
              "Bilangan desimal terbesar dari 0,85; 0,805; 0,58; dan 0,8 adalah ...",
            answer: "0,85",
            wrong: ["0,805", "0,58", "0,8"],
          },
          {
            prompt:
              "Pilih nilai paling besar di antara 0,72; 0,702; 0,27; dan 0,7",
            answer: "0,72",
            wrong: ["0,702", "0,27", "0,7"],
          },
          {
            prompt: "Manakah desimal terbesar: 0,96; 0,906; 0,69; atau 0,9?",
            answer: "0,96",
            wrong: ["0,906", "0,69", "0,9"],
          },
          {
            prompt:
              "Dari 0,68; 0,608; 0,86; dan 0,6, bilangan yang terbesar adalah ...",
            answer: "0,86",
            wrong: ["0,68", "0,608", "0,6"],
          },
          {
            prompt:
              "Bilangan terbesar dalam kelompok 0,54; 0,504; 0,45; dan 0,5 adalah ...",
            answer: "0,54",
            wrong: ["0,504", "0,45", "0,5"],
          },
          {
            prompt: "Manakah yang terbesar: 0,79; 0,709; 0,97; atau 0,7?",
            answer: "0,97",
            wrong: ["0,79", "0,709", "0,7"],
          },
        ];
        const largest = largestPairs[r % largestPairs.length];
        const cases = [
          () =>
            makeQuestion(
              `${a}/${d} + ${b}/${d} = ...`,
              `${a + b}/${d}`,
              [
                `${a + b}/${d + 1}`,
                `${Math.max(1, a + b - 1)}/${d}`,
                `${a + b + 1}/${d + 1}`,
              ],
              "Penyebut sama, jumlahkan pembilang.",
            ),
          () =>
            makeQuestion(
              `${a + b + 1}/${d} − ${b}/${d} = ...`,
              `${a + 1}/${d}`,
              [
                `${a + 1}/${d + 1}`,
                `${Math.max(1, a)}/${d}`,
                `${a + 2}/${d + 1}`,
              ],
              "Kurangi pembilang karena penyebut sama.",
            ),
          () =>
            makeQuestion(
              `Ubah bilangan desimal ${firstDecimal.value} ke bentuk pecahan paling sederhana`,
              firstDecimal.fraction,
              firstDecimal.wrong,
              `Ubah ${firstDecimal.value} menjadi pecahan, lalu sederhanakan.`,
            ),
          () =>
            makeQuestion(
              `Pecahan yang nilainya sama dengan desimal ${secondDecimal.value} adalah ...`,
              secondDecimal.fraction,
              secondDecimal.wrong,
              `Ubah ${secondDecimal.value} menjadi pecahan, lalu sederhanakan.`,
            ),
          () =>
            numericQuestion(
              `${1 + (r % 3)}/${2 + (r % 3)} × ${2 + (r % 3)} = ...`,
              1 + (r % 3),
              "Kalikan pembilang dengan bilangan asli, lalu bagi dengan penyebut.",
            ),
          () =>
            makeQuestion(
              largest.prompt,
              largest.answer,
              largest.wrong,
              "Bandingkan angka pada tempat persepuluhan, perseratusan, lalu perseribuan.",
            ),
        ];
        return cases[p]();
      }
      case "g5_measure_ratio": {
        const speed = 35 + 5 * r;
        const travelHours = 1 + (r % 3);
        const distance = speed * travelHours;
        const meters = 2.5 + 0.5 * r;
        const ratioA = 2 + r;
        const ratioMultiple = 2 + (r % 3);
        const partA = 2 + (r % 3);
        const partB = 3 + (r % 2);
        const multiplier = 3 + r;
        const bikeSpeed = 12 + 3 * r;
        const bikeHours = 2 + (r % 3);
        const durationHours = 1 + r;
        const durationMinutes = 15 + 15 * (r % 3);
        const cases = [
          () =>
            numericQuestion(
              `Kendaraan menempuh ${distance} km dalam ${travelHours} jam. Kecepatannya ...`,
              speed,
              `Kecepatan = jarak ÷ waktu = ${distance} ÷ ${travelHours}.`,
              "🚗",
              "km/jam",
            ),
          () =>
            numericQuestion(
              `${meters.toLocaleString("id-ID")} meter sama dengan ... sentimeter`,
              meters * 100,
              `1 meter = 100 cm, sehingga ${meters.toLocaleString("id-ID")} × 100 = ${meters * 100}.`,
              "📏",
              "cm",
            ),
          () =>
            makeQuestion(
              `Perbandingan ${ratioA} : ${ratioA * ratioMultiple} disederhanakan menjadi ...`,
              `1 : ${ratioMultiple}`,
              [
                `${ratioMultiple} : 1`,
                `1 : ${ratioMultiple + 1}`,
                `${ratioA} : ${ratioMultiple}`,
              ],
              `Kedua bilangan dibagi ${ratioA}.`,
            ),
          () =>
            numericQuestion(
              `Rasio ${partA} : ${partB}. Jika bagian pertama bernilai ${partA * multiplier}, bagian kedua bernilai ...`,
              partB * multiplier,
              `Nilai satu bagian adalah ${partA * multiplier} ÷ ${partA} = ${multiplier}; bagian kedua ${partB} × ${multiplier}.`,
            ),
          () =>
            numericQuestion(
              `Sepeda melaju ${bikeSpeed} km per jam selama ${bikeHours} jam. Jarak yang ditempuh ...`,
              bikeSpeed * bikeHours,
              `Jarak = kecepatan × waktu = ${bikeSpeed} × ${bikeHours}.`,
              "🚴",
              "km",
            ),
          () =>
            numericQuestion(
              `${durationHours} jam ${durationMinutes} menit sama dengan ... menit`,
              durationHours * 60 + durationMinutes,
              `${durationHours} × 60 + ${durationMinutes} = ${durationHours * 60 + durationMinutes} menit.`,
              "⏱️",
              "menit",
            ),
        ];
        return cases[p]();
      }
      case "g5_geometry": {
        const s = 5 + r;
        const length = 7 + r * 2;
        const width = 4 + (r % 3);
        const height = 2 + (r % 4);
        const triangleAngles = [
          [50, 60],
          [45, 75],
          [35, 85],
          [70, 40],
          [55, 65],
          [30, 90],
          [80, 45],
        ][r % 7];
        const thirdAngle = 180 - triangleAngles[0] - triangleAngles[1];
        const shapes = [
          { name: "segitiga", sides: 3 },
          { name: "segiempat", sides: 4 },
          { name: "segi lima", sides: 5 },
          { name: "segi enam", sides: 6 },
          { name: "segi delapan", sides: 8 },
          { name: "segi tujuh", sides: 7 },
          { name: "segi sembilan", sides: 9 },
        ][r % 7];
        const cases = [
          () =>
            numericQuestion(
              `Luas persegi panjang ${length} cm × ${width} cm adalah ...`,
              length * width,
              "Luas = panjang × lebar.",
              "▭",
              "cm²",
            ),
          () =>
            numericQuestion(
              `Keliling persegi panjang ${length} cm × ${width} cm adalah ...`,
              2 * (length + width),
              "Keliling = 2 × (panjang + lebar).",
              "▭",
              "cm",
            ),
          () =>
            numericQuestion(
              `Volume kubus dengan sisi ${s} cm adalah ...`,
              s ** 3,
              "Volume kubus = sisi × sisi × sisi.",
              "🧊",
              "cm³",
            ),
          () =>
            numericQuestion(
              `Volume balok ${length} cm × ${width} cm × ${height} cm adalah ...`,
              length * width * height,
              "Volume balok = panjang × lebar × tinggi.",
              "📦",
              "cm³",
            ),
          () =>
            makeQuestion(
              `Bangun beraturan dengan ${shapes.sides} sisi disebut ...`,
              shapes.name,
              ["persegi", "lingkaran", "trapesium"].filter(
                (name) => name !== shapes.name,
              ),
              `Bangun tersebut mempunyai ${shapes.sides} sisi.`,
            ),
          () =>
            numericQuestion(
              `Dua sudut segitiga adalah ${triangleAngles[0]}° dan ${triangleAngles[1]}°. Besar sudut ketiga adalah ...`,
              thirdAngle,
              `Jumlah sudut segitiga 180°. Jadi 180° − ${triangleAngles[0]}° − ${triangleAngles[1]}° = ${thirdAngle}° .`,
              "📐",
              "°",
            ),
        ];
        return cases[p]();
      }
      case "g5_data": {
        const a = 6 + r;
        const b = 8 + r;
        const c = 10 + r;
        const symbolCount = 2 + (r % 4);
        const studentsPerSymbol = 2 + (r % 3);
        const pictogramIcons = ["🍎", "🐱", "🌻", "⚽", "🥕", "🐰", "🍊"];
        const pictogramIcon = pictogramIcons[r % pictogramIcons.length];
        const tableContexts = [
          "Data nilai ulangan siswa paling mudah disusun dalam ...",
          "Daftar jumlah buah yang dipanen setiap hari dapat disajikan dalam ...",
          "Catatan jumlah pengunjung perpustakaan sebaiknya disusun dalam ...",
          "Data ukuran sepatu siswa dapat dirapikan menggunakan ...",
          "Daftar hasil pengamatan cuaca dapat disajikan dalam ...",
          "Data jumlah buku yang dibaca setiap anak dapat disusun dalam ...",
          "Catatan jumlah tanaman di setiap taman dapat disajikan dalam ...",
        ];
        const cases = [
          () =>
            numericQuestion(
              `Rata-rata data ${a}, ${b}, ${c} adalah ...`,
              (a + b + c) / 3,
              "Rata-rata = jumlah data ÷ banyak data.",
            ),
          () =>
            numericQuestion(
              `Jumlah data ${a}, ${b}, ${c}, ${a} adalah ...`,
              a + b + c + a,
              "Jumlahkan seluruh data.",
            ),
          () =>
            makeQuestion(
              `Nilai terbesar dari ${a}, ${b}, ${c} adalah ...`,
              String(c),
              [String(a), String(b), String(a + 1)],
              "Nilai terbesar adalah angka paling tinggi.",
            ),
          () =>
            makeQuestion(
              tableContexts[r % tableContexts.length],
              "tabel",
              ["diagram lingkaran", "peta", "garis bilangan"],
              "Tabel menyusun data dalam baris dan kolom.",
            ),
          () =>
            numericQuestion(
              `Setiap gambar ${pictogramIcon} mewakili ${studentsPerSymbol} anak. Jika ada ${symbolCount} gambar, jumlah anak adalah ...`,
              symbolCount * studentsPerSymbol,
              `${symbolCount} × ${studentsPerSymbol} = ${symbolCount * studentsPerSymbol} anak.`,
              objectVisual(pictogramIcon, symbolCount),
              "anak",
            ),
          () =>
            numericQuestion(
              `Data ${a}, ${b}, ${c}. Selisih nilai terbesar dan terkecil adalah ...`,
              c - a,
              "Selisih = nilai terbesar − nilai terkecil.",
            ),
        ];
        return cases[p]();
      }
      case "g6_fractions": {
        const fractionSets = [
          {
            expression: "1/2 × 2/3",
            answer: "1/3",
            wrong: ["2/5", "1/5", "2/3"],
            explain:
              "Kalikan pembilang dan penyebut: 2/6, lalu sederhanakan menjadi 1/3.",
          },
          {
            expression: "2/3 × 3/4",
            answer: "1/2",
            wrong: ["5/7", "6/7", "2/7"],
            explain: "Kalikan pembilang dan penyebut: 6/12 = 1/2.",
          },
          {
            expression: "3/4 × 4/5",
            answer: "3/5",
            wrong: ["7/9", "3/4", "4/5"],
            explain:
              "Kalikan pembilang dan penyebut: 12/20, lalu sederhanakan menjadi 3/5.",
          },
          {
            expression: "2/5 × 5/6",
            answer: "1/3",
            wrong: ["2/3", "5/11", "1/2"],
            explain: "Kalikan menjadi 10/30 lalu sederhanakan menjadi 1/3.",
          },
          {
            expression: "3/8 × 4/9",
            answer: "1/6",
            wrong: ["1/3", "7/17", "3/9"],
            explain: "Kalikan menjadi 12/72 lalu sederhanakan menjadi 1/6.",
          },
          {
            expression: "5/6 × 3/10",
            answer: "1/4",
            wrong: ["1/2", "2/5", "3/5"],
            explain: "Kalikan menjadi 15/60 lalu sederhanakan menjadi 1/4.",
          },
          {
            expression: "4/7 × 7/8",
            answer: "1/2",
            wrong: ["3/4", "4/8", "2/7"],
            explain: "Kalikan menjadi 28/56 lalu sederhanakan menjadi 1/2.",
          },
        ];
        const set = fractionSets[r % fractionSets.length];
        const divisionSets = [
          {
            expression: "1/2 ÷ 2",
            answer: "1/4",
            wrong: ["1/2", "1/8", "2/3"],
            explain:
              "Bagi pecahan dengan 2 berarti kalikan dengan 1/2: 1/2 × 1/2 = 1/4.",
          },
          {
            expression: "3/4 ÷ 2",
            answer: "3/8",
            wrong: ["3/4", "6/4", "3/2"],
            explain:
              "Bagi pecahan dengan 2 berarti kalikan dengan 1/2: 3/4 × 1/2 = 3/8.",
          },
          {
            expression: "2/3 ÷ 2",
            answer: "1/3",
            wrong: ["2/3", "4/3", "1/6"],
            explain: "2/3 × 1/2 = 2/6, lalu sederhanakan menjadi 1/3.",
          },
          {
            expression: "3/4 ÷ 3",
            answer: "1/4",
            wrong: ["3/4", "1/2", "1/3"],
            explain: "3/4 × 1/3 = 3/12, lalu sederhanakan menjadi 1/4.",
          },
          {
            expression: "4/5 ÷ 2",
            answer: "2/5",
            wrong: ["4/5", "1/5", "3/5"],
            explain: "4/5 × 1/2 = 4/10, lalu sederhanakan menjadi 2/5.",
          },
          {
            expression: "5/6 ÷ 3",
            answer: "5/18",
            wrong: ["5/6", "5/9", "1/6"],
            explain: "5/6 × 1/3 = 5/18.",
          },
          {
            expression: "7/8 ÷ 2",
            answer: "7/16",
            wrong: ["7/8", "7/4", "1/16"],
            explain: "7/8 × 1/2 = 7/16.",
          },
        ];
        const division = divisionSets[r % divisionSets.length];
        const decimalFractions = [
          { decimal: "0,6", fraction: "3/5" },
          { decimal: "0,8", fraction: "4/5" },
          { decimal: "0,4", fraction: "2/5" },
          { decimal: "0,2", fraction: "1/5" },
          { decimal: "0,75", fraction: "3/4" },
          { decimal: "0,25", fraction: "1/4" },
          { decimal: "0,9", fraction: "9/10" },
        ];
        const df = decimalFractions[(r + 2) % decimalFractions.length];
        const decimalLargest = [
          {
            prompt:
              "Bandingkan 3,45; 3,405; 3,54; dan 3,5. Bilangan terbesar adalah ...",
            answer: "3,54",
            wrong: ["3,45", "3,405", "3,5"],
          },
          {
            prompt:
              "Bandingkan 2,78; 2,708; 2,87; dan 2,8. Bilangan terbesar adalah ...",
            answer: "2,87",
            wrong: ["2,78", "2,708", "2,8"],
          },
          {
            prompt:
              "Bilangan terbesar dari 4,09; 4,9; 4,19; dan 4,81 adalah ...",
            answer: "4,9",
            wrong: ["4,09", "4,19", "4,81"],
          },
          {
            prompt:
              "Bilangan terbesar dari 5,62; 5,206; 5,7; dan 5,61 adalah ...",
            answer: "5,7",
            wrong: ["5,62", "5,206", "5,61"],
          },
          {
            prompt: "Manakah yang paling besar: 1,95; 1,905; 1,85; atau 1,9?",
            answer: "1,95",
            wrong: ["1,905", "1,85", "1,9"],
          },
          {
            prompt:
              "Urutan nilai terbesar di antara 6,08; 6,8; 6,18; dan 6,81 dimulai dari ...",
            answer: "6,81",
            wrong: ["6,08", "6,8", "6,18"],
          },
          {
            prompt:
              "Bilangan desimal paling besar dari 0,73; 0,703; 0,8; dan 0,78 adalah ...",
            answer: "0,8",
            wrong: ["0,73", "0,703", "0,78"],
          },
        ][r % 7];
        const decimalOrder = [
          {
            answer: "0,2; 0,5; 0,75",
            wrong: ["0,75; 0,5; 0,2", "0,5; 0,2; 0,75", "0,2; 0,75; 0,5"],
          },
          {
            answer: "0,15; 0,4; 0,9",
            wrong: ["0,9; 0,4; 0,15", "0,4; 0,15; 0,9", "0,15; 0,9; 0,4"],
          },
          {
            answer: "0,3; 0,65; 0,8",
            wrong: ["0,8; 0,65; 0,3", "0,65; 0,3; 0,8", "0,3; 0,8; 0,65"],
          },
          {
            answer: "0,05; 0,25; 0,7",
            wrong: ["0,7; 0,25; 0,05", "0,25; 0,05; 0,7", "0,05; 0,7; 0,25"],
          },
          {
            answer: "0,12; 0,32; 0,6",
            wrong: ["0,6; 0,32; 0,12", "0,32; 0,12; 0,6", "0,12; 0,6; 0,32"],
          },
          {
            answer: "0,4; 0,45; 0,9",
            wrong: ["0,9; 0,45; 0,4", "0,45; 0,4; 0,9", "0,4; 0,9; 0,45"],
          },
          {
            answer: "0,18; 0,5; 0,85",
            wrong: ["0,85; 0,5; 0,18", "0,5; 0,18; 0,85", "0,18; 0,85; 0,5"],
          },
        ][r % 7];
        const cases = [
          () =>
            makeQuestion(
              `${set.expression} = ...`,
              set.answer,
              set.wrong,
              set.explain,
            ),
          () =>
            makeQuestion(
              `${division.expression} = ...`,
              division.answer,
              division.wrong,
              division.explain,
            ),
          () =>
            makeQuestion(
              `${df.decimal} dalam bentuk pecahan paling sederhana adalah ...`,
              df.fraction,
              ["1/6", "2/3", "6/5"],
              `${df.decimal} dapat ditulis sebagai pecahan lalu disederhanakan.`,
            ),
          () =>
            makeQuestion(
              decimalLargest.prompt,
              decimalLargest.answer,
              decimalLargest.wrong,
              "Bandingkan angka pada tempat persepuluhan, perseratusan, lalu perseribuan.",
            ),
          () =>
            makeQuestion(
              `Tuliskan pecahan ${df.fraction} dalam bentuk desimal`,
              df.decimal,
              ["0,1", "0,3", "0,5"],
              `Nilai pecahan ${df.fraction} sama dengan ${df.decimal}.`,
            ),
          () =>
            makeQuestion(
              "Urutan bilangan desimal dari terkecil ke terbesar adalah ...",
              decimalOrder.answer,
              decimalOrder.wrong,
              "Bandingkan nilai desimal dari tempat persepuluhan sampai perseribuan.",
            ),
        ];
        return cases[p]();
      }
      case "g6_ratio": {
        const ratioA = 2 + (r % 4);
        const ratioMultiple = 2 + (r % 3);
        const partA = 2 + (r % 3);
        const partB = 3 + (r % 4);
        const partTotal = partA + partB;
        const totalValue = partTotal * (5 + r);
        const mapKm = 2 + (r % 4);
        const scaleValues = [
          50000, 100000, 250000, 75000, 200000, 300000, 150000,
        ];
        const mapScale = scaleValues[r % scaleValues.length];
        const mapCm = (mapKm * 100000) / mapScale;
        const appleCount = 3 + (r % 4);
        const orangeCount = appleCount + 2 + (r % 2);
        const girlsRatio = 2 + r;
        const boysRatio = girlsRatio + 1;
        const multiplier = 3 + r;
        const cases = [
          () =>
            makeQuestion(
              `Rasio ${ratioA} : ${ratioA * ratioMultiple} disederhanakan menjadi ...`,
              `1 : ${ratioMultiple}`,
              [
                `${ratioMultiple} : 1`,
                `1 : ${ratioMultiple + 1}`,
                `${ratioA} : ${ratioMultiple}`,
              ],
              "Bagi kedua bilangan dengan faktor persekutuan terbesarnya.",
            ),
          () =>
            numericQuestion(
              `Rasio ${partA} : ${partB} memiliki ${partTotal} bagian. Jika jumlah seluruhnya ${totalValue}, nilai satu bagian adalah ...`,
              totalValue / partTotal,
              `${totalValue} dibagi ${partTotal} bagian sama besar.`,
            ),
          () =>
            makeQuestion(
              `Pada skala 1 : ${mapScale.toLocaleString("id-ID")}, jarak 1 cm pada peta mewakili ...`,
              `${mapScale.toLocaleString("id-ID")} cm sebenarnya`,
              [
                `${(mapScale / 10).toLocaleString("id-ID")} cm sebenarnya`,
                `${(mapScale * 10).toLocaleString("id-ID")} cm sebenarnya`,
                `${(mapScale / 2).toLocaleString("id-ID")} cm sebenarnya`,
              ],
              "Angka kedua pada skala menunjukkan jarak sebenarnya dalam satuan yang sama.",
              "🗺️",
            ),
          () =>
            numericQuestion(
              `Jarak sebenarnya ${mapKm} km digambar dengan skala 1 : ${mapScale.toLocaleString("id-ID")}. Jarak pada peta adalah ...`,
              mapCm,
              `${mapKm} km = ${mapKm * 100000} cm; dibagi ${mapScale.toLocaleString("id-ID")} menjadi ${mapCm} cm.`,
              "🗺️",
              "cm",
            ),
          () =>
            makeQuestion(
              `Perbandingan ${appleCount} apel dan ${orangeCount} jeruk ditulis ...`,
              `${appleCount} : ${orangeCount}`,
              [
                `${orangeCount} : ${appleCount}`,
                `${appleCount + orangeCount}`,
                `${orangeCount - appleCount}`,
              ],
              "Rasio ditulis menggunakan tanda titik dua.",
              `${objectVisual("🍎", appleCount)}　${objectVisual("🍊", orangeCount)}`,
            ),
          () =>
            numericQuestion(
              `Rasio siswa laki-laki dan perempuan ${girlsRatio} : ${boysRatio}. Jika laki-laki berjumlah ${girlsRatio * multiplier} orang, perempuan berjumlah ...`,
              boysRatio * multiplier,
              `${girlsRatio * multiplier} ÷ ${girlsRatio} = ${multiplier} per bagian; kalikan ${boysRatio} bagian.`,
            ),
        ];
        return cases[p]();
      }
      case "g6_solids": {
        const side = 3 + (r % 5);
        const length = 5 + (r % 4);
        const width = 3 + (r % 3);
        const height = 2 + (r % 4);
        const cubeFacts = [
          {
            prompt: "Kubus mempunyai berapa sisi berbentuk persegi?",
            answer: "6 sisi",
            wrong: ["4 sisi", "8 sisi", "12 sisi"],
            explain:
              "Kubus memiliki enam sisi yang semuanya berbentuk persegi.",
          },
          {
            prompt: "Banyak rusuk pada sebuah kubus adalah ...",
            answer: "12 rusuk",
            wrong: ["6 rusuk", "8 rusuk", "10 rusuk"],
            explain: "Kubus memiliki dua belas rusuk dengan panjang yang sama.",
          },
          {
            prompt: "Jumlah titik sudut pada kubus adalah ...",
            answer: "8 titik sudut",
            wrong: ["6 titik sudut", "10 titik sudut", "12 titik sudut"],
            explain: "Kubus mempunyai delapan titik sudut.",
          },
          {
            prompt: "Bentuk setiap sisi pada bangun kubus adalah ...",
            answer: "persegi",
            wrong: ["segitiga", "lingkaran", "persegi panjang berbeda ukuran"],
            explain: "Keenam sisi kubus berbentuk persegi yang sama besar.",
          },
          {
            prompt: "Bagaimana panjang seluruh rusuk sebuah kubus?",
            answer: "sama panjang",
            wrong: [
              "ada yang selalu dua kali lebih panjang",
              "semua berbeda",
              "hanya empat yang sama",
            ],
            explain: "Semua rusuk kubus memiliki panjang yang sama.",
          },
          {
            prompt:
              "Bangun ruang yang memiliki 6 sisi persegi sama besar adalah ...",
            answer: "kubus",
            wrong: ["balok", "tabung", "kerucut"],
            explain: "Kubus memiliki enam sisi persegi yang kongruen.",
          },
          {
            prompt: "Kubus memiliki berapa pasang sisi yang saling berhadapan?",
            answer: "3 pasang",
            wrong: ["2 pasang", "4 pasang", "6 pasang"],
            explain: "Enam sisi kubus membentuk tiga pasang sisi berhadapan.",
          },
        ][r % 7];
        const netFacts = [
          {
            prompt: "Jaring-jaring kubus tersusun dari ...",
            answer: "6 persegi sama besar",
            wrong: [
              "4 lingkaran",
              "2 segitiga dan 4 persegi",
              "6 persegi panjang berbeda",
            ],
            explain:
              "Jaring-jaring kubus terdiri atas enam persegi sama besar.",
          },
          {
            prompt: "Jaring-jaring balok umumnya terdiri dari ...",
            answer: "6 persegi panjang",
            wrong: ["6 lingkaran", "4 segitiga", "2 persegi saja"],
            explain:
              "Balok mempunyai enam sisi berbentuk persegi panjang atau persegi.",
          },
          {
            prompt:
              "Jika enam persegi sama besar dilipat dengan benar, bangun yang dapat terbentuk adalah ...",
            answer: "kubus",
            wrong: ["bola", "kerucut", "tabung"],
            explain: "Enam persegi dapat membentuk enam sisi kubus.",
          },
          {
            prompt:
              "Jaring-jaring bangun ruang merupakan bentuk sisi-sisi yang ...",
            answer: "dibuka menjadi bidang datar",
            wrong: [
              "dihilangkan seluruhnya",
              "diubah menjadi lingkaran",
              "disusun menjadi garis saja",
            ],
            explain:
              "Jaring-jaring menunjukkan sisi bangun ruang saat dibentangkan.",
          },
          {
            prompt:
              "Berapa banyak persegi yang diperlukan untuk membuat jaring-jaring kubus?",
            answer: "6 persegi",
            wrong: ["4 persegi", "5 persegi", "8 persegi"],
            explain: "Kubus mempunyai enam sisi, semuanya persegi.",
          },
          {
            prompt: "Jaring-jaring kubus tidak tersusun dari ...",
            answer: "6 lingkaran",
            wrong: [
              "6 persegi",
              "4 persegi dan 2 persegi",
              "persegi-persegi sama besar",
            ],
            explain: "Sisi kubus berbentuk persegi, bukan lingkaran.",
          },
          {
            prompt:
              "Tujuan menggambar jaring-jaring kubus adalah untuk melihat ...",
            answer: "susunan sisi sebelum dilipat",
            wrong: [
              "isi kubus yang tersembunyi",
              "berat kubus",
              "warna bagian dalam saja",
            ],
            explain:
              "Jaring-jaring memperlihatkan susunan sisi bangun ruang sebelum dirakit.",
          },
        ][r % 7];
        const cases = [
          () =>
            numericQuestion(
              `Volume kubus dengan rusuk ${side} cm adalah ...`,
              side ** 3,
              `Volume kubus = ${side} × ${side} × ${side}.`,
              "🧊",
              "cm³",
            ),
          () =>
            numericQuestion(
              `Volume balok ${length} cm × ${width} cm × ${height} cm adalah ...`,
              length * width * height,
              "Volume balok = panjang × lebar × tinggi.",
              "📦",
              "cm³",
            ),
          () =>
            numericQuestion(
              `Luas permukaan kubus dengan rusuk ${side} cm adalah ...`,
              6 * side * side,
              `Luas permukaan kubus = 6 × ${side}².`,
              "🧊",
              "cm²",
            ),
          () =>
            numericQuestion(
              `Luas permukaan balok berukuran ${length} × ${width} × ${height} cm adalah ...`,
              2 * (length * width + length * height + width * height),
              "Luas permukaan balok = 2 × (pl + pt + lt).",
              "📦",
              "cm²",
            ),
          () =>
            makeQuestion(
              cubeFacts.prompt,
              cubeFacts.answer,
              cubeFacts.wrong,
              cubeFacts.explain,
              "🧊",
            ),
          () =>
            makeQuestion(
              netFacts.prompt,
              netFacts.answer,
              netFacts.wrong,
              netFacts.explain,
              "📦",
            ),
        ];
        return cases[p]();
      }
      case "g6_data_chance": {
        const base = 4 + (r % 7);
        const redCount = 2 + (r % 5);
        const blueCount = 1 + (r % 2);
        const median = 4 + (r % 6);
        const coins = [
          {
            prompt:
              "Peluang muncul sisi gambar saat melempar koin seimbang adalah ...",
            answer: "1/2",
            wrong: ["1/4", "1/3", "1"],
          },
          {
            prompt:
              "Koin memiliki dua sisi yang sama mungkin muncul. Peluang sisi angka adalah ...",
            answer: "1/2",
            wrong: ["1/6", "1/3", "1"],
          },
          {
            prompt:
              "Saat satu koin seimbang dilempar sekali, peluang muncul sisi gambar adalah ...",
            answer: "1/2",
            wrong: ["0", "1/4", "1"],
          },
          {
            prompt: "Berapa peluang muncul sisi angka pada koin yang seimbang?",
            answer: "1/2",
            wrong: ["1/5", "1/3", "1"],
          },
          {
            prompt:
              "Sebuah koin memiliki sisi gambar dan angka. Peluang masing-masing sisi adalah ...",
            answer: "1/2",
            wrong: ["1/4", "1/3", "1"],
          },
          {
            prompt:
              "Jika koin seimbang dilempar satu kali, peluang muncul salah satu sisi tertentu adalah ...",
            answer: "1/2",
            wrong: ["0", "1/3", "1"],
          },
          {
            prompt:
              "Peluang mendapatkan sisi gambar dari satu lemparan koin adil adalah ...",
            answer: "1/2",
            wrong: ["1/6", "1/4", "1"],
          },
        ][r % 7];
        const chartContexts = [
          "Diagram untuk membandingkan persentase pilihan buah dari seluruh siswa adalah ...",
          "Jika ingin menunjukkan bagian setiap jenis hewan terhadap seluruh hewan, diagram yang sesuai adalah ...",
          "Diagram yang tepat untuk memperlihatkan persentase warna favorit seluruh anak adalah ...",
          "Untuk menunjukkan proporsi pengeluaran keluarga dalam beberapa kategori, gunakan ...",
          "Penyajian data yang memperlihatkan bagian terhadap keseluruhan paling sesuai menggunakan ...",
          "Diagram yang membantu melihat komposisi seluruh jenis bunga dalam taman adalah ...",
          "Untuk membandingkan bagian setiap kelompok dari jumlah keseluruhan, kita dapat memakai ...",
        ];
        const chanceCases = [
          {
            prompt:
              "Peluang mendapatkan angka 7 saat melempar dadu biasa adalah ...",
            answer: "0",
            wrong: ["1/6", "1/2", "1"],
          },
          {
            prompt:
              "Sebuah dadu hanya memiliki angka 1 sampai 6. Peluang muncul angka 9 adalah ...",
            answer: "0",
            wrong: ["1/6", "1/2", "1"],
          },
          {
            prompt:
              "Peluang muncul angka 0 pada dadu standar bersisi enam adalah ...",
            answer: "0",
            wrong: ["1/6", "1/3", "1"],
          },
          {
            prompt:
              "Jika dadu bernomor 1–6 dilempar, peluang muncul angka 8 adalah ...",
            answer: "0",
            wrong: ["1/6", "1/2", "1"],
          },
          {
            prompt: "Peluang memperoleh angka 10 dari dadu biasa adalah ...",
            answer: "0",
            wrong: ["1/6", "1/3", "1"],
          },
          {
            prompt:
              "Sebuah dadu memiliki mata 1, 2, 3, 4, 5, dan 6. Peluang keluar angka 7 adalah ...",
            answer: "0",
            wrong: ["1/6", "1/2", "1"],
          },
          {
            prompt:
              "Peluang muncul angka 12 dari satu kali lemparan dadu bersisi enam adalah ...",
            answer: "0",
            wrong: ["1/6", "1/3", "1"],
          },
        ][r % 7];
        const cases = [
          () =>
            numericQuestion(
              `Rata-rata dari ${base}, ${base + 2}, ${base + 4}, ${base + 6} adalah ...`,
              base + 3,
              "Rata-rata adalah jumlah seluruh data dibagi banyaknya data.",
            ),
          () =>
            makeQuestion(
              coins.prompt,
              coins.answer,
              coins.wrong,
              "Koin seimbang memiliki dua sisi dengan peluang yang sama besar.",
              "🪙",
            ),
          () =>
            makeQuestion(
              `Dalam kantong ada ${redCount} bola merah dan ${blueCount} bola biru. Warna yang lebih mungkin terambil adalah ...`,
              "merah",
              ["biru", "keduanya sama", "tidak mungkin"],
              "Bola merah lebih banyak, jadi peluangnya lebih besar.",
              `${objectVisual("🔴", redCount)}　${objectVisual("🔵", blueCount)}`,
            ),
          () =>
            numericQuestion(
              `Data ${median - 1}, ${median}, ${median}, ${median + 1}, ${median + 5} memiliki median ...`,
              median,
              "Median adalah nilai tengah setelah data diurutkan.",
            ),
          () =>
            makeQuestion(
              chartContexts[r % chartContexts.length],
              "diagram lingkaran",
              ["garis bilangan", "denah rumah", "tabel perkalian"],
              "Diagram lingkaran menunjukkan proporsi bagian terhadap keseluruhan.",
            ),
          () =>
            makeQuestion(
              chanceCases.prompt,
              chanceCases.answer,
              chanceCases.wrong,
              "Peristiwa dengan hasil yang tidak ada pada alat percobaan memiliki peluang nol.",
              "🎲",
            ),
        ];
        return cases[p]();
      }
      default:
        return numericQuestion(
          "Berapa hasil 2 + 3?",
          5,
          "2 + 3 = 5.",
          "🍎 🍎 + 🍎 🍎 🍎",
        );
    }
  }

  function lcm(a, b) {
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
    return Math.abs(a * b) / gcd(a, b);
  }

  function getMaterials(grade) {
    return MATERIALS[grade]
      ? MATERIALS[grade].map((item) => ({ ...item }))
      : [];
  }

  function generateQuestions(grade, materialId, total) {
    const material = (MATERIALS[grade] || []).find(
      (item) => item.id === materialId,
    );
    if (!material) return [];
    return Array.from({ length: total }, (_, index) => ({
      id: `${materialId}-q${index + 1}`,
      number: index + 1,
      ...generateOne(material.kind, index),
    }));
  }

  window.MathAdventureBank = {
    getMaterials,
    generateQuestions,
    questionCountForGrade(grade) {
      return { 1: 10, 2: 15, 3: 20, 4: 25, 5: 30, 6: 40 }[grade] || 0;
    },
    gradeFromAge(age) {
      const value = Number(age);
      if (!Number.isInteger(value) || value < 6 || value > 12) return null;
      return Math.min(6, value - 5);
    },
  };
})();
