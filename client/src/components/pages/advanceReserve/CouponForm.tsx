import { useForm } from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";

const CouponForm = () => {
  const { register, handleSubmit } = useForm();
  const {
    state: {
      buttons: { confirm },
    },
  } = useContext(ModalContext);

  const onSubmit = confirm!.onClick;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-stretch items-stretch gap-1 w-full"
    >
      <FormLabel>이름</FormLabel>
      <input
        className="rounded border-2 border-solid border-slate-300 p-1 mb-2"
        type="text"
        {...register("name")}
      />
      <FormLabel>휴대전화</FormLabel>
      <input
        className="rounded border-2 border-solid border-slate-300 p-1"
        type="text"
        {...register("phone")}
      />
    </form>
  );
};

export default CouponForm;
