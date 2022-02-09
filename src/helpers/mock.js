//import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const products = [
  {
    id: "1",
    category: "Animales",
    name: "Unicornio",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314759/laTiendaDeVallosti/Animales/1Unicornio_hqt1nx.jpg",
    price: 2000,
    description:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @jesshuffco",
    stock: 5,
  },
  {
    id: "2",
    category: "Animales",
    name: "Jirafa articulada",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314760/laTiendaDeVallosti/Animales/2Jirafa_j8hcdh.jpg",
    price: 1700,
    description:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @venelopatoys",
    stock: 5,
  },
  {
    id: "3",
    category: "Animales",
    name: "Conejo",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314840/laTiendaDeVallosti/Animales/3Conejo_go0dho.jpg",
    price: 1100,
    description:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @fookolki",
    stock: 5,
  },
  {
    id: "4",
    category: "Animales",
    name: "Coneja",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314839/laTiendaDeVallosti/Animales/4Coneja_phdgto.jpg",
    price: 1100,
    description:
      "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @rochi_tejidosartesanales",
    stock: 5,
  },
  {
    id: "5",
    category: "Animales",
    name: "Ovejas",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314766/laTiendaDeVallosti/Animales/5Ovejas_llvg4t.jpg",
    price: 2000,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @_petitbonnet_",
    stock: 5,
  },
  {
    id: "6",
    category: "Animales",
    name: "Jirafa",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314839/laTiendaDeVallosti/Animales/6JirafaAmarilla_kqhsvt.jpg",
    price: 1500,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @gatomiacrochetaria",
    stock: 5,
  },
  {
    id: "7",
    category: "Animales",
    name: "Oveja",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314764/laTiendaDeVallosti/Animales/9OvejaModelo2_x0id19.jpg",
    price: 1800,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @anat_tzach",
    stock: 5,
  },
  {
    id: "8",
    category: "Animales",
    name: "Elefante",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314839/laTiendaDeVallosti/Animales/8Elefante_suncu9.jpg",
    price: 1800,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @sweetoddityart",
    stock: 5,
  },
  {
    id: "9",
    category: "Animales",
    name: "Dulce oveja",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314764/laTiendaDeVallosti/Animales/9OvejaModelo2_x0id19.jpg",
    price: 1800,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @amalou.designs",
    stock: 5,
  },
  {
    id: "10",
    category: "Bebes",
    name: "Conjunto de manta de apego + sonajero de vaquita",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314931/laTiendaDeVallosti/Bebes/1ConjuntoVaca_rl3imu.jpg",
    price: 2500,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @ovejita.tejedora",
    stock: 5,
  },
  {
    id: "11",
    category: "Bebes",
    name: "Jirafa didáctica",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314927/laTiendaDeVallosti/Bebes/2JirafaDidactica_qhtxiv.jpg",
    price: 2300,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @sparrow.dreamer",
    stock: 5,
  },
  {
    id: "12",
    category: "Bebes",
    name: "Oveja guarda pijama",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314928/laTiendaDeVallosti/Bebes/3OvejaGuardaPijama_lgn8fw.jpg",
    price: 1600,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @anastasiya__vokhmina",
    stock: 5,
  },
  {
    id: "13",
    category: "Bebes",
    name: "Manta de apego de Jirafa",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314929/laTiendaDeVallosti/Bebes/4MantaApegoJirafa_mbrouj.jpg",
    price: 1900,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @gatomiacrochetaria",
    stock: 5,
  },
  {
    id: "14",
    category: "Bebes",
    name: "Manta de apego de Hipopotamo",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314930/laTiendaDeVallosti/Bebes/5MantaApegoHipopotamo_hvu0tq.jpg",
    price: 1900,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @gracielagaudi",
    stock: 5,
  },
  {
    id: "15",
    category: "Bebes",
    name: "Sonajero de Jirafa",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314953/laTiendaDeVallosti/Bebes/6SonajeroJirafa_xdsray.jpg",
    price: 1800,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @gatomiacrochetaria",
    stock: 5,
  },
  {
    id: "16",
    category: "Personajes",
    name: "AmongUs del Hombre Araña",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314986/laTiendaDeVallosti/Personajes/1AmongUsSpiderman_gmbfcg.jpg",
    price: 2200,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @lennutas",
    stock: 5,
  },
  {
    id: "17",
    category: "Personajes",
    name: "Gnomo",
    img: "https://res.cloudinary.com/dtxjhstme/image/upload/v1643314986/laTiendaDeVallosti/Personajes/2Gnomo_ryn0xe.jpg",
    price: 1800,
    description:
    "Todas las fotos son trabajos realizados por mí, no utilizo fotos ilustrativas de internet. Utilizo hilo de algodón sedificado hipoalergénico, rellenos con vellón siliconado, para que no se deformen y en algunos se utilizan ojos de seguridad. Podes pedirme el color, según disponibilidad de stock, que prefieras. La entrega dependerá de la demanda que tenga en el momento. ",
    pattern: "Diseño de @latiendadevallosti",
    stock: 5,
  },
];


// const uploadItems = () => {

//   const db = getFirestore()

//   const orderCollection = collection(db, 'items')
//   await addDocs(orderCollection, items) 
//   .then(resp => setIdOrder(resp.id))
//   .catch(err => console.log(err))
// }