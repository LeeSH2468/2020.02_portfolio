(function($){
  const body = $('body');
  const header = $('#headBox');
  const content = $('#conBox');
  const footer = $('#footBox');
  const mobile=767, tablet=1279, laptop=1919, pc=1920;
  const device = ['mobile','tablet','laptop','pc','pcfull'];
// ====================

// header ==
let htmlUrl = "./temp/";
let jsUrl = "../js/src/js_temp/";

header.load(htmlUrl + 'lego_header.html',function(){
  body.append('<script src="' + jsUrl + 'lego_header.js"></script>')
});
// content ==
content.load(htmlUrl + 'lego_01_con.html',function(){
  body.append('<script src="' + jsUrl + 'lego_h_01_view.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_h_02_cate.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_h_03_slide.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_h_04_favor.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_h_05_set.js"></script>');
  body.append('<script src="' + jsUrl + 'lego_h_06_trend.js"></script>');
});

// footer ==
footer.load(htmlUrl + 'lego_footer.html',function(){
  body.append('<script src="' + jsUrl + 'lego_footer.js"></script>')
});


// ====================
// 브라우저별 체크
let browser = navigator.userAgent.toLowerCase();
let nowb = null;
if(browser.indexOf('firefox') !== -1){
  nowb = 'firefox';
}else{
  nowb = 'other';
}
//------------------------------
//사이즈 변경 체크
$(window).on('resize',function(){
  let afterW = $(window).outerWidth(true);
  let afterDevice = DeviceSet(afterW);
  if(beforeDevice !== afterDevice){ //가로값이 변경되었을 때만 새로고침
    if(nowb === 'firefox'){
      window.location = window.location;
    }else{
      location.reload();
    }
  };
});
//=============================
let nowSize;
let beforeW = $(window).outerWidth(true);
//각 디바이스 상황에 맞는 data 처리
const DeviceData = function(wid){
  switch(wid){
    case device[0]:
      $('body').append('<script src="../js/src/js_temp/lego_mt.js"></script>');
      console.log('1');
    break;
    case device[1]:
      $('body').append('<script src="../js/src/js_temp/lego_mt.js"></script>');
      console.log('2');
    break;
    case device[2]:
      $('body').append('<script src="../js/src/js_temp/lego_lp.js"></script>');
      console.log('3');
    break;
    case device[3]:
      $('body').append('<script src="../js/src/js_temp/lego_lp.js"></script>');
      console.log('4');
    break;
  }
};//DeviceData 함수


    //디바이스 크기 체크
    const DeviceSet = function(winW){
      if(winW <= mobile){
        nowSize = device[0];
      }else if(winW > mobile && winW <= tablet){
        nowSize = device[1];
      }else if(winW > tablet && winW <= laptop){
        nowSize = device[2];
      }else if(winW > laptop && winW <= pc){
        nowSize = device[3];
      }else{
        nowSize = device[4];
      }
      return nowSize;
    }; // DeviceSet 조건문 함수화처리
     let beforeDevice = DeviceSet(beforeW);
    DeviceSet(beforeW);// DeviceSet함수실행



})(jQuery);