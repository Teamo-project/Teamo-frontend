import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/home";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";
import Posting from "./routes/js/posting";

import BoardDetail from "./routes/js/posting_detail";
import Write from "./routes/js/posting_write";
import Update from "./routes/js/update_board";
import Modifycomment from "./routes/js/update_comment_board";
import Program from "./routes/js/support_program";

function App() {
  return (
    <div style={{ minWidth: "1440px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/posting" element={<Posting />}></Route>

          <Route path="/posting/write" element={<Write />}></Route>
          <Route path="/posting/:posting_id" element={<BoardDetail />}></Route>

          <Route path="/oauth2/redirect" element={<Redirection />}></Route>

          <Route path="/update/:posting_id" element={<Update />}></Route>
          <Route
            path="/update/:post_id/comment/:comment_id"
            element={<Modifycomment />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
