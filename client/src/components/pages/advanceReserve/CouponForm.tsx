import { useForm } from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import Form from "@/components/common/Form";
import FormItem from "@/components/common/FormItem";

const CouponForm = () => {
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
        validation={{ required: true }}
        label="이름"
        errorMessage="이름을 입력해 주세요."
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
