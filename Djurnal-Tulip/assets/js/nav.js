const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
const simpleToggle = document.getElementById('simple-menu-toggle');
        // Toggle sidebar saat ikon diklik
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
        simpleToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open'); // Toggle the 'active' class
        });
        // Tutup sidebar saat mengklik di luar sidebar
        document.addEventListener('click', function(event) {
            // Cek jika klik terjadi di luar sidebar dan tombol menu
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && !simpleToggle.contains(event.target)) {
                sidebar.classList.remove('open');
            }
        });

        
    
let lastScrollTop = 0;
        const header = document.querySelector('header');
        const simpleNavbar = document.getElementById('simple-navbar');
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
            if (scrollTop > lastScrollTop) {
                // Scroll ke bawah
                header.style.display = "-70px"; // Menyembunyikan navbar utama
                simpleNavbar.style.display = 'block'; // Menampilkan navbar simpel
            } else {
                // Scroll ke atas
                if (scrollTop === 0) {
                    header.style.top = "0"; // Menampilkan navbar utama jika di atas
                    simpleNavbar.style.display = 'none'; // Menyembunyikan navbar simpel
                } else {
                    simpleNavbar.style.display = 'block'; // Menampilkan navbar simpel
                }
            }
            lastScrollTop = scrollTop;
        });
        
        
        // Fungsi slider untuk berita utama
        document.addEventListener('DOMContentLoaded', function() {
            const sliderContent = document.querySelector('.slider-content');
            const slides = document.querySelectorAll('.utama');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            let currentIndex = 0;

            // Fungsi untuk menggeser ke slide berikutnya
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            }

            // Fungsi untuk menggeser ke slide sebelumnya
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            }

            // Fungsi untuk memperbarui posisi slider
            function updateSlider() {
                sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Event listener untuk tombol
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);

            // Menghapus interval otomatis
            // setInterval(nextSlide, 5000);
        });