import axios from "axios";

const axiosTechloset = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default axiosTechloset;
