import React from "react";
import dog from "../../Assets/dog.jpg";
import CreateForm from "../CreateForm";

const Form = () => {
  return (
    <div className="p-12 min-h-screen overflow-hidden bg-gradient-to-tr from-black via-gray-900 to-violet-950 flex items-center justify-center">
      <div className="w-screen max-w-7xl h-[85vh] bg-white flex flex-col md:flex-row rounded-3xl overflow-hidden">
        <img className="w-full md:w-1/2 h-1/2 md:h-full opacity-[0.9]" src={dog} alt="dog" />
        <CreateForm />
      </div>
    </div >
  );
};

export default Form;
