(function($){
  // background mousemove ==========================
  const viewBg = $('#view_area');
  const viewDist = $('.view_pic_bg');
  const viewLogo = $('.view_pic_logo');
  const viewClose = $('.view_pic_close');
  // console.log('view');
  viewBg.on('mousemove', function (e) {
    let x = event.pageX;
    let y = event.pageY;
    // console.log(x, y);
    viewDist.css({ "backgroundPosition": `${x/100}% ${y/100}%` });
    // viewLogo.css({ "backgroundPosition": `${50 - x/100}% ${50 - y/100}%` });
    viewClose.css({ "backgroundPosition": `${x/100}% -${y/100}%` });
  });

  
  //버튼 클릭 ==================
  const magaBtn = $('.magazine_zone > a');
  const mPopup = $('.m_popup');
  const mClosePopBtn = mPopup.find('.m_close_btn');

  magaBtn.on('click', function (e) {
    e.preventDefault();
    sPopup.stop().fadeOut();
    mPopup.stop().fadeIn();
    mClosePopBtn.focus();

  });
  mClosePopBtn.on('click', function (e) {
    e.preventDefault();
    mPopup.stop().fadeOut();
  });

  // store 팝업창 =============
  const storeBtn = $('.store_zone > a');
  const sPopup = $('.s_popup');
  const sClosePopBtn = sPopup.find('.s_close_btn');

  storeBtn.on('click', function (e) {
    e.preventDefault();
    mPopup.stop().fadeOut();
    sPopup.stop().fadeIn();
    sClosePopBtn.focus(function () {
      $(this).on('keyup', function (e) {
        if (e.keyCode == 27) {
          sPopup.fadeOut()
          storeBtn.focus();
        }
      });
    });
  });

  sClosePopBtn.on('click', function (e) {
    e.preventDefault();
    sPopup.stop().fadeOut();
  });
})(jQuery);