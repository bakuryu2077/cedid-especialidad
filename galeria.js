window.onload = function () {
  // Variables
  const IMAGENES = [
      'img/01.jpeg',
      'img/02.jpeg',
      'img/03.jpeg',
      'img/mant08.jpg',
      'img/mant09.jpg',
      'img/mant10.jpg',
      'img/mant11.jpg',
      'img/soft02.jpg',
      'img/soft03.jpg',
      'img/soft04.jpg',
      'img/mant04.jpeg',
      'img/mant05.jpeg',
      'img/mant06.jpeg',
      'img/mant07.jpeg'
  ];

  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector('.retroceder');
  let $botonAvanzar = document.querySelector('.avanzar');
  let $imagen = document.querySelector('.imagen');
  let $botonPlay = document.querySelector('.play');
  let $botonStop = document.querySelector('.stop');
  let intervalo;

  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
      if(posicionActual >= IMAGENES.length - 1) {
          posicionActual = 0;
      } else {
          posicionActual++;
      }
      renderizarImagen();
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
      if(posicionActual <= 0) {
          posicionActual = IMAGENES.length - 1;
      } else {
          posicionActual--;
      }
      renderizarImagen();
  }

  /**
   * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
   */
  function renderizarImagen () {
      $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  /**
   * Activa el autoplay de la imagen
   */
  function playIntervalo() {
      intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
      // Desactivamos los botones de control
      $botonAvanzar.setAttribute('disabled', true);
      $botonRetroceder.setAttribute('disabled', true);
      $botonPlay.setAttribute('disabled', true);
      $botonStop.removeAttribute('disabled');

  }

  /**
   * Para el autoplay de la imagen
   */
  function stopIntervalo() {
      clearInterval(intervalo);
      // Activamos los botones de control
      $botonAvanzar.removeAttribute('disabled');
      $botonRetroceder.removeAttribute('disabled');
      $botonPlay.removeAttribute('disabled');
      $botonStop.setAttribute('disabled', true);
  }

  // Eventos
  $botonAvanzar.addEventListener('click', pasarFoto);
  $botonRetroceder.addEventListener('click', retrocederFoto);
  $botonPlay.addEventListener('click', playIntervalo);
  $botonStop.addEventListener('click', stopIntervalo);
  // Iniciar
  renderizarImagen();
} 
