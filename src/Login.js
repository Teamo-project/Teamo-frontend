import axios from "axios";

const requestLogin = async (id, pw) => {
  return axios
    .post(
      `${serverURL}/login/`,
      {
        Ourid: id,
        Ourpw: pw,
      },
      { withCredentials: true }
    )
    .then((response) => {
      const { accessToken } = response.data;

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      // API request 할 때마다 Token 담아 보내도록 설정
    })
    .catch((error) => {
      console.log(error);
    });
};
