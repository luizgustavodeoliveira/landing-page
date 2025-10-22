const btn_ativar_menu = document.querySelector('#div-menu-icon');
const btn_fechar_menu = document.querySelector('#id-span-close-header');

const header = document.querySelector("#id-header-pagina");
const divHeaderLogo = document.querySelector("#div-header-logo");
const btnHeaderCta = document.querySelector("#btn-header-cta");
const fundoPreto = document.querySelector("#fundo-preto");
const html = document.querySelector("html");

btn_ativar_menu.addEventListener('click', (evt) => {
    header.classList.toggle('class-header-ativo');
    btn_ativar_menu.classList.toggle('class-botao-menu-inativo');
    fundoPreto.style.display = 'block';
    html.style.overflow = 'hidden';
});

fundoPreto.addEventListener('click', (evt)=>{
    header.classList.toggle('class-header-ativo');
    btn_ativar_menu.classList.toggle('class-botao-menu-inativo');
    fundoPreto.style.display = 'none';
    html.style.overflow = 'scroll';
})

btn_fechar_menu.addEventListener('click', (evt) => {
    header.classList.toggle('class-header-ativo');
    btn_ativar_menu.classList.toggle('class-botao-menu-inativo');
    fundoPreto.style.display = 'none';
    html.style.overflow = 'scroll';
});

document.addEventListener("DOMContentLoaded", function(){
    const scrollTrigger = 50;
    const mobileBreakpoint = 768;

    function checkScroll() {
        if((window.scrollY >= scrollTrigger) && (window.innerWidth>mobileBreakpoint)) {
            header.classList.add('shrink');
            divHeaderLogo.classList.add('class-display-none');
            btnHeaderCta.classList.add('class-display-none');
        }else{
            header.classList.remove('shrink');
            divHeaderLogo.classList.remove('class-display-none');
            btnHeaderCta.classList.remove('class-display-none');
        }
    }

    window.addEventListener('scroll', checkScroll);

    checkScroll();
});

