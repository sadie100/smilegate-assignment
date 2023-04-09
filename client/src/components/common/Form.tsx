import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
type FormPropType = {
  onSubmit: (data: any) => void;
  children: ReactNode;
  id?: string;
};

const Form = ({ onSubmit, id, children }: FormPropType) => {
  const { handleSubmit } = useFormContext();

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-stretch items-stretch gap-3 w-full"
    >
      {children}
    </form>
  );
};
export default Form;
