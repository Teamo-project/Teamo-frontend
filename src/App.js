import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/home";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";
import Posting from "./routes/js/posting";
import BoardDetail from "./routes/js/posting_detail";
import Write from "./routes/js/posting_write";
import Posting_free from "./routes/js/posting_free";
import Posting_question from "./routes/js/posting_question";
import Posting_information from "./routes/js/posting_information";
import Posting_job from "./routes/js/posting_job";
import Update from "./routes/js/update";
import Modifycomment from "./routes/js/update_comment";
import Program from "./routes/js/support_program";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/program" element={<Program />}></Route>

        <Route path="/posting/category=자유" element={<Posting_free />}></Route>
        <Route
          path="/posting/category=질문"
          element={<Posting_question />}
        ></Route>
        <Route
          path="/posting/category=정보"
          element={<Posting_information />}
        ></Route>
        <Route
          path="/posting/category=구인구직"
          element={<Posting_job />}
        ></Route>
        <Route path="/posting" element={<Posting />}></Route>
        <Route path="/posting/write" element={<Write />}></Route>
        <Route path="/posting/:id" element={<BoardDetail />}></Route>

        <Route path="/oauth2/redirect" element={<Redirection />}></Route>

        <Route path="/update/:id" element={<Update />}></Route>
        <Route
          path="/update/:id/comment/:id"
          element={<Modifycomment />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
