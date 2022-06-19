
import './App.css';
import MainRoutes from './Routes/mainRoutes';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
import Payment from './Components/Payment/Payment';
import { useAuth } from './firebase/firebase';

function App() {
  const selector=useSelector((state)=>state.products.login)
  const selector1=useSelector((state)=>state.products.signup)
  console.log(selector1);
  const currentUser=useAuth()
  return (
    <div className="App">
      {
        !currentUser &&  !selector && 
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
