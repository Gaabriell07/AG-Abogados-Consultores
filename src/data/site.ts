// ─────────────────────────────────────────────────────────────
// TODO EL CONTENIDO DE LA WEB ESTÁ AQUÍ.
// Las imágenes van en /public/images/ con el nombre indicado.
// ─────────────────────────────────────────────────────────────

export const firma = {
  nombre: 'Arévalo Grández',
  nombreCompleto: 'Arévalo Grández Abogados & Consultores',
  razonSocial: 'Arévalo Grández Abogados & Consultores S.A.C.',
  fundacion: 2021,
  ciudad: 'Lima, Perú',
  telefonos: ['957 590 432', '983 308 411'],
  whatsapp: '51957590432', // solo números, con código de país (51 = Perú)
  atencion: 'Asesoramos a nivel nacional, presencial o virtual',
  sedes: [
    { ciudad: 'Lima', direccion: 'Av. Parque Zonal, Mz. D, Int. 14, Carabayllo' },
    { ciudad: 'Tarapoto', direccion: 'Jr. Rioja N.º 160' },
    { ciudad: 'Tocache', direccion: 'Jr. Jorge Chávez 437' },
  ],
  redes: {
    tiktok: 'https://www.tiktok.com/@abogados_consultores1',
    facebook: 'https://www.facebook.com/MJSEFNS/',
    linkedin: 'https://www.linkedin.com/in/maria-janelly-arevalo-grandez-612b131a5/',
  },
};

