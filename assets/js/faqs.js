// ------------------------ Scroll Reveal --------------
window.sr = ScrollReveal();

// FAQS Scroll
    sr.reveal('.landin_launch',{
        duration: 2000,
        origin: 'bottom',
        distance:'-100px',
        reset: true
    });
    
    sr.reveal('.title-faqs img',{
        duration: 2000,
        distance:'-100px',
        reset: true,
    });

    sr.reveal('.text h2, p',{
        duration: 3000,
        origin: 'top',
        distance:'-50px',
        reset: true,
        scale: 0.85 
    });

    sr.reveal('.discore_mint',{
        duration: 1000,
        reset: true,
        scale: 0.75 
    });

    sr.reveal('.icon_mint',{
        duration: 3500,
        origin: 'bottom',
        distance:'50px',
        reset: true  
    });

    sr.reveal('.btn-1',{
        duration: 3500,
        origin: 'bottom',
        distance:'50px',
        reset: true  
    });
    
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
