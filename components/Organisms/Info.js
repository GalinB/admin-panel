import React, { useState } from "react";
import MenuImage from "@/components/atoms/MenuImage";
import Button from "@/components/atoms/Button";

export default function Info() {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-col bg-gray-50 border border-solid border-gray-300 shadow-sm rounded-md p-3 gap-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3">
          <div className="w-4 h-4 bg-slate-500"></div>
          <div className="text-gray-400 font-bold mb-2">Info</div>
        </div>
        <MenuImage
          src="/button1.svg"
          width={36}
          height={36}
          alt="Button2"
          hoverEffect
        />
      </div>
      <div className="text-gray-400">
        You can have up to 3 tiers of subscriptions
      </div>
      <div className="flex justify-center">
        <Button label="Close" onClick={handleCloseClick} />
      </div>
    </div>
  );
}
