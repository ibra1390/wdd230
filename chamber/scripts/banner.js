
var currentDay = new Date().getDay();
  
  if (currentDay === 1 || currentDay === 2 || currentDay === 3 ) {
    
    document.querySelector('.banner').style.display = 'flex';
  } else {
    document.querySelector('.banner').style.display = 'none';
  }

  document.getElementById('closeBanner').addEventListener('click',closeBanner);

  function closeBanner(){
    document.getElementById('banner').style.display = 'none';
  }