var images = document.querySelectorAll('.parallax');
new simpleParallax(images, {
  delay: 0,
  orientation: 'down',
  scale: 1.3,
  overfow: false,
  transition: 'cubic-bezier(0,0,0,1)'
});