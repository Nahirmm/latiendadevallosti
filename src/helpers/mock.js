const productos = [
  {
    id: "1",
    categoria: "Animales",
    nombre: "Unicornio",
    img: "assets/catalogo/animales/1Unicornio.jpg",
    precio: 2000,
    descripcion:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @jesshuffco",
    stock: 5,
  },
  {
    id: "2",
    categoria: "Animales",
    nombre: "Jirafa articulada",
    img: "assets/catalogo/animales/2Jirafa.jpg",
    precio: 1700,
    descripcion:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @venelopatoys",
    stock: 5,
  },
  {
    id: "3",
    categoria: "Animales",
    nombre: "Conejo",
    img: "assets/catalogo/animales/3Conejo.jpg",
    precio: 1100,
    descripcion:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @fookolki",
    stock: 5,
  },
  {
    id: "4",
    categoria: "Animales",
    nombre: "Coneja",
    img: "assets/catalogo/animales/4Coneja.jpg",
    precio: 1100,
    descripcion:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @rochi_tejidosartesanales",
    stock: 5,
  },
  {
    id: "5",
    categoria: "Animales",
    nombre: "Ovejas",
    img: "assets/catalogo/animales/5Ovejas.jpg",
    precio: 2000,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @_petitbonnet_",
    stock: 5,
  },
  {
    id: "6",
    categoria: "Animales",
    nombre: "Jirafa",
    img: "assets/catalogo/animales/6JirafaAmarilla.jpg",
    precio: 1500,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @gatomiacrochetaria",
    stock: 5,
  },
  {
    id: "7",
    categoria: "Animales",
    nombre: "Oveja",
    img: "assets/catalogo/animales/7OvejaModelo3.jpg",
    precio: 1800,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @anat_tzach",
    stock: 5,
  },
  {
    id: "8",
    categoria: "Animales",
    nombre: "Elefante",
    img: "assets/catalogo/animales/8Elefante.jpg",
    precio: 1800,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @sweetoddityart",
    stock: 5,
  },
  {
    id: "9",
    categoria: "Animales",
    nombre: "Dulce oveja",
    img: "assets/catalogo/animales/9OvejaModelo2.jpg",
    precio: 1800,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @amalou.designs",
    stock: 5,
  },
  {
    id: "10",
    categoria: "Bebes",
    nombre: "Conjunto de manta de apego + sonajero de vaquita",
    img: "assets/catalogo/bebes/1ConjuntoVaca.jpg",
    precio: 2500,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @ovejita.tejedora",
    stock: 5,
  },
  {
    id: "11",
    categoria: "Bebes",
    nombre: "Jirafa didáctica",
    img: "assets/catalogo/bebes/2JirafaDidactica.jpg",
    precio: 2300,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @sparrow.dreamer",
    stock: 5,
  },
  {
    id: "12",
    categoria: "Bebes",
    nombre: "Oveja guarda pijama",
    img: "assets/catalogo/bebes/3OvejaGuardaPijama.jpg",
    precio: 1600,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @anastasiya__vokhmina",
    stock: 5,
  },
  {
    id: "13",
    categoria: "Bebes",
    nombre: "Manta de apego de Jirafa",
    img: "assets/catalogo/bebes/4MantaApegoJirafa.jpg",
    precio: 1900,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @gatomiacrochetaria",
    stock: 5,
  },
  {
    id: "14",
    categoria: "Bebes",
    nombre: "Manta de apego de Hipopotamo",
    img: "assets/catalogo/bebes/5MantaApegoHipopotamo.jpg",
    precio: 1900,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @gracielagaudi",
    stock: 5,
  },
  {
    id: "15",
    categoria: "Bebes",
    nombre: "Sonajero de Jirafa",
    img: "assets/catalogo/bebes/6SonajeroJirafa.jpg",
    precio: 1800,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @gatomiacrochetaria",
    stock: 5,
  },
  {
    id: "16",
    categoria: "Personajes",
    nombre: "AmongUs del Hombre Araña",
    img: "assets/catalogo/personajes/1AmongUsSpiderman.jpg",
    precio: 2200,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @lennutas",
    stock: 5,
  },
  {
    id: "17",
    categoria: "Personajes",
    nombre: "Gnomo",
    img: "assets/catalogo/personajes/2Gnomo.jpg",
    precio: 1800,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @latiendadevallosti",
    stock: 5,
  },
];

export const getFetch = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject("Error");
  }
});
