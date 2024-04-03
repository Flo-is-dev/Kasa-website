import React, { useRef, useState } from "react";

const Collapse = (props:any) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const contentRef = useRef();
  if (contentRef.current) {
    console.log(contentRef.current.scrollHeight);
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
          open
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
