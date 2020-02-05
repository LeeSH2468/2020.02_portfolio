const viewArea = $('#view_area');
const viewLogo01 = viewArea.find('.view_logo01');
const viewLogo02 = viewArea.find('.view_logo02');
const viewPig01 = viewArea.find('.view_pig01');
const viewPig02 = viewArea.find('.view_pig02');
const viewPig03 = viewArea.find('.view_pig03');
const viewBtn = viewArea.find('.btn');

viewArea.on('mouseenter',function(){
  viewPig03.animate({opacity:1,right:0},100,function(){
    viewPig02.animate({opacity: 1,right:'5rem'},50,function(){
      viewPig01.animate({opacity: 1,right:'45rem'},200,function(){
        viewLogo02.animate({opacity:1,left:'32rem'});
        viewLogo01.animate({opacity:1,left:0},100,function(){
          viewBtn.animate({opacity:1});
        });
      })
    })
  })
});