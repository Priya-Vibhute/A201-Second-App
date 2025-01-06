import logo from './logo.svg';
import './App.css';
import {Link,BrowserRouter,createBrowserRouter,RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Staff from './components/Staff';
import NotFound from './components/NotFound';
import GithubCard from './components/GithubCard';


const router=createBrowserRouter([
  {
    path:"/",
    element:<>
       <Navbar/>
       <Footer/>
    </>
  },
  {
    path:"/about",
    element:<>
       <Navbar/>
       <About/>
       <Footer/>
    </>,
    children:[
      {
        path:"courses",
        element:<Courses/>
      },{
        path:"staff",
        element:<Staff/>
      }
    ]
  },

  {
    path:"/contact/:id",
    element:<>
       <Navbar/>
       <Contact/>
       <Footer/>
    </>

  },
  {
    path:"*",
    element:<NotFound/>
  },
  {
    path:"/github-card",
    element:<GithubCard/>
  }
  

])

function App() {
  return (
    <div>

<RouterProvider router={router} />

    </div>
  );
}

export default App;
