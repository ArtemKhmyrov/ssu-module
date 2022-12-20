const header = document.querySelector('.header');
const topBlock = header.querySelector('.header__top');
const burgerMenu = topBlock.querySelector('.burger-menu');
const burgerMenuIcon = burgerMenu.querySelector('.burger-menu__icon');
const burgerMenuBox = burgerMenu.querySelector('.burger-menu__box');
const container = burgerMenuBox.querySelector('.container');
const burgerMenuSub = container.querySelector('.burger-menu-sub');

if(burgerMenuIcon){
    burgerMenuIcon.addEventListener("click", function(){
        burgerMenuIcon.classList.toggle('_active');
        burgerMenuBox.classList.toggle('_active');
    });
}

let burgerMenuTitle = burgerMenuSub.querySelectorAll(".burger-menu-title");
let burgerMenuList = burgerMenuSub.querySelectorAll('.burger--menu-list');
let burgerMenuContent = burgerMenuSub.querySelectorAll('.burger-menu-content');
let burgerIcon = burgerMenuSub.querySelectorAll('.burger-icon');
let burgerMenuContentOpen = burgerMenuSub.querySelectorAll('.burger-menu-content-open');

function showMenu(){
    for(let i = 0; i < burgerMenuTitle.length; i++){
        burgerMenuTitle[i].addEventListener('click', (e) => {   
            burgerMenuContent[i].classList.toggle('burger-menu-content-open');

            console.log(e);

        });  
    }
}

function closeMenu(){
    for(let i = 0; i < burgerMenuContentOpen.length; i++){
        burgerMenuContentOpen[i].classList.remove('burger-menu-content-open');
    }
}

showMenu();