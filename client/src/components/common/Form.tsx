import { FormProvider, useForm } from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";
import { ReactNode } from "react";

type FormPropType = {
  onSubmit: (data: any) => void;
  children: ReactNode;
  id?: string;
};

const Form = ({ onSubmit, id, children }: FormPropType) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col justify-stretch items-stretch gap-2 w-full"
      >
        {children}
      </form>
    </FormProvider>
  );
};
export default Form;
