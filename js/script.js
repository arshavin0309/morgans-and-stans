document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body");
    let header = document.querySelector(".header");

    window.onscroll = function () {
        if (pageYOffset > 50) {
            header.classList.add("fixed");
            body.style = "margin-top: 100px"
        } else {
            header.classList.remove("fixed");
            body.style = "margin: 0"
        }
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            // 320: {
            //   slidesPerView: 2,
            //   spaceBetween: 20
            // },
            // when window width is >= 480px
            // 480: {
            //   slidesPerView: 3,
            //   spaceBetween: 30
            // },
            // when window width is >= 640px
            992: {
                slidesPerView: 4
            }
        }
    });
})