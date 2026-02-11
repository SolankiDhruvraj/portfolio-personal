export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const apiUrl = (path) => {
  const base = API_BASE_URL.replace(/\/+$/, "");
  return `${base}${path}`;
};


