import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ProfSummary() {
const { values, setValues } = useContext(InputValueContext);
const [input, setInput] = useState("");
const [add, setAdd] = useState(false);
const [showForm, setShowForm] = useState(false);
const [arrow, setArrow] = useState(false);
const [tagSummary, setTagSummary] = useState([]);

const onChange = (e) => {
  // setValues({ ...values, [e.target.name]: e.target.value });
  setInput(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();

  const summaryInput = input;

  if (typeof summaryInput === "string") {
    const newSummary = summaryInput
      .trim()
      .split(",")
      .map((interest) => interest.trim());

    setTagSummary([...tagSummary, ...newSummary]);
    console.log(input);
    console.log(tagSummary);
    setValues({ ...values, profileSummary: tagSummary });
  }

  setInput("");
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

  
  useEffect(() => {
    const storeInterest = localStorage.getItem("myAppState");
    if (storeInterest) {
      setValues(JSON.parse(storeInterest));
    }
  }, []);


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
            <button onClick={handleform} className="flex items-center gap-2">
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
                htmlFor="title"
              >
                Summary
              </label>
              <textarea
                className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                name="profleSummary"
                value={input}
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
