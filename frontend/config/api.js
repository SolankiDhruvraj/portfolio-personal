export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? "https://portfolio-personal-c9npxpjtm-abcds-projects-b34c203c.vercel.app" : "");

export const apiUrl = (path) => {
  const base = API_BASE_URL.replace(/\/+$/, "");
  return `${base}${path}`;
};


