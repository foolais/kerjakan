import React from "react";

const Cards = ({ title }) => {
  return (
    <div className="w-3/5 md:w-[45%] lg:w-[30%] mx-auto bg-white rounded-lg overflow-hidden">
      <h3 className="text-xl text-center bg-primaryColor text-white py-2 font-semibold">
        {title}
      </h3>
      <p className="p-4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et est
        consequuntur laboriosam itaque quaerat repellat distinctio nihil ullam
        rerum!
      </p>
    </div>
  );
};

export default Cards;
