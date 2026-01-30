import axios from "axios";

export const getProviderDashboard = (providerId) => {
  return axios.get(
    `http://127.0.0.1:8000/api/provider/dashboard/${providerId}/`
  );
};
export const createListing = (data) => {
  return axios.post(
    "http://127.0.0.1:8000/api/listings/create/",
    data
  );
};

import axios from "axios";

export const createBusRoute = (data) => {
  return axios.post(
    "http://127.0.0.1:8000/api/listings/bus/create/",
    data
  );
};
