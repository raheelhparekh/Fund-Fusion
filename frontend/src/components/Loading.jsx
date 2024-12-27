import React from "react";
import { TbLoader3 } from "react-icons/tb";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-full animate-pulse">
      <TbLoader3 className="animate-spin text-xl size-24 text-red-700" />
      <p className="mt-2">Loading...</p>
    </div>
  );
}

export default Loading;
