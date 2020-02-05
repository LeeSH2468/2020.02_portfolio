const slideArea = $('#slide_area');
const indi = slideArea.children('.indi');
const indiUl = indi.children('ul');
const indiLi = indiUl.children('li');
const inLink = indiLi.children('a');
const sBtn = slideArea.children('.s_btn').find('button');
const sForm = slideArea.children('.s_form');
const sFormUl = sForm.children('ul');
let sFormLi = sFormUl.children('li');

// 영역복제 ==============================
sFormLi.eq(-1).clone(true).prependTo(sFormUl);
sFormLi = sFormUl.children('li');

let maxn=sFormLi.length, timed=500, myn=0;
sFormUl.css({width:100 * maxn +'%',marginLeft:'-100%'});
sFormLi.css({width:100 / maxn + '%'});

//------------------------
const MoveSlide = function(n,bool){
  indiLi.removeClass('action');
  indiLi.eq(n-1).addClass('action');

  sFormUl.animate({'marginLeft' : (-100 * n) + '%'},function(){
    if(n <=-1){
      n=maxn -2;
    }
    sFormLi.removeClass('action');
    setTimeout(function(){
      sFormLi.eq(n).addClass('action');
    });
  });
}// MoveSlide() ==========================
// 일정 시간마다 움직이기
let go;
const Goslide = function(){
  go = setInterval(function(){
    myn++
    if(myn >=maxn){myn = 0;
    sFormUl.css({'marginLeft':'0'},function(){
      sFormUl.animate({'marginLeft' : (-100 * n) + '%'});
    });
    }
    MoveSlide(myn, true);
  },timed * 4);
};//Goslide();
const Stopslide = function () {
  clearInterval(go);
};//stopSlide
Goslide();

sForm.on('mouseenter',function(){
  Stopslide();
});
sForm.on('mouseleave',function(){
  Goslide();
});


// 버튼 클릭
//=====================
let n=0;
sBtn.on('click',function(e){
  e.preventDefault();
  Stopslide();
  let hNext = $(this).hasClass('next');
  let hPrev = $(this).hasClass('prev');

  if(hNext){
    n++;
    sFormUl.stop().animate({'marginLeft':(-100 * n) + '%'},function(){
      if(n >=maxn){
        n = 0;
        sFormUl.css({'marginLeft':(-100 *n)+'%'});
        }
    });
    MoveSlide();
  }else if(hPrev){
    n--;
    sFormUl.stop().animate({'marginLeft':(-100 * n) + '%'},function(){
      if(n <=-1){
        n = 0;
        sFormUl.css({'marginLeft':(100 *maxn)+'%'});
        }
    });
  };
});
