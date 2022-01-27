const productos = [
  {
    id: "1",
    categoria: "Animales",
    nombre: "Unicornio",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314759/laTiendaDeVallosti/Animales/1Unicornio_hqt1nx.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314760/laTiendaDeVallosti/Animales/2Jirafa_j8hcdh.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314840/laTiendaDeVallosti/Animales/3Conejo_go0dho.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314839/laTiendaDeVallosti/Animales/4Coneja_phdgto.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314766/laTiendaDeVallosti/Animales/5Ovejas_llvg4t.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314839/laTiendaDeVallosti/Animales/6JirafaAmarilla_kqhsvt.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314764/laTiendaDeVallosti/Animales/9OvejaModelo2_x0id19.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314839/laTiendaDeVallosti/Animales/8Elefante_suncu9.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314764/laTiendaDeVallosti/Animales/9OvejaModelo2_x0id19.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314931/laTiendaDeVallosti/Bebes/1ConjuntoVaca_rl3imu.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314927/laTiendaDeVallosti/Bebes/2JirafaDidactica_qhtxiv.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314928/laTiendaDeVallosti/Bebes/3OvejaGuardaPijama_lgn8fw.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314929/laTiendaDeVallosti/Bebes/4MantaApegoJirafa_mbrouj.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314930/laTiendaDeVallosti/Bebes/5MantaApegoHipopotamo_hvu0tq.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314953/laTiendaDeVallosti/Bebes/6SonajeroJirafa_xdsray.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314986/laTiendaDeVallosti/Personajes/1AmongUsSpiderman_gmbfcg.jpg",
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
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314986/laTiendaDeVallosti/Personajes/2Gnomo_ryn0xe.jpg",
    precio: 1800,
    descripcion:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    patron: "Diseño de @latiendadevallosti",
    stock: 5,
  },
];

// export const getFetch = new Promise((resolve, reject) => {
//   if (true) {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   } else {
//     reject("Error");
//   }
// });
