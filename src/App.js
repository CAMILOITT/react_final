import './App.css';
import Index from './page/index/Index';
import DescriptionProjects from './page/descriptionProjects/DescriptionProjects';
import { Route } from 'wouter';
import About from './component/about/About';
import Login from './page/login/Login';
import Register from './page/register/Register';
import Bulletin from './page/bulletin/Bulletin';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Index />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/description">
        <DescriptionProjects />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/bulletin">
        <Login>
          <Bulletin />
        </Login>
      </Route>
    </div>
  );
}

export default App;
