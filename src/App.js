import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/home";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";
import Posting from "./routes/js/posting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/posting" element={<Posting />}></Route>
        <Route path="/oauth2/redirect" element={<Redirection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
