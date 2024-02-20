import React, { useContext, useState } from "react";
import { InputValueContext } from "../../App";
import { usePdfConverter } from "../pdfContex/PdfApi";

function ResumeTemplateView() {
  // const { formState } = useContext(InputValueContext);
  const [storedData, setStoredData] = useState({});
const { componentRef} = usePdfConverter();
  const getDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("formState")) || {};
    setStoredData(data);
    console.log({ data: storedData });
  };


  return (
    <div ref={componentRef} className="p-3 py-3 flex flex-col gap-2 ">
      {/* header */}
      <div ref={componentRef}>
        <h1 className="text-lg text-center capitalize">
          firstName and lastName
        </h1>

        <h3 className="text-[12px]  text-center">
          {/* {storedData.address} | {storedData.conPhoneNumber} |{" "}
          {storedData.conEmail} | {storedData.linkedin} | {storedData.website} */}
          address / phone / email / linkedin / website
        </h3>
      </div>

      <hr />

      {/* summary section */}
      <div>
        <h2 className="font-semibold">
          {/* storedData.title */}
          my job title
        </h2>
        <p className="text-xs">
          {/* {storedData.profileSummary} */}
          profile summary
        </p>
      </div>

      {/* education section */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[16px]">Education</h3>
        <hr />
        {/* {storedData.education.map((item, index) => (
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
        ))} */}
        my school / gpa / date
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
            <h4 className="font-semibold text-sm">
              {storedData.companyName}
              company name
            </h4>
            <h5 className="font-semibold text-sm">
              {storedData.expStartDate} / {storedData.expEndDate}
              1-2-1999 <br />/ 2-1-2000
            </h5>
          </div>
          <p className="text-xs">
            {storedData.companyDescription}
            company description
          </p>
          <div className="mt-1">
            <h4 className="font-semibold text-sm">
              {storedData.position}
              position
            </h4>
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
            <h4 className="font-semibold text-sm">
              {/* {item.title} */} project name
            </h4>
            <h5 className="font-semibold text-sm">
              {/* {item.date} */} project date
            </h5>
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
3