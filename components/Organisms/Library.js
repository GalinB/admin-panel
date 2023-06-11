import MenuImage from "@/components/atoms/MenuImage";
import Tabs2 from "@/components/molecules/Tabs2";

export default function Library() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center items-center gap-3">
        <div>
          <MenuImage
            src="/perks_library.svg"
            width={200}
            height={200}
            alt="Menu Icon"
          />
        </div>
        <div className="flex items-end justify-end">
          <MenuImage
            src="/close_circle.svg"
            width={50}
            height={50}
            alt="Menu Icon"
          />
        </div>
      </div>
      <div className="pl-4 pr-4 flex flex-col">
        <div>
          Browse through prepared perks and added wished ones into the
          subscription tier.
        </div>
        <div className="flex justify-center">
          After adding a perk you will be able to edit it
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Tabs2
          tabname="Access to exclusive content"
          src2="/add.svg"
          size={30}
        />
        <Tabs2
          tabname="Chat with the creator via Properchat"
          src2="/add.svg"
          size={30}
        />
        <Tabs2 tabname="Access to the Fanswall" src2="/add.svg" size={30} />
        <Tabs2
          tabname="Early access to YouTube videos"
          src2="/add.svg"
          size={30}
        />
        <Tabs2
          tabname="Become member of the creator Properchat group"
          src2="/add.svg"
          size={30}
        />
        <Tabs2 tabname="Download attached files" src2="/add.svg" size={30} />
        <Tabs2 tabname="Receive the creator merch" src2="/add.svg" size={30} />
      </div>
    </div>
  );
}
