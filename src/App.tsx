import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getSessionStorageData } from './lib';
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';
import Home from './pages/home';
import AddList from './pages/home/addList';
import DeleteList from './pages/home/listItems/deleteCard';
import EditCard from './pages/home/listItems/editCard';
import { signInSuccess } from './store/auth/actions';

function App() {
  const dispatch = useDispatch();
  const [appLoaded, setAppLoaded] = useState(false);
  useEffect(() => {
    const user = getSessionStorageData('currentUser');
    if (user) {
      dispatch(signInSuccess(user));
    }
    setAppLoaded(true);
  }, []);

  if (!appLoaded) {
    return null;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<div className="error404">404!!!</div>} />
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/main" element={<Home />} />
      </Routes>
      <AddList></AddList>
      <EditCard></EditCard>
      <DeleteList></DeleteList>
    </div>
  );
}

export default App;
