import { Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from './components/logIn';
import Register from './components/register';
import { Link } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages.js/Home";
import PrivateRoute from './privateRoute'
import { createContext, useState } from "react";
import ProtectedRoute from "./protectedRoute";



export const AuthContext = createContext()


function App() {


  const [isAuth, setIsAuth] = useState(false)
  const [userInfo, setUserInfo] = useState({})


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, userInfo, setUserInfo }}>
      <div className="App">

        <NavBar />
        <div style={{ display: 'flex', flexDirection: "row", fontFamily: 'serif', fontSize: '1.25rem' }}>
          <div style={{ paddingRight: '2rem' }}>
            <Link to='/'>
              logIn

            </Link>
          </div>
          <div style={{ paddingRight: '2rem' }}>
            <Link to='/register'>

              register
            </Link>
          </div>
          <div>
            <Link to='/home'>
              home
            </Link>
          </div>

        </div>
        <div className="route">
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
