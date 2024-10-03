// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/profile/:username",
      element: <><Navbar /><Profile /></>
    },
  ]);

  return (
    <>

      <RouterProvider router={router} />
      <div className="container my-3">
        {/* <Textform heading="Enter text to analyse" /> */}
        {/* <About /> */}
      </div>
    </>
 );
}

export default App;
