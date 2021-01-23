const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('ul');
const header = document.querySelector('.header.container');
const menu_item = mobile_menu.querySelectorAll('li a');
const dateContainer = document.getElementById('date');

console.log(header);

//* toggle navbar
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
 
//* scroll effect
document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;

  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) =>
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  })
);

//* dynamic date
dateContainer.innerHTML = newDate().getFullYear();