export const nav = [
  { label: 'La Firma', href: '#firma' },
  { label: 'Profesionales', href: '#profesionales' },
  { label: 'Áreas de Práctica', href: '#areas' },
  { label: 'Por qué elegirnos', href: '#porque' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  imagen: '/images/hero.jpg',
  titulo: 'Defensa legal cercana, firme y comprometida',
};

export const nosotros = {
  pretitulo: 'Nosotros',
  destacado:
    'Desde 2021 brindamos asesoría y patrocinio legal en Lima, con un trato directo y humano en cada caso.',
  texto: [
    'Arévalo Grández Abogados & Consultores fue fundado por los abogados Esteban Arévalo Grández y María Janelly Arévalo Grández, con especialización en cumplimiento normativo, derecho notarial y registral, y experiencia en el Poder Judicial y en el Ministerio de la Mujer y Poblaciones Vulnerables.',
    'Contamos con sedes en Lima, Tarapoto y Tocache, y asesoramos a nivel nacional de forma presencial o virtual, con estrategias claras y comunicación constante en cada caso.',
  ],
  enlaces: [
    { label: 'La Firma', href: '#firma' },
    { label: 'Conoce a nuestros profesionales', href: '#profesionales' },
  ],
};

export const mapa = {
  pretitulo: 'Encuéntranos en',
  direccion: 'Jr. Jorge Chávez N.° 437 – Tocache',
  // Lo que se busca en Google Maps (más preciso con región y país)
  consulta: 'Jr. Jorge Chávez 437, Tocache, San Martín, Perú',
};

export const bandas = {
  banda1: '/images/banda-1.jpg',
  banda2: '/images/banda-2.jpg',
  galeria: ['/images/galeria-1.jpg', '/images/galeria-2.jpg'],
};

export const firmaBloque = {
  titulo: 'Especialización y experiencia al servicio de nuestros clientes',
  destacado:
    'Unimos la experiencia en el sistema de justicia con la especialización técnica que exigen personas y empresas.',
  texto: [
    'La trayectoria en el Poder Judicial y en el sector público nos permite anticipar cómo se resuelven los casos y actuar con rapidez y precisión.',
    'A ello sumamos especialización en cumplimiento normativo, prevención de lavado de activos y financiamiento del terrorismo, y derecho notarial y registral, para asesorar a empresas con un enfoque preventivo.',
  ],
  enlaces: [{ label: 'Agenda una consulta', href: '#contacto' }],
};

export const cita = {
  texto: 'Asesoría legal a nivel nacional, presencial o virtual, desde nuestras sedes en Lima, Tarapoto y Tocache.',
  autor: 'Arévalo Grández Abogados & Consultores',
};

export const areas = {
  pretitulo: 'Áreas de Práctica',
  destacado: 'Asesoría y patrocinio en las materias que más impactan la vida de nuestros clientes.',
  lista: [
    { titulo: 'Derecho Penal', detalle: 'Defensa técnica, denuncias y asesoría a agraviados.' },
    { titulo: 'Derecho de Familia', detalle: 'Alimentos, divorcio, tenencia, régimen de visitas, violencia familiar.' },
    { titulo: 'Derecho Civil', detalle: 'Contratos, sucesiones, desalojos, obligaciones.' },
    { titulo: 'Notarial y Registral', detalle: 'Trámites notariales, inscripciones y saneamiento ante SUNARP.' },
    { titulo: 'Cumplimiento Normativo', detalle: 'Compliance y prevención de riesgos legales.' },
    { titulo: 'Derecho Empresarial', detalle: 'Constitución de empresas y asesoría corporativa.' },
  ],
};

export const profesionales = {
  pretitulo: 'Profesionales',
  destacado: 'Un equipo comprometido con cada cliente.',
  equipo: [
    {
      nombre: 'Esteban Arévalo Grández',
      cargo: 'Abogado Fundador',
      foto: '/images/esteban-arevalo.jpg',
      bio: [
        'Abogado fundador de Arévalo Grández Abogados & Consultores.',
        'Especialista en cumplimiento normativo y prevención de lavado de activos y financiamiento del terrorismo, y en derecho notarial y registral.',
      ],
      formacion: 'Universidad César Vallejo',
      linkedin: 'https://www.linkedin.com/in/esteban-arevalo-grandez-63560880/',
    },
    {
      nombre: 'María Janelly Arévalo Grández',
      cargo: 'Socia Fundadora',
      foto: '/images/maria-janelly-arevalo.jpg',
      bio: [
        'Socia fundadora de Arévalo Grández Abogados & Consultores desde 2021.',
        'Cuenta con experiencia en el Poder Judicial y se desempeña en el Ministerio de la Mujer y Poblaciones Vulnerables.',
      ],
      formacion: '',
      linkedin: 'https://www.linkedin.com/in/maria-janelly-arevalo-grandez-612b131a5/',
    },
  ],
};

export const porque = {
  pretitulo: '¿Por qué elegirnos?',
  items: [
    {
      titulo: 'Presencia en tres ciudades',
      texto: 'Contamos con sedes en Lima, Tarapoto y Tocache, y acompañamos cada caso de cerca.',
      imagen: '/images/porque-1.jpg',
    },
    {
      titulo: 'Atención en todo el Perú',
      texto: 'Asesoramos a nivel nacional, de forma presencial o virtual, para que la distancia no sea un obstáculo.',
      imagen: '/images/porque-2.jpg',
    },
    {
      titulo: 'Especialistas en cumplimiento normativo',
      texto: 'Asesoramos a empresas en prevención de lavado de activos y financiamiento del terrorismo, y en derecho notarial y registral.',
      imagen: '/images/porque-3.jpg',
    },
    {
      titulo: 'Experiencia en el sistema de justicia',
      texto: 'Nuestra trayectoria en el Poder Judicial y en el sector público nos permite anticipar cómo se resuelven los casos.',
      imagen: '/images/porque-4.jpg',
    },
  ],
};

// Fotos con licencia Creative Commons que exigen dar crédito
export const creditos = [
  { autor: 'Art DiNo', licencia: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Palacio_de_Justicia._Lima,_Per%C3%BA.jpg' },
  { autor: 'comicpie', licencia: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Palacio_De_Justicia,_Lima,_Peru.jpg' },
  { autor: 'Rodolfo Pimentel', licencia: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Lima_14_Palacio_de_Justicia.jpg' },
];
