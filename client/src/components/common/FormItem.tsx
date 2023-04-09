import { useFormContext, FieldValues, RegisterOptions } from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";

type FormItemType = {
  label?: string;
  type: string;
  name: string;
  validation: RegisterOptions<FieldValues, string> | undefined;
  placeholder?: string;
};
const FormItem = ({
  type,
  name,
  validation,
  label,
  placeholder,
}: FormItemType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-stretch items-stretch w-full gap-1">
      {label && <FormLabel>{label}</FormLabel>}
      <input
        className="rounded border-2 border-solid border-slate-300 appearance-none text-gray-700 placeholder:text-xs w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        maxLength={name === "phone" ? 13 : undefined}
        {...register(name, validation)}
      />
      {errors[name] && (
        <span className="text-xs text-red-600" role="alert">
          {errors[name]!.message as string}
        </span>
      )}
    </div>
  );
};

export default FormItem;
