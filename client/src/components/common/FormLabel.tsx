import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return <label className="text-sm text-left">{children}</label>;
};
