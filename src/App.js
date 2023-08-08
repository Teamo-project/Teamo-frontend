import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/home";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";
import Posting from "./routes/js/posting";
import Mypage from "./routes/js/mypage";
import Mento from "./routes/js/mento";
import CreatePost from "./routes/js/createPost";
import ViewPost from "./routes/js/viewPost";
import EditPost from "./routes/js/editPost";

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
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/postlist" element={<Mento />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/viewpost" element={<ViewPost />}></Route>
          <Route path="/editpost" element={<EditPost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
