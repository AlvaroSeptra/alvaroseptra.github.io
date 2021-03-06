import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Products from './pages/Products'
import About from './pages/About'


function App() {
  return (
    
    <>
       
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Team' component={Team}/>
            <Route path='/Products' component={Products}/>
            <Route path='/About' component={About}/>
          </Switch>
        </Router>
      
    </>
  );
}

export default App;
