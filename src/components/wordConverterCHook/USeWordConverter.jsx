


const UseWordConverter = () => {


   const wordConverter = () => {
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
}