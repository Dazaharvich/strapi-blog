'use client'
import React from "react";

const Category = ({cat}: any) => {
  return (
    <div className="bg-sky-600 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => {}}>
      
      {cat.attributes.Title}

    </div>
  );
};

export default Category;
