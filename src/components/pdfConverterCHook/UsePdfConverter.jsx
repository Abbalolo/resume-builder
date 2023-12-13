import { useCallback, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const UsePdfConverter = () => {
    
    const componentRef = useRef(null);

  const generatePDF = useCallback(() => {
       console.log("Generating PDF...");

    const input = componentRef.current;


       if (!input) {
         console.error("Input element not found.");
         return;
       }
   

      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio);
        pdf.save("document.pdf");
      });
        
    }, []);

  return { componentRef, generatePDF }; 
};

export default UsePdfConverter;
