import MenuImage from "@/components/atoms/MenuImage";
import Tabs2 from "@/components/molecules/Tabs2";

export default function Library({ onClose }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex-grow flex justify-center">
          <MenuImage
            src="/perks_library.svg"
            width={200}
            height={200}
            alt="Menu Icon"
          />
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
        <div>
          Browse through prepared perks and add wished ones into the
          subscription tier.
        </div>
        <div className="flex justify-center">
          After adding a perk, you will be able to edit it.
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
          tabname="Become a member of the creator's Properchat group"
          src2="/add.svg"
          size={30}
        />
        <Tabs2 tabname="Download attached files" src2="/add.svg" size={30} />
        <Tabs2
          tabname="Receive the creator's merch"
          src2="/add.svg"
          size={30}
        />
      </div>
    </div>
  );
}
