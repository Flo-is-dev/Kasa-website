import React from "react";

const Tag = ({ tags }:any) => {
  return (
    <div className="tagContainer">
      {tags.map((tag:any, index:any) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tag;
