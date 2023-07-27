// 리덕스 state 초기 셋팅
const InitState = {
  array: [""],
};

const accessToken = (state = InitState, action) => {
  switch (action.type) {
    // case 문 입력 시 해당 state 문 변경 - 차후 다룰 예정
    // setTodoList, getTodoList 인 경우는 샘플 case이므로
    // 리덕스를 다루면서 CRUD 적용을 합니다.
    case "getAcessToken":
      return {
        accessToken: action.accessToken,
      };
    case "getTodoList":
      return { ...state };
    // case 문 입력 시 해당 state문 변경 끝
    default:
      return state;
  }
};

export default accessToken;
