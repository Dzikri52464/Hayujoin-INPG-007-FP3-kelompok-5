window.onload = function() {
    feather.replace();
    
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        rewind: true,
        breakpoints: {
            768: {
                perPage: 2,
                gap: '.7rem',
            },
            576: {
                perPage: 1,
                gap: '.7rem',
            },
        },
    });
    
    splide.mount();

    baseModal = document.getElementById('serviceModal')
    modal = new bootstrap.Modal(baseModal)
};

var app = {
    title: document.getElementById('titleApp').innerHTML,
    desc: document.getElementById('descApp').innerHTML,
    image: '<img src="assets/svg/AppDev.svg" alt="AppDev" class="card-img">',
    btn : document.getElementById('btnApp')
}

app.btn.addEventListener('click', function() {
    modal.show()
});