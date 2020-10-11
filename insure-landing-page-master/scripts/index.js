document.addEventListener('DOMContentLoaded',()=> {
const burger = document.getElementById('burger');
const menuList = document.getElementById('menu-list');


window.addEventListener('resize',()=> {
const isDesktop = window.matchMedia('(min-width:992px)').matches;
if(isDesktop) {
    menuList.classList.remove('showMenuMobile');
}
})


burger.addEventListener('click',()=> {
    menuList.classList.toggle('showMenuMobile');
    burger.classList.toggle('close');
})
})