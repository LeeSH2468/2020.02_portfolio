// lego_h_05_set.js

const setArea = $('#set_area');
const setForm = setArea.children('.s_form');
const setUl = setForm.children('.guide');
const setLi = setUl.children('li');

let addUl = '<ul></ul>';
let addDiv = '<li><div class="pic_zone"></div><div class="text_zone"><h3></h3><p class="price"></p><div class="btn"><button type="button">사러가기</button></div></li>';
let imgUrl = '../../img/';

const sList = [
  {
    class : 'new',
    pic : imgUrl + 'set01.png',
    title : '사자춤',
    price : '99,900원'
  },
  {
    class : 'only',
    pic : imgUrl + 'set02.jpeg',
    title : '스타워즈 제국의 스타 디스트로이어™',
    price : '910,000원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set03.jpeg',
    title : '앱 조종식 탑기어 랠리카',
    price : '179,900원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set04.jpg',
    title : '미니피겨 DC 수퍼 히어로 시리즈',
    price : '4,900원'
  },
  {
    class : 'rare',
    pic : imgUrl + 'set04.jpg',
    title : '코너 정비소',
    price : '279,900원'
  },
  {
    class : 'rare',
    pic : imgUrl + 'set04.jpg',
    title : '데스스타™',
    price : '699,900원'
  },
  {
    class : 'only',
    pic : imgUrl + 'set04.jpg',
    title : '프렌즈 센트럴 퍼크',
    price : '89,900원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set04.jpg',
    title : '아이스크림 트럭',
    price : '29,900원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set04.jpg',
    title : '어벤져스 트럭 급습',
    price : '59,900원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set04.jpg',
    title : '공룡 화석',
    price : '89,900원'
  },
  {
    class : '',
    pic : imgUrl + 'set04.jpg',
    title : '스타워즈 20주년 기념 - 슬레이브™',
    price : '179,900원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set04.jpg',
    title : '스포츠카',
    price : '12,900원'
  },
  {
    class : 'new',
    pic : imgUrl + 'set04.jpg',
    title : '스포츠카',
    price : '12,900원'
  }

];

// 생성
let sLen = sList.length;
for(let i = 0;i<3;i++){
  setLi.eq(i).append(addUl);
}
for(let i = 0;i<4;i++){
  const conUl = setLi.children('ul');
  conUl.append(addDiv);

  let pZone = setArea.find('.pic_zone');
  let tZone = setArea.find('.text_zone');
  let tTitle = tZone.children('h3');
  let tPrice = tZone.children('.price'); 
  let tBtn = setArea.find('.btn');

  for(let j=0; j<sLen; j++){
    let conEq = conUl.children('li').eq(j);
      conEq.find(pZone).css({backgroundImage:'url(' + sList[j].pic +')'});
      conEq.find(tTitle).text(sList[j].title);
      conEq.find(tPrice).text(sList[j].price);
    }
} //for

//클릭시 배너 움직이게 만들기
// -------------------------

n=0;
const setBtn = setForm.children('.s_btn').find('button');
setBtn.on('click',function(e){
  e.preventDefault();
  let hNext = $(this).hasClass('next');
  let hPrev = $(this).hasClass('prev');

  if(hNext){
    n++;
    setUl.stop().animate({'marginLeft':(-100 * n) + '%'});
      if(n>=setLi.length-2){
        setBtn.eq(0).css({display:'none'});
        setBtn.eq(1).css({display:'block'});
      }else{
        setBtn.css({display:'block'});
      }
  }else if(hPrev){
    n--;
    setUl.stop().animate({'marginLeft':(-100 * n) + '%'});
    if(n <=0){
      setBtn.eq(1).css({display:'none'});
      setBtn.eq(0).css({display:'block'});
    }else{
      setBtn.css({display:'block'});
    }
  };
});

