//Cambio de color de teclas
document.getElementById("blue").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  document.getElementById("red").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  document.getElementById("green").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  document.getElementById("yellow").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  
  document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
  
    if (event.key === 'a') {
      keyDiv.style.backgroundColor = 'pink'; // Rosado
    } else if (event.key === 's') {
      keyDiv.style.backgroundColor = 'orange'; // Naranja
    } else if (event.key === 'd') {
      keyDiv.style.backgroundColor = 'lightblue'; // Celeste
    } else if (event.key === 'q') {
      createNewDiv('purple'); // Morado
    } else if (event.key === 'w') {
      createNewDiv('gray'); // Gris
    } else if (event.key === 'e') {
      createNewDiv('brown'); // Café
    }
  });
  
  function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('color-box');
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
  }
  