import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';
import Home from './pages/home';
import AddList from './pages/home/addList';
import DeleteList from './pages/home/listItems/deleteCard';
import EditCard from './pages/home/listItems/editCard';

function App() {
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
