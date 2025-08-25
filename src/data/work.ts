import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Senior Staff Go Engineer",
    company: "Numaris",
    region: "México",
    description:
      "Desarrollo backend usando Go, construcción de microservicios serverless con AWS Lambda, diseño de arquitectura de software serveless basado en servicios de AWS, desarrollo de sistemas de streaming de datos usando AWS Kinesis data streams, implementación de aplicaciones en tiempo real con AWS AppSync y GraphQL",
    technologies: [
      "Arquitectura de software",
      "AWS",
      "AWS AppSync",
      "AWS Kinesis data streams",
      "AWS Lambda",
      "Go",
      "Golang",
      "GraphQL",
      "Unit Testing",
    ],
  },
  {
    title: "Middle Backend Developer",
    company: "Boletia",
    region: "México",
    description:
      "Desarrollo backend usando Go. Implementación de pruebas unitarias a todos los servicios que no las tenían. De la mano de diseño se mejoraron varios servicios de la plataforma. Se crearon nueva funcionalidades como la opción de pagos a meses sin intereses y el agendamiento de reportes.",
    technologies: [
      "AWS",
      "Docker",
      "Go",
      "Golang",
      "Unit Testing",
      "Redis",
    ],
  },
  {
    title: "Backend developer",
    company: "IPCOM",
    region: "Colombia",
    description:
      "Desarrollo backend usando Go. Construcción de herramientas de comunicación VoIP con Asterisk (ARI). Desarrollo de herramientas pasa mensajería SMS. Construcción desde ceros de una herramienta para automatizar flujos de comunicaciones e integrarla con terceros.",
    technologies: [
      "Asterisk",
      "Docker",
      "Go",
      "Golang",
      "Lua",
      "Redis",
      "VoIP",
    ],
  },
  {
    title: "Fullstack developer",
    company: "TuPago",
    region: "Colombia",
    description:
      "Desarrollo backend con JavaScript y Python en micro-servicios usando AWS Lambdas bajo los estándares PCI-DSS para el manejo de información financiera. Desarrollo frontend en React y Vue. Administración de servicios cloud en AWS",
    technologies: [
      "AWS Lambdas",
      "AWS",
      "JavaScript",
      "Meteor.js",
      "Node.js",
      "PCI-DSS",
      "Python",
      "React.js",
      "Serveless",
      "Vue.js",
    ],
  },
  {
    title: "Backend developer",
    company: "Imaginamos",
    region: "Colombia",
    description:
      "Desarrollo backend con JavaScript usando frameworks como Nest.js y Loopback bajo los estándares PCI-DSS para el manejo de información financiera. Construcción de SDKs para consumir servicios de terceros y traducir su información a los estándares internos. Apoyo en desarrollo móvil con React Native",
    technologies: [
      "JavaScript",
      "Loopback",
      "Nest.js",
      "Node.js",
      "PCI-DSS",
      "React Native",
    ],
  },
  {
    title: "Fullstack developer",
    company: "Shammah",
    region: "Colombia",
    description:
      "Desarrollo y soporte de sitios web en Wordpress y React.js y backend en JavaScript con Node.js. Construcción de bots en Dialogflow. Administración de servidores y despliegue de aplicaciones en AWS",
    technologies: [
      "AWS",
      "AWS EC2",
      "AWS S3",
      "React.js",
      "JavaScript",
      "Wordpress",
      "PHP",
      "Node.js",
      "Dialogflow",
    ],
  },
];

export type WorkItem = (typeof work)[number];

