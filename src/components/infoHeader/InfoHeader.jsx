import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { usePdfConverter } from "../pdfContex/PdfApi";


function InfoHeader() {
  const { generatePdf } = usePdfConverter();
  const [toggle, setToggle] = useState(false);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const handleCursor = () => {
    setToggle(!toggle);
  };

  const handleClose = async () => {
    setToggle(false);
    await generatePdf(); // Wait for the PDF to be generated before continuing
    // Additional actions after PDF generation if needed
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        buttonRef.current &&
        listRef.current &&
        !buttonRef.current.contains(e.target) &&
        !listRef.current.contains(e.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border border-gray-300 flex items-center justify-between p-5 fixed top-0 left-0 w-full bg-white">
      <h1 className="text-2xl">Resume Name Here and date</h1>
      <div className="flex items-center gap-5">
        <div>
          <button
            ref={buttonRef}
            onClick={handleCursor}
            className="relative flex items-center bg-slate-800 text-white rounded-sm px-2 py-1"
          >
            Export As
          </button>
          {toggle ? (
            <ul
              ref={listRef}
              className="absolute bg-white right-4 flex flex-col rounded-md border mt-1 text-sm"
            >
              <li
                onClick={handleClose}
                className="cursor-pointer hover:bg-slate-100 p-2"
              >
                Download As Pdf
              </li>
              <hr />
              <li
                onClick={handleClose}
                className="cursor-pointer hover:bg-slate-100 p-2"
              >
                Download As Word
              </li>
            </ul>
          ) : null}
        </div>
        <button className="flex items-center gap-1 border border-black rounded-sm px-2 py-1">
          <BiMenu className="text-lg" />
          Menu
        </button>
      </div>
    </header>
  );
}

export default InfoHeader;
