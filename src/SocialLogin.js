const Login = () => {
  const REST_API_KEY = "백엔드한테 달라하자1";
  const REDIRECT_URI = "백엔드한테 달라하자2";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <button type="button" onClick={loginHandler}>
      로그인 하기
    </button>
  );
};

const Redirection = () => {
  const code = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    //axios.post(`${back 달라하는 주소}KaKaoLogin${code}`).then((r) => {
    console.log(r.data);

    // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
    localStorage.setItem("name", r.data.user_name); // 일단 이름만 저장했다.

    navigate("/loginSuccess");
  });
};

return <div>로그인 중입니다.</div>;

export default Redirection;
