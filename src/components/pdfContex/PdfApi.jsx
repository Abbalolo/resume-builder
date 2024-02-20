import React, { createContext, useContext, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PdfConverterContext = createContext();

export const usePdfConverter = () => useContext(PdfConverterContext);

export const PdfConverterProvider = ({ children }) => {
  const componentRef = useRef(null);

  const generatePdf = () => {
    if (!componentRef.current) {
      console.error("Component reference is null.");
      return;
    }

    // Set the scale for better resolution
    const scale = 2;

    html2canvas(componentRef.current, { scale: scale }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width * 0.75 * scale; // Adjusted to fit PDF layout
      const imgHeight = canvas.height * 0.75 * scale; // Adjusted to fit PDF layout
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save("component.pdf");
    });
  };

  return (
    <PdfConverterContext.Provider value={{ componentRef, generatePdf }}>
      {children}
    </PdfConverterContext.Provider>
  );
};
