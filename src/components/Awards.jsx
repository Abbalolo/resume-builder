import { IoIosArrowDropup } from "react-icons/io"; 
import { IoIosArrowDropdown } from "react-icons/io"; 
import React, { useContext, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Awards() {
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
          name: "Award or Scholarship",
          type: "text",
          label: "Award or Scholarship",
          required: true,
        },
        {
          id: 2,
          name: "Awa Start Date",
          type: "date",
          label: "Start Date",
          required: true,
        },

        {
          id: 3,
          name: "Awa End Date",
          type: "date",
          label: "End Date",
          required: true,
        },
      ];
  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">
            Awards & Scholarships
          </h2>
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
              <h3>Awards & Scholarships</h3>
            </button>
          </div>
        )}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5"
          >
            <div className="">
              {inputs.slice(0, 1) &&
                inputs.slice(0, 1).map((item) => (
                  <div key={item.id} className="flex flex-col w-full">
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
            <div className="grid grid-cols-2 gap-4">
              {inputs.slice(1) &&
                inputs.slice(1).map((item) => (
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
                      value={values[item.name]}
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

export default Awards

