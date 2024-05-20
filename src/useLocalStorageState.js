import { useState, useEffect } from "react";

/**
 * Custom hook that manages state using localStorage.
 *
 * @param {any} initialState - The initial state value.
 * @param {string} key - The key used to store the state in localStorage.
 * @return {Array} An array containing the current state value and a function to update it.
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
