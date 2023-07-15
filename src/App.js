import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/Home";
import Login from "./routes/js/login";
import Main from "./routes/js/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
