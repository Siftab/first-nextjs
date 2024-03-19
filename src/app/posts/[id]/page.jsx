import React from "react";

const DaynamicIdPage = ({ params, searchParams }) => {
  return (
    <div>
      <p>this is daynamic page {params.id}</p>
      <p>{searchParams.name}</p>
      <p>{searchParams.age}</p>
    </div>
  );
};

export default DaynamicIdPage;
