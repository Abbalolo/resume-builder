import { IoIosArrowDropup } from "react-icons/io"; 
import { IoIosArrowDropdown } from "react-icons/io"; 
import React, { useContext, useEffect, useState } from 'react'
import { InputValueContext } from "../App";

function ContactInfo() {
  const [arrow, setArrow] = useState(false)
  
  const { formState, dispatch } = useContext(InputValueContext);

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "conEmail",
      type: "email",
      placeholder: "Email Address",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "conPhoneNumber",
      type: "phone",
      placeholder: "Phone Number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 5,
      name: "linkedin",
      type: "text",
      placeholder: "Linkedin",
      label: "Enter Linkedin",
      required: true,
    },
    {
      id: 6,
      name: "twitter",
      type: "text",
      placeholder: "Enter Twitter",
      label: "Twitter",
      required: true,
    },
    {
      id: 7,
      name: "address",
      type: "text",
      placeholder: "Enter Home Address",
      label: "Address",
      required: true,
    },
    {
      id: 8,
      name: "conCity",
      type: "text",
      placeholder: "Enter City",
      label: "City",
      required: true,
    },
    {
      id: 9,
      name: "state",

      type: "text",
      placeholder: "Enter State",
      label: "State",
      required: true,
    },
    {
      id: 10,
      name: "website",
      type: "text",
      placeholder: "Enter Website",
      label: "Website",
      required: true,
    },
  ];


  const handleArrow = () => {
    setArrow(!arrow)
  }
  const onChange = (e) => {
    // setValues({...values, [e.target.name]: e.target.value})
    dispatch({type: "SUMBIT__SUCCESS" , payload: e.target.value , field: e.target.name})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
  }

   useEffect(() => {
     console.log(formState);
   }, [formState]); 
 


  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">
            Contact Information
          </h2>
          <button onClick={handleArrow}>
            {arrow ? (
              <IoIosArrowDropup className="text-slate-800 text-2xl" />
            ) : (
              <IoIosArrowDropdown className="text-slate-800 text-2xl" />
            )}
          </button>
        </div>
        {arrow && (
          <form onSubmit={handleSubmit}>
            <div className="border border-gray-300 border-b-0 p-5 grid grid-cols-2 gap-5">
              {inputs.map((input) => (
                <div key={input.id} className="flex flex-col">
                  <label
                    className="text-gray-500 font-semibold text-sm mb-1"
                    htmlFor="firstname"
                  >
                    {input.label}
                  </label>
                  <input
                    className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                    {...input}
                    value={formState[input.name]}
                    onChange={onChange}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end items-end gap-2 px-5 pb-3 border border-gray-300 border-t-0">
              <button
                onClick={handleArrow}
                className="border border-gray-300 p-1 outline-none rounded-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black px-4 p-1 text-white outline-none rounded-sm"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactInfo