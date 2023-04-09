import { FieldValues, RegisterOptions } from "react-hook-form";

export type FormItemType = {
  label?: string;
  type: string;
  name: string;
  validation: RegisterOptions<FieldValues, string> | undefined;
  errorMessage?: string;
};
