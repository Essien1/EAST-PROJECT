import React, { useRef } from "react";
import { X } from "lucide-react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
    >
      <div className=" p-5 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          {" "}
          <X size={30} />{" "}
        </button>
        <div className="bg-green-600 rounded-xl px-20 py-10 flex-col gap-5 items-center mx-4">
          <h1 className="text-sm md:text-lg lg:text-xl xl:text-3xl py-4 font-bold">LOGISTICS EAST</h1>
          <p className="text-[11px] md:text-sm lg:text-lg xl:text-xl  max-w-md text-center">
            Our Acceptable Safaty Number is Zero
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
