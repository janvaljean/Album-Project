import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div>
          <GoChevronLeft />
        </div>
      </div>

      {children}
    </div>
  );
};

export default ExpandablePanel;
