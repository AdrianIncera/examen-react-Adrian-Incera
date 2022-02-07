import React from 'react';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Crea un formulario para añadir información sobre libros a una lista.
            Ha de tener los siguientes campos:<b> - 1,25 puntos</b>
            <ul>
              <li for="nombre">Título:</li>
              <input type="text" id="nombre" name="user_nombre" />

              <li for="autor">Autor:</li>
              <input type="text" id="autor" name="user_autor" />
              <li>Fecha de publicación (selector de fecha) </li>
              <input id="date" type="date" />
              <li>Número de paginas (input numérico)</li>
              <input type="input" id="nPaginas" name="user_nPaginas" />
              <li>Portada (URL de imagen)</li>
              <li>Idioma </li>
              <input type="text" id="idioma" name="user_idioma" />
            </ul>
            Los elementos añadidos se irán introduciendo dentro de un Container
            de React-Bootstrap
            <li>
              Crea un componente <i>Libro</i> para mostar los elementos que
              vayas añadiendo. El componente ha de implementar{' '}
              <a href="https://react-bootstrap.github.io/components/cards/">
                Card
              </a>{' '}
              de React-Bootstrap y mostrar todos los campos añadidos
              <b> - 1,75 puntos</b>
            </li>
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio2;
