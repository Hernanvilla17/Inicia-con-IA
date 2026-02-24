export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const team: TeamMember[] = [
  {
    name: "Hernán",
    role: "Co-fundador",
    bio: "Apasionado por democratizar el acceso a la inteligencia artificial. Cree firmemente que la IA puede ayudar a cualquier persona a ser más productiva y creativa, sin importar su background técnico.",
    image: "/images/team/hernan.jpg",
    social: {
      linkedin: "https://linkedin.com/in/hernan",
      twitter: "https://twitter.com/hernan",
      instagram: "https://instagram.com/hernan",
    },
  },
  {
    name: "Mau",
    role: "Co-fundador",
    bio: "Especialista en productividad y automatización. Ha ayudado a cientos de profesionales y empresas a implementar herramientas de IA en sus flujos de trabajo, ahorrando miles de horas cada mes.",
    image: "/images/team/mau.jpg",
    social: {
      linkedin: "https://linkedin.com/in/mau",
      twitter: "https://twitter.com/mau",
      instagram: "https://instagram.com/mau",
    },
  },
];
