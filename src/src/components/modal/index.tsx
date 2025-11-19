import React from "react";
import { Link } from "react-router";

type ModalProps = {
  name: string;
  button1Name?: string;
  button2Name?: string;
  button1?: string;
  button2?: string;
};

const Modal: React.FC<ModalProps> = ({
  name,
  button1Name,
  button2Name,
  button1,
  button2,
}) => {
  return (
    <div className="bg-linear-to-br from-gray-800 to-gray-950 text-gray-300 p-4 max-w-xs mx-auto rounded-xl flex flex-col gap-2">
      <h3 className="text-center text-xl font-bold">{name}</h3>
      <hr className="my-2 border-gray-700"/>
      <div className="flex flex-wrap items-center gap-4 justify-center outfit">
        {button1 && <Link to={`/${button1}`} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">{button1Name}</Link>}
        {button2 && <Link to={`/${button2}`} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">{button2Name}</Link>}
      </div>
    </div>
  );
};

export default Modal;
