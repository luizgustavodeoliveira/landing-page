const btn_ativar_menu = document.querySelector('#div-menu-icon');
const btn_fechar_menu = document.querySelector('#id-span-close-header');

const header = document.querySelector("#id-header-pagina");

btn_ativar_menu.addEventListener('click', (evt) => {
    header.classList.toggle('class-header-ativo');
    btn_ativar_menu.classList.toggle('class-botao-menu-inativo');
});

btn_fechar_menu.addEventListener('click', (evt) => {
    header.classList.toggle('class-header-ativo');
    btn_ativar_menu.classList.toggle('class-botao-menu-inativo');
});

