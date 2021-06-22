
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/Login';
import Footer from './components/Footer';

import EventList from './components/EventList';

function App() {
      return (
            <div className="App">
                  <Navigation/>
                  <Switch>
                        <Route path='/event-list/'>
                              <EventList />
                        </Route>
                        <Route path= "/">
                              <Login />
                        </Route>

                  </Switch>
                  <Footer/>
            </div>
      );
}

export default App;
