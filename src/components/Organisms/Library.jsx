import MenuImage from '@/components/atoms/MenuImage.jsx'
import TabTemplate from '../Templates/Tab.template'

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
            <TabTemplate
              key={t.tabId}
              label={t.tabName}
              onClick={() => toggleTab(t.tabId)}
              rightSide={<MenuImage src="/add.svg" width={16} height={16} alt="Menu Icon" />}
            />
          ) : null
        )}
      </div>
    </div>
  )
}
