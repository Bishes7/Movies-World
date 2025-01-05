import axios from "axios";
const apikEY = import.meta.env.VITE_APIKEY;

const apiEP = `https://www.omdbapi.com/?apikey=${apikEY}&`;

export const fetchFromApi = async (str) => {
  try {
    const url = apiEP + "t=" + str;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
