//====================================
const chCon = $('.ch_con_area'); 
const chUl = chCon.children('ul');

let imgUrl = '../../../img/channel_img/';
const liList = [
  { image: imgUrl + 'channel_01.jpg',
    title: '글로벌 시티즌',
    text: '공동의 문제, 하나의 움직임!',
    link: './national_03_news_con.html',
    class:'reality'
  },
  { image: imgUrl + 'channel_02.jpg',
    title: '고든 램지:언차티드',
    text: '고든 램지의 전세계 미식 로드 트립',
    link: './national_03_news_con.html',
    class:'food'
  },
  { image: imgUrl + 'channel_03.jpg',
  title: '샤크 어택5',
  text: '바다 최고의 포식자, 상거가 돌아왔다!',
  link: './national_03_news_con.html',
  class:'shark fes'
  },  
  { image: imgUrl + 'channel_04.jpg',
  title: '히틀러 심판의 날2',
  text: '다시 돌아온 히틀러 심판의 날, 그 두 번째 시리즈!',
  link: './national_03_news_con.html',
  class:'military'
  },  
  { image: imgUrl + 'channel_05.jpg',
  title: '킹덤 Ⅲ',
  text: '가장 강한 존재만이 살아남는다!',
  link: './national_03_news_con.html',
  class:'wild'
  },  
  { image: imgUrl + 'channel_06.jpg',
  title: '핫 존: 에볼라의 습격',
  text: '최전선을 지키는 사람들의 실제 이야기',
  link: './national_03_news_con.html',
  class:'drama'
  },
  { image: imgUrl + 'channel_07.jpg',
  title: '와일드 헌터',
  text: '세상 곳곳의 위험한 포식자들',
  link: './national_03_news_con.html',
  class:'wild'
  },
  { image: imgUrl + 'channel_08.jpg',
  title: '모건 프리먼의 스토리 오브 갓3',
  text: '신에 관한 인류의 영원한 호기심',
  link: './national_03_news_con.html',
  class:'history'
  },
  { image: imgUrl + 'channel_09.jpg',
  title: '밸리 오브 더 붐',
  text: '인터넷의 등장',
  link: './national_03_news_con.html',
  class:'drama'
  },
  { image: imgUrl + 'channel_10.jpg',
  title: '헤이즌 아델의 정글의 법칙',
  text: '원주민에게 배우는 야생 생존법!',
  link: './national_03_news_con.html',
  class:'abventure'
  }
]
let liMake = '<li><a href="#"><div class="img_area"></div><div class="text_area"><h3></h3><p class="date"></p></div></a></li>';

for(let i=0; i<liList.length; i++){
  chUl.append(liMake);
  let chLi = chUl.children('li').eq(i);
  let aLink = chLi.children('a');
  let cImg = aLink.children('.img_area');
  let tArea = aLink.children('.text_area');
  let ctitle = tArea.children('h3');
  let cText = tArea.children('p');

  chLi.addClass(liList[i].class);
  ctitle.text(liList[i].title);
  cText.text(liList[i].text);
  aLink.attr({'href':liList[i].link});
  cImg.css({backgroundImage:'url('+liList[i].image+')'});

};
let chLi = chUl.children('li');


chLi.hide();
const liLen = chLi.length;
const moreBox = chCon.children('.moreBtn');
const moreBtn = moreBox.children('button');
let n = 6;
const show = function(l){
  if (liLen <= n){
    moreBtn.hide();
  }
  for(let j=0; j<l; j++){
    chLi.eq(j).show();
  }
}
show(n);
moreBtn.on('click',function(){
  show(n+=3);
});


//모아보기 버튼========================
const searchArea = $('.search_area');
const searchDl = searchArea.find('dl');
const searchDt = searchDl.children('dt').find('a');
const searchDd = searchDl.children('dd');
const searchBtn = searchArea.find('button');
let searchLi = chUl.children('li');
const allLi = chUl.children('li.all');
const wildLi = chUl.children('li.wild');
const abventureLi = chUl.children('li.abventure');
const realityLi = chUl.children('li.reality');
const historyLi = chUl.children('li.history');
const dramaLi = chUl.children('li.drama');

searchDt.on('click',function(e){
  e.preventDefault();
  searchDd.slideToggle();
}); 

// base_park ->   ['base', 'park'] -> base

searchDd.find('li').on('click',function(e){
  e.preventDefault();
  let thisname = $(this).attr('class');
  console.log(thisname);
  searchLi.hide();
  for (let i = searchLi.length - 1; i >= 0; i--) {
    if(thisname == 'all'){
      searchLi.show();
    }else if (searchLi.eq(i).hasClass(thisname)) {
      searchLi.eq(i).show();
      // searchLi.eq(i).prependTo(chUl);
      // console.log(i);
      if(i % 3 !== 0){
        searchLi.eq(i).css({marginRight:'4%'});
      }
      moreBox.hide();
    } 
  };
});

