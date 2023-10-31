// Create a new file, e.g., useLocalStorage.js
import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultValue) {
  // Initialize state from local storage or use the default value
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
