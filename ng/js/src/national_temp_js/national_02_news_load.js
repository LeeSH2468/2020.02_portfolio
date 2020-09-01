const newsCon = $('.news_con');
const newsUl = newsCon.children('ul');

let imgUrl = '../img/news_img/';
const liList = [
  { image: imgUrl + 'next_01.jpg',
    title: '맨몸으로 절벽을 오르는 등반가, 알렉스 호놀드의 <프리솔로>',
    date: '2018-11-17',
    link: './national_03_news_con.html',
    class:'tv'
  },  
  { image: imgUrl + 'next_02.jpg',
    title: '인류의 새로운 시작, 그 두 번째 이야기',
    date: '2019-04-21',
    link: '#',
    class: 'tv'
  },
  {
    image: imgUrl + 'next_03.jpg',
    title: '일회용 플라스틱 사용 줄이기 캠페인!',
    date: 'PLANET OR PLASTIC : 당신의 선택은?',
    link: '#',
    class: 'issue'
  },
  {
    image: imgUrl + 'next_04.jpg',
    title: '안토니오 반데라스 주연, 천재 화가 파블로 피카소의 러브 앤 라이프!',
    date: '<지니어스 Ⅱ:파블로 피카소> ',
    link: '#',
    class: 'tv'
  },
  {
    image: imgUrl + 'next_05.jpg',
    title: '세계적인 배우 윌 스미스, 그의 목소리로 듣는 푸른 행성 지구의 모든 것!',
    date: '우주인, 지구를 말하다 <윈 스트레인지 락>',
    link: '#',
    class: 'tv'
  }
  ,
  {
    image: imgUrl + 'next_06.jpg',
    title: '내셔널지오그래픽 탐험가 제임스 카메론이 전하는 타이타닉의 비밀!',
    date: '<타이타닉> 개봉 20주년 기념 특집 편성',
    link: '#',
    class: 'tv'
  }//----------------------------------------------------
  ,  {
    image: imgUrl + 'next_07.jpg',
    title: '인간의 본성을 파헤치기 위한 모건 프리먼의 여정',
    date: '<모건 프리먼의 스토리 오브 맨>',
    link: '#',
    class: 'tv'
  }//----------------------------------------------------
  ,  {
    image: imgUrl + 'next_08.jpg',
    title: '적에게 포위된 채 숨 막히게 흘러가는 8시간!',
    date: '<롱 로드 홈>',
    link: '#',
    class: 'issue'
  }//----------------------------------------------------
  ,  {
    image: imgUrl + 'next_09.jpg',
    title: '“코리안 신루트 개척, 포기란 없다!”',
    date: '홍성택 대장, ‘4전 5기’ 히말라야 로체 남벽 도전',
    link: '#',
    class: 'issue'
  }//----------------------------------------------------
  ,  {
    image: imgUrl + 'next_10.jpg',
    title: '무더위를 타파할 보석같은 힐링 여행!',
    date: '내셔널지오그래픽 선정 TOP 10 TRAVEL',
    link: '#',
    class: 'photo'
  }//----------------------------------------------------
  ,  {
    image: imgUrl + 'next_11.jpg',
    title: '면접에서 성공하기 위한 과학적 팁',
    date: '2017년 하반기 공채에 합격하는 필승 전략',
    link: '#',
    class: 'issue'
  }//----------------------------------------------------
  ,  {
    image: imgUrl + 'next_12.jpg',
    title: '영국이 사랑한 여자, 다이애나 스펜서',
    date: '화려함  뒤에 감춰진 그녀의 외로움',
    link: '#',
    class: 'issue'
  }//----------------------------------------------------
]
let liMake = '<li><a href="#"><div class="img_area"></div><div class="text_area"><h3></h3><p class="date"></p></div></a></li>';



for(let i=0; i<liList.length; i++){
  newsUl.append(liMake);
  let newsLi = newsUl.children('li').eq(i);
  let aLink = newsLi.children('a');
  let nImg = aLink.children('.img_area');
  let tArea = aLink.children('.text_area');
  let ntitle = tArea.children('h3');
  let ndate = tArea.children('p');

  newsLi.addClass(liList[i].class);
  ntitle.text(liList[i].title);
  ndate.text(liList[i].date);
  aLink.attr({'href':liList[i].link});
  nImg.css({backgroundImage:'url('+liList[i].image+')'});

};

let newsLi = newsUl.children('li');

newsLi.hide();
const liLen = newsLi.length;
const moreBox = newsCon.children('.moreBtn');
const moreBtn = moreBox.children('button');
let n = 6;
const show = function(l){
  if (liLen <= n){
    moreBtn.hide();
  }
  for(let j=0; j<l; j++){
    newsLi.eq(j).show();
  }
}
show(n);
moreBtn.on('click',function(){
  show(n+=3);
});
