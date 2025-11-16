import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-amber-50">
        <p className="animate-pulse text-lg font-semibold text-amber-700">
          Loading recipe...
        </p>
      </div>
    </>
  );
};

export default Loading;
