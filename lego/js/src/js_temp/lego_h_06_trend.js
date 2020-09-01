// lego_h_06_trend

const trend = $('#trend_area');
const tForm = trend.children('.trend_form');
const listZone = tForm.children('.list_zone');
const zoneF = tForm.children('.zone_f');
 
let addLi = '<li></li>';

const picList = [
{
  logo: imgUrl + 't_04_starwars_logo.png',
  pic: imgUrl + 't_04_starwars.jpeg',
  title:'머나먼 은하계로 돌아가는 기나긴 여정',
  con:'신규 레고® 스타워즈™ 세트와 다양한 캐릭터로 가장 좋아하는 영화 속 장면을 재현해 보세요.'
},
{
  logo: imgUrl + 't_04_technic_logo.png',
  pic: imgUrl + 't_04_technic.jpeg',
  title:'신제품 테크닉™ 세트',
  con:'아이들의 창의력이 쑥쑥 성장해요!'
},
{
  logo: imgUrl + 't_04_friend_logo.png',
  pic: imgUrl + 't_04_friend.jpeg',
  title:'새로운 하트레이크 시티 모험',
  con:'새로운 레고® 프렌즈 세트를 조립하며 새로운 이야기를 만들어 나가 보세요.'
}
]; 

let piclen = picList.length;
// list_zone 생성
for(let i=0; i<piclen; i++){
  listZone.append(addLi);
}

// zone_f 생성
for(let i=0; i<piclen; i++){
  zoneF.append(addLi);
}
const zoneLi = zoneF.children('li');
let zoneadd = '<div class="logo_zone"><div class="logo_pic"></div></div><div class="pic_zone"><div class="pic"></div></div><div class="text_zone"><h3></h3><p></p><div class="btn"><a href="#">보러가기</a></div></div>';

zoneLi.addClass('clearfix');
zoneLi.append(zoneadd);
for(let i = 0; i<piclen;i++){
  zoneLi.eq(i).find('.logo_pic').css({backgroundImage : 'url(' + picList[i].logo +')'});
  zoneLi.eq(i).find('.pic').css({backgroundImage : 'url(' + picList[i].pic +')'});
  zoneLi.eq(i).find('h3').text(picList[i].title);
  zoneLi.eq(i).find('p').text(picList[i].con);
};

for(let i = 0;i<listZone.children('li').length ;i++){
  listZone.children('li').eq(i).on('click',function(){
    zoneF.children('li').eq(i).fadeIn();
    zoneF.children('li').eq(i).siblings().css({display:'none'});
  });
} //for

