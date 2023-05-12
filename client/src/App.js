import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import useSessionChecker from "./hooks/useSessionChecker.js";
import Pages from "./pages";

function App() {
  
  const { isLoading, auth } = useSessionChecker();//check user session

  if (isLoading) return "";

  return (
    <div className="App">
      <Router>
        <Navigation auth={auth} />
        <Routes>
          <Route path='/' element={<Pages.WelcomePage />} />
          <Route path='/Mailer' element={<Pages.MailerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;