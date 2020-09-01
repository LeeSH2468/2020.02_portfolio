const mainBox = $('#mainBox');
const search = $('.search_area');
const searchBtn = search.find('button');
const allBtn = search.find('.allbtn');
// const photoBtn = search.find('.photo_btn');
// const issueBtn = search.find('.issue_btn');
// const tvBtn = search.find('.tv_btn');
const searchLi = newsUl.children('li');
const photoLi = newsUl.children('li.photo');
const issueLi = newsUl.children('li.issue');
const tvLi = newsUl.children('li.tv');

searchBtn.on('click', function (e) {
  e.preventDefault();
  let thisname = $(this).attr('class').split('_')[0];
  // console.log(thisname);
  searchLi.hide();
  for (let i = searchLi.length - 1; i >= 0; i--) {
    if (searchLi.eq(i).hasClass(thisname)) {
      searchLi.eq(i).show();
      searchLi.eq(i).prependTo(newsUl);
      moreBox.hide();
    }
  };
});
allBtn.on('click',function(e){
  e.preventDefault();
  searchLi.show();
});