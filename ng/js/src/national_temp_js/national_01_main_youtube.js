//youtube=====================================
// 배열
let imgUrl = '../img/main_img/';
const textlist = [
    {
      title: '파랑새는 없다!',
      content: '왜 자연계에서는 파란색을 보기 어려울까?',
      link: 'https://youtu.be/DWTMD9QKCmk',
      img: imgUrl + 'you_pic_04.png'
    },
  {
    title: '바다의 푸른바다거북',
    content: '이곳의 생물 지표종인 푸른바다거북 포획기!',
    link: 'https://youtu.be/p8PUtE6pVaY',
    img:imgUrl+'you_pic_03.png'
  },
  {
    title: '인류멸망 시나리오',
    content: '절대 피할 수 없는 재앙, 생존 불가의 땅이 되다!',
    link: 'https://youtu.be/mnojh6VjgpE',
    img:imgUrl+'you_pic_01.png'
  },
  {
    title: '호주의 치명적인 독사',
    content: ' 아름다운 붉은색 배를 가진 공격성이 강한 치명적인 뱀',
    link: 'https://youtu.be/7iFEnrQ9vsk ',
    img:imgUrl+'you_pic_02.png'
  }

];

 
let textlen = textlist.length;
let formCon = '<div class="slide_form"><div class="guide"></div></div>';

let indiCon = '<div class="indicator"><ul></ul></div>';
let titleCon = '<div class="banner"><div class="y_img_zone"></div><div class="y_title_area"><div class="text_zone"><h4></h4><p></p></div><div class="y_link"><a target="_blank">Youtube 바로가기</a></div></div></div>';
let btnCon = '<div class="slide_btn"><button type="button" class="next"><span class="hidden">다음으로 이동</span></button>    <button type="button" class="prev"><span class="hidden">이전으로 이동</span></button></div>';

// console.log(textlist[0].title);

const youtubeArea = $('#youtube_area');
const slidFrame = youtubeArea.children('.slide_frame');

slidFrame.append(indiCon);
slidFrame.append(formCon);

const indi = youtubeArea.find('.indicator').find('ul');
const slideForm = youtubeArea.find('.slide_form');
const guide = slideForm.children('.guide');
slideForm.append(btnCon);

for (let i = 0; i < textlen; i++) {

  guide.append(titleCon);
  let bannerEq = guide.children('.banner').eq(i);
  let yImg = bannerEq.children('.y_img_zone');
  let y_title = bannerEq.children('.y_title_area');
  
  
  let title = y_title.find('h4');
  let content = y_title.find('p');
  let yLink = y_title.find('a');
  title.text(textlist[i].title);
  content.text(textlist[i].content);
  yLink.attr({'href': textlist[i].link});
  yImg.css({backgroundImage:'url('+textlist[i].img+')', backgroundSize:'auto 70%'});


}
// 마지막영역 복제 ===============================

let banner = guide.children('.banner');
banner.eq(-1).clone(true).prependTo(guide);
banner = guide.children('.banner');

let bannerLen = banner.length;
guide.css({width:100 * bannerLen +'%',marginLeft:'-100%'});
banner.css({width:100 / bannerLen + '%'});
console.log();


// 인디케이터 영역 ===============================

for (let i = 0; i < bannerLen - 1  ; i++) {
  indi.append('<li><a href="#"><span class="hidden"></span></a></li>');
  let indiLi = indi.children('li').eq(i);
  indiLi.find('span').text(banner.eq(i+1).text());
  indiLi.find('spna').addClass('hidden');
};
const indiLi = indi.children('li');
const indiLink = indiLi.children('a');

indiLi.eq(0).addClass('action');
for(let i = 0; i<bannerLen-1;i++){
  indiLi.eq(i).children('a').on('click',function(e){
    e.preventDefault();
    indiLi.removeClass('action');
    indiLi.eq(i).addClass('action');
    guide.stop().animate({'marginLeft':-100 * i + '%'});
  });
};


// 좌우버튼 클릭시 이동 ==========================
let n = 0;
const slideBtn = slideForm.children('.slide_btn').find('button');
slideBtn.on('click', function (e) {
  e.preventDefault();
  let has = $(this).hasClass('next');
  if(has){//next버튼 클릭
    n++;
    if (n >= bannerLen-1){
      n=0;
      guide.css({'left':'100%'});
    }
  }else{//이전버튼 클릭
    n--;
  };
  guide.stop().animate({'left':-100 * n + '%'},function(){
    if(n <= -1){
      n = bannerLen -2;
      guide.css({'left':-100 * n + '%'});
    }
  }); //guide.stop().animate
  indiLi.eq(n).siblings().removeClass('action');
  indiLi.eq(n).addClass('action');
});

let i = 0;

setInterval(function(){
  slideBtn.eq(0).trigger('click');
},3000);
