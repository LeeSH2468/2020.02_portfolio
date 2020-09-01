// national_01_main.js
(function($){


  // magazine 팝업창 =============
  const magaBtn = $('.gnb_magazines > a');
  const mPopup = $('.m_popup');
  const mClosePopBtn = mPopup.find('.m_close_btn');

  magaBtn.on('click', function (e) {
    e.preventDefault();
    sPopup.stop().fadeOut();
    mPopup.stop().fadeIn();
    mClosePopBtn.focus();

  });
  mClosePopBtn.on('click',function(e){
    e.preventDefault();
    mPopup.stop().fadeOut();    
  });
  
  // store 팝업창 =============
  const storeBtn = $('.gnb_apparel > a');
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

