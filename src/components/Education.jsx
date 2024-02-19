import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Education() {
     const { formState, dispatch } = useContext(InputValueContext);
     const [add, setAdd] = useState(false);
     const [showForm, setShowForm] = useState(false);
     const [arrow, setArrow] = useState(false);

    const onChange = (e) => {
      const { name, value } = e.target;
      dispatch({
        type: "SET_STATE",
        payload: {
          ...formState,
          education: {
            ...formState.education,
            [name]: value,
          },
        }
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setAdd(false);
      setShowForm(showForm);
    };

      
    const handleClose = () => {
      setShowForm(!showForm);
      setArrow(!arrow);
      setAdd(add);
    };

     const handleAdd = () => {
       setArrow(!arrow);
       setAdd(!add);
     };
     const handleform = () => {
       setShowForm(!showForm);
       setAdd(!add);
     };

     const inputs = [
       {
         id: 1,
         name: "educationInstitution",
         type: "text",
         label: "Education Institution",
         required: true,
       },

       {
         id: 2,
         name: "eduLocation",
         type: "text",
         label: "Location",
         required: true,
       },
       {
         id: 3,
         name: "edugpa",
         type: "text",
         label: "GPA",
         required: true,
       },
       {
         id: 4,
         name: "edudegree",
         type: "text",
         label: "Degree",
         required: true,
       },
       {
         id: 5,
         name: "edufieldofStudy",
         type: "text",
         label: "Field of Study",
         required: true,
       },
       {
         id: 6,
         name: "eduStartDate",
         type: "date",
         label: "Start Date",
         required: true,
       },
       {
         id: 7,
         name: "eduEndDate",
         type: "date",
         label: "End Date",
         required: true,
       },
       {
         id: 8,
         name: "eduAdditionalInformation",
         type: "text",
         label: "Additional Information",
       },
     ];

  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">Education</h2>
          <button onClick={handleAdd}>
            {arrow ? (
              <IoIosArrowDropup className="text-slate-800 text-2xl" />
            ) : (
              <IoIosArrowDropdown className="text-slate-800 text-2xl" />
            )}
          </button>
        </div>

        {add && (
          <div className="p-5 border border-gray-300">
            <button onClick={handleform} className="flex items-center gap-2">
              <AiOutlinePlusCircle className="text-xl" />
              <h3>Add Education</h3>
            </button>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5"
          >
            {inputs.slice(0, 1) &&
              inputs.slice(0, 1).map((input) => (
                <div key={input.id} className="flex flex-col">
                  <label
                    className="text-gray-500 font-semibold text-sm mb-1"
                    htmlFor="firstname"
                  >
                    {input.label}
                  </label>
                  <input
                    className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 foxus:border focus:border-black placeholder:text-sm"
                    {...input}
                    value={formState[inputs.name]}
                    onChange={onChange}
                  />
                </div>
              ))}

            <div className="grid grid-cols-2 gap-4">
              {inputs.slice(1, 7) &&
                inputs.slice(1, 7).map((item) => (
                  <div key={item.id} className="flex flex-col w-full ">
                    <label
                      className="text-gray-500 font-semibold text-sm mb-1"
                      htmlFor="firstname"
                    >
                      {item.label}
                    </label>
                    <input
                      className="border border-gray-300 placeholder:text-gray-400 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-xm"
                      {...item}
                      value={formState[inputs.name]}
                      onChange={onChange}
                    />
                  </div>
                ))}
            </div>
            <div className="">
              {inputs.slice(7, 8) &&
                inputs.slice(7, 8).map((item) => (
                  <div key={item.id} className="flex flex-col w-full ">
                    <label
                      className="text-gray-500 font-semibold text-sm mb-1"
                      htmlFor="firstname"
                    >
                      {item.label}
                    </label>
                    <textarea
                      className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                      name="educationAdditionalInfo"
                      value={formState[inputs.name]}
                      onChange={onChange}
                      cols="20"
                      rows="8"
                    ></textarea>
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

export default Education;
