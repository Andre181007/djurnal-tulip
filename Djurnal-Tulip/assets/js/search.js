// Fungsi untuk mendapatkan parameter dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fungsi untuk mencari artikel berdasarkan keyword
function searchArticles(keyword) {
    // Data artikel
    const articles = [
        {
            title: "Angkutan Wira Wiri Surabaya Tercebur ke Sungai, 2 Orang Luka-luka",
            date: "19 September 2024",
            image: "assets/imgs/wirawiri disungai.png",
            url: "wira-wiri-disungai.html"
        },
        {
            title: "Rekap Hasil Final Kumamoto Masters Japan 2024: Fajar/Rian Juara",
            date: "17 November 2024",
            image: "assets/imgs/fajarrian.jpg",
            url: "fajar-rian.html"
        },
        {
            title: "Gerhana Bulan Total 25 Maret 2024: Fenomena Langka",
            date: "18 September 2024",
            image: "assets/imgs/fenomena gerhana september.jpeg",
            url: "gerhana-bulan-september.html"
        },
        {
            title: "Toyota Kijang Innova Masih Jadi Mobil Terlaris di Indonesia",
            date: "11 Oktober 2024",
            image: "assets/imgs/toyota kijang inova.jpeg",
            url: "mobil-terlaris-kijang-inova.html"
        },
        {
            title: "Media Asing Acungi Jempol Suporter Timnas Indonesia",
            date: "17 November 2024",
            image: "assets/imgs/timnas indonesia.jpg",
            url: "media-asing-acungi-jempol-timnas.html"
        },
        {
            title: "Prabowo Bakal Kirim Tim ke Brasil, Pelajari Program Makan Bergizi",
            date: "18 November 2024",
            image: "assets/imgs/prabowo kirim tim brasil.jpg",
            url: "prabowo-kirim-tim-brasil.html"
        },
        {
            title: "Pakaian dan Gaya Anies Baswedan di Baliho Pramono Anung-Rano Karno Bikin Salah Fokus",
            date: "19 November 2024",
            image: "assets/imgs/pakaian dan gaya anies.webp",
            url: "anies-baswedan-di-baliho-pramono.html"
        },
        {
            title: "Bakal Ada Kejutan dalam Kampanye Akbar Pramono-Rano di GBK, Apa Itu?",
            date: "19 November 2024",
            image: "assets/imgs/kampanye akbar pramono-rano.webp",
            url: "kampanye-akbar-pramono-rano.html"
        },
        {
            title: "Kevin Diks Pamit ia JeKeluar dari Skuad Indoneslang Laga Kontra Arab Saudi",
            date: "19 November 2024",
            image: "assets/imgs/kevin diks.jpg",
            url: "kevindiks.html"
        },
        {
            title: "Mantan Pembalap Hokky Krisdianto Meninggal Dunia Akibat Kecelakaan di Situbondo",
            date: "18 November 2024",
            image: "assets/imgs/hokky krisdianto.webp",
            url: "pembalap-hokky-krisdianto.html"
        },
        {
            title: "Thom Haye Minta Fans Jangan Berhenti Support Timnas Indonesia",
            date: "19 November 2024",
            image: "assets/imgs/thom haye.jpeg",
            url: "thom-haye-minta-fans.html"
        },
        {
            title: "Timnas Indonesia Dihantui Keretakan Jelang Laga Kontra Arab Saudi,Shin Tae-yong Penyebabnya?",
            date: "19 November 2024",
            image: "assets/imgs/timnas indo dihantui.jpg",
            url: "timnas-indonesia.html"
        },
        {
            title: "Paus Fransiskus Jadi Paus ke-3 yang Kunjungi Indonesia",
            date: "3 September 2024",
            image: "assets/imgs/paus fransiskus kunjungi indonesia.jpeg",
            url: "paus-fransiskus-kunjungi-indonesia.html"
        },
        {
            title: "Rangkaian Acara HUT RI dan Upacara 17 Agustus 2024 di IKN-Jakarta",
            date: "13 Agustus 2024",
            image: "assets/imgs/acara hut ri dan upacara 17 agustus 2024.jpeg",
            url: "rangkaian-acara-hut-ri-dan-upacara-17-agustus-2024.html"
        },
        {
            title: "Sosok Badarudin,Kalapas Tanjung Raja Dinonaktifkan Buntut Petugas Lapas Viralkan Napi Pesta Sabu",
            date: "19 November 2024",
            image: "assets/imgs/sosok badarudin.jpg",
            url: "sosok-badarudin-kalapas-tanjung-raja.html"
        },
        {
            title: "5 Pernyataan Kontroversi Budi Arie: Dari Fufufafa hingga Judi Online",
            date: "12 November 2024",
            image: "assets/imgs/pernyataan kontroversi budi.webp",
            url: "pernyataan-kontroversi-budi-arief-dari-fufufafa.html"
        },
        {
            title: "Jokowi Turun Gunung di Jakarta dan Jateng, PDIP: Tanda Elektabilitas RK dan Luthfi Merosot",
            date: "20 November 2024",
            image: "assets/imgs/kampanye akbar pramono-rano.webp",
            url: "jokowi-turun-gunung-di-jakarta-dan-jateng.html"
        },
        {
            title: "Bos Garuda Kasih Sinyal Harga Tiket Bakal Turun",
            date: "19 November 2024",
            image: "assets/imgs/bos garuda kasih sinyal.jpeg",
            url: "bos-garuda-kasih-sinyal-harga-tiket.html"
        },
        {
            title: "Pengamat Sebut Pilkada Jakarta 2024 Jadi Ajang Pertarungan Para King Maker",
            date: "19 November 2024",
            image: "assets/imgs/pilkada jakarta 2024 ajang.jpg",
            url: "pilkada-jakarta-2024-ajang-pertarungan.html"
        },
        {
            title: "Soal Wacana Pemeriksaan Budi Arie, Polri: Kami Tunggu Hasil Audit BPK",
            date: "19 November 2024",
            image: "assets/imgs/soal wacana pemeriksaan budi arie.jpg",
            url: "soal-wacana-pemeriksaan-budi-arie.html"
        },
        {
            title: "China Vs Jepang Skor 1-3 & Update Klasemen WCQ Round 3",
            date: "18 November 2024",
            image: "assets/imgs/china vs jepang.jpg",
            url: "china-vs-jepang.html"
        },
        {
            title: "Komentar Marselino Usai Indonesia Bungkam Arab Saudi",
            date: "20 November 2024", 
            image: "assets/imgs/komentar marselino.jpeg",
            url: "komentar-marselino-usai-indonesia-bungkam-arab-saudi.html"
        },
        {
            title: "Hasil Timnas Indonesia vs Jepang: Samurai Biru Terlalu Kuat, Garuda Tumbang 0-4",
            date: "15 November 2024",
            image: "assets/imgs/indonesia vs jepang.jpg", 
            url: "indonesia-vs-jepang.html"
        },
        {
            title: "Hajar Arab Saudi, Timnas Indonesia Resmi Jadi Wakil ASEAN Terhebat di Kualifikasi Piala Dunia, Vietnam-Thailand Lewat",
            date: "19 November 2024",
            image: "assets/imgs/indonesia vs arab saudi.jpg",
            url: "indonesia-vs-arab-saudi.html"
        },
        {
            title: "Bawa Timnas Indonesia Hajar Arab Saudi, Shin Tae-yong Apresiasi Kerja Keras Pemain dan Suporter",
            date: "19 November 2024",
            image: "assets/imgs/apresiasi shin tae yong.jpg",
            url: "apresiasi-shin-tae-yong.html"
        },
        {
            title: "Presiden Prabowo Saksikan Laga Timnas Indonesia vs Arab Saudi Lewat Telepon Genggam di Sela Kunjungan Kenegaraan",
            date: "19 November 2024",
            image: "assets/imgs/prabowo saksikan timnas.jpg",
            url: "presiden-prabowo-saksikan-timnas.html"
        }
    ];

    // Filter artikel berdasarkan keyword
    return articles.filter(article => 
        article.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

// Tampilkan hasil pencarian
function displayResults(keyword) {
    const resultsContainer = document.getElementById('search-results-container');
    const keywordSpan = document.getElementById('search-keyword');
    const resultCount = document.getElementById('result-count');
    
    keywordSpan.textContent = keyword;
    const results = searchArticles(keyword);
    
    resultCount.textContent = `Ditemukan ${results.length} hasil`;
    
    resultsContainer.innerHTML = results.map(article => `
        <div class="artikel" onclick="window.location.href='${article.url}'" style="cursor: pointer;">
            <img src="${article.image}" alt="${article.title}" class="artikel-image">
            <span class="tanggal">${article.date}</span>
            <h2>${article.title}</h2>
        </div>
    `).join('');
}

// Jalankan pencarian saat halaman dimuat
window.onload = function() {
    const keyword = getQueryParam('keyword');
    if (keyword) {
        displayResults(keyword);
    }
}; 