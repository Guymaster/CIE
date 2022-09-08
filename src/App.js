import logo from './logo.svg';
import './assets/fonts/ubuntu.css';
import './App.css';
import { Route, Router, BrowserRouter, Routes, Link } from 'react-router-dom';
import Header from './pages/components/Header';
import DashPage from './pages/dash/DashPage';
import ForumPage from './pages/forum/ForumPage';
import RegisterPage from './pages/auth/RegisterPage';
import './assets/fonts/ubuntu.css';
import SignInPage from './pages/auth/SignInPage';
import { useEffect } from 'react';
import AcceuilDashOnglet from './pages/dash/onglets/AcceuilDashOnglet';
import RessourcesOnglet from './pages/dash/onglets/RessourcesOnglet';
import ProposOnglet from './pages/dash/onglets/ProposIOnglet';
import ProfilOnglet from './pages/dash/onglets/ProfilOnglet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<DashPage/>}>
              <Route path='inscription' element={<RegisterPage/>}/>
              <Route path='connexion' element={<SignInPage/>}/>
              <Route path='acceuil' element={<AcceuilDashOnglet/>}/>
              <Route path='ressources' element={<RessourcesOnglet/>}/>
              <Route path='propos' element={<ProposOnglet/>}/>
              <Route path='profil' element={<ProfilOnglet/>}/>
            </Route>
            <Route path='forum' element={<ForumPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
