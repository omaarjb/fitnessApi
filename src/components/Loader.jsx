import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <InfinitySpin color="gray" />
    </div>
  );
};

export default Loader;
