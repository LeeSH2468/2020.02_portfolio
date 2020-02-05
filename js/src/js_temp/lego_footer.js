const fNav = $('.foot_nav');
const fLi = fNav.find('li');
const fDl = fLi.children('dl');


const dlSlide = function(){
for(let i = 0;i<fLi.length;i++){
  fLi.eq(i).find('dt').on('click',function(){
    $(this).siblings().slideToggle();
  });
}
}
