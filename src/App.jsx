import React, { createContext, useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Register from "./pages/auth/register";
import { PdfConverterProvider } from "./components/pdfContex/PdfApi";

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
      cfirstName: "",
      clastName: "",
      conEmail: "",
      conPhoneNumber: "",
      clinkedin: "",
      ctwitter: "",
      caddress: "",
      conCity: "",
      cstate: "",
      cwebsite: "",
    },
    certification: {
      certcompanyName: "",
      certProvider: "",
      certEndDate: "",
      certStartDate: ""
    },
    award: {
      AwardorScholarship: "",
      adateStart: "",
      adataEnd: "",
    },
    skills: [],
    interest: [],
    title: [],
    profileSummary: [],
    experience: {
      excompanyName: "",
      exposition: "",
      extype: "",
      excompanyDescription: "",
      exlocation: "",
      expStartDate: "",
      expEndDate: "",
    },
    education: {
      educationInstitution: "",
      eduLocation: "",
      edugpa: "",
      eduStartDate: "",
      eduEndDate: "",
      edudegree: "",
      edufieldofStudy: "",
      educationAdditionalInfo: [],
    },
    project: {
      projectName: "",
      proorganisation: "",
      prodateStart: "",
      prodataEnd: "",
      proAdditionalInformation: [],
    },
    publication: {
      public: "",
      pdateStart: "",
      pdataEnd: "",
    },
    volunteer: {
      vorganisation: "",
      vinvolvement: "",
      vstate: "",
      vcity: "",
      vdateStart: "",
      vdataEnd: "",
      vvolAdditionalInformation: [],
    },
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
      <PdfConverterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/myresume" element={<Resume />} />
            <Route path="/" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </PdfConverterProvider>
    </InputValueContext.Provider>
  );
}

export { InputValueContext };
export default App;
