export interface GuideSection {
  title: string;
  content: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: "chatgpt" | "imagen" | "productividad" | "automatizacion";
  image: string;
  videoUrl?: string;
  featured?: boolean;
  readingTime: string;
  content: {
    introduction: string;
    sections: GuideSection[];
    conclusion: string;
  };
}

export const guides: Guide[] = [];

export const categories = [
  { id: "todas", label: "Todas" },
  { id: "chatgpt", label: "ChatGPT" },
  { id: "imagen", label: "Imagen" },
  { id: "productividad", label: "Productividad" },
  { id: "automatizacion", label: "Automatización" },
];
