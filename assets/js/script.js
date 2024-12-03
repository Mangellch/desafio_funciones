// Establecer el color verde por defecto

function pintar(color = 'green') {
    ele.style.backgroundColor = color;
  }
  
  const ele = document.querySelector("#ele1");
  
  pintar();
  
  ele.addEventListener("click", () => pintar('yellow'));
             