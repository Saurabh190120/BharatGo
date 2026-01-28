import axios from "axios";

export const getProviderDashboard = (providerId) => {
  return axios.get(
    `http://127.0.0.1:8000/api/provider/dashboard/${providerId}/`
  );
};
