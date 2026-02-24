export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introducción a la Inteligencia Artificial",
    description:
      "Entiende qué es la IA, cómo funciona y por qué está transformando todo.",
    duration: "15 min",
    videoUrl: "https://youtube.com/embed/placeholder1",
  },
  {
    id: 2,
    title: "Tu primer prompt efectivo",
    description:
      "Aprende a comunicarte con la IA para obtener exactamente lo que necesitas.",
    duration: "20 min",
    videoUrl: "https://youtube.com/embed/placeholder2",
  },
  {
    id: 3,
    title: "ChatGPT desde cero",
    description:
      "Domina la interfaz, funcionalidades y mejores prácticas de ChatGPT.",
    duration: "25 min",
    videoUrl: "https://youtube.com/embed/placeholder3",
  },
  {
    id: 4,
    title: "Claude: Tu asistente de análisis",
    description:
      "Descubre las fortalezas únicas de Claude y cuándo usarlo.",
    duration: "20 min",
    videoUrl: "https://youtube.com/embed/placeholder4",
  },
  {
    id: 5,
    title: "Generación de imágenes con IA",
    description:
      "Crea imágenes impresionantes con Midjourney, DALL-E y otras herramientas.",
    duration: "30 min",
    videoUrl: "https://youtube.com/embed/placeholder5",
  },
  {
    id: 6,
    title: "Automatiza tu trabajo",
    description:
      "Implementa tu primera automatización y ahorra horas cada semana.",
    duration: "25 min",
    videoUrl: "https://youtube.com/embed/placeholder6",
  },
];
