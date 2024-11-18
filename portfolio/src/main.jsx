import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPaage.jsx';
import AboutMe from './components/About Me/AboutMe.jsx';
import Projects from './components/Projects/Projects.jsx'
import ContactMe from './components/Contact me/ContactMe.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/about",
    element: <AboutMe/>,
   
  },
  {
    path: "/projects",
    element: <Projects/>,
   
  },
  {
    path: "/contact",
    element: <ContactMe/>,
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)