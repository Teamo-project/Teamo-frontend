import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/home";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";
import Posting from "./routes/js/posting";
import Mypage from "./routes/js/mypage";
import Mento from "./routes/js/mento";
import CreatePost from "./routes/js/createPost";
import ViewPost from "./routes/js/viewPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/posting" element={<Posting />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/postlist" element={<Mento />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/viewpost" element={<ViewPost />}></Route>

        <Route path="/oauth2/redirect" element={<Redirection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
