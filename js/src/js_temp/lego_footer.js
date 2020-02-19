const fNav = $('.foot_nav');
const fLi = fNav.find('li');
const fDl = fLi.children('dl');

const Dlslide = function(){
for(let i = 0;i<fLi.length;i++){
  fLi.eq(i).find('dt').on('click',function(){
    $(this).parents(fLi).siblings().find('dd').stop().slideUp();
    $(this).siblings().stop().slideToggle();
    });
  }//for
}//dlSlide;
Dlslide();
