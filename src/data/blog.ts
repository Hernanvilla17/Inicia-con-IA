export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "tutoriales" | "noticias" | "tips" | "herramientas";
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  featured?: boolean;
  readingTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-formas-usar-chatgpt",
    title: "5 formas de usar ChatGPT que no conocías",
    excerpt:
      "Descubre funcionalidades ocultas y trucos avanzados para aprovechar ChatGPT al máximo en tu trabajo diario.",
    content: `
# 5 formas de usar ChatGPT que no conocías

ChatGPT se ha convertido en una herramienta esencial para millones de personas, pero muchos usuarios apenas arañan la superficie de lo que puede hacer. En este artículo, te compartimos cinco formas poco conocidas de aprovechar esta poderosa IA.

## 1. Como editor de código en tiempo real

No solo puedes pedirle a ChatGPT que escriba código, sino que puedes usarlo como un editor inteligente que revisa, optimiza y documenta tu código existente.

## 2. Para crear prompts de otras IAs

Una de las formas más efectivas de usar ChatGPT es pedirle que te ayude a crear prompts para otras herramientas como Midjourney, DALL-E o Stable Diffusion.

## 3. Como tutor personal

ChatGPT puede adaptar explicaciones a tu nivel de conocimiento, hacer preguntas de seguimiento y crear ejercicios personalizados para reforzar tu aprendizaje.

## 4. Para análisis de datos

Puedes pegar datos en formato CSV o tabla y pedirle que identifique patrones, calcule estadísticas o sugiera visualizaciones.

## 5. Como coach de escritura

Más allá de corregir gramática, puede ayudarte a desarrollar tu voz como escritor, sugerir estructuras narrativas y mejorar la claridad de tus textos.

---

¿Conocías estas formas de usar ChatGPT? Cuéntanos en los comentarios cuál vas a probar primero.
    `,
    category: "tips",
    image: "/images/blog/chatgpt-tips.jpg",
    date: "2025-01-20",
    author: {
      name: "Hernán",
      avatar: "/images/team/hernan.jpg",
      bio: "Co-fundador de Inicia con IA. Apasionado por democratizar el acceso a la inteligencia artificial.",
    },
    featured: true,
    readingTime: "5 min",
  },
  {
    slug: "funcion-claude-cambiara-trabajo",
    title: "La función de Claude que cambiará cómo trabajas",
    excerpt:
      "Claude tiene una característica única que lo diferencia de otros modelos de IA. Te explicamos cómo aprovecharla.",
    content: `
# La función de Claude que cambiará cómo trabajas

Claude, el modelo de IA de Anthropic, tiene una característica que lo distingue de la competencia: su capacidad de mantener contexto en conversaciones extremadamente largas.

## ¿Por qué es importante?

Mientras que otros modelos comienzan a "olvidar" información después de cierto punto, Claude puede mantener coherencia en documentos muy extensos.

## Casos de uso prácticos

- Análisis de contratos largos
- Revisión de manuscritos completos
- Debugging de bases de código extensas
- Investigación con múltiples fuentes

## Cómo aprovecharlo

La clave está en estructurar bien tu información inicial y hacer referencias claras a secciones específicas durante la conversación.
    `,
    category: "herramientas",
    image: "/images/blog/claude-feature.jpg",
    date: "2025-01-19",
    author: {
      name: "Mau",
      avatar: "/images/team/mau.jpg",
      bio: "Co-fundador de Inicia con IA. Especialista en productividad y automatización con IA.",
    },
    readingTime: "4 min",
  },
  {
    slug: "gemini-2-todo-lo-que-necesitas-saber",
    title: "Gemini 2.0: Todo lo que necesitas saber",
    excerpt:
      "Google lanzó Gemini 2.0 con capacidades impresionantes. Analizamos qué significa para los usuarios.",
    content: `
# Gemini 2.0: Todo lo que necesitas saber

Google ha presentado oficialmente Gemini 2.0, la nueva generación de su modelo de inteligencia artificial. En este artículo analizamos todas las novedades y lo que significan para ti.

## Principales novedades

### Velocidad mejorada
El nuevo modelo es significativamente más rápido que su predecesor, permitiendo respuestas casi instantáneas.

### Capacidades multimodales
Gemini 2.0 puede procesar y generar texto, imágenes, audio y video de forma nativa.

### Integración profunda con Google
Conexión directa con Gmail, Drive, Docs y otros servicios de Google.

## ¿Vale la pena el cambio?

Si ya usas el ecosistema de Google, definitivamente sí. La integración nativa ofrece ventajas únicas que otros modelos no pueden igualar.
    `,
    category: "noticias",
    image: "/images/blog/gemini-2.jpg",
    date: "2025-01-18",
    author: {
      name: "Hernán",
      avatar: "/images/team/hernan.jpg",
      bio: "Co-fundador de Inicia con IA. Apasionado por democratizar el acceso a la inteligencia artificial.",
    },
    readingTime: "6 min",
  },
  {
    slug: "imagenes-profesionales-midjourney",
    title: "Cómo crear imágenes profesionales con Midjourney",
    excerpt:
      "Tutorial paso a paso para generar imágenes de calidad profesional usando Midjourney v6.",
    content: `
# Cómo crear imágenes profesionales con Midjourney

Midjourney se ha establecido como la herramienta líder para generación de imágenes con IA. En este tutorial, te enseñamos a crear imágenes de calidad profesional.

## Estructura básica de un prompt

Un buen prompt de Midjourney tiene cuatro componentes:
1. Sujeto principal
2. Estilo artístico
3. Iluminación y ambiente
4. Parámetros técnicos

## Ejemplos prácticos

### Fotografía de producto
"Professional product photography of [producto], studio lighting, white background, 8k, commercial quality"

### Ilustración editorial
"Editorial illustration about [tema], minimalist style, vector art, trending on Behance"

## Parámetros avanzados

- --ar para relación de aspecto
- --stylize para intensidad del estilo
- --chaos para variación
    `,
    category: "tutoriales",
    image: "/images/blog/midjourney-tutorial.jpg",
    date: "2025-01-17",
    author: {
      name: "Mau",
      avatar: "/images/team/mau.jpg",
      bio: "Co-fundador de Inicia con IA. Especialista en productividad y automatización con IA.",
    },
    readingTime: "8 min",
  },
  {
    slug: "prompt-perfecto-no-existe",
    title: "El prompt perfecto no existe (pero esto se acerca)",
    excerpt:
      "Desmitificamos la búsqueda del prompt perfecto y te damos una fórmula práctica que funciona.",
    content: `
# El prompt perfecto no existe (pero esto se acerca)

Muchos usuarios de IA buscan el "prompt perfecto" que resolverá todos sus problemas. La realidad es diferente, pero hay principios que te acercan mucho.

## El mito del prompt perfecto

No existe un prompt universal porque cada situación, modelo y objetivo es diferente. Lo que sí existen son principios que funcionan consistentemente.

## La fórmula C.R.E.A.

- **C**ontexto: Explica la situación
- **R**ol: Define quién debe ser la IA
- **E**specificaciones: Detalla lo que necesitas
- **A**cción: Indica claramente qué hacer

## Ejemplo aplicado

"Actúa como un experto en marketing digital (Rol). Estoy lanzando un curso online de fotografía (Contexto). Necesito un email de ventas persuasivo de máximo 300 palabras (Especificaciones). Escríbelo usando el framework PAS (Acción)."
    `,
    category: "tips",
    image: "/images/blog/prompt-perfecto.jpg",
    date: "2025-01-16",
    author: {
      name: "Hernán",
      avatar: "/images/team/hernan.jpg",
      bio: "Co-fundador de Inicia con IA. Apasionado por democratizar el acceso a la inteligencia artificial.",
    },
    readingTime: "5 min",
  },
  {
    slug: "automatizar-tareas-ia",
    title: "10 tareas que puedes automatizar hoy con IA",
    excerpt:
      "Lista práctica de automatizaciones que puedes implementar inmediatamente para ahorrar tiempo.",
    content: `
# 10 tareas que puedes automatizar hoy con IA

La automatización con IA no tiene que ser complicada. Aquí tienes 10 tareas que puedes automatizar hoy mismo.

## 1. Resúmenes de reuniones
Usa Otter.ai o Claude para transcribir y resumir tus reuniones automáticamente.

## 2. Clasificación de emails
Configura filtros inteligentes que categorizan tus emails por prioridad.

## 3. Generación de reportes
Crea plantillas que se llenan automáticamente con datos actualizados.

## 4. Respuestas a FAQs
Configura un chatbot que responda preguntas frecuentes de clientes.

## 5. Programación de redes sociales
Genera contenido y prográmalo automáticamente.

## Y más...
Revisión de documentos, traducción, investigación de mercado, análisis de competencia y creación de contenido.
    `,
    category: "tutoriales",
    image: "/images/blog/automatizar-ia.jpg",
    date: "2025-01-15",
    author: {
      name: "Mau",
      avatar: "/images/team/mau.jpg",
      bio: "Co-fundador de Inicia con IA. Especialista en productividad y automatización con IA.",
    },
    readingTime: "7 min",
  },
  {
    slug: "errores-comunes-chatgpt",
    title: "Los 7 errores más comunes al usar ChatGPT",
    excerpt:
      "Evita estos errores frecuentes y mejora dramáticamente tus resultados con ChatGPT.",
    content: `
# Los 7 errores más comunes al usar ChatGPT

Después de ayudar a cientos de personas a usar ChatGPT, hemos identificado los errores más frecuentes. Aprende a evitarlos.

## 1. Prompts demasiado vagos
"Escríbeme algo sobre marketing" no da buenos resultados. Sé específico.

## 2. No dar contexto
ChatGPT no lee mentes. Explica tu situación, audiencia y objetivos.

## 3. Aceptar la primera respuesta
Siempre puedes pedir que mejore, reformule o expanda la respuesta.

## 4. No usar el modo conversación
Puedes iterar y refinar las respuestas en múltiples turnos.

## 5. Ignorar las instrucciones del sistema
Definir un rol mejora significativamente la calidad de las respuestas.

## 6. Pedir demasiado a la vez
Divide tareas complejas en pasos más pequeños.

## 7. No verificar la información
Siempre verifica datos, estadísticas y citas importantes.
    `,
    category: "tips",
    image: "/images/blog/errores-chatgpt.jpg",
    date: "2025-01-14",
    author: {
      name: "Hernán",
      avatar: "/images/team/hernan.jpg",
      bio: "Co-fundador de Inicia con IA. Apasionado por democratizar el acceso a la inteligencia artificial.",
    },
    readingTime: "6 min",
  },
  {
    slug: "comparativa-modelos-ia-2025",
    title: "Comparativa de modelos de IA en 2025",
    excerpt:
      "ChatGPT vs Claude vs Gemini vs Llama: Cuál es mejor para cada caso de uso.",
    content: `
# Comparativa de modelos de IA en 2025

El panorama de los modelos de IA evoluciona rápidamente. Esta es nuestra comparativa actualizada.

## ChatGPT (GPT-4o)
**Mejor para:** Uso general, creatividad, plugins
**Precio:** $20/mes (Plus)

## Claude (Opus)
**Mejor para:** Análisis de documentos largos, razonamiento
**Precio:** $20/mes (Pro)

## Gemini (2.0)
**Mejor para:** Integración con Google, multimodal
**Precio:** $19.99/mes (Advanced)

## Llama (3)
**Mejor para:** Privacidad, uso local
**Precio:** Gratuito (open source)

## Nuestra recomendación

Para la mayoría de usuarios, una suscripción a ChatGPT Plus combinada con el tier gratuito de Claude es la mejor opción.
    `,
    category: "herramientas",
    image: "/images/blog/comparativa-ia.jpg",
    date: "2025-01-13",
    author: {
      name: "Mau",
      avatar: "/images/team/mau.jpg",
      bio: "Co-fundador de Inicia con IA. Especialista en productividad y automatización con IA.",
    },
    readingTime: "10 min",
  },
];

export const blogCategories = [
  { id: "todos", label: "Todos" },
  { id: "tutoriales", label: "Tutoriales" },
  { id: "noticias", label: "Noticias" },
  { id: "tips", label: "Tips" },
  { id: "herramientas", label: "Herramientas" },
];
