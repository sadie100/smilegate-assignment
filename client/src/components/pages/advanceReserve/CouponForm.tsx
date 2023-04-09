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
    <Form id="CouponForm" onSubmit={onSubmit}>
      <FormItem
        name="name"
        type="text"
        {...register("name")}
      />
      <FormItem
        name="phone"
        type="text"
        validation={{ required: true }}
        label="휴대전화"
      />
    </Form>
  );
};

export default CouponForm;
