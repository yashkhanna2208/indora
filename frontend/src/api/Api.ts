import axios from "axios";

const request = (method: string, url: string, body = null) => {
  axios.create({ url, method, baseURL: BASE_URL, data: body });
};

export default class API {
  login(data: any) {
    request("POST", U_LOGIN, data);
  }

  signUp(data: any) {
    request("POST", U_REGISTER, data);
  }
}
