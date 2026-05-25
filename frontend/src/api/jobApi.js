import API from "./axios";

export const getAllJobs =
async () => {

  const { data } =
    await API.get("/jobs");

  return data;
};