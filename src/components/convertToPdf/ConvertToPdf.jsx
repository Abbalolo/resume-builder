import React, { useRef } from "react";
import ResumeTemplateView from "../resume-view/ResumeTemplateView";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import mammoth from "mammoth";

function ConvertToPdfAndWord() {
  const componentRef = useRef(null);

 const generatePDF = (imgData) => {
   const doc = new jsPDF("p", "mm", "a4"); // Define page size as A4
   doc.addImage(imgData, "JPEG", 0, 0, 210, 297); // Use A4 dimensions
   const pdfDataUri = doc.output("datauristring");
   const pdfLink = document.createElement("a");
   pdfLink.href = pdfDataUri;
   pdfLink.download = "resume.pdf";
   pdfLink.click();
 };

  const generateWord = () => {
    const element = componentRef.current;

    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");

        // Convert to PDF
        generatePDF(imgData);

        // Convert to Word
        const content = element.innerHTML;
        mammoth.convertToHtml(content).then((result) => {
          const wordBlob = new Blob([result.value], {
            type: "application/msword",
          });
          const wordLink = document.createElement("a");
          wordLink.href = URL.createObjectURL(wordBlob);
          wordLink.download = "resume.docx";
          wordLink.click();
        });
      });
    }
  };

  return (
    <div>
      <div ref={componentRef} id="componentToCapture">
        <ResumeTemplateView />
      </div>
      <button onClick={generateWord}>Download Word</button>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
}

export default ConvertToPdfAndWord;
