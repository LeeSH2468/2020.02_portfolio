  const gnb = $('#gnb');
  const gnbAdd = $('#gnb.on');
  const gnbInput = gnb.find('button');
  gnbInput.on('click', function (e) {
    // e.preventDefault();
    gnb.toggleClass('on');
    if( gnb.hasClass('on') ){
      // $('html, body').on('scroll touchmove mousewheel', function (e) {
      //   console.log('?')
      // });
       $('html, body').on('scroll touchmove mousewheel', function (e) {
          // e.preventDefault();
          // e.stopPropagation();
          $('html, body').animate({scrollTop: 0});
          // return false;
        });
    }else{
        location.reload();
    }
 });
