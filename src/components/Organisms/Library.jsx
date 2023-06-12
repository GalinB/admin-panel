import MenuImage from '@/components/atoms/MenuImage.jsx'
import Tabs2 from '@/components/molecules/Tabs2.jsx'

export default function Library({ onClose, tabs, toggleTab }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex-grow flex justify-center">
          <MenuImage src="/perks_library.svg" width={200} height={200} alt="Menu Icon" />
        </div>
        <div>
          <MenuImage
            src="/close_circle.svg"
            width={50}
            height={50}
            alt="Menu Icon"
            onClick={onClose}
          />
        </div>
      </div>
      <div className="pl-4 pr-4 flex flex-col">
        <div>Browse through prepared perks and add wished ones into the subscription tier.</div>
        <div className="flex justify-center">After adding a perk, you will be able to edit it.</div>
      </div>
      <div className="flex flex-col gap-2">
        {tabs.map((t) =>
          !t.isActive ? (
            <Tabs2
              key={t.tabId}
              tabname={t.tabName}
              src1="/drag_indicator.svg"
              src2="/close.svg"
              onClick={() => toggleTab(t.tabId)}
            />
          ) : null
        )}
      </div>
    </div>
  )
}

// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import MenuImage from '@/components/atoms/MenuImage.jsx';
// import Tabs2 from '@/components/molecules/Tabs2.jsx';

// export default function Library({ onClose, tabs, toggleTab }) {
//   const onDragEnd = (result) => {
//     const { destination, source } = result;

//     // If the tab is not dropped in a valid destination, do nothing
//     if (!destination) {
//       return;
//     }

//     // If the tab is dropped in the same position, do nothing
//     if (destination.index === source.index) {
//       return;
//     }

//     // Reorder the tabs based on the drag and drop
//     const newTabs = Array.from(tabs);
//     const [removed] = newTabs.splice(source.index, 1);
//     newTabs.splice(destination.index, 0, removed);

//     // Update the tab order
//     toggleTab(newTabs.map((tab) => tab.tabId));
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div className="flex flex-row justify-center items-center gap-3">
//         <div className="flex-grow flex justify-center">
//           <MenuImage src="/perks_library.svg" width={200} height={200} alt="Menu Icon" />
//         </div>
//         <div>
//           <MenuImage
//             src="/close_circle.svg"
//             width={50}
//             height={50}
//             alt="Menu Icon"
//             onClick={onClose}
//           />
//         </div>
//       </div>
//       <div className="pl-4 pr-4 flex flex-col">
//         <div>Browse through prepared perks and add wished ones into the subscription tier.</div>
//         <div className="flex justify-center">After adding a perk, you will be able to edit it.</div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="tabs">
//             {(provided) => (
//               <div ref={provided.innerRef} {...provided.droppableProps}>
//                 {tabs.map((tab, index) => (
//                   <Draggable key={tab.tabId} draggableId={tab.tabId} index={index}>
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                       >
//                         <div onClick={() => toggleTab(tab.tabId)}>
//                           <Tabs2
//                             tabname={tab.tabName}
//                             src1="/drag_indicator.svg"
//                             src2="/close.svg"
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     </div>
//   );
// }
