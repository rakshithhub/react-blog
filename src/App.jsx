import { useEffect, useState } from 'react'
import './App.css'
import authService from './appwriteServices/auth.js';
import { useDispatch } from 'react-redux';
import { login, logout } from './feature/authSlice.js';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/index.js';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => dispatch(login({userData})))
    .catch(() => dispatch(logout()))
    .finally(() => setLoading(false))
  }, [])

return !loading ? 
    (
      <>
        <div className='w-full min-h-screen bg-slate-400'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </>
    ) : null
    
}

export default App
