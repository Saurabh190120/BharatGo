import api from "./api";

export const getListings = (params) => api.get("/listings/", { params });
export const getListingById = (id) => api.get(`/listings/${id}/`);
