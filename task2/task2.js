const btn = document.querySelector('.j-btn-test');
let icon1 = document.querySelector('.btn_icon1');
let icon2 = document.querySelector('.btn_icon2');

btn.addEventListener('click', () => {

  console.log(icon2);
  if (icon2.style.display == 'none')
  {
    console.log("1"+icon2.style.display);
    icon1.style.display = 'none';
    icon2.style.display = 'block';
   }  
  else
  {
    console.log("2"+icon2.style.display);
    icon2.style.display = 'none';
    icon1.style.display = 'block';
  }  


});