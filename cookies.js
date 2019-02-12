// $cookie: $('.cookie'),
// 	acceptCookiesBtn: '.cookie__btn',

function cookies() {
    let $cookie = $('.cookie');
    let acceptCookiesBtn = $('.cookie__btn');
    
    if(document.cookie === '' || document.cookie === 'undefined') {
        $cookie.show();
        $cookie.find(acceptCookiesBtn).on('click', function() {
                setCookie('cookiesAccepted', 'yes', 365);
                $cookie.stop().slideUp(function() {
                $cookie.remove();
            });
        });
        function setCookie(name, value, days) {
            const date = new Date();
            date.setDate(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = 'expires=' + date.toUTCString();
            document.cookie = name + '=' + value + '; ' + expires + ';path=/';
        }
    }

}

cookies();
