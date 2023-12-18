
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import AdminHome from './pages/AdminHome';
import Header from './components/Header';
import Footer from './components/Footer';
import Add from './pages/Add';
import Employees from './pages/Employees';
import Pnf from './pages/Pnf';
import View from './pages/View';
import Edit from './pages/Edit';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<AdminHome></AdminHome>}></Route>
        <Route path='/add-new' element={<Add></Add>}></Route>
        <Route path='/employees-mng' element={<Employees></Employees>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path="*" element={<Pnf></Pnf>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
