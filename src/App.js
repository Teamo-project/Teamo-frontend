import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/js/home";
import Login from "./routes/js/login";
import Redirection from "./components/js/Redirection";
import Posting from "./routes/js/Board/posting";
import Mypage from "./routes/js/mypage";
import Mento from "./routes/js/mentomenti/mento";
import CreatePost from "./routes/js/mentomenti/createPost";
import ViewPost from "./routes/js/mentomenti/viewPost";
import EditPost from "./routes/js/mentomenti/editPost";

import BoardDetail from "./routes/js/Board/postingDetail";
import Write from "./routes/js/Board/postingWrite";
import Update from "./routes/js/Board/updateBoard";
import Modifycomment from "./routes/js/Board/updateCommentBoard";
import Program from "./routes/js/Program/program";

import SignUp from "./routes/js/signup";

import FirstGoogle from "./routes/js/firstGoogleLogin";

function App() {
  return (
    <div style={{ minWidth: "1440px", backgroundColor: "#FAFAFA" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/signup/Google/:userId"
            element={<FirstGoogle />}
          ></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/posting" element={<Posting />}></Route>
          <Route path="/posting/write" element={<Write />}></Route>
          <Route path="/posting/:postingId" element={<BoardDetail />}></Route>

          <Route path="/oauth2/redirect" element={<Redirection />}></Route>

          <Route path="/update/:postingId" element={<Update />}></Route>
          <Route
            path="/update/:postId/comment/:commentId"
            element={<Modifycomment />}
          ></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/postlist" element={<Mento />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/viewpost/:postingId" element={<ViewPost />}></Route>
          <Route path="/editpost" element={<EditPost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
