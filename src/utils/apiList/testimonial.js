import axios from "axios";

const { REACT_APP_BASE_URL_API } = process.env;
const baseUrl = REACT_APP_BASE_URL_API;

export const getTestimonial = () => axios.get(`${baseUrl}/testimonial`);
