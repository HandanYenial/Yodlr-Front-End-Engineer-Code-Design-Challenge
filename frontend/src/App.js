import React from 'react';
import UserRegister from './UserRegister';
import AdminPage from './adminPage';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminPage}/>
          <AdminPage/>
          <Route/>

          <Route path="/user/:id" component={UserProfile}/>
          <UserProfile/>
          <Route/>

          <Route path="/" component={UserRegister}/>
          <UserRegister/>
          <Route/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
