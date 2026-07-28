import api from "../api/axios";

export const generateContent = async (payload) => {
  const response = await api.post("/ai/generate", payload);
  return response.data;
};
