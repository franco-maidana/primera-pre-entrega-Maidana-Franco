let continuar = true;
let puntuacion = 0;
const preguntaCorrecta = 10;
const preguntaIncorrecta = 0;

while (continuar) {
  const nombre = prompt('Bienvenido, ingresa tu nombre');
  alert('Hola ' + nombre + ', bienvenido');
  alert(nombre + ', ¡comencemos con las preguntas y respuestas y ganemos este juego!');

  let respuesta = prompt('¿Quieres jugar? (si/no)');

  if (respuesta === 'si') {
    alert('¡Excelente, comenzemos!');
  } else {
    alert('¡ohh, sera para la proxima, hasta luego!');
    continuar = false;
    continue;
  }

  preguntas();
  puntosAcumulados();

  preguntas2();
  puntosAcumulados();

  preguntas3();
  puntosAcumulados();

  preguntas4();
  puntosAcumulados();


  // primera pregunta
  function preguntas() {
    alert('¿Cuál fue el subcampeón del mundo en Rusia 2018?');
    let respuestaUsuario = prompt('1 - Alemania\n2 - Brasil\n3 - Croacia\n4 - Italia');
    let respuestaCorrecta = '3';
    let respuestaCorrectaTexto = 'Croacia';

    if (respuestaUsuario === respuestaCorrecta) {
      alert('¡Excelente, buena respuesta! Ganaste ' + preguntaCorrecta + ' puntos');
      puntuacion += preguntaCorrecta;
    } else {
      alert('Respuesta incorrecta. La respuesta correcta era ' + respuestaCorrectaTexto + '. Tu puntuación es de ' + preguntaIncorrecta + ' puntos');
      puntuacion += preguntaIncorrecta;
    }
  }

  // segunda pregunta
  function preguntas2() {
    alert('¿Cuál es el club más exitoso en la historia de la Liga de Campeones de la UEFA?');
    let respuestaUsuario = prompt('1 - Real Madrid\n2 - Milan\n3 - Barcelona\n4 - Chelsea');
    let respuestaCorrecta = '1';
    let respuestaCorrectaTexto = 'Real Madrid';


    if (respuestaUsuario === respuestaCorrecta) {
      alert('¡Excelente, buena respuesta! Ganaste ' + preguntaCorrecta + ' puntos');
      puntuacion += preguntaCorrecta;
    } else {
      alert('Respuesta incorrecta. La respuesta correcta era ' + respuestaCorrectaTexto + '. Tu puntuación es de ' + preguntaIncorrecta + ' puntos');
      puntuacion += preguntaIncorrecta;
    }
  }

  // trecera pregunta 
  function preguntas3() {
    alert('¿Quién es el jugador que ha ganado el premio FIFA Balón de Oro en más ocasiones?');
    let respuestaUsuario = prompt('1 - Karim Benzema\n2 - Cristiano Ronaldo\n3 - Zinedine Zidane\n4 - Lionel Messi');
    let respuestaCorrecta = '4';
    let respuestaCorrectaTexto = 'Lionel Messi';

    if (respuestaUsuario === respuestaCorrecta) {
      alert('¡Excelente, buena respuesta! Ganaste ' + preguntaCorrecta + ' puntos');
      puntuacion += preguntaCorrecta;
    } else {
      alert('Respuesta incorrecta. La respuesta correcta era ' + respuestaCorrectaTexto + '. Tu puntuación es de ' + preguntaIncorrecta + ' puntos');
      puntuacion += preguntaIncorrecta;
    }

  }

  // cuarta pregunta 
  function preguntas4() {
    alert('¿Cuál es el país que ha ganado más Copas del Mundo?');
    let respuestaUsuario = prompt('1 - Italia\n2 - Brasil\n3 - Alemania\n4 - España');
    let respuestaCorrecta = '2';
    let respuestaCorrectaTexto = 'Brasil';

    if (respuestaUsuario === respuestaCorrecta) {
      alert('¡Excelente, buena respuesta! Ganaste ' + preguntaCorrecta + ' puntos');
      puntuacion += preguntaCorrecta;
    } else {
      alert('Respuesta incorrecta. La respuesta correcta era ' + respuestaCorrectaTexto + '. Tu puntuación es de ' + preguntaIncorrecta + ' puntos');
      puntuacion += preguntaIncorrecta;
    }

  }
  continuar = false;
  // Función para mostrar el puntaje acumulado
  function puntosAcumulados() {
    alert('puntaje acumulado hasta el momento es: ' + puntuacion + ' puntos');
  }
}
