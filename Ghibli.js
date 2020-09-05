
// (1) display_time
function display_time(){
  var today=new Date();
  var day =["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var day_ = today.getDay();
  var year = today.getFullYear();
  var date = today.getDate();
  var month = today.getMonth();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = re(m);
  s = re(s);
  document.getElementById('now_time').innerHTML = year+"년 "+(month+1)+"월 "+date+"일 "+h+"시 "+m+"분 "+s+"초 "+day[day_];
  var t = setTimeout(function(){display_time(),1000}); //1초마다 갱신
}

function re(i){
  if (i<10){i = "0"+i};
  return i;
}



// (2) Ghibli_Main_imgs

const GhibliSlide = document.querySelector('.Ghibli-slide');
const GhibliImage = document.querySelectorAll('.Ghibli-slide img');

//button
const prev8tn = document.querySelector('#prev8tn');
const next8tn = document.querySelector('#next8tn');

//counter
let counter = 1;
const size = GhibliImage[0].clientWidth;
GhibliSlide.style.transform = 'translateX('+(-size*counter)+ 'px)';

//button
next8tn.addEventListener('click',()=>{
  if(counter >= GhibliImage.length-1) return;
  GhibliSlide.style.transition = "transform=0.4s ease-in-out"
  counter ++ ;
  GhibliSlide.style.transform = 'translateX('+(-size*counter)+ 'px)';
});

prev8tn.addEventListener('click',()=>{
  if(counter <=0 ) return;
  GhibliSlide.style.transition = "transform=0.4s ease-in-out"
  counter -- ;
  GhibliSlide.style.transform = 'translateX('+(-size*counter)+ 'px)';
});

GhibliSlide.addEventListener('transitionend',() => {
 if(GhibliImage[counter].id === 'lastClone'){
   GhibliSlide.style.transition = "none";
   counter = GhibliImage.lenght-2;
   GhibliSlide.style.transform = 'translateX('+(-size*counter)+ 'px)';
 }
 if(GhibliImage[counter].id === 'firstClone'){
   GhibliSlide.style.transition = "none";
   counter = GhibliImage.lenght-counter;
   GhibliSlide.style.transform = 'translateX('+(-size*counter)+ 'px)';
 }
});

// (3) ponyo -> people ponyo: easter-egg

function ponyochange() {
    // dama 라는 변수를 선언하여 문서에서(document) 'bul'이라는 아이디(id)를 가진 요소(element)를 찾아서 그 요소를 dama 라는 변수의 값으로 할당한다.
    var ponyopeople = document.getElementById('egg');
    // 만약 dama 라는 변수의 속성 중에서 src 라는 속성의 값이 'dama_y' 라는 글자와 매치(match: 전체 문자열에서 일치하는부분문자열을 찾는다)가 된다면  { dama 변수의 src 속성의 값을 'images/dama_g.gif' 으로 변경 시킨다. }
    if (ponyopeople.src.match("before")) {
        ponyopeople.src = "img/after.png";
    // 그렇지 않다면 { dama 변수의 src 속성값에 'images/dama_y.gif' 을 넣는다. }
    } else {
        ponyopeople.src = "img/before.png";
    }
}
