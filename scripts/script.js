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
var web = {
    title: document.getElementById('titleWeb').innerHTML,
    desc: document.getElementById('descWeb').innerHTML,
    image: '<img src="assets/svg/WebDev.svg" alt="WebDev" class="card-img">',
    btn : document.getElementById('btnWeb')
}
var uix = {
    title: document.getElementById('titleUix').innerHTML,
    desc: document.getElementById('descUix').innerHTML,
    image: '<img src="assets/svg/UIX.svg" alt="UIX" class="card-img">',
    btn : document.getElementById('btnUix')
}
var consult = {
    title: document.getElementById('titleConst').innerHTML,
    desc: document.getElementById('descConst').innerHTML,
    image: '<img src="assets/images/React.png" alt="Consult" class="card-img">',
    btn : document.getElementById('btnConst')
}
var dataAnalyst = {
    title: document.getElementById('titleData').innerHTML,
    desc: document.getElementById('descData').innerHTML,
    image: '<img src="assets/images/3169210.jpg" alt="DataAnalyst" class="card-img">',
    btn : document.getElementById('btnData')
}

app.btn.addEventListener('click', function() {    
    showService(app.title, app.image, app.desc)
    var modalBg = document.getElementById('modalBg');
    if (modalBg.classList.contains('bg-success')) {
        modalBg.classList.remove('bg-success');
    }
    if (modalBg.classList.contains('bg-danger')) {
        modalBg.classList.remove('bg-danger');
    }
    if (modalBg.classList.contains('bg-info')) {
        modalBg.classList.remove('bg-info');
    }
    if (modalBg.classList.contains('bg-primary')) {
        modalBg.classList.remove('bg-primary');
    }
    if (modalBg.classList.contains('bg-secondary')) {
        modalBg.classList.remove('bg-secondary');
    }
    if (modalBg.classList.contains('bg-white')) {
        modalBg.classList.remove('bg-white');
    }
    if (modalBg.classList.contains('text-white')) {
        modalBg.classList.remove('text-white');
    }
    modalBg.classList.add('bg-warning');
});
web.btn.addEventListener('click', function() {
    showService(web.title, web.image, web.desc)
    var modalBg = document.getElementById('modalBg');
    if (modalBg.classList.contains('bg-success')) {
        modalBg.classList.remove('bg-success');
    }
    if (modalBg.classList.contains('bg-danger')) {
        modalBg.classList.remove('bg-danger');
    }
    if (modalBg.classList.contains('bg-warning')) {
        modalBg.classList.remove('bg-warning');
    }
    if (modalBg.classList.contains('bg-primary')) {
        modalBg.classList.remove('bg-primary');
    }
    if (modalBg.classList.contains('bg-secondary')) {
        modalBg.classList.remove('bg-secondary');
    }
    if (modalBg.classList.contains('bg-white')) {
        modalBg.classList.remove('bg-white');
    }
    if (modalBg.classList.contains('text-white')) {
        modalBg.classList.remove('text-white');
    }
    modalBg.classList.add('bg-info');
});
uix.btn.addEventListener('click', function() {
    showService(uix.title, uix.image, uix.desc)
    var modalBg = document.getElementById('modalBg');
    if (modalBg.classList.contains('bg-success')) {
        modalBg.classList.remove('bg-success');
    }
    if (modalBg.classList.contains('bg-warning')) {
        modalBg.classList.remove('bg-warning');
    }
    if (modalBg.classList.contains('bg-info')) {
        modalBg.classList.remove('bg-info');
    }
    if (modalBg.classList.contains('bg-primary')) {
        modalBg.classList.remove('bg-primary');
    }
    if (modalBg.classList.contains('bg-secondary')) {
        modalBg.classList.remove('bg-secondary');
    }
    if (modalBg.classList.contains('bg-white')) {
        modalBg.classList.remove('bg-white');
    }
    if (modalBg.classList.contains('text-white')) {
        modalBg.classList.remove('text-white');
    }
    modalBg.classList.add('bg-danger');
});
consult.btn.addEventListener('click', function() {
    showService(consult.title, consult.image, consult.desc)
    var modalBg = document.getElementById('modalBg');
    if (modalBg.classList.contains('bg-success')) {
        modalBg.classList.remove('bg-success');
    }
    if (modalBg.classList.contains('bg-danger')) {
        modalBg.classList.remove('bg-danger');
    }
    if (modalBg.classList.contains('bg-info')) {
        modalBg.classList.remove('bg-info');
    }
    if (modalBg.classList.contains('bg-primary')) {
        modalBg.classList.remove('bg-primary');
    }
    if (modalBg.classList.contains('bg-warning')) {
        modalBg.classList.remove('bg-warning');
    }
    if (modalBg.classList.contains('bg-white')) {
        modalBg.classList.remove('bg-white');
    }
    modalBg.classList.add('bg-secondary');
    modalBg.classList.add('text-white');
});
dataAnalyst.btn.addEventListener('click', function() {
    showService(dataAnalyst.title, dataAnalyst.image, dataAnalyst.desc)
    var modalBg = document.getElementById('modalBg');
    if (modalBg.classList.contains('bg-success')) {
        modalBg.classList.remove('bg-success');
    }
    if (modalBg.classList.contains('bg-danger')) {
        modalBg.classList.remove('bg-danger');
    }
    if (modalBg.classList.contains('bg-info')) {
        modalBg.classList.remove('bg-info');
    }
    if (modalBg.classList.contains('bg-primary')) {
        modalBg.classList.remove('bg-primary');
    }
    if (modalBg.classList.contains('bg-secondary')) {
        modalBg.classList.remove('bg-secondary');
    }
    if (modalBg.classList.contains('bg-warning')) {
        modalBg.classList.remove('bg-warning');
    }
    if (modalBg.classList.contains('text-white')) {
        modalBg.classList.remove('text-white');
    }
    modalBg.classList.add('bg-white');
});

function showService(title, image, desc) {
    var servTitle = document.getElementById('servTitle')
    var servImg = document.getElementById('servImg')
    var servContent = document.getElementById('servContent')

    servTitle.innerHTML = '';
    servImg.innerHTML = '';
    servContent.innerHTML = '';
    servTitle.innerHTML = title;
    servImg.innerHTML = image;
    servContent.innerHTML = desc;
    modal.show();

    var interested = document.getElementById('interested')
    interested.addEventListener('click', function() {
        var subject = document.getElementById('subject');
        subject.value = title;
        modal.hide();
        window.location.href = '#contact';
    });
}