const btn = document.querySelector('.j-btn-test');
let icon1 = document.querySelector('.btn_icon1');
let icon2 = document.querySelector('.btn_icon2');

btn.addEventListener('click', () => {
  if (icon2.style.display == 'none')
  {    
    icon1.style.display = 'none';
    icon2.style.display = 'block';
   }  
  else
  {    
    icon2.style.display = 'none';
    icon1.style.display = 'block';
  }  
});