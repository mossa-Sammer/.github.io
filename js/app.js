const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const play=document.querySelector('#play');
const pause=document.querySelector('#pause');

let auto=true;
const intervalTime=5000;
let slideInterval;

function intervalReset(){
  if(auto){
    clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,intervalTime);
    }
}


const nextSlide=()=>{
  const current = document.querySelector('.current');
  current.classList.remove('current');
  
  if(current.nextElementSibling){
    current.nextElementSibling.classList.add('current');
  }
  else{
    slides[0].classList.add('current');
  }
  // setTimeout(()=>current.classList.remove('current'));  
}

const prevSlide=()=>{
  const current = document.querySelector('.current');
  current.classList.remove('current');
  
  if(current.previousElementSibling.className==='slide'){
    current.previousElementSibling.classList.add('current');
  }
  else{
    slides[slides.length-1].classList.add('current');
  }
  // setTimeout(()=>current.classList.remove('current'),30);  
}


next.addEventListener('click',e=>{
  nextSlide();
  intervalReset();
  }
);

prev.addEventListener('click',e=>{
  prevSlide();
  intervalReset();
});

if(auto){
slideInterval=setInterval(nextSlide,intervalTime);
}



// key Listener
document.onkeydown=(e)=>{
  switch(e.keyCode){
    //right
    case 39:{nextSlide();
            intervalReset();
    }
            break;  
    //left
    case 37:{prevSlide();
    intervalReset();        
    break;
    }
  }
};



play.addEventListener('click',(e)=>{
  console.log('play');
const cc=document.querySelector('.cs');
cc.classList.remove('cs');
cc.nextElementSibling.classList.add('cs');
  auto=true;
});

pause.addEventListener('click',(e)=>{
  console.log('pause');
  const cc=document.querySelector('.cs');
   cc.classList.remove('cs');
  cc.previousElementSibling.classList.add('cs');
  auto=false;
});
