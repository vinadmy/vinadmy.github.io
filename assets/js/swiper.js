var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 3000, // Waktu delay antara pengguliran (dalam milidetik)
        disableOnInteraction: false, // Jika diatur true, pengguliran akan berhenti ketika pengguna berinteraksi dengan swiper
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});