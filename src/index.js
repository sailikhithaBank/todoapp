import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList'
import Login from './Login'
import Logout from './Logout'



function App(){
  return(
    <>
    <Router>
     <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul> 
      <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
    </Router>
    <TodoList />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);;


