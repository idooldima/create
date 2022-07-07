import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { getSessionStorageData, ProtectedRoute } from './lib';
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';
import Home from './pages/home';
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
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
