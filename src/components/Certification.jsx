import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Certification() {
   const { formState, dispatch } = useContext(InputValueContext);
     const [add, setAdd] = useState(false);
     const [showForm, setShowForm] = useState(false);
     const [arrow, setArrow] = useState(false);

     const onChange = (e) => {
       const { name, value } = e.target;
       dispatch({
         type: "SET_STATE",
         payload: {
           certification: {
             ...formState,
             ...formState.certification,
             [name]: value,
           },
         },
       });
     };


     const handleSubmit = (e) => {
       e.preventDefault();
       setAdd(false);
       setShowForm(showForm);
     };

   const handleClose = () => {
     setShowForm(false);
     setAdd(!add);
   };

   const handleArrow = () => {
     setArrow(!arrow);
     setShowForm(showForm);
     setAdd(!add);
   };
   const handleAdd = () => {
     setAdd(!add);
     setShowForm(!showForm);
  };
  
    const inputs = [
      {
        id: 1,
        name: "certcompanyName",
        type: "text",
        label: "Company Name",
        
      },
      {
        id: 2,
        name: "certProvider",
        type: "text",
        label: "Provider",
        
      },
      {
        id: 3,
        name: "certStartDate",
        type: "date",
        label: "Start Date",
        
      },

      {
        id: 4,
        name: "certEndDate",
        type: "date",
        label: "End Date",
        
      },
    ];

  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">Certifications</h2>
          <button onClick={handleArrow}>
            {arrow ? (
              <IoIosArrowDropup className="text-slate-800 text-2xl" />
            ) : (
              <IoIosArrowDropdown className="text-slate-800 text-2xl" />
            )}
          </button>
        </div>

        {add && (
          <div className="p-5 border border-gray-300">
            <button onClick={handleAdd} className="flex items-center gap-2">
              <AiOutlinePlusCircle className="text-xl" />
              <h3>Work Experience</h3>
            </button>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {inputs.map((item) => (
                <div key={item.id} className="flex flex-col w-full ">
                  <label
                    className="text-gray-500 font-semibold text-sm mb-1"
                    htmlFor="firstname"
                  >
                    {item.label}
                  </label>
                  <input
                    className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                    {...item}
                    value={formState[inputs.name]}
                    onChange={onChange}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end items-end gap-2">
              <button
                onClick={handleClose}
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

export default Certification;
