(function($){
  //scroll =============================
  const logo = $('h1');
  const gnb = $('#gnb');
  const myScroll = $('.scroll');
  const myScrollArr = [];
  for(let j = 0; j < myScroll.length; j++){
    myScrollArr[j] = myScroll.eq(j).offset().top;
  }
  
  let k = 0;
  let tf = true;
  const gnbLi = gnb.find('li');
  const gnbLink = gnbLi.find('a');
  const logoAng = [
    {'transform':'translateY(-50%) rotate(-20deg)'},
    {'transform':'translateY(-50%)  rotate(-50deg)'},
    {'transform':'translateY(-50%) rotate(-100deg)'},
    {'transform':'translateY(-50%) rotate(-130deg)'},
  ];
  $('html,body').animate({ scrollTop:myScrollArr[k] });
  
  gnbLink.on('click', function(){
    if(tf){ tf=false;
      k = $(this).parents('li').index();
      logo.css(logoAng[k]);
      $('html,body').animate({ scrollTop:myScrollArr[k] }, 500, function(){
        tf = true;
      });
    }
  });
  
  $(document).on('mousewheel DOMMouseScroll', function(e){
    if(tf){ tf=false;
      let evt = e.originalEvent.wheelDelta;
      if(!evt){ evt = e.originalEvent.detail * -40; }
      // console.log(evt);
      if(evt < 0 && k < myScroll.length-1) {
        k++;
      }else if(evt >= 0 && k > 0){  
        k--; 
      }
      
      console.log({ scrollTop:myScrollArr[k]})
      
      logo.css(logoAng[k]);
        $('html,body').animate({ scrollTop:myScrollArr[k] }, 500, function(){
          tf = true;
        });
    }
    // console.log(k);
  });
// ----------------------------------------------------------------------
  // //workBox ============================
  const workBox = $('#workBox');
  const btnZone = workBox.find('.btn_zone');
  const wBtn = btnZone.find('.work_btn');
  const wLink = wBtn.children('a');
  const popup = $('.w_popup');

  wLink.on('click',function(e){
    e.preventDefault();
    popup.fadeIn();
  });

  popup.children('a').on('click',function(e){
    e.preventDefault();
    $(this).parent().css({'position':'fixed'});
});
// ----------------------------------------------------------------------

   //skillBox ============================
   const skillBox = $('#skillBox');
   const skillUl = skillBox.find('ul');
   const gageNum = [
     {skillName:'Photoshop',per:'90%'},
     {skillName:'Illustration',per:'90%'},
     {skillName:'InDesign',per:'60%'},
     {skillName:'Ms office',per:'65%'},
     {skillName:'3D Max',per:'75%'},
     {skillName:'Git Hub',per:'40%'},
     {skillName:'Html',per:'85%'},
     {skillName:'Css',per:'80%'},
     {skillName:'jQuery',per:'60%'}
   ];
   let skillCon = '<li><p></p><div><div class="gage"></div></div></li>';
   let skillArea, skillTitle , skillBar;

   for(let i = 0;i < gageNum.length ;i++){
    skillUl.append(skillCon);
    skillArea = skillBox.find('li').eq(i);
    skillTitle = skillArea.children('p');
    skillBar = skillArea.find('.gage');
 
     skillTitle.text(gageNum[i].skillName);
  // skillBar.delay(2000).animate({width:gageNum[i].per});
 };

 $(window).on('scroll', function(){
  if($(window).scrollTop() +50 >= myScrollArr[2]){
    for(let i = 0;i < gageNum.length ;i++){
      skillBox.find('li').eq(i).find('.gage').delay(300).animate({width:gageNum[i].per});
    }
  } //console.log($(window).scrollTop());
});


  //aboutBox ============================
  const aboutBox = $('#aboutBox');
  const titleZone = aboutBox.find('.title_zone');
  const titleLi = titleZone.children('li');
  const titleLiBtn = titleLi.children('button');
  const conZone = aboutBox.find('.con_zone');
  const conLi = conZone.children('li');
  conLi.hide();
  const ConZoneFn = function(i){
    titleLi.removeClass('action');
    titleLi.eq(i).addClass('action');
    conLi.hide();
    conLi.eq(i).show();
  }
  ConZoneFn(0);

// console.log(conLi);
titleLiBtn.on('click',function(e){
    e.preventDefault();
    let i = $(this).parents('li').index();
    ConZoneFn(i);
  });

})(jQuery);