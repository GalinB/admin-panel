import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuImage from "@/components/atoms/MenuImage";

export default function Tabs({
  tabname,
  src,
  chevronSrc,
  iconWidth,
  iconHeight,
  children,
}) {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="relative">
      <div
        className="flex flex-row gap-3 justify-between p-3 transform hover:scale-105 transition duration-200 cursor-pointer select-none"
        onClick={handleClick}
      >
        <div className="flex flex-row gap-3">
          <MenuImage src={src} width={36} height={36} alt="Menu Icon" />
          <div className="font-bold text-xl text-black select-none">
            {tabname}
          </div>
        </div>
        <MenuImage
          src={chevronSrc}
          width={iconWidth}
          height={iconHeight}
          alt="Right Chevron Icon"
        />
      </div>
      {children && showDiv && <div className="flex p-3">{children}</div>}
    </div>
  );
}

Tabs.propTypes = {
  tabname: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  chevronSrc: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  children: PropTypes.node,
};

Tabs.defaultProps = {
  chevronSrc: "/chevron_right.svg",
  iconWidth: 9,
  iconHeight: 9,
};
