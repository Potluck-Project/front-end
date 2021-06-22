
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/Login';
import Footer from './components/Footer';

import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
     
      
      <Route path= "/">
            <Navigation/>
      </Route>
  
      <Route path= "/">
            <Login />
      </Route>
      
      <Route path= "/">
            <Footer/>
      </Route>
      
    </div>
  );
}

export default App;
