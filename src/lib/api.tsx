import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const request = async (config: any) => {
  try {
    const { data } = await api.request({ ...config });
    return data;
  } catch (error) {
    const { response }: any = error;
    console.log("[response]", error);
    if (response) {
      throw response.data;
    }

    throw error;
  }
};

const setUserId = (userId: string) => {
  api.defaults.headers.common["userId"] = userId;
};

const setToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const setIp = (ip: any) => {};

export { request, setUserId, setToken, setIp };
