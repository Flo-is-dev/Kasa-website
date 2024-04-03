import React from "react";

const Header = ({ children }:any) => {
  return (
    <>
      {children ? (
        <div className="headerContainer bg1">{children && children}</div>
      ) : (
        <div className="headerContainer bg2"></div>
      )}
    </>
  );
};

export default Header;
