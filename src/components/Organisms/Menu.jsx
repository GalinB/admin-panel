import MenuImage from "@/components/atoms/MenuImage.jsx";
import ReusableDiv from "@/components/atoms/ReusableDiv";
import Tabs from "@/components/molecules/Tabs";

export default function Menu() {
  return (
    <div className="mb-10">
      <div className="text-gray-400">Menu</div>
      <Tabs tabname="Activities" src="/activities.svg" />
      <Tabs tabname="Overall Earnings" src="/wallet.svg" />
      <Tabs
        tabname="Properfans"
        src="/genericb.svg"
        chevronSrc="/expand_more.svg"
        iconWidth={14}
        iconHeight={14}
      >
        <div className="flex flex-row gap-5 ml-4">
          <MenuImage src="/bar.svg" width={15} height={15} alt="Up" />
          <div className="text-gray-400 font-medium flex flex-col gap-2">
            <ReusableDiv text="Overview" />
            <ReusableDiv text="Earnings" />
            <ReusableDiv text="My Properfans" />
            <ReusableDiv text="Manage Tiers" />
          </div>
        </div>
      </Tabs>
      <Tabs
        tabname="Promermeet"
        src="/genericb.svg"
        chevronSrc="/expand_more.svg"
        iconWidth={14}
        iconHeight={14}
      >
        <div className="flex flex-row gap-5 ml-5">
          <MenuImage src="/bar.svg" width={5} height={12} alt="Up" />
          <div className="text-gray-400 font-medium flex flex-col gap-2">
            <ReusableDiv text="Example 1" />
            <ReusableDiv text="Example 2" />
          </div>
        </div>
      </Tabs>

      <Tabs
        tabname="Properlive"
        src="/genericb.svg"
        chevronSrc="/expand_more.svg"
        iconWidth={14}
        iconHeight={14}
      >
        <div className="flex flex-row gap-5 ml-5">
          <MenuImage src="/bar.svg" width={5} height={12} alt="Up" />
          <div className="text-gray-400 font-medium flex flex-col gap-2">
            <ReusableDiv text="Example 3" />
            <ReusableDiv text="Example 4" />
          </div>
        </div>
      </Tabs>
    </div>
  );
}
