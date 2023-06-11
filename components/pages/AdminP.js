import LeftContainer from "@/components/Templates/LeftContainer";
import MainContent from "@/components/Templates/MainContent";
import RightContainer from "@/components/Templates/RightContainer";

export default function AdminP() {
  return (
    <div className="flex flex-row gap-10 text-black justify-center w-full h-full mt-10">
      <div className="hidden md:block">
        <LeftContainer />
      </div>
      <MainContent />
      <div className="hidden md:block">
        <RightContainer />
      </div>
    </div>
  );
}
