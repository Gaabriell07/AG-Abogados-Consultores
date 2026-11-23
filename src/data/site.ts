// ─────────────────────────────────────────────────────────────
// TODO EL CONTENIDO DE LA WEB ESTÁ AQUÍ.
// Lo marcado con [CONFIRMAR] es texto de ejemplo: hay que
// validarlo con la Dra. Arévalo antes de publicar.
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
  { label: 'Publicaciones', href: '#publicaciones' },
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
    'Arévalo Grández Abogados & Consultores fue fundado por la Dra. María Janelly Arévalo Grández, abogada con experiencia en el Poder Judicial y en el Ministerio de la Mujer y Poblaciones Vulnerables.',
    'Contamos con sedes en Lima, Tarapoto y Tocache, y asesoramos a nivel nacional de forma presencial o virtual, con estrategias claras y comunicación constante en cada caso.',
  ],
  enlaces: [
    { label: 'La Firma', href: '#firma' },
    { label: 'Conoce a nuestros profesionales', href: '#profesionales' },
  ],
};

export const bandas = {
  banda1: '/images/banda-1.jpg',
  banda2: '/images/banda-2.jpg',
  galeria: ['/images/galeria-1.jpg', '/images/galeria-2.jpg'],
  final: '/images/banda-final.jpg',
};

export const firmaBloque = {
  titulo: 'Experiencia pública al servicio de nuestros clientes',
  destacado:
    'Conocemos el sistema de justicia desde adentro, y eso marca la diferencia en cada estrategia.',
  texto: [
    'La trayectoria de nuestra fundadora en el Poder Judicial y en el sector público nos permite anticipar cómo se resuelven los casos y actuar con rapidez y precisión.',
    'Trabajamos con honestidad: explicamos cada etapa del proceso, los plazos reales y las alternativas disponibles. [CONFIRMAR]',
  ],
  enlaces: [{ label: 'Agenda una consulta', href: '#contacto' }],
};

export const cita = {
  texto: 'Cada caso es una persona, una familia o una empresa que confía en nosotros. Esa confianza se defiende con trabajo serio.',
  autor: 'Dra. María Janelly Arévalo Grández, Socia Fundadora [CONFIRMAR CITA]',
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
  // Fotos: /public/images/equipo-1.jpg, equipo-2.jpg ...
  equipo: [
    { nombre: 'Dra. María Janelly Arévalo Grández', cargo: 'Socia Fundadora', foto: '/images/equipo-1.jpg' },
    { nombre: 'Nombre del abogado [CONFIRMAR]', cargo: 'Asociado', foto: '/images/equipo-2.jpg' },
    { nombre: 'Nombre del abogado [CONFIRMAR]', cargo: 'Asociado', foto: '/images/equipo-3.jpg' },
    { nombre: 'Nombre del abogado [CONFIRMAR]', cargo: 'Asociado', foto: '/images/equipo-4.jpg' },
  ],
};

export const publicaciones = {
  pretitulo: 'Destacados',
  // [CONFIRMAR] pueden enlazar a videos de TikTok o artículos
  items: [
    { titulo: '¿Cómo solicitar una pensión de alimentos en el Perú?', imagen: '/images/pub-1.jpg', href: '#' },
    { titulo: 'Medidas de protección: qué son y cómo pedirlas', imagen: '/images/pub-2.jpg', href: '#' },
    { titulo: 'Divorcio por mutuo acuerdo: pasos y requisitos', imagen: '/images/pub-3.jpg', href: '#' },
    { titulo: 'Tus derechos si te despiden sin causa justa', imagen: '/images/pub-4.jpg', href: '#' },
  ],
};
