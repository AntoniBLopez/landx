const qualityPrompt = ({
	input,
	name,
	email,
	businessName,
	serviceDescription,
	callToActionButtonName,
	foldersTech,
	mainColor,
	font,
	stack,
}: {
	input: string;
	name: string;
	email: string;
	businessName: string;
	serviceDescription: string;
	callToActionButtonName: string;
	foldersTech: string;
	mainColor: string;
	font: string;
	stack: string;
}) => {
	return `
    Quiero que generes una landing page profesional y moderna para ${businessName}, un servicio que ofrece ${serviceDescription}. Necesito que la página tenga la siguiente estructura y contenido:

    1. **Header:**
      - Logo de ${businessName}.
      - Menú de navegación con enlaces a "Inicio", "Servicios", "Sobre Nosotros", y "Contacto".

    2. **Hero Section:**
      - Imagen de fondo llamativa.
      - Título principal.
      - Subtítulo.
      - Botón de llamada a la acción (CTA) que diga ${callToActionButtonName}.

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

    Además, necesito que el código se entregue en archivos separados: ${foldersTech}. Quiero que el diseño sea moderno y limpio, utilizando una paleta de colores con el color principal de ${mainColor} y la tipografía de ${font}.

    Proveer un archivo zip con todos los archivos del código organizados y un archivo README con instrucciones para ejecutar y personalizar la landing page. La página debe ser responsive y verse bien en dispositivos móviles y de escritorio. Incluir comentarios en el código para facilitar la comprensión y la modificación futura.

    Tecnologías preferidas: ${stack}.

    Ten en cuenta estas especificaciones del usuario: ${input}.
  `;
};

export default qualityPrompt;
