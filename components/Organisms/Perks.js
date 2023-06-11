import React, { useState, useEffect, useRef } from "react";
import Button from "@/components/atoms/Button.js";
import Tabs2 from "@/components/molecules/Tabs2.js";
import CreatePerk from "./CreatePerk.js";
import Library from "./Library.js";

export default function Perks() {
  const [isCreatePerkOpen, setIsCreatePerkOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const libraryRef = useRef(null);

  const openCreatePerk = () => {
    setIsCreatePerkOpen(true);
  };

  const closeCreatePerk = () => {
    setIsCreatePerkOpen(false);
  };

  const openLibrary = () => {
    setIsLibraryOpen(true);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (libraryRef.current && !libraryRef.current.contains(event.target)) {
        setIsLibraryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex gap-2 flex-col border border-solid border-gray-200 shadow-sm rounded-lg p-3 mb-6">
      <div className="flex justify-center text-black font-bold mb-2">Perks</div>
      <Tabs2
        tabname="Access to exclusive content"
        src1="/drag_indicator.svg"
        src2="/close.svg"
      />
      <Tabs2
        tabname="Chat with the creator via Properchat"
        src1="/drag_indicator.svg"
        src2="/close.svg"
      />
      <Tabs2
        tabname="Support the creator"
        src1="/drag_indicator.svg"
        src2="/close.svg"
      />
      <Tabs2
        tabname="Access to Fanswall"
        src1="/drag_indicator.svg"
        src2="/close.svg"
      />
      <div className="flex display-row gap-2">
        <Button label="Library" onClick={openLibrary} />
        <Button label="Create Perk" onClick={openCreatePerk} />
      </div>

      {isCreatePerkOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <CreatePerk onClose={closeCreatePerk} />
        </div>
      )}

      {isLibraryOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div
            ref={libraryRef}
            className="flex flex-col bg-white border border-solid border-gray-300 shadow-md rounded-md p-3 gap-3 md:w-1/3 w-4/5"
          >
            <div className="text-gray-400">
              <Library />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import Button from "@/atoms/Button";
// import Tabs2 from "@/molecules/Tabs2";

// export default function Perks() {
//   const [tabs, setTabs] = useState([
//     {
//       tabname: "Access to exclusive content",
//       src1: "/drag_indicator.svg",
//       src2: "/close.svg",
//     },
//     {
//       tabname: "Chat with the creator via Properchat",
//       src1: "/drag_indicator.svg",
//       src2: "/close.svg",
//     },
//     {
//       tabname: "Support the creator",
//       src1: "/drag_indicator.svg",
//       src2: "/close.svg",
//     },
//     {
//       tabname: "Access to Fanswall",
//       src1: "/drag_indicator.svg",
//       src2: "/close.svg",
//     },
//   ]);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const handleTabDrag = (dragIndex, hoverIndex) => {
//     const dragTab = tabs[dragIndex];
//     const newTabs = [...tabs];
//     newTabs.splice(dragIndex, 1);
//     newTabs.splice(hoverIndex, 0, dragTab);
//     setTabs(newTabs);
//   };

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

//   return (
//     <div className="flex gap-2 flex-col border border-solid border-gray-200 shadow-sm rounded-lg p-3 mb-6">
//       <div className="flex justify-center text-black font-bold mb-2">Perks</div>
//       {tabs.map((tab, index) => (
//         <div
//           key={index}
//           draggable
//           onDragStart={() => handleDragStart(index)}
//           onDragEnd={handleDragEnd}
//           onDragOver={(e) => {
//             e.preventDefault();
//           }}
//           onDrop={() => {
//             if (draggedIndex !== null) {
//               const hoverIndex = index;
//               handleTabDrag(draggedIndex, hoverIndex);
//               setDraggedIndex(null);
//             }
//           }}
//         >
//           <Tabs2
//             tabname={tab.tabname}
//             src1={tab.src1}
//             src2={tab.src2}
//             className={index === draggedIndex ? "dragged-tab" : ""}
//           />
//         </div>
//       ))}
//       <div className="flex display-row gap-2">
//         <Button label="Library" />
//         <Button label="Create Perk" />
//       </div>
//     </div>
//   );
// }
