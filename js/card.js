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

const timing = {
  duration: 2000,
  fill: 'forwards',
  easing: 'ease-in-out'
  // iterations: 1 
}

// const animation = new Animation(keyframes,timing);

const ani = document.getElementById('card').animate(keyframes,timing);

document.getElementById('btn').onclick = () => {
  ani.play();
}