const DEFAULT_API_BASE_URL = "http://localhost:8000/api/v1";
const configuredBaseUrl =
  import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL;

export const BASE_URL = `${configuredBaseUrl.trim().replace(/\/+$/, "")}/`;
