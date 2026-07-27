import api from "../api/axios";

export const generateContent = async (payload) => {
  try {
    const response = await api.post("/ai/generate", payload);
    console.log(response);

    return response.data;
  } catch (error) {
    throw error;
  }
};