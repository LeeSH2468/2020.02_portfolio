const episodeZone = $('.episode_zone');
const epiDl = episodeZone.children('dl');
const epiDt = epiDl.children('dt');
const epiDd = epiDl.children('dd');


epiDt.on('click',function(){
  $(this).next('dd').slideToggle();
});
