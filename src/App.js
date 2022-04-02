import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {useEffect, useState} from 'react';
import ButtonPlusOne from './components/ButtonPlusOne';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Home from './components/Home'
import Todo from './components/Todo'
import Toggle from './components/Togle';

function App() {
  const [count, setCount] = useState(false)

  return (
    <div>
       <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/todo">Todo</Link>
                </li>
                <li>
                  <Link to="/togle">Toggle</Link>
                </li>
              </ul>
            </nav>

              <Routes>
                <Route path="/about" element={<h1>ini page about</h1>} />
                <Route path="/users"  element={<h1>ini page users</h1>} />
                <Route path="/todo"  element={<Todo />} />
                <Route path="/togle"  element={<Toggle />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
    </div>
  );
}

export default App;
