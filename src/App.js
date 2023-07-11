import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/Home";
import Login from "./routes/js/login.js";
import SignUp from "./routes/js/SignUp.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
