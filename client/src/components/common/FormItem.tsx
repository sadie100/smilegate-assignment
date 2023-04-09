import {
  useForm,
  useFormContext,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";

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
          {errors[name]!.message as string}
        </span>
      )}
    </div>
  );
};

export default FormItem;
