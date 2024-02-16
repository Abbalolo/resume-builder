import React, { useEffect, useRef, useState } from "react";
import UsePdfConverter from "../pdfConverterCHook/UsePdfConverter";


function ResumeTemplateView() {
  const { componentRef} = UsePdfConverter();
  const [storedData, setStoredData] = useState({});

  const resumeContentRef = useRef(null);

  const getDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("formState")) || {};
    setStoredData(data);
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  // Ensure the ref is assigned to the resume content
  useEffect(() => {
    componentRef.current = resumeContentRef.current;
  }, [resumeContentRef, componentRef]);


  return (
    <div className="mx-5 my-3 flex flex-col gap-2 " ref={resumeContentRef}>
      {/* header */}
      <div>
        <h1 className="text-xl text-center capitalize">
          {storedData.firstName} {storedData.lastName}
        </h1>

        <h3 className="text-[14px] text-center">
          {storedData.address} | {storedData.conPhoneNumber} |{" "}
          {storedData.conEmail} | {storedData.linkedin} | {storedData.website}
        </h3>
      </div>

      <hr />

      {/* summary section */}
      <div>
        <h2 className="font-semibold">{storedData.title}</h2>
        <p className="text-xs">{storedData.profileSummary}</p>
      </div>

      {/* education section */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[16px]">Education</h3>
        <hr />
        {storedData.education.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <h4 className="font-semibold text-sm">
                {item.educationInstitution}
              </h4>
              <h5 className="font-semibold text-sm">
                {item.eduStartDate} {item.eduEndDate}
              </h5>
            </div>
            <p className="text-xs">{item.gPA}</p>
          </div>
        ))}
      </div>

      {/* skills and interest section */}
      <div>
        <h3 className="text-[16px]">Skills and Interest</h3>
        <hr />
        <ul>
          {storedData.skillsAndInterest &&
            storedData.skillsAndInterest.map((item, index) => (
              <li key={index} className="text-xs">
                {item}
              </li>
            ))}
        </ul>
      </div>

      {/* work experience section */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[16px]">Work Experience</h3>
        <hr />
        {/* {storedData.workExperience.map((item, index) => ( */}
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold text-sm">{storedData.companyName}</h4>
            <h5 className="font-semibold text-sm">
              {storedData.expStartDate} / {storedData.expEndDate}
            </h5>
          </div>
          <p className="text-xs">{storedData.companyDescription}</p>
          <div className="mt-1">
            <h4 className="font-semibold text-sm">{storedData.position}</h4>
          </div>
        </div>
        {/* ))} */}
      </div>

      {/* project section */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[16px]">Project</h3>
        <hr />
        {/* {storedData.project.map((item, index) => ( */}
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold text-sm">{/* {item.title} */}</h4>
            <h5 className="font-semibold text-sm">{/* {item.date} */}</h5>
          </div>
          <p className="text-xs">{/* {item.subtitle} */}</p>
          {/* <ul className="text-xs ml-5">
              {item.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="list-disc">
                  {task}
                </li>
              )}
            </ul> */}
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default ResumeTemplateView;
