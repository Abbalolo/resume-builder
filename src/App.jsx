import React, { createContext, useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import ConvertToPdf from "./components/convertToPdf/ConvertToPdf";

// Create a context for managing input values
const InputValueContext = createContext();

// Define the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return action.payload;
    default:
      return state;
  }
};

function App() {
  // Use the custom hook to manage state and store it in local storage
  const [formState, dispatch] = useReducer(formReducer, {
    contact: {
      firstName: "",
      lastName: "",
      conEmail: "",
      conPhoneNumber: "",
      linkedin: "",
      twitter: "",
      address: "",
      conCity: "",
      state: "",
      website: "",
    },
    skills: [],
    interest: [],
    title: [],
    profileSummary: [],
    educationAdditionalInfo: [],
    ProjectAdditionalInfo: [],
    volunteerAdditionalInfo: [],
  });

  // Retrieve data from local storage when the component mounts
  useEffect(() => {
    const storedFormState = JSON.parse(localStorage.getItem("formState"));
    if (storedFormState) {
      dispatch({ type: "SET_STATE", payload: storedFormState });
    }
  }, []);

  // Save data to local storage whenever the formState changes
  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(formState));
  }, [formState]);

  return (
    <InputValueContext.Provider value={{ formState, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/resumeView" element={<ConvertToPdf />} />
        </Routes>
      </BrowserRouter>
    </InputValueContext.Provider>
  );
}

export { InputValueContext };
export default App;
