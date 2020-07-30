function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    var hamburgerClose = document.getElementById('js-close');
    hamburgerClose.classList.add('hide');
    hamburger.addEventListener('click', function () {
        body.classList.add('nav-open');
        hamburger.classList.add('hide');
        hamburgerClose.classList.remove('hide');
    });
    hamburgerClose.addEventListener('click', function () {
        body.classList.remove('nav-open');
        hamburger.classList.remove('hide');
        hamburgerClose.classList.add('hide');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
        hamburger.classList.remove('hide');
        hamburgerClose.classList.add('hide');
    });
}
toggleNav();