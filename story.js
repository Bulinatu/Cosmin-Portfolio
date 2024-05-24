document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY < 1000) {
            document.querySelector('.hero').style.backgroundSize = 130 + parseInt(window.scrollY / 5) + '%';
            document.querySelector('.hero h1').style.top = 50 + (window.scrollY * 0.1) + '%';
            document.querySelector('.hero h1').style.opacity = 1 - (window.scrollY * 0.003);
        }

        var contentWrapper = document.querySelector('.content-wrapper');
        if (window.scrollY >= contentWrapper.offsetTop - 300) {
            document.querySelector('.nav-bg').classList.remove('bg-hidden');
            document.querySelector('.nav-bg').classList.add('bg-visible');
        } else {
            document.querySelector('.nav-bg').classList.remove('bg-visible');
            document.querySelector('.nav-bg').classList.add('bg-hidden');
        }
    });
});
