import './App.css';
import Index from './page/index/Index';
import DescriptionProjects from './page/descriptionProjects/DescriptionProjects';
import { Route } from 'wouter';
import About from './component/about/About';

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
      <Route path="/login"></Route>
      <Route path="/register"></Route>
      <Route path="/bulletin"></Route>
    </div>
  );
}

export default App;
