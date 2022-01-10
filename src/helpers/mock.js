const productos = [
    { id: '1', nombre: 'Dulce Conejo', img: 'assets/dulceConejo.jpeg', precio: 1500, descripcion: 'Muñeco de lana, posibles colores: Beige o Blanco', stock: 5},
    { id: '2', nombre: 'AmongUs', img: 'assets/amongUsHulk.jpeg', precio: 1700, descripcion: 'Muñeco de lana, posibles modelos: Hulk o Spiderman', stock: 5},
    { id: '3', nombre: 'Jirafa', img: 'assets/jirafa.jpeg', precio: 1100, descripcion: 'Muñeco de lana, posibles colores: Amarillo, Azul o Verde', stock: 5},
    { id: '4', nombre: 'Gatito', img: 'assets/gatitoNegro.jpeg', precio: 1000, descripcion: 'Muñeco de hilo, posibles colores: Negro, Naranja o Gris', stock: 5},
    { id: '5', nombre: 'Unicornio con rulos', img: 'assets/unicornioRulos.jpeg', precio: 2000, descripcion: 'Muñeco de lana, posibles colores: Blanco o Rosa', stock: 5},
    { id: '6', nombre: 'Hadita', img: 'assets/hada.jpeg', precio: 1800, descripcion: 'Muñeco de hilo, Color único', stock: 5},
]

export const getFetch = new Promise((resolve, reject) => {
    
    if(true){
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }else{
        reject('Error')
    }
})

