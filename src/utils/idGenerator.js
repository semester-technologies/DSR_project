export const generateId = () => {
  return crypto.randomUUID().split("-")[0].toUpperCase();
};
