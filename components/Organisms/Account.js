import Button from "@/components/atoms/Button";
import MenuImage from "@/components/atoms/MenuImage";

export default function Account() {
  return (
    <div className="mb-10 border border-solid border-gray-200 shadow-sm rounded-lg p-4">
      <div className="flex flex-row gap-4 mb-4">
        <MenuImage src="/Avatar.svg" width={46} height={46} alt="Avatar" />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="font-bold text-xl text-black">FaZe Banks</div>
            <div>🚀</div>
          </div>
          <div className="text-gray-400 ">via Richard Bengston</div>
        </div>
      </div>
      <div className="flex justify-center"></div>
      <Button label="Switch" />
    </div>
  );
}