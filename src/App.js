import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import AuthDataProvider from './components/context/AuthDataContext';
import Home from './components/Pages/Home';
import Events from './components/Pages/Events';
import NavbarTop from './components/Layout/NavbarTop';
//import { AuthDataContext } from './components/context/AuthDataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//const PrivateRoute = ({ component, ...options }) => {

  //const { loggedIn } = useContext(AuthDataContext);
  //console.log('PrivateRoute: loggedIn', loggedIn)

  //const finalComponent = loggedIn ? component : Login;
  //return <Route {...options} component={finalComponent} />;
//};

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
        
        <NavbarTop/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Events" component={Events} />
      
    </BrowserRouter>
    </div>
  );
}

export default App;
