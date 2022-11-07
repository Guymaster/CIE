import logo from './logo.svg';
import './assets/fonts/ubuntu.css';
import './App.css';
import { useState } from 'react';
import { Route, Router, BrowserRouter, Routes, Link } from 'react-router-dom';
import Header from './pages/components/Header';
import DashPage from './pages/dash/DashPage';
import ForumPage from './pages/forum/ForumPage';
import RegisterPage from './pages/auth/RegisterPage';
import './assets/fonts/ubuntu.css';
import SignInPage from './pages/auth/SignInPage';
import { useEffect, createContext } from 'react';
import AcceuilDashOnglet from './pages/dash/onglets/AcceuilDashOnglet';
import RessourcesOnglet from './pages/dash/onglets/RessourcesOnglet';
import ProposOnglet from './pages/dash/onglets/ProposIOnglet';
import ProfilOnglet from './pages/dash/onglets/ProfilOnglet';
import QuestionsOnglet from './pages/forum/onglets/QuestionsOnglet';
import TopicView from './pages/forum/onglets/TopicView';
import AcceuilForumOnglet from './pages/forum/onglets/AcceuilForumOnglet';
import { desQueArrive } from './firebase/operations';
import { UserContext } from './pages/components/contextRegistry';

function App() {
  const [user, setUser] = useState({});
  useEffect(()=>{
    desQueArrive((userObj)=>{setUser(userObj);});
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<DashPage/>}>
                <Route path='acceuil' default element={<AcceuilDashOnglet/>}/>
                <Route path='' default element={<AcceuilDashOnglet/>}/>
                <Route path='ressources' element={<RessourcesOnglet/>}/>
                <Route path='propos' element={<ProposOnglet/>}/>
                <Route path='profil' element={<ProfilOnglet/>}/>
              </Route>
              <Route path='forum' element={<ForumPage/>}>
                <Route path='' element={<AcceuilForumOnglet/>}/>
                <Route path='mestopics' element={<QuestionsOnglet/>}/>
                <Route path='topic/:questionID' element={<TopicView/>}/>
              </Route>
              <Route path='inscription' element={<RegisterPage/>}/>
              <Route path='connexion' element={<SignInPage/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
