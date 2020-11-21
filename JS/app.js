const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('ul');
const header = mobile_menu.querySelector('.header.container');
const menu_item = mobile_menu.querySelectorAll('li a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

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
