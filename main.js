// If you change valueOfBar it will automatic show on progress bar

var valueOfBar = '40';
var max_bnb = '930';

document.getElementById('bar').style.width = `${value(valueOfBar)}%`
document.getElementById('bar').style.minWidth = '50px'
document.getElementById('bar_value').innerText = `${valueOfBar}`
document.getElementById('max_bnb').innerText = `${max_bnb}`
document.getElementById('mini_bar_value').innerText = `${value(valueOfBar).toFixed(2)}`
valueOfBar = parseInt(valueOfBar)
max_bnb = parseInt(max_bnb)

function value(num){
  width = ( (num * 100) / max_bnb)
  return width
}

if(valueOfBar == 0){
    document.getElementById('bar').style.backgroundColor = 'gray'
}else{
    document.getElementById('bar').style.backgroundColor = 'var(--blue)';
}

var hide = document.querySelector('.hide')
var arrow = document.querySelector('.arrow')
var hidden_box = document.getElementById('hidden_box')




function hideShow(){
  if(hide.innerHTML.toLowerCase() == 'hide'){
    hide.innerHTML = 'Show'
    arrow.style.transform = 'rotateX(0deg)'
    hidden_box.style.display = 'none'
  }else{
    hide.innerHTML = 'Hide'
    arrow.style.transform = 'rotateX(180deg)'
    hidden_box.style.display = 'block'
  }
}

function copyFunc() {
  var copyText = document.getElementById("address");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  document.getElementById('success').style.display="block";

  setTimeout(() => {
    document.getElementById('success').style.display="none";
  }, 1500);

}

document.getElementById('success').style.display="none";







document.querySelector('.menu').addEventListener('click' , function(){
  document.querySelector('.menu_bar').style.bottom= '0px';
  document.querySelector('body').style.overflow= 'hidden';
  document.querySelector('.menu').style.display= 'none';
})

document.querySelector('.close').addEventListener('click' , function(){
  document.querySelector('.menu_bar').style.bottom= '-100vh';
  document.querySelector('body').style.overflow= 'auto';
  document.querySelector('.menu').style.display= 'flex';
})

// document.getElementById('join_us').addEventListener('click' , function(){
//   document.querySelector('.menu_bar').style.bottom= '-100vh';
//   document.querySelector('body').style.overflow= 'auto';
//   document.querySelector('.menu').style.display= 'flex';
// })

// document.getElementById('discord').addEventListener('click' , function(){
//   document.querySelector('.menu_bar').style.bottom= '-100vh';
//   document.querySelector('body').style.overflow= 'auto';
//   document.querySelector('.menu').style.display= 'flex';
// })

document.getElementById('connect').addEventListener('click' , function(){
  document.querySelector('.menu_bar').style.bottom= '-100vh';
  document.querySelector('body').style.overflow= 'auto';
  document.querySelector('.menu').style.display= 'flex';
})

document.getElementById('live').addEventListener('click' , function(){
  document.querySelector('.menu_bar').style.bottom= '-100vh';
  document.querySelector('body').style.overflow= 'auto';
  document.querySelector('.menu').style.display= 'flex';
})

document.getElementById('road').addEventListener('click' , function(){
  document.querySelector('.menu_bar').style.bottom= '-100vh';
  document.querySelector('body').style.overflow= 'auto';
  document.querySelector('.menu').style.display= 'flex';
})

document.getElementById('token').addEventListener('click' , function(){
  document.querySelector('.menu_bar').style.bottom= '-100vh';
  document.querySelector('body').style.overflow= 'auto';
  document.querySelector('.menu').style.display= 'flex';
})
