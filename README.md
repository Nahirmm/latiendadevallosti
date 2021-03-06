# E-commerce 'La Tienda de Vallosti' 

## Proyecto final para el curso de ReactJs de CoderHouse

### Resumen de la app

Se realizó una app web, con el objetivo de vender amigurumis (peluches tejidos a mano).\
En la página principal se encuentran todos los productos en venta, se puede navegar por tres distintas categorías: Animales, Bebés y Personajes.\
Cada producto tiene un botón para acceder a la información de éste, donde se selecciona la cantidad de productos que se desee comprar (validado según stock) y el botón de agregar al carrito, el cual te genera dos botones 'Seguir comprando', te lleva a la página principal, y 'Terminar compra', te llevar al carrito.\
Cuando el carrito está vacío te muestra una leyenda junto con el botón para ir a la tienda. En caso de que tenga productos, muestra un detalle de lo seleccionado junto con los subtotales, el total y tiene las opciones de eliminar un item, vaciar el carrito o comprar. Cuando el usuario clickea en comprar, se muestra un formulario el cual es requerido para poder completar la compra y así mostrar la orden procesada junto con el id otorgado por Firebase, donde se guarda la orden generada.\
A su vez, cuando se finalice la compra, el stock es actualizado automáticamente en firebase.

## Instalación

Intalar node.js [https://nodejs.org/es/](https://nodejs.org/es/)

Clonar repositorio [https://github.com/Nahirmm/latiendadevallosti](https://github.com/Nahirmm/latiendadevallosti)

Abrir la terminal y en la carpeta base del proyecto ejecutar `npm install`.

Una vez que se hayan descargado las dependencias, ejecutar `npm start`.

## Dependencias

* react version 17.0.2
* react-scripts version 5.0.0
* react-dom version 17.0.2, utilizado para trabajar con el DOM.
* react-router-dom version 6.2.1, utilizado para la navegación entre componentes
* react-icons version 4.3.1, utilizado para los iconos de carrito y eliminar item.
* react-bootstrap version 2.0.4, utilizado para darle estilo.
* bootstrap version 5.1.3, utilizado para darle estilo.
* firebase version 9.6.4, utilizado como base de datos para items y orders.

## Demo

[https://latiendadevallosti.netlify.app/](https://latiendadevallosti.netlify.app/)

## Autor

Nahir Massetani Maidanik [Linkedin](https://www.linkedin.com/in/nahir-massetani-maidanik-75441321a/)


