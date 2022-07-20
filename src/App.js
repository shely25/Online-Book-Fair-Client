import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import Header from './Components/Header';
import Users from './Users'

function App() {

  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost/get.php', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Login' element={<LogIn></LogIn>}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
