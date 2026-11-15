import Images from '../../assets/images/Images';
const placeholder = '/projects/project-placeholder.svg';


export const projects = [
  {
    title: 'Flow — Task Management',
    category: 'Web App',
    description: 'A focused task management experience for planning work, tracking progress, and keeping everyday priorities in view.',
    link: 'https://task-management-frontend-live.vercel.app',
    image: Images.task_management,
    tech: ['React', 'MERN', 'Dashboard'],
    featured: true
  },
  {
    title: 'Weatherboard',
    category: 'Web App',
    description: 'A clean weather dashboard that brings current conditions and useful forecast details into one easy-to-read view.',
    link: 'https://weatherboard-black.vercel.app',
    image: Images.weather_board,
    tech: ['React', 'Weather API', 'Dashboard'],
    featured: true
  },
  {
    title: 'Ecommerce Website',
    category: 'Web App',
    description: 'A full stack storefront with product browsing, a content management dashboard, and a modern shopping flow.',
    link: 'https://e-commerce-react-js-web.netlify.app/',
    image: Images.ecommerceWeb,
    tech: ['MERN', 'Redux', 'JWT']
  },
  {
    title: 'Todo App',
    category: 'Web App',
    description: 'A practical task manager with a responsive interface and Firebase powered data updates.',
    link: 'https://app-reactjs-todo.netlify.app/',
    image: Images.todoApp,
    tech: ['React', 'Firebase', 'Material UI']
  },
  {
    title: 'Quiz App',
    category: 'Web App',
    description: 'An interactive quiz experience with fetched questions, straightforward navigation, and a mobile friendly layout.',
    link: 'https://react-js-quizapp.netlify.app/',
    image: Images.quizApp,
    tech: ['React', 'REST API', 'Tailwind CSS']
  },
  {
    title: 'Strindberg Bilvård',
    category: 'Website',
    description: 'A responsive business website built with Next.js, supported by a custom admin dashboard and scalable UI components.',
    link: 'https://strindbergs-bilvard.vercel.app/',
    image: Images.strindberg_bilvard,
    tech: ['Next.js', 'MERN', 'Material UI']
  },
  {
    title: 'Travel Project',
    category: 'Website',
    description: 'A travel focused web experience designed to make destinations and trip inspiration feel inviting and easy to explore.',
    link: 'https://travel-project-assessment.vercel.app',
    image: Images.morroway,
    tech: ['Next.js', 'Responsive UI', 'GSAP'],
    featured: true
  },
  {
    title: 'RU Kids Club',
    category: 'Website',
    description: 'A bright, responsive learning experience for children, translated from a Figma design into a polished web interface.',
    link: 'https://ru-kids-learning.netlify.app/',
    image: Images.kids_learning,
    tech: ['HTML', 'Tailwind CSS']
  },
  {
    title: 'Learn Hub',
    category: 'Website',
    description: 'An education landing page with a clear content hierarchy, responsive layouts, and interactive sections.',
    link: 'https://hub-learning-web.netlify.app/',
    image: Images.learning_hub,
    tech: ['HTML', 'Tailwind CSS', 'Swiper']
  },
  {
    title: 'Tara & Shine',
    category: 'Website',
    description: 'A responsive React website built from a Figma concept with reusable components and a consistent visual system.',
    link: 'https://tara-web.netlify.app/',
    image: Images.taraShine,
    tech: ['React', 'Material UI', 'Swiper']
  },
  {
    title: 'WizardZ',
    category: 'Website',
    description: 'A lively marketing website with responsive layouts and motion details that add energy to the browsing experience.',
    link: 'https://react-wizard-gsap.vercel.app/',
    image: Images.wizard_z,
    tech: ['React', 'GSAP', 'Swiper']
  },
];