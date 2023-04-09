import { useForm, useFormContext } from "react-hook-form";
import { FormItemType } from "@/types";
import FormLabel from "@/components/common/FormLabel";

const FormItem = ({
  type,
  name,
  validation,
  label,
  errorMessage,
}: FormItemType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-stretch items-stretch w-full">
      {label && <FormLabel>{label}</FormLabel>}
      <input
        className="rounded border-2 border-solid border-slate-300 p-1"
        type={type}
        {...register(name, validation)}
      />
      {errors[name] && (
        <span className="text-xs text-red-600" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormItem;
