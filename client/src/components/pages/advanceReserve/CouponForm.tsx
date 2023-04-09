import { useForm } from "react-hook-form";
import FormLabel from "@/components/common/FormLabel";
import { SyntheticEvent, useContext } from "react";
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
        validation={{ required: "이름을 입력해 주세요." }}
        label="이름"
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
        }}
        label="휴대전화"
      />
    </Form>
  );
};

export default CouponForm;
