import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useState, useEffect } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Interest() {
  const { formState, dispatch } = useContext(InputValueContext);
  const [input, setInput] = useState("");
  const [add, setAdd] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [tagInterest, setTagInterest] = useState([]);

//  const onChange = (e) => {
//    const { name, value } = e.target;
//    dispatch({
//      type: "SET_STATE",
//      payload: {
//        ...formState,
//        ...formState.interest,
//        [name]: value,
//      },
//    });
//    setInput(e.target.value);
//  };


  const onChange = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const interestInput = input;
      const newSkills = interestInput
        .split(",")
      .map((interest) => interest.trim());
    setTagInterest([ ...tagInterest, ...newSkills ]);
       dispatch({
         type: "SET_STATE",
         payload: [...formState.interest, ...newSkills ],
         field: "interest",
       });


    setInput("");
    setAdd(false);
    setShowForm(showForm);
  };

  const handleClose = () => {
    setInput("");
    setShowForm(false);
    setAdd(!add);

  };

  const handleArrow = () => {
    setArrow(!arrow);
    setShowForm(showForm)
    setAdd(!add);
  };
  const handleAdd = () => {
    setAdd(!add);
    setShowForm(!showForm);
  };



  const handleRemoveSkill = (index) => {
    const updateInterest = [...tagInterest];
    updateInterest.splice(index, 1);
    setTagInterest(updateInterest);
    localStorage.setItem("myAppState", JSON.stringify(updateInterest));
  };

 

  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">Interests</h2>
          <button onClick={handleArrow}>
            {arrow ? (
              <IoIosArrowDropup className="text-slate-800 text-2xl" />
            ) : (
              <IoIosArrowDropdown className="text-slate-800 text-2xl" />
            )}
          </button>
        </div>
        {add && (
          <div className="p-5 border border-gray-300 border-b-0">
            <button onClick={handleAdd} className="flex items-center gap-2">
              <AiOutlinePlusCircle className="text-xl" />
              <h3>Add Skills</h3>
            </button>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 p-5 grid grid-cols-1 gap-5 border-b-0"
          >
            <div className="flex flex-col w-full">
              <label
                className="text-gray-500 font-semibold text-sm mb-1"
                htmlFor="firstname"
              >
                Interest
              </label>
              <textarea
                className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover:border-red-200 focus:border  focus:border-black placeholder:text-sm"
                name="interest"
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
        {arrow && (
          <div>
            {tagInterest.length > 0 && (
              <div className="flex flex-col gap-3 border border-gray-300 border-t-0 pb-5 px-5">
                {tagInterest.map((skill, index) => (
                  <div
                    className="border border-gray-300 p-1 flex items-center justify-between gap-2 rounded-md"
                    key={index}
                  >
                    {skill}
                    <AiOutlineCloseCircle
                      className="cursor-pointer"
                      onClick={() => handleRemoveSkill(index)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Interest;
