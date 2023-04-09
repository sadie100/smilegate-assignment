import {
  useForm,
  useFormContext,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";
import { CSSProperties } from "react";

type FormItemType = {
  label?: string;
  type: string;
  name: string;
  validation: RegisterOptions<FieldValues, string> | undefined;
  styleClass?: string;
};
const FormItem = ({
  type,
  name,
  validation,
  label,
  styleClass,
}: FormItemType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-stretch items-stretch w-full">
      {label && <FormLabel>{label}</FormLabel>}
      <input
        className={`rounded border-2 border-solid border-slate-300 appearance-none text-gray-700 placeholder-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${styleClass} `}
        type={type}
        placeholder={type === "text" ? "" : "000-0000-0000"}
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
