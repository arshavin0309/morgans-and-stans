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
            delay: 2500,
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
            600: {
                slidesPerView: 2
            },
            950: {
                slidesPerView: 3
            },
            1200: {
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

    // табы и кнопка "показать еще"
    let btn = document.querySelector('.assets__btn')
    let tab1 = document.querySelector('#tab-1')
    let tabs = document.querySelectorAll('.assets__name')
    let tables = document.querySelectorAll('.assets__table')

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('assets__name--active')
            }

            tabs[i].classList.add('assets__name--active')
            let tables = document.querySelectorAll('.assets__box .assets__table')

            for (let i = 0; i < tables.length; i++) {
                tables[i].style = 'display: none'
                tables[i].classList.remove('table-active')
                tables[i].classList.remove('show')
                btn.textContent = 'Показать еще'
                btn.classList.remove('show')
            }

            tables[i].style = 'display: table'
            tables[i].classList.add('table-active')
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

    // бургер меню и меню для мобилок
    let burgerBtn = document.querySelector('.burger')
    let headerItem = document.querySelectorAll('div.header__item')

    if (burgerBtn !== null) {
        burgerBtn.addEventListener('click', () => {
            document.querySelector('.header__nav').classList.toggle('header__nav--show')
            
            for (let i = 0; i < headerItem.length; i++) {
                headerItem[i].classList.remove('show')
            }

            document.querySelector('.header').classList.toggle('black')
        })
    }

    for (let i = 0; i < headerItem.length; i++) {
        headerItem[i].addEventListener('click', () => {

            if (headerItem[i].classList.contains('show') !== true) {
                for (let i = 0; i < headerItem.length; i++) {
                    headerItem[i].classList.remove('show')
                }
    
                headerItem[i].classList.toggle('show')
            } else {
                headerItem[i].classList.toggle('show')
            }
        })
    }

    // окно с предупреждением о куки
    function getCookie(name) {
        let matches = document.cookie.match(
            new RegExp(
                '(?:^|; )' +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                '=([^;]*)'
            )
        )
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    function setCookie(name, value, options = {}) {
        options = {
            path: '/',
            ...options,
        }

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString()
        }

        let updatedCookie =
            encodeURIComponent(name) + '=' + encodeURIComponent(value)

        for (let optionKey in options) {
            updatedCookie += '; ' + optionKey
            let optionValue = options[optionKey]
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue
            }
        }

        document.cookie = updatedCookie
    }


    if (!getCookie('cookies')) {
        document.querySelector('.cookies').style = 'display: flex'
    }

    document.querySelector('.cookies .btn').addEventListener('click', () => {
        document.querySelector('.cookies').style = 'display: none'
        setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
    })
})