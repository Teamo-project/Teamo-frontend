import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
// const setToken = () => {};
// const reducer = (state = []) => {
//   return state;
// };

const store = createStore(reducer);

// store.subscribe();
export default store;
