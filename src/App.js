import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes as Switch,
  Navigate
} from "react-router-dom"
import HomePage from './scenes/HomePage';
import EcosystemPage from './scenes/EcosystemPage';

/**
 * App Flow
 * - At start, can select timezone
 * - On selection, the map changes to resemble the earth at that time
 * - The user will be able to move a cursor around and explore these different hot spots
 * - On each hot spot, can see the different creatures that appear in an 'ecosystem' of sorts
 * - Ecosystem will have the animal pictures vibing and user can click on them to view more info below
 */

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
