import MenuImage from "@/components/atoms/MenuImage.jsx";
import Account from "@/components/Organisms/Account";
import Menu from "@/components/Organisms/Menu";

export default function LeftContainer() {
  return (
    <div className=" w-[280px]">
      <div className="flex flex-row mb-7">
        <MenuImage src="/topbar.svg" width={200} height={200} alt="Menu" />
      </div>
      <Account />
      <Menu />
      <div className="flex flex-row gap-5">
        <MenuImage
          src="/ellingsentechnologiesiconmark.svg"
          width={36}
          height={36}
          alt="EI"
        />
        <div>Ellingsen Technologies, © 2022 made with 💜</div>
      </div>
    </div>
  );
}
