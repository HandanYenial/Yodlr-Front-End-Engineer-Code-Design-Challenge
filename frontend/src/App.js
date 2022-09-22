import React from 'react';
import UserRegister from './UserRegister';
import AdminPage from './adminPage';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/users" component={AdminPage}/>
          <Route exact path="/users/:id" component={UserProfile}/>
          <Route exact path="/" component={UserRegister}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
