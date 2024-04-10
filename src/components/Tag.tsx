import React from "react";

interface InterTagProps {
    tags:  string[]
}

const Tag = ( {tags} :InterTagProps) => {

    
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
