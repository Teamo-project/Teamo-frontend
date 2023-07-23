import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/oauth2/redirect" element={<Redirection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
