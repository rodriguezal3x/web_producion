// -------------------- Nav
const btn_menu = document.querySelector('.btn_menu')
if (btn_menu) {
    btn_menu.addEventListener('click', () => {
        const menu_items = document.querySelector('.menu_items')
        menu_items.classList.toggle('show')
    })
};

window.addEventListener("scroll", function(){
    var menu = document.querySelector(".menu");
    menu.classList.toggle("sticky", this.window.scrollY > 0);
});

//  -----------------------  Date 
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, d, h, m, s, finalMenssage) => {
    const dias = document.getElementById(d);
    const horas = document.getElementById(h);
    const minutos = document.getElementById(m);
    const segundos = document.getElementById(s);

    const timmerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        dias.innerHTML = `${t.remainDays}`;
        horas.innerHTML = `${t.remainHours}`;
        minutos.innerHTML = `${t.remainMinutes} `;
        segundos.innerHTML = `${t.remainSeconds}`;

        if (t.remainTime <= 1) {
            clearInterval(timmerUpdate);
            el.innerHTML = finalMenssage;
        }
    }, 1000)
};

countdown('nov 30 2021 23:59:59 GMT-0600', 'dias', 'horas', 'minutos','segundos', 'Mint your NFT');

// ------------------------ Scroll Reveal --------------
window.sr = ScrollReveal();

// Home 
sr.reveal('.landin', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px',
    reset: true
});

sr.reveal('.Mint', {
    duration: 1000,
    origin: 'top',
    distance:'-50px',
    reset: true,
    scale: 0.85 
});

sr.reveal('.baner1', {
    duration: 2000,
    origin: 'buttom',
    distance:'50px',
    reset: true,
    scale: 0.75 
});

sr.reveal('.content-2', {
    duration: 1000,
    // reset: true,
    scale: 0.85 
});

sr.reveal('.container-box1', {
    duration: 1000,
    // reset: true,
    scale: 0.75 
});

sr.reveal('.content2 ', {
    duration: 1000,
    // reset: true,
    scale: 0.85 
});

sr.reveal('.Conteiner_box2', {
    duration: 2000,
    origin: 'top',
    distance:'-50px',
    scale: 0.75 
});

sr.reveal('.roadmap-item', {
    duration: 2000,
    origin: 'top',
    distance:'-50px',
    scale: 0.75 
});

sr.reveal('.roadmap-whale', {
    duration: 2000,
    origin: 'top',
    distance:'-50px',
    scale: 0.75 
});

sr.reveal('.banner-discord', {
    duration: 2000,
    origin: 'top',
    distance:'-50px',
    scale: 0.75 
});

sr.reveal('.faqs', {
    duration: 2000,
    origin: 'top',
    distance:'-50px',
    scale: 0.75 
});

sr.reveal('.footer', {
    duration: 2000,
    origin: 'top',
    distance:'-50px',
    scale: 0.75 
});
