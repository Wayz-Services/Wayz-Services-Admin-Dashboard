import React from "react";

const Error = ({ error }: { error: string }) => {
  return <div className="text-sm text-red-400">{error}</div>;
};

export default Error;
