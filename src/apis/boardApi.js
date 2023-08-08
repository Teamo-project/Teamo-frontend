import axios from "axios";

export const getBoardListApi = () => {
  return axios.get(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/list`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const writeBoardApi = (board) => {
  return axios.post(
    "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting",
    board,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const getBoardDetailApi = (payload) => {
  return axios.get(
    // v1/posting/detail/:id이렇게 바꾸기
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/detail/${payload}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const deleteBoardApi = (payload) => {
  return axios.delete(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const updateBoardApi = (payload) => {
  return axios.put(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload.posting_id}`,
    payload,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const writeCommentApi = (payload) => {
  return axios.post(
    `https://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload.post_id}/comment`,
    payload,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const getCommentListApi = (payload) => {
  return axios.get(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload}/comment`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const getCommentApi = (posting_id, comment_id) => {
  return axios.get(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment/${comment_id}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const deleteCommentApi = (post_id, comment_id) => {
  return axios.delete(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${post_id}/comment/${comment_id}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const updateCommentApi = (payload) => {
  return axios.put(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload.post_id}/comment/${payload.comment_id}`,
    payload,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};
