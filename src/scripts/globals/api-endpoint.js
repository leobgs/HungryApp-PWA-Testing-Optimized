/* eslint-disable linebreak-style */
// eslint-disable-next-line quotes
import CONFIG from "./config";

const API_ENDPOINT = {
  RESTO_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
