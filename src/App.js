import logo from './components/images/logo192.png';
import './App.css';
import { Link, Routes, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
function App() {

  return (
    <Router>
      <div className='contain'>
        <div className='side-panel'>
          <Link to=''>
            <div className='brand-logo-container'>

              <img className="head-logo" src={logo} alt='Logo' />
            </div>
          </Link>

          <NavLink to='' className="inactive">

            <p>Home</p>
          </NavLink>
          
            <NavLink to='/products' className="inactive">

              <p>Products</p>
            </NavLink>




        </div>
        <div className='main-head'>
          <div className='Log-Sign'>
            <Link to="/login" className='margins-head'><button className='login'>LOG IN</button></Link>
            <Link to="/signup" className='margins-head'><button className='sign-up'>SIGN UP</button></Link>
          </div>
        </div>
        <div className='outlet'>

          <Routes>
            <Route path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='products' element={<Products/>}/>
          </Routes>

        </div>
      </div>

    </Router>

  );
}

export default App;
