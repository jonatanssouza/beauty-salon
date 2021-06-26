/* When I click on icon, add/remove --show-menu class */
const nav = document.querySelector( '.header__navigation' );
const toggleIcon = nav.querySelectorAll( '.toggle' );
for( const icon of toggleIcon ) {
  icon.addEventListener( 'click', function() {
    nav.classList.toggle( '--show-menu' );
  });
}

/* When I click on a link in the menu, close the menu */
const links = nav.querySelectorAll( '.menu__list a' );
for ( const link of links ) {
  link.addEventListener( 'click', function() {
    nav.classList.remove( '--show-menu' );
  } );
}

/* Active menu as the section visible on the page */
const sections = document.querySelectorAll( 'main section[id]' );
function activeMenuAtCurrentSection() {
  // define uma 'linha imaginária'
  const checkpoint = window.pageYOffset + ( ( window.innerHeight / 8 ) * 4 ); ; 

  // quando o scroll da página passar pela 'linha' pegar o id da seção exibida na tela e adicionar classe ao link
  for( const section of sections ) {
    const sectionId = section.getAttribute( 'id' );
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
    if( checkpointStart && checkpointEnd) {
      addActiveClass( sectionId );
    } else {
      removeActiveClass( sectionId );
    }
  }
}

/* Switch active class to link */
function addActiveClass( sectionId ) {
  document
    .querySelector('.menu__list a[href*=' + sectionId + ']')
    .classList.add('--active');
}

function removeActiveClass( sectionId ) {
  document
    .querySelector('.menu__list a[href*=' + sectionId + ']')
    .classList.remove('--active');
}
 

window.addEventListener( 'scroll', function() {
  changeHeaderShadow();
  showBackToTop();
  activeMenuAtCurrentSection();
});

/* When scrolling the page, add the box's shadow to the header */
const header = document.querySelector('.header');
const navHeight = header.offsetHeight;
function changeHeaderShadow() {
  if( window.scrollY >= navHeight ) {
    header.classList.add('--scroll-shadow');
  } else {
    header.classList.remove('--scroll-shadow');
  }
}

/* When scroll the page, show the chevron-up  */
const chevron = document.querySelector( '.back-to-top' );
function showBackToTop() {
  if( window.scrollY > 400 ) {
    chevron.classList.add('--show-arrow');
  } else {
    chevron.classList.remove('--show-arrow');
  }
}

/* Slider (swiper) */
const swiper = new Swiper( '.swiper-container',  {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
 } );

 /* When scrolling, show sections appearing */
 const scrollReveal = ScrollReveal( {
   origin: 'top',
   distance: '30px',
   duration: 500,
   reset: true
 } );

 scrollReveal.reveal( 
   `.home__image, .home__text,
    .about__image, .about__text,
    .services__header, .services__cards-container, .card,
    .testimonials__header, .testimonials__slider,
    .contact__text, .contact__forms,
    .footer`,
   { interval: 75 }
);


