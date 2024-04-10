import React, { useRef, useState } from "react";

interface InterCollapseProps {
    children: React.ReactNode; 
    label: string;
}

const Collapse = (props :InterCollapseProps ) => {
    
  const [open, setOpen] = useState<Boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  const contentRef = useRef<HTMLDivElement>(null);
  if (contentRef.current) {
    console.log(contentRef.current.scrollHeight);
    console.log(contentRef);
    
  }

  return (
    <div className="collapse">
      <button onClick={toggle}>
        {props.label}{" "}
        <img src="/img/arrow_back.png" className={open ? "open" : ""} alt="" />
      </button>

      <div
        className="contentParent"
        ref={contentRef} 
        style={
          (open && contentRef.current)
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;
