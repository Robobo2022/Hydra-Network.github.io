const headerTitle = document.getElementById('typewriter');
const text = 'Hydra Network';
let index = 0;
let isErasing = false;

function typeWriter() {
  if (!isErasing && index < text.length) {
    headerTitle.innerHTML += text.charAt(index);
    index++;
  } else if (isErasing && index >= 0) {
    headerTitle.innerHTML = text.substring(0, index);
    index--;
  } else {
    isErasing = !isErasing;
  }

  const typingSpeed = isErasing ? 200 : 100;
  setTimeout(typeWriter, typingSpeed);
}

window.addEventListener('load', typeWriter);
