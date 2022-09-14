import React from "react";

interface LoaderProps {
  children?: string;
}

export const Loader = ({ children }: LoaderProps) => {
  return (
    <div className="box">
      {children}
      <span className="loader"></span>
    </div>
  );
};
