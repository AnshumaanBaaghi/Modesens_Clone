
import './App.css';
import MainRoutes from './Routes/mainRoutes';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  const selector=useSelector((state)=>state.products.login)
  const selector1=useSelector((state)=>state.products.signup)
  console.log(selector1);
  return (
    <div className="App">
      {/* { !selector1 && <Signup/> } */}
      { !selector && 
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes> 
      }
      <MainRoutes/>
    </div>
  );
}

export default App;
