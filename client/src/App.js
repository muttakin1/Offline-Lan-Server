import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../src/pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}/>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
}
        

export default App;
