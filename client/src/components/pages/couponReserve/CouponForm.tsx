import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import FormItem from "@/components/common/FormItem";

const CouponForm = () => {
  const {
    state: {
      buttons: { confirm },
    },
  } = useContext(ModalContext);
  const methods = useForm();
  const { watch, setValue, handleSubmit } = methods;
  const onSubmit = confirm!.onClick;

  return (
    <FormProvider {...methods}>
      <form
        id="CouponForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-stretch items-stretch gap-3 w-full"
      >
        <FormItem
          name="name"
          type="text"
          validation={{ required: "이름을 입력해 주세요." }}
          label="이름"
          placeholder="이름을 입력해 주세요."
        />
        <FormItem
          name="phone"
          type="text"
          validation={{
            required: "휴대전화 번호를 입력해 주세요.",
            pattern: {
              value: /[0-9]{3}-[0-9]{4}-[0-9]{4}/,
              message: "올바른 형식의 번호를 입력해 주세요.",
            },
            onChange: (e) => {
              const value = watch("phone");
              const newVal = value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                .replace(/(\-{1,2})$/g, "");
              setValue("phone", newVal);
            },
          }}
          label="휴대전화"
          placeholder="휴대전화 번호 11자리를 입력해 주세요."
        />
      </form>
    </FormProvider>
  );
};

export default CouponForm;
