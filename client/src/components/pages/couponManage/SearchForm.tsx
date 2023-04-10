import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import Form from "@/components/common/Form";
import FormItem from "@/components/common/FormItem";

const SearchForm = () => {
  const {
    state: {
      buttons: { confirm },
    },
  } = useContext(ModalContext);
  const methods = useForm();
  const { watch, setValue } = methods;
  const onSubmit = (data: any) => {
    console.log("검색");
  };

  return (
    <FormProvider {...methods}>
      <Form id="CouponForm" onSubmit={onSubmit}>
        <FormItem
          name="name"
          type="search"
          label="검색하기"
          placeholder="이름을 입력해 주세요."
        />
        <button>검색</button>
      </Form>
    </FormProvider>
  );
};

export default SearchForm;
