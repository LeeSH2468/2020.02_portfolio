//national_header_footer.js
(function($){

  // load
  const wrap = $('#wrap');
  wrap.prepend('<div class="head_wrap"></div>');
  const headWrap = $('.head_wrap');
  wrap.append('<div class="foot_wrap"></div>');
  const footWrap = $('.foot_wrap');
  headWrap.load('./temp/header.html',function(){  });
  footWrap.load('./temp/footer.html',function(){  });
  
  setTimeout(function(){
    const body = $('body');
    body.append('<script src="../js/src/national_01_main.js"></script>');
    body.append('<script src="../js/src/national_main.js"></script>');
    }, 10);


  // magazines
  // console.log($.fn);


  
})(jQuery);