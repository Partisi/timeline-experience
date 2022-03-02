import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom"
import HomePage from './scenes/HomePage';
import EcosystemPage from './scenes/EcosystemPage';

/////////////////////////
// Timeline Experience //
//        v1.0.0       //
/////////////////////////

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
      </Switch>
    </Router>
  );
}

export default App;
