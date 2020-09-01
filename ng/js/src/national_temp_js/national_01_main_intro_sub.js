//intro=====================================
const win = $(window);
const introSub = $('#intro_sub_area');
const subImage = introSub.children('.sub_image');
const subPic = subImage.children('.sub_pic');
const picZone = subPic.children('.pic_zone');

const introDl = subImage.children('dl');
const introDt = introDl.children('dt');
const introDd = introDl.children('dd');
const goLink = introDd.children('a');

// 스크롤 이동시 나오기 ======================
let introH = introSub.outerHeight();
console.log(introH);
let winH = win.outerHeight();
let introTop = introSub.offset().top;
let introOffset = introTop - (winH / 3);

win.on('scroll', function ($) {
  let winScroll = win.scrollTop();
  if (winScroll > introOffset) {
    subPic.addClass('action');
    introDl.addClass('action');
  } else {
    subPic.removeClass('action');
    introDl.removeClass('action');
  };

});

// 버튼 클릭시 팝업창==================
const mGo = $('.sub_image02').find('a');
const mPopup = $('.m_popup');
const mClosePopBtn = mPopup.find('.m_close_btn');

const aGo = $('.sub_image03').find('a');
const sPopup = $('.s_popup');
const sClosePopBtn = sPopup.find('.s_close_btn');

mGo.on('click', function (e) {
  e.preventDefault();
  
  sPopup.stop().fadeOut();
  mPopup.stop().fadeIn(function(){
    mPopup.css({position:'fixed'});
  });
  mGo.focus();
  mClosePopBtn.on('click', function (e) {
  e.preventDefault();
  mPopup.stop().fadeOut();
});

});

// ========
aGo.on('click', function (e) {
  e.preventDefault();
  mPopup.stop().fadeOut();
  sPopup.stop().fadeIn(function(){
    sPopup.css({position:'fixed'});
  });
  sClosePopBtn.focus(function () {
    $(this).on('keyup', function (e) {
      if (e.keyCode == 27) {
        sPopup.fadeOut()
        aGo.focus();
      }
    });
  });
});

sClosePopBtn.on('click', function (e) {
  e.preventDefault();
  sPopup.stop().fadeOut();
});

