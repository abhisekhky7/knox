import React from "react";

export default function AddWidgetBtn({ setShow, setCat, cat }) {
  const handleClick = () => {
    setShow(true);
    setCat(cat);
  };

  return (
    <div
      onClick={handleClick}
      className="mx-2  h-[150px] flex justify-center items-center bg-white rounded-md"
    >
      <div>+ Add Widget</div>
    </div>
  );
}
