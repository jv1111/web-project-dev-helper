import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Pages.WelcomePage />} />
          <Route path='/Mailer' element={<Pages.MailerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;