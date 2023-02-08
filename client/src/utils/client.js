import axios from "axios";

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://simplygive-production.up.railway.app"
      : "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
