import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";
function Projects() {
 const { values, setValues } = useContext(InputValueContext);
 const [add, setAdd] = useState(false);
 const [showForm, setShowForm] = useState(false);
 const [arrow, setArrow] = useState(false);

 const onChange = (e) => {
   setValues({ ...values, [e.target.name]: e.target.value });
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
          name: "Project Name",
          type: "text",
          label: "Project Name",
          required: true,
        },
        {
          id: 2,
          name: "Pro Organisation",
          type: "text",
          label: "Oganisation",
          required: true,
        },
        {
          id: 3,
          name: "Pro Start Date",
          type: "date",
          label: "Start Date",
          required: true,
        },
        {
          id: 4,
          name: "Pro End Date",
          type: "date",
          label: "End Date",
          required: true,
        },
        {
          id: 5,
          name: "Pro Additional Information",
          type: "text",
          label: "Additional Information",
        },
      ];
  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">Projects</h2>
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
              <h3>Add Projects</h3>
            </button>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {inputs.slice(0, 4) &&
                inputs.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                  
                    className="flex flex-col w-full "
                  >
                    <label
                      className="text-gray-500 font-semibold text-sm mb-1"
                      htmlFor="firstname"
                    >
                      {item.label}
                    </label>
                    <input
                      className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                      {...item}
                      value={values[item.name]}
                      onChange={onChange}
                    />
                  </div>
                ))}
            </div>

            <div className="w-full">
              {inputs.slice(4) &&
                inputs.slice(4).map((item) => (
                  <div key={item.id} className="flex flex-col w-full">
                    <label
                      className="text-gray-500 font-semibold text-sm mb-1"
                      htmlFor="firstname"
                    >
                      {item.label}
                    </label>
                    <textarea
                      className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                      name="ProjectAdditionalInfo"
                      value={values[item.name]}
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

export default Projects;
