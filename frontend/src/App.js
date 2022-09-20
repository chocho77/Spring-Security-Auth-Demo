import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';


function App() {
  return (
  
      <Router>
        <Routes>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        </Routes>
      </Router>
    
  );
}

export default App;
