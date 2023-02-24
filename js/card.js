const keyframes = [
  {
    transform: 'rotateX(0)',
    offset: 0,
  },
  {
    transform: 'rotateY(180deg) rotateX(360deg) translateZ(200px)',
    offset: 1
  }
];

let firstClick = true;

const timing = {
  duration: 2000,
  fill: 'forwards',
  easing: 'ease-in-out'
  // iterations: 1 
}

// const animation = new Animation(keyframes,timing);
const card = document.getElementById('card');

const ani = card.animate(keyframes,timing);
ani.pause();

card.onclick = () => {
  if (firstClick) {
    firstClick = false;
    ani.play();
  } else {
    ani.reverse();
  }
}