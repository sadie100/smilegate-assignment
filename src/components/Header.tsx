import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex p-5 text-3xl font-bold w-full bg-orange-400">
      {children}
    </div>
  );
};

export default Header;
