function onSubmit() {
    event.preventDefault();
    let value = document.querySelector('.input-block__input').value;
    if (value) {
        value = value.replace(/[^a-z0-9.]/gi, '');
        let span = document.querySelector('.sub-block__info');
        let a = document.querySelector('.sub-block__reg');
        span.innerHTML = `Домен ${value} — свободен.`;
        a.innerHTML = 'Зарегистрировать за 39₽';
    }
}

let info = document.querySelector('.info');
let text = document.querySelector('.info__text');

function onMouseOver(name) {
    info.setAttribute('class', 'info feature-list__info info-hover');
    switch (name) {
        case 'Сайт-визитка':
            text.innerHTML = `Для любого вашего домена, зарегистрированного на «Джино», вы можете в
            несколько кликов создать
            простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам
            нужен только для почты. Вы можете разместить здесь краткую информацию о себе или вашем бизнесе,
            ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка базового варианта
            сайта-визитки абсолютно бесплатны.`;
            break;
        case 'Поддержка DNS':
            text.innerHTML = `Зарегистрировав домен через «Джино», вы бесплатно получаете постоянную возможность изменения NS-записей и направления домена туда, куда вам хочется.
            У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, зарегистрированных и поддерживаемых «Джино».`;
            break;
        case 'Сертификат о владении доменом':
            text.innerHTML = `Подтвердите владение доменным именем с помощью официального сертификата «Джино». Вам достаточно распечатать документ в формате PDF, который будет доступен в панели управления сразу же после делегирования домена.`;
            break;
        case 'Автопродление':
            text.innerHTML = `С помощью функции «Автопродление» больше не нужно беспокоиться о том, что ваш домен внезапно перестанет работать. «Джино» заблаговременно продлит регистрацию на следующий период и вышлет вам уведомление об этом.`;
            break;
        case 'Облачное хранилище на 20 Гб':
            text.innerHTML = `Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — «Джино.Облако». Это надежное место для хранения файлов — здесь точно поместится всё. Вы получите постоянный доступ к своей музыке, фотографиям и документам и сможете без труда делиться данными с кем угодно.`;
            break;
        case 'Бесплатный SSL-сертификат':
            text.innerHTML = `Будучи клиентом «Джино», вы можете бесплатно получить SSL-сертификат от удостоверяющего центра Let’s Encrypt. Данный сертификат позволит вашим сайтам работать по безопасному протоколу HTTPS и избежать предупреждений браузера о том, что на сайте используется незашифрованное соединение.
            Вы можете легко обзавестись сертификатом: в разделе «Домены» вашего аккаунта выберите нужный домен и на странице его настроек перейдите во вкладку «SSL». Сертификат выдаётся по нажатию одной кнопки и продлевается автоматически.`;
            break;
        case 'DNSSEC в один клик':
            text.innerHTML = `С помощью технологии цифрового подписывания ответа DNS-сервера вы можете застраховаться от возможной его подмены и быть уверенными в том, что посетители вашего сайта не попали на замаскированный сайт злоумышленников.
            Для подключения DNSSEC необходимо перейти в соответствующую вкладку в настройках вашего домена и нажать кнопку «Включить».`;
            break;
        case 'Перенаправление':
            text.innerHTML = `Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно перенаправить его на любую страницу любого сайта.
            У вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным сайтом, а не только страницей соцсети! Персонифицирование при помощи перенаправления доменного имени от «Джино» — это дополнительный инструмент в продвижении и идентификации вашей деятельности.`;
            break;
    }

}

function onMouseOut() {
    info.setAttribute('class', 'info feature-list__info');
    text.innerHTML = '';
}

let links = document.querySelectorAll('.navbar__item');

function onClickAnchor(link) {
    event.preventDefault();
    let section = document.querySelector(link.getAttribute('href'));
    let coord = getCoords(section).top;
    window.scrollTo({
        top: coord,
        behavior: "smooth"
    });
}

function getCoords(elem) {
    var coord = elem.getBoundingClientRect();
    return {
        top: coord.top + pageYOffset,
        left: coord.left + pageXOffset
    };
}


let clientHeight = document.documentElement.clientHeight;
window.onscroll = function () {
    let coord = window.pageYOffset;
    if (coord < clientHeight / 2) {
        links[0].setAttribute('class', 'navbar__item click')
        links[1].setAttribute('class', 'navbar__item')
        links[2].setAttribute('class', 'navbar__item')
    }

    if (coord >= clientHeight / 2 && coord < clientHeight + clientHeight / 2) {
        links[0].setAttribute('class', 'navbar__item')
        links[1].setAttribute('class', 'navbar__item click')
        links[2].setAttribute('class', 'navbar__item')
    }

    if (coord >= clientHeight + clientHeight / 2) {
        links[0].setAttribute('class', 'navbar__item')
        links[1].setAttribute('class', 'navbar__item')
        links[2].setAttribute('class', 'navbar__item click')
    }
}