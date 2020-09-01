const sub01 = $("#sub_slide01");
const sub01Box = sub01.children('.sub_box');
const sub01Ul = sub01Box.children('ul');
let sub01Li = sub01Ul.children('li');

let liWidth = sub01Li.eq(0).outerWidth(true);

sub01Li.eq(-1).prependTo(sub01Ul);
sub01Li = sub01Ul.children('li');
sub01Ul.css({position:'relative', left : -liWidth + -10+'px'});

//자동 슬라이드
n = 0;
let start;
const Gosub = function(){
  start = setInterval(function(){
    n--;
    sub01Ul.animate({'marginLeft':n + 'px'},0,function(){
      if(n <= -liWidth){
        n = 0;
        $(this).children().eq(0).appendTo(sub01Ul);
        sub01Ul.css({marginLeft:0});}
    });
  },10);
};

const Stopsub = function(){clearInterval(start);}

Gosub();

sub01Ul.on('mouseenter',function(){Stopsub();});
sub01Ul.on('mouseleave',function(){Gosub();});

//car

const subCar = sub01Box.children('.sub_car');
const carPic = subCar.children('div');
let ulWidth = sub01Box.outerWidth(true);

 const MyMv = function(n, a){
  let r = parseInt(Math.random()*50000);
  carPic.eq(n).animate({'left':a + 'px'},r, function(){
    $(this).css('left',-100+'px');
    if( parseInt($(this).css('left')) < 0) {MyMv(n, a);}
  });

 }

 for(let a=0; a<carPic.length; a++){
    MyMv(a,ulWidth+500);
 }




