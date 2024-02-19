import React, { useContext, useEffect, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

function ProfSummary() {
  const { formState, dispatch } = useContext(InputValueContext);
  const [input, setInput] = useState("");
  const [add, setAdd] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [arrow, setArrow] = useState(false);

  
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_STATE",
      payload: {
        ...formState,
        profileSummary: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAdd(false);
    setShowForm(false);
  };




  const handleClose = () => {
    setShowForm(!showForm);
    setArrow(!arrow);
    setAdd(false);
  };

  const handleAdd = () => {
    setArrow(!arrow);
    setAdd(!add);
    setShowForm(true);
  };

  useEffect(() => {
  console.log(formState)
})

  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">
            Professional Summaries
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
            <button onClick={handleAdd} className="flex items-center gap-2">
              <AiOutlinePlusCircle className="text-xl" />
              <h3>Add Profile Summary</h3>
            </button>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5"
          >
            <div className="flex flex-col">
              <label
                className="text-gray-500 font-semibold text-sm mb-1"
                htmlFor="profileSummary"
              >
                Summary
              </label>
              <textarea
                className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border focus:border-black placeholder:text-sm"
                name="profileSummary"
                 value={formState.profileSummary} 
                onChange={onChange}
                cols="20"
                rows="8"
              ></textarea>
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

export default ProfSummary;
