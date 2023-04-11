import { ReactNode } from "react";

const Header = ({ text }: { text: string }) => {
  return (
    <div className="flex p-5 text-3xl font-bold w-full bg-orange-400 gap-10">
      {text}
    </div>
  );
};

export default Header;
