const qualityPrompt = ({
  input,
  businessName, // ok
  email, // ok
  serviceDescription, // ok
  callToActionButtonName, // ok
  foldersTech,
  mainColor,
  secondaryColor,
  font,
  stack,
}: {
  input: string;
  businessName: string;
  email: string;
  serviceDescription: string;
  callToActionButtonName: string;
  foldersTech: string;
  mainColor: string;
  secondaryColor: string;
  font: string;
  stack: string;
}) => {
  return `
    Quiero que generes una landing page moderna y con un buen background impresionante para el negocio llamado ${businessName}, es un servicio que ofrece ${serviceDescription}.

    Que sea bonita y que tenga estilos avanzados, no le temas a que el codigo sea muy largo, usa tu creatividad!

    Quiero que generes todas las imágenes que tenga que tener la landing page en archivos .svg, no te preocupes, puedes usar tu creatividad para que se vea impresionante.

    Necesito que la página tenga la siguiente estructura y contenido:

    1. **Header:**
      - Logo de ${businessName}. (a la izquierda) (y generame el logo en un archivo .svg)
      - Menú de navegación con enlaces a "Inicio", "Servicios", "Sobre Nosotros", y "Contacto".

    2. **Hero Section:**
      - Imagen de fondo llamativa.
      - Título principal.
      - Subtítulo.
      - Botón de llamada a la acción (CTA) que diga ${callToActionButtonName}, que tenga un border radius bonito, un color gradiente que sea llamativo y que el color encaje con la estructura de colores de la app.

    3. **Sección de Servicios:**
      - Tres columnas con íconos, títulos y descripciones breves de los servicios ofrecidos.

    4. **Sección de Testimonios:**
      - Slider con testimonios de clientes satisfechos.

    5. **Sección de Contacto:**
      - Formulario de contacto con campos para "Nombre", "Correo Electrónico", "Mensaje".
      - Información de contacto (+34633872356, ${email}).

    6. **Footer:**
      - Enlaces a redes sociales.
      - Información de copyright.

    Además, necesito que el código se entregue en archivos separados: ${foldersTech}.
    Quiero que el diseño sea moderno y limpio, utilizando una paleta de colores con el color principal de ${mainColor} y secundario ${secondaryColor} y la tipografía de ${font}.

    Añade Javascript para que tenga una buena UX/UI, y añade el script al html.

    Proveer un archivo zip con todos los archivos del código organizados y un archivo README con instrucciones para ejecutar y personalizar la landing page.
    La página debe ser responsive y verse bien en dispositivos móviles y de escritorio.
    Incluir comentarios en el código para facilitar la comprensión y la modificación futura.

    Tecnologías preferidas: ${stack}.

    Ten en cuenta estas especificaciones del usuario: ${input}.

    NO AÑADAS ARCHIVOS SOLO CON COMENTARIOS EN TU RESPUESTA
  `;
};

export default qualityPrompt;
