import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Experience() {
 const { formState, dispatch } = useContext(InputValueContext);
 const [add, setAdd] = useState(false);
 const [showForm, setShowForm] = useState(false);
 const [arrow, setArrow] = useState(false);

  const onChange = (e) => {
    // setValues({...values, [e.target.name]: e.target.value})
    dispatch({
      type: "SUMBIT__SUCCESS",
      payload: e.target.value,
      field: e.target.name,
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
        name: "companyName",
        type: "text",
        label: "Company Name",
        required: true,
      },
      {
        id: 2,
        name: "companyDescription",
        type: "text",
        label: "Company Description",
        required: true,
      },
      {
        id: 3,
        name: "position",
        type: "text",
        label: "Position",
        required: true,
      },
      {
        id: 4,
        name: "expLocation",
        type: "text",
        label: "Location",
        required: true,
      },
      {
        id: 5,
        name: "type",
        type: "text",
        label: "Type",
        required: true,
        typeList: ["Full-time", "Part-time", "Internship", "Teaching", "Board"],
      },
      {
        id: 6,
        name: "expStartDate",
        type: "date",
        label: "Start Date",
        required: true,
      },
      {
        id: 7,
        name: "expEndDate",
        type: "date",
        label: "End Date",
        required: true,
      },
    ];

  
  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">Work Experience</h2>
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
              <h3>Add Experience</h3>
            </button>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5"
          >
            {inputs.slice(0, 3) &&
              inputs.slice(0, 3).map((input) => (
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

            <div className="flex items-center gap-4">
              {inputs.slice(3, 5) &&
                inputs.slice(3, 5).map((item) => (
                  <div className="flex flex-col w-full ">
                    <label
                      className="text-gray-500 font-semibold text-sm mb-1"
                      htmlFor="firstname"
                    >
                      {item.label}
                    </label>
                    <input
                      className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                      {...item}
                      value={formState[item.name]}
                      onChange={onChange}
                    />
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-4">
              {inputs.slice(5) &&
                inputs.slice(5).map((item) => (
                  <div className="flex flex-col w-full ">
                    <label
                      className="text-gray-500 font-semibold text-sm mb-1"
                      htmlFor="firstname"
                    >
                      {item.label}
                    </label>
                    <input
                      className="border border-gray-300 placeholder:text-gray-400 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-xm"
                      {...item}
                      value={formState[item.name]}
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

export default Experience;
