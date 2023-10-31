import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import React, { createContext } from "react";
import useLocalStorageState from "./components/useLocalStorage/UseLocalStorage"; // Import the custom hook
import ConvertToPdf from "./components/convertToPdf/ConvertToPdf";

const InputValueContext = createContext();

function App() {
  // Use the custom hook to manage state and store it in local storage
 const [values, setValues] = useLocalStorageState("myAppState", {
     firstName: "",
     lastName: "",
     email: "",
     phoneNumber: "",
     linkedin: "",
     twitter: "",
     address: "",
     city: "",
     state: "",
     website: "",
   skills: [],
   interest: [],
   title: [],
   profileSummary: [],
   educationAdditionalInfo: [],
   ProjectAdditionalInfo: [],
   volunteerAdditionalInfo: [],
 });


  return (
    <InputValueContext.Provider value={{ values, setValues }}>
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
