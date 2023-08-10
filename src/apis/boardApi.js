import axios from "axios";

export const getBoardListApi = (payload) => {
  return axios.get(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/list?page=${payload}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const writeBoardApi = (board, token) => {
  return axios.post(
    "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting",
    board,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getBoardDetailApi = (payload) => {
  return axios.get(
    // v1/posting/:id이렇게 바꾸기
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload}`,
    {
      headers: { Authorization: `Bearer debug` },
    }
  );
};

export const deleteBoardApi = (id, token) => {
  return axios.delete(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const updateBoardApi = (payload, token) => {
  return axios.put(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${payload.id}`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const writeCommentApi = (payload, token) => {
  return axios.post(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/comment/${payload.postId}`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getCommentListApi = (postingId, page) => {
  return axios.get(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/comment/list?Id=${postingId}&page=${page}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const getCommentApi = (postId, id) => {
  return axios.get(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/comment/${postId}/${id}`,
    {
      headers: { Authorization: "Bearer debug" },
    }
  );
};

export const deleteCommentApi = (postId, commentId, token) => {
  return axios.delete(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/comment/${postId}/${commentId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const updateCommentApi = (payload, token) => {
  return axios.put(
    `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/comment/${payload.postId}/${payload.id}`,
    payload,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
