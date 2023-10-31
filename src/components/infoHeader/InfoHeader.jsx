import { BiMenu } from "react-icons/bi"; 

function InfoHeader() {
  return (
    <header className="border border-gray-300 flex items-center justify-between p-5 fixed top-0 left-0 w-full bg-white">
      <h1 className="text-2xl">Resume Name Here and date </h1>
      <div className="flex items-center gap-5">
        <button className="flex items-center bg-slate-800 text-white rounded-sm px-2 py-1">
          Export As
        </button>
        <button className="flex items-center gap-1 border border-black rounded-sm px-2 py-1">
          <BiMenu className="text-lg" />
          Menu
        </button>
      </div>
    </header>
  );
}

export default InfoHeader