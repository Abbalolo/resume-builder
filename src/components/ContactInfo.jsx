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
     
      label: "First Name",
      
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
     
      label: "Last Name",
      
    },
    {
      id: 3,
      name: "conEmail",
      type: "email",
     
      label: "Email",
      
    },
    {
      id: 4,
      name: "conPhoneNumber",
      type: "phone",
  
      label: "Phone Number",
      
    },
    {
      id: 5,
      name: "linkedin",
      type: "text",
   
      label: "Enter Linkedin",
      
    },
    {
      id: 6,
      name: "twitter",
      type: "text",
   
      label: "Twitter",
      
    },
    {
      id: 7,
      name: "address",
      type: "text",
 
      label: "Address",
      
    },
    {
      id: 8,
      name: "conCity",
      type: "text",
      
      label: "City",
      
    },
    {
      id: 9,
      name: "state",

      type: "text",
    
      label: "State",
      
    },
    {
      id: 10,
      name: "website",
      type: "text",
  
      label: "Website",
      
    },
  ];


  const handleArrow = () => {
    setArrow(!arrow)
  }
 
   const onChange = (e) => {
     const { name, value } = e.target;
     dispatch({
       type: "SET_STATE",
       payload: {
         ...formState,
         contact: { ...formState.contact, [name]: value },
       },
     });
   };


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