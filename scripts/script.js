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
}