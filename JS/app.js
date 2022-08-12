const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('ul');
const header = document.querySelector('.header.container');
const menu_item = mobile_menu.querySelectorAll('li a');
const dateContainer = document.getElementById('date');
const backToTopBtn = document.querySelector('.backToTopBtn');

//* console.log(header);

//* toggle navbar
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

//* change nav bar color on scroll
// todo -- add animation to back to top button
document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;

  if (scroll_position > 50) {
    header.style.backgroundColor = '#032340';
  } else {
    header.style.backgroundColor = 'transparent';
  }

  if (scroll_position > 500) {
    backToTopBtn.classList.add('showBackToTopBtn');
  } else {
    backToTopBtn.classList.remove('showBackToTopBtn');
  }
});

menu_item.forEach((item) =>
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  })
);

//* set date dynamically
dateContainer.innerHTML = new Date().getFullYear();

//* fixed nav
const navBar = document.querySelector('.nav-bar');
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    //* prevent default scroll behaviour
    e.preventDefault();

    //* navigate to specific spot
    //* slice(1) skips the hash tag and returns the rest of the string
    const id = e.currentTarget.getAttribute('href').slice(1);
    const section = document.getElementById(id);

    //* calculate the heights
    const navHeight = navBar.getBoundingClientRect().height;
    const headerHeight = header.getBoundingClientRect().height;
    //const fixedNav = navBar.classList.contains('fixed-nav');



    let position = section.offsetTop - headerHeight;
    console.log(position);

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
