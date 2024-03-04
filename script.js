const circle = document.querySelector('.circle');
const message = document.querySelector('.message');

circle.addEventListener('mouseenter', () => {
  message.textContent = 'You are in the circle';
});

circle.addEventListener('mouseleave', () => {
  message.textContent = 'You are outside of the circle';
});

circle.addEventListener('click', () => {
  document.body.style.backgroundColor = 'gray';
});

circle.addEventListener('dblclick', () => {
  document.body.style.backgroundColor = 'blue';
});
