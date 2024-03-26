import React, { Children } from "react";

const CompanyLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl">This is company header</h1>
      {children}
      <h1 className="text-4xl">This is company Footer</h1>
    </div>
  );
};

export default CompanyLayout;
