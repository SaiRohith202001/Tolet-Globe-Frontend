import { API } from "./axios";

const getMessage = (data, fallback) => {
  if (typeof data === "string") return data;
  if (data && typeof data.message === "string") return data.message;
  return fallback;
};

export const submitContactEnquiry = async (formData) => {
  const payload = {
    ...formData,
    message: formData.msg,
  };

  const response = await API.post("/contact/submit-data", payload);

  return {
    data: response.data,
    message: getMessage(response.data, "Enquiry submitted successfully."),
  };
};

export const getContactErrorMessage = (error) => {
  return getMessage(
    error?.response?.data,
    "Something went wrong. Please try again later."
  );
};
