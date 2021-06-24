
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/Login';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import EventList from './components/EventList';
import EventPage from './components/EventPage';
import AddEventForm from './components/AddEventForm';
import EditEventForm from './components/EditEventForm';

function App() {
      return (
            <div className="App">
                  <Navigation/>
                  <Switch>
                        <Route path='/event-list/'>
                              <EventList />
                        </Route>
                        <Route path='/signup/'>
                              <SignUp />
                        </Route>
                        <Route path='/event/:id'>
                              <EventPage />
                        </Route>
                        <Route path='/add-event/'>
                              <AddEventForm />
                        </Route>
                        <Route path='/edit-event/:id'>
                              <EditEventForm />
                        </Route>
                        <Route path="/">
                              <Login />
                        </Route>
                  </Switch>
                  <Footer/>
            </div>
      );
}

export default App;
