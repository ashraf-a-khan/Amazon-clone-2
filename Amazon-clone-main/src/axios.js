import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-7c513.cloudfunctions.net/api",

  //"http://localhost:5001/challenge-7c513/us-central1/api", //THE API (cloud function) URL
});

export default instance;
