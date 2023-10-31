import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useContext, useState, useEffect } from "react";
import { InputValueContext } from "../App";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Skills() {
  const { values, setValues } = useContext(InputValueContext);
  const [input, setInput] = useState("")
  const [add, setAdd] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [tagSkills, setTagSkills] = useState([]);

  const onChange = (e) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
  setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const skillInput = values.skills; // Use values.skills directly

    // if (typeof skillInput === "string") {
    //   const newSkills = skillInput
    //     .trim()
    //     .split(",")
    //     .map((skill) => skill.trim());

    //   setTagSkills([...tagSkills, ...newSkills]);
    //   setValues({ ...values, skills: tagSkills });

    //   // Store the updated skills in local storage
    //   const existingData = JSON.parse(localStorage.getItem("myAppState"));

    //   existingData.skills = tagSkills
    //    localStorage.setItem(
    //      "myAppState",
    //      JSON.stringify(existingData)
    //   );

    // }

    const skillInput = input; 

    if (typeof skillInput === "string" ) {
      const newSkills = skillInput
        .trim()
        .split(",")
        .map((skill) => skill.trim());

      setTagSkills([...tagSkills, ...newSkills]);
      setValues({ ...values, skills: tagSkills });
    }

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
   setShowForm(showForm);
   setAdd(!add);
 };
 const handleAdd = () => {
   setAdd(!add);
   setShowForm(!showForm);
 };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...tagSkills];
    updatedSkills.splice(index, 1);
    setTagSkills(updatedSkills);
    localStorage.setItem("myAppState", JSON.stringify(updatedSkills));
  };

  useEffect(() => {
    const storedSkills = localStorage.getItem("myAppState");
    if (storedSkills) {
      setValues(JSON.parse(storedSkills));
    }
  }, []);


  return (
    <div>
      <div>
        <div className="border border-gray-300 p-5 flex items-center justify-between">
          <h2 className="font-bold text-xl text-slate-800">Skills</h2>
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
                htmlFor="skills"
              >
                Skills
              </label>
              <input
                className="border border-gray-300 p-1 outline-none rounded-sm hover:border hover-border-red-200 focus-border focus-border-black placeholder-text-sm"
                type="text"
                name="skills"
                value={input}
                onChange={onChange}
              />
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
      {arrow && (
        <div>
          {tagSkills.length > 0 && (
            <div className="flex flex-wrap gap-3 border border-gray-300 border-t-0 pl-5 pb-5">
              {tagSkills.map((skill, index) => (
                <div
                  className="border border-gray-300 p-1 flex items-center gap-2 rounded-md"
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
  );
}

export default Skills;
