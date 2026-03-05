import axios from "axios";

export const api = axios.create({
  baseURL: "https://mealsy.onrender.com/", 
});