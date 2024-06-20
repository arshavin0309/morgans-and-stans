document.addEventListener("DOMContentLoaded", () => {
    // появление хедера при скролле
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

    // свайпер
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
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

    // закрытие всех details при открытии нового details
    // Fetch all the details element.
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((detail) => {
        detail.addEventListener("toggle", () => {
            if (detail.open) setTargetDetail(detail);
        });
    });

    // Close all the details that are not targetDetail.
    function setTargetDetail(targetDetail) {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.open = false;
            }
        });
    }

    // бургер меню
    let burgerBtn = document.querySelector('.burger')

    if (burgerBtn !== null) {
        burgerBtn.addEventListener('click', () => {
            document.querySelector('.header__nav').classList.toggle('header__nav--show')
            document.querySelector('.header').classList.toggle('black')
        })
    }

    // табы и кнопка "показать еще"
    let btn = document.querySelector('.assets__btn')
    let tab1 = document.querySelector('#tab-1')
    let tabs = document.querySelectorAll('.assets__name')

    if (tab1 !== null) {
        tab1.addEventListener('click', () => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('assets__name--active')
            }

            tab1.classList.add('assets__name--active')
            let tables = document.querySelectorAll('.assets__box .assets__table')

            for (let i = 0; i < tables.length; i++) {
                tables[i].style = 'display: none'
                tables[i].classList.remove('table-active')
                tables[i].classList.remove('show')
                btn.textContent = 'Показать еще'
                btn.classList.remove('show')
            }

            document.querySelector('.tab-1').style = 'display: table'
            document.querySelector('.tab-1').classList.add('table-active')
        })
    }

    let tab2 = document.querySelector('#tab-2')

    if (tab2 !== null) {
        tab2.addEventListener('click', () => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('assets__name--active')
            }

            tab2.classList.add('assets__name--active')
            let tables = document.querySelectorAll('.assets__box .assets__table')

            for (let i = 0; i < tables.length; i++) {
                tables[i].style = 'display: none'
                tables[i].classList.remove('table-active')
                tables[i].classList.remove('show')
                btn.textContent = 'Показать еще'
                btn.classList.remove('show')
            }

            document.querySelector('.tab-2').style = 'display: table'
            document.querySelector('.tab-2').classList.add('table-active')
        })
    }

    let tab3 = document.querySelector('#tab-3')

    if (tab3 !== null) {
        tab3.addEventListener('click', () => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('assets__name--active')
            }
            
            tab3.classList.add('assets__name--active')
            let tables = document.querySelectorAll('.assets__box .assets__table')

            for (let i = 0; i < tables.length; i++) {
                tables[i].style = 'display: none'
                tables[i].classList.remove('table-active')
                tables[i].classList.remove('show')
                btn.textContent = 'Показать еще'
                btn.classList.remove('show')
            }

            document.querySelector('.tab-3').style = 'display: table'
            document.querySelector('.tab-3').classList.add('table-active')
        })
    }

    let tab4 = document.querySelector('#tab-4')

    if (tab4 !== null) {
        tab4.addEventListener('click', () => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('assets__name--active')
            }
            
            tab4.classList.add('assets__name--active')
            let tables = document.querySelectorAll('.assets__box .assets__table')

            for (let i = 0; i < tables.length; i++) {
                tables[i].style = 'display: none'
                tables[i].classList.remove('table-active')
                tables[i].classList.remove('show')
                btn.textContent = 'Показать еще'
                btn.classList.remove('show')
            }

            document.querySelector('.tab-4').style = 'display: table'
            document.querySelector('.tab-4').classList.add('table-active')
        })
    }

    let tab5 = document.querySelector('#tab-5')

    if (tab5 !== null) {
        tab5.addEventListener('click', () => {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('assets__name--active')
            }
            
            tab5.classList.add('assets__name--active')
            let tables = document.querySelectorAll('.assets__box .assets__table')

            for (let i = 0; i < tables.length; i++) {
                tables[i].style = 'display: none'
                tables[i].classList.remove('table-active')
                tables[i].classList.remove('show')
                btn.textContent = 'Показать еще'
                btn.classList.remove('show')
            }

            document.querySelector('.tab-5').style = 'display: table'
            document.querySelector('.tab-5').classList.add('table-active')
        })
    }

    if (btn !== null) {
        btn.addEventListener('click', () => {
            let table = document.querySelector('.table-active')

            if (btn.textContent === 'Показать еще') {
                table.classList.add('show')
                btn.classList.add('show')
                btn.textContent = 'Скрыть'
            } else {
                table.classList.remove('show')
                btn.classList.remove('show')
                btn.textContent = 'Показать еще'
            }
        })
    }
})