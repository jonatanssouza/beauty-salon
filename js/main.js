// When I click on icon, add/remove --show-menu class
const nav = document.querySelector('.header__navigation');
const toggleIcon = nav.querySelectorAll('.toggle');

for( const icon of toggleIcon ) {
  icon.addEventListener( 'click', function() {
    nav.classList.toggle('--show-menu');
  });
}

// When I click on a link in the menu, close the menu
const links = nav.querySelectorAll('.menu__list a');

for ( const link of links ) {
  link.addEventListener( 'click', function() {
    nav.classList.remove('--show-menu');
  } );
}

// When scrolling the page, add the box's shadow to the header
const header = document.querySelector('.header');
const navHeight = header.offsetHeight;

window.addEventListener( 'scroll', function(){
  if( window.scrollY >= navHeight ) {
    header.classList.add('--scroll-shadow');
  } else {
    header.classList.remove('--scroll-shadow');
  }
} );