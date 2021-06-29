/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle= document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link')

function onClickNavLinkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')

}
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click',onClickNavLinkAction)
})
/*==================== ACCORDION SKILLS ====================*/

const skillsHeader = document.querySelectorAll('.skills__header')
skillsHeader.forEach((item)=>{
    item.addEventListener('click',()=>{
        let itemClass=item.parentNode.className; //parent Node is Skills__content
        if(itemClass === 'skills__content skills__close'){
            item.parentNode.className='skills__content skills__open'
        }else{
            item.parentNode.className='skills__content skills__close'
        }
    })
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

console.log(tabContents)
console.log(tabs)
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        // tabs.forEach(tab=>{
        //     tab.classList.remove('qualification__active');
        // })
        // tab.classList.add('qualification__active');
    })
})


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 

