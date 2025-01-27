import { CATEGORIES } from '../models/categories';

export const trainingData = [
  // Categoría: URGENTE
  {
    text: 'necesito ayuda inmediata con mi ordenador',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'el servidor está caído por favor solucionenlo ya',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'urgente fuga de agua en el departamento 5b',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'accidente en la autopista se necesita asistencia médica',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'error crítico en la aplicación no permite el acceso',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'se ha ido la luz en todo el edificio',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'necesito un técnico ahora mismo mi negocio está parado',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'alerta de seguridad cambien sus contraseñas inmediatamente',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'fallo en el sistema de calefacción es urgente',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'mi hijo se ha perdido en el centro comercial',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'error en la facturación necesito una solución urgente',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'incendio en el almacén llamen a los bomberos',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'no puedo acceder a mi cuenta bancaria es urgente',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'se ha roto la tubería principal de agua',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'necesito un médico urgentemente tengo un dolor intenso',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'el sitio web está hackeado necesitamos ayuda',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'error en el sistema de reservas no puedo confirmar mi vuelo',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'mi coche se ha averiado en medio de la autopista',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'necesito asistencia legal inmediata',
    classification: CATEGORIES.URGENT,
  },
  {
    text: 'alerta de fraude en mi tarjeta de crédito',
    classification: CATEGORIES.URGENT,
  },

  // Categoría: INFORMACIÓN
  {
    text: 'el horario de atención al cliente ha cambiado',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'nuevas actualizaciones disponibles para tu aplicación',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'recordatorio reunión de equipo mañana a las 10 am',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'información sobre el nuevo protocolo de seguridad',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'el museo abre sus puertas con una nueva exposición',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'cambios en la política de privacidad de la empresa',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'conferencia sobre tecnología el próximo viernes',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'nuevas funcionalidades en la plataforma de elearning',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'información sobre el cierre temporal de la carretera',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'recordatorio pago de impuestos antes del 30 de abril',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'el parque estará cerrado por mantenimiento la próxima semana',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'nuevo horario de trenes a partir del lunes',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'información sobre el programa de becas universitarias',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'actualización del sistema operativo disponible',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'concierto benéfico este sábado en el centro cultural',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'información sobre el proceso de inscripción escolar',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'nuevas normas de reciclaje en el municipio',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'recordatorio vacunación masiva este fin de semana',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'información sobre el tráfico en el centro de la ciudad',
    classification: CATEGORIES.INFORMATION,
  },
  {
    text: 'el festival de cine comienza la próxima semana',
    classification: CATEGORIES.INFORMATION,
  },

  // Categoría: PUBLICIDAD
  {
    text: 'descuento del 50 en todos los productos electrónicos',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'nuevo modelo de smartphone disponible en preventa',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'oferta especial viaje a cancún por solo 500',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'compra ahora y recibe envío gratis',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'nueva colección de moda primavera verano',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'regístrate y obtén un bono de 10 en tu primera compra',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'oferta limitada laptops con descuento del 30',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'gran liquidación de invierno en todas las tiendas',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'nuevo servicio de streaming con contenido exclusivo',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'reserva tu estancia en nuestro hotel con un 20 de descuento',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'oferta especial suscripción anual con un mes gratis',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'compra dos y lleva el tercero gratis',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'nuevo lanzamiento perfume con fragancia única',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'aprovecha nuestra oferta de renovación de seguros',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'oferta exclusiva tarjeta de crédito sin comisiones',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'regala felicidad con nuestros packs de regalo',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'nuevo servicio de entrega express en 24 horas',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'compra ahora y participa en nuestro sorteo',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'oferta especial cena para dos por solo 30',
    classification: CATEGORIES.ADVERTISING,
  },
  {
    text: 'renueva tu guardarropa con nuestras ofertas',
    classification: CATEGORIES.ADVERTISING,
  },

  // Categoría: OTROS
  {
    text: 'hoy es un día soleado perfecto para pasear',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'me encanta el olor a café por la mañana',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'alguien ha visto mi libro de recetas',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'el gato se ha subido al árbol y no quiere bajar',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'estoy pensando en cambiar de trabajo',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'el concierto de anoche fue increíble',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'qué película recomiendan para ver esta noche',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'me encanta cocinar platos nuevos los fines de semana',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'el tráfico esta mañana estaba horrible',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'alguien sabe cómo arreglar una bicicleta pinchada',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'estoy leyendo un libro fascinante sobre historia',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'el jardín necesita un poco de cuidado',
    classification: CATEGORIES.UNKNOWN,
  },
  { text: 'hoy me siento muy productivo', classification: CATEGORIES.UNKNOWN },
  {
    text: 'qué haces para relajarte después del trabajo',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'el clima está perfecto para una barbacoa',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'me encanta escuchar música mientras trabajo',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'alguien quiere jugar al fútbol este fin de semana',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'estoy aprendiendo a tocar la guitarra',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'el perro se ha comido mis zapatos otra vez',
    classification: CATEGORIES.UNKNOWN,
  },
  {
    text: 'hoy es un buen día para empezar un nuevo proyecto',
    classification: CATEGORIES.UNKNOWN,
  },
];
