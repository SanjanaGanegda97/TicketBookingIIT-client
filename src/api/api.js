import axios from "axios";
export const baseURL = "http://localhost:3001";

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
