let boton1 = document.getElementById('btn1');
let boton2 = document.getElementById('btn2');
let boton3 = document.getElementById('btn3');
let boton4 = document.getElementById('btn4');
let boton5 = document.getElementById('btn5');
let boton6 = document.getElementById('btn6');
let boton7 = document.getElementById('btn7');



function cambiarFrame(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "ventana_software.html"
}

function cambiarFrame2(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "ventana_mantenimiento.html"
}

function cambiarFrame3(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "ventana_administrativa.html"
}

function cambiarFrame4(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "ventana_mecanizado.html"
}

function cambiarFrame5(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "ventana_contabilidad.html"
}

function cambiarFrame6(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "paneles.html"
}

function cambiarFrame7(){
  var elFrame = document.getElementById('windowO');
  elFrame.src = "galeria.html"
}

boton1.addEventListener('click', cambiarFrame);
boton2.addEventListener('click', cambiarFrame2);
boton3.addEventListener('click', cambiarFrame3);
boton4.addEventListener('click', cambiarFrame4);
boton5.addEventListener('click', cambiarFrame5);
boton6.addEventListener('click', cambiarFrame6);
boton7.addEventListener('click', cambiarFrame7);


