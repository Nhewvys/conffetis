let q = document.querySelector('.loader');
let btn = document.querySelector('button');

btn.onclick = function(){

  function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
  }
  console.log(getRandomArbitrary(10, 90))

  function getRandomColor() {
    const red = getRandomArbitrary(0, 256);
    const green = getRandomArbitrary(0, 256);
    const blue = getRandomArbitrary(0, 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  for (let i = 0; i<=70; i++) {
    const l = document.createElement('div')
    l.classList.add('l');
    l.style.position = 'absolute'
    l.style.left = getRandomArbitrary(0, 100) + '%'
    l.style.animationDelay = getRandomArbitrary(0.1, 20) + 's'
    l.style.width = getRandomArbitrary(5, 10) + 'px'
    l.style.height = getRandomArbitrary(15, 20) + 'px'
    l.style.background = getRandomColor();

    q.appendChild(l);
  }
}


