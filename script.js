// script.js
const drums = document.querySelectorAll('.drum');

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

function playDrumSound(key) {
  switch (key) {
    case '87': // W key
      playSound('w.mp3');
      break;
    case '65': // A key
      playSound('a.mp3');
      break;
    case '83': // S key
      playSound('s.mp3');
      break;
      case '68': // D key
      playSound('d.mp3');
      break;
      case '74': // J key
      playSound('j.mp3');
      break;
      case '75': // K key
      playSound('k.mp3');
      break;
      case '76': // L key
      playSound('l.mp3');
      break;
  }
}

document.addEventListener('keydown', event => {
  const keyPressed = event.key.toUpperCase();
  const drumButton = document.querySelector(`[data-key="${keyPressed.charCodeAt(0)}"]`);
  
  if (drumButton) {
    drumButton.classList.add('playing');
    playDrumSound(drumButton.getAttribute('data-key'));
  }
});

drums.forEach(drum => {
  drum.addEventListener('transitionend', event => {
    if (event.propertyName === 'transform') {
      drum.classList.remove('playing');
    }
  });
});
