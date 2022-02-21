const DEBOUNCE_INTERVAL = 350;

export const debounce = (callback, wait = DEBOUNCE_INTERVAL) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), wait);
  };
};
