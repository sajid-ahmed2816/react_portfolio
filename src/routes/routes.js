import Home from "../views/Home";
import About from "../views/About";
import Project from "../views/Project";
import Contact from "../views/Contact";

const routes = [
  {
    name: 'Home',
    path: "/",
    component: <Home />

  },
  {
    name: 'About',
    path: "/about",
    component: <About />
  },
  {
    name: 'Projects',
    path: "/projects",
    component: <Project />
  },
  {
    name: 'Contact',
    path: "/contact",
    component: <Contact />
  },
]

export default routes;