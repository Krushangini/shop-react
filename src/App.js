import './App.css';
import { Route,Routes} from 'react-router-dom';
import Login from './components/login';
import Front from './components/front';
import Sign from './components/sign';
import Home from './components/Home';
import Profile from './components/profile';
import LoanDetail from './components/LoanDeatils';
import Apply from './components/Apply';

function App() {
  return (
    <Routes>
     <Route path ="/Login"element={<Login/>}></Route>
     <Route path ="/" element={<Front/>}></Route>
     <Route path='/Sign'element={<Sign/>}></Route>
     <Route path='/Home'element={<Home/>}></Route>
     <Route path='/profile'element={<Profile/>}></Route>
     <Route path='/LoanDetail'element={<LoanDetail/>}></Route>
     <Route path='/apply-loan'element={<Apply/>}></Route>
    </Routes>
  );
}

export default App;