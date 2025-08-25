export const studies = [
  {
    title: "Ingeniería Eléctrica",
    institution: "Universidad Nacional de Colombia",
    description:
      `Análisis, diseño e implementación de sistemas de energía eléctrica con fuertes bases en ciencias`,
    tags: [
      "Ciencias básicas",
      "Matemáticas",
      "Física",
      "Ciencia de materiales",
      "Circuitos eléctricos",
      "Hardware",
      "Programación",
    ],
  },
  {
    title: "Desarrollo fullstack",
    institution: "Platzi",
    description:
      `Desarrollo de productos de base tecnológica. Preparación en diseño del producto y
      construcción backend y frontend.`,
    tags: [
      "frontend",
      "backend",
      "diseño",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

