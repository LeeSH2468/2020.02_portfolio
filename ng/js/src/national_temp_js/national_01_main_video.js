const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

ctx.textAlign = 'center';
ctx.fillText('비디오 로딩 중...',500, 500);

const videoElem = document.querySelector('.video');
videoElem.addEventListener('canplaythrough', render);

function render(){
  ctx.drawImage(videoElem, 0, 0, 500, 600);
  requestAnimationFrame(render);
}